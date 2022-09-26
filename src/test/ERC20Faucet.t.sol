// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import {ZorbNFT} from "../renderer/external/ZorbNFT.sol";
import {PtMonoFont} from "../renderer/external/PTMonoFont.sol";
import {SharedNFTLogic} from "@zoralabs/nft-editions-contracts/contracts/SharedNFTLogic.sol";
import {VM} from "./utils/VM.sol";
import {User} from "./utils/User.sol";
import {TestERC20} from "./utils/TestERC20.sol";
import {IFaucet, ERC20Faucet} from "../ERC20Faucet.sol";
import {ETHFaucet} from "../ETHFaucet.sol";
import {FaucetFactory} from "../FaucetFactory.sol";
import "../strategies/LinearStrategy.sol";
import {FaucetMetadataRenderer} from "../renderer/FaucetMetadataRenderer.sol";

contract ERC20FaucetTest is Test {
    address internal userA;
    address internal userB;
    TestERC20 internal mockToken;
    ERC20Faucet internal faucetImpl;
    FaucetFactory internal factory;
    ERC20Faucet internal faucet;
    LinearStrategy internal linearStrategy;
    uint256 internal constant ONE_DAY = 24 * 60 * 60;

    function setUp() public {
        userA = address(new User());
        userB = address(new User());
        mockToken = new TestERC20();

        SharedNFTLogic sharedNFTLogic = new SharedNFTLogic();
        address zorbRenderer = address(new ZorbNFT(sharedNFTLogic));
        PtMonoFont font = new PtMonoFont();
        FaucetMetadataRenderer metadataRenderer = new FaucetMetadataRenderer(sharedNFTLogic, zorbRenderer, font);
        faucetImpl = new ERC20Faucet(metadataRenderer);
        address ethFaucet = address(new ETHFaucet(metadataRenderer));
        factory = new FaucetFactory(address(faucetImpl), ethFaucet);
        linearStrategy = new LinearStrategy();

        (address faucetAddr, ) = factory.faucetForToken(address(mockToken));
        faucet = ERC20Faucet(faucetAddr);
    }

    function mintFaucet(uint256 numTokens, uint96 duration) internal {
        vm.assume(numTokens > 0);
        mockToken.mint(userA, numTokens);
        vm.prank(userA);
        mockToken.approve(address(faucet), numTokens);
        vm.prank(userA);
        faucet.mint(userB, numTokens, duration, address(linearStrategy), false);
    }

    function test_mint(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mintFaucet(numTokens, duration);

        IFaucet.FaucetDetails memory fd = faucet.getFaucetDetailsForToken(0);

        assertEq(faucet.ownerOf(0), userB);
        assertEq(faucet.totalSupply(), 1);
        assertEq(fd.totalAmount, numTokens);
        assertEq(fd.faucetStart, block.timestamp);
        assertEq(fd.faucetExpiry, block.timestamp + duration);
        assertEq(fd.faucetStrategy, address(linearStrategy));
        assertEq(fd.supplier, userA);
        assertTrue(!fd.canBeRescinded);
        assertEq(mockToken.balanceOf(userA), 0);
        assertEq(mockToken.balanceOf(address(faucet)), numTokens);
    }

    function test_revertMint_invalidFaucet() public {
        mockToken.mint(userA, 100);
        vm.prank(userA);
        mockToken.approve(address(faucet), 100);
        vm.prank(userA);
        vm.expectRevert(abi.encodeWithSelector(IFaucet.MintInvalidStrategy.selector, address(faucet)));
        faucet.mint(userB, 100, ONE_DAY, address(faucet), false);
    }

    function test_revertMint_zeroAmount(uint256 duration) public {
        vm.assume(duration > 0);
        vm.expectRevert(IFaucet.MintNoValue.selector);
        faucet.mint(userB, 0, duration, address(faucet), false);
    }

    function test_revertMint_zeroDuration(uint256 numTokens) public {
        vm.assume(numTokens > 0);
        vm.expectRevert(IFaucet.MintNoDuration.selector);
        faucet.mint(userB, numTokens, 0, address(faucet), false);
    }

    function test_claim_t0(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mintFaucet(numTokens, duration);

        vm.prank(userB);
        faucet.claim(userB, 0);

        assertEq(mockToken.balanceOf(userB), 0);
        assertEq(mockToken.balanceOf(address(faucet)), numTokens);
    }

    function test_claim_ongoing(
        uint256 numTokens,
        uint96 duration,
        uint96 timestamp
    ) public {
        vm.assume(numTokens > 0); // at least a token per second
        vm.assume(duration > 4);
        vm.assume(numTokens / duration > 1); // at least a token per second
        vm.assume(timestamp > 0 && timestamp < duration && timestamp > block.timestamp);
        mintFaucet(numTokens, duration);

        vm.warp(timestamp);
        vm.prank(userB);
        faucet.claim(userB, 0);

        assertGt(mockToken.balanceOf(userB), 0);
        assertLt(mockToken.balanceOf(address(faucet)), numTokens);
        assertEq(mockToken.balanceOf(address(faucet)) + mockToken.balanceOf(userB), numTokens);
    }

    function test_claim_expiry(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mintFaucet(numTokens, duration);

        vm.warp(block.timestamp + duration);
        vm.prank(userB);
        faucet.claim(userB, 0);

        assertEq(mockToken.balanceOf(userB), numTokens);
        assertEq(mockToken.balanceOf(address(faucet)), 0);
        assertEq(faucet.totalSupply(), 0);

        vm.expectRevert("ERC721: owner query for nonexistent token");
        faucet.ownerOf(0);
    }

    function test_claim_past_expiry(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mintFaucet(numTokens, duration);

        vm.warp(block.timestamp + duration + duration);
        vm.prank(userB);
        faucet.claim(userB, 0);

        assertEq(mockToken.balanceOf(userB), numTokens);
        assertEq(mockToken.balanceOf(address(faucet)), 0);
    }

    function test_revertClaim_onlyOwner(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mintFaucet(numTokens, duration);

        vm.warp(block.timestamp + duration + duration);
        vm.prank(userA);
        vm.expectRevert(abi.encodeWithSelector(IFaucet.OnlyOwner.selector, userA, userB));
        faucet.claim(userB, 0);
    }

    function test_rescind_t0(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mockToken.mint(userA, numTokens);
        vm.prank(userA);
        mockToken.approve(address(faucet), numTokens);
        vm.prank(userA);
        faucet.mint(userB, numTokens, block.timestamp + duration, address(linearStrategy), true);

        vm.prank(userA);
        faucet.rescind(userA, 0);

        assertEq(mockToken.balanceOf(userA), numTokens);
        assertEq(mockToken.balanceOf(address(faucet)), 0);
        vm.expectRevert("ERC721: owner query for nonexistent token");
        faucet.ownerOf(0);
    }

    function test_rescind_ongoing(
        uint256 numTokens,
        uint96 duration,
        uint96 timestamp
    ) public {
        vm.assume(numTokens > 0); // at least a token per second
        vm.assume(duration > 4);
        vm.assume(numTokens / duration > 1); // at least a token per second
        vm.assume(timestamp > 0 && timestamp < duration && timestamp > block.timestamp);
        mockToken.mint(userA, numTokens);
        vm.prank(userA);
        mockToken.approve(address(faucet), numTokens);
        vm.prank(userA);
        faucet.mint(userB, numTokens, duration, address(linearStrategy), true);

        vm.warp(timestamp);
        vm.prank(userB);
        faucet.claim(userB, 0);

        vm.prank(userA);
        faucet.rescind(userA, 0);

        assertGt(mockToken.balanceOf(userA), 0);
        assertGt(mockToken.balanceOf(userB), 0);
        assertEq(mockToken.balanceOf(address(faucet)), 0);
        assertEq(mockToken.balanceOf(userA) + mockToken.balanceOf(userB), numTokens);
        vm.expectRevert("ERC721: owner query for nonexistent token");
        faucet.ownerOf(0);
    }

    function test_revertRescind_onlySupplier() public {
        mockToken.mint(userA, 100);
        vm.prank(userA);
        mockToken.approve(address(faucet), 100);
        vm.prank(userA);
        faucet.mint(userB, 100, block.timestamp + ONE_DAY, address(linearStrategy), true);

        vm.expectRevert(abi.encodeWithSelector(IFaucet.OnlySupplier.selector, address(this), userA));
        faucet.rescind(userB, 0);
    }

    function test_revertRescind_onlyRescindable(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mintFaucet(numTokens, duration);

        vm.expectRevert(IFaucet.RescindUnrescindable.selector);
        vm.prank(userA);
        faucet.rescind(userA, 0);
    }
}
