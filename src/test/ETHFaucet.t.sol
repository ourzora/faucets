// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import {ZorbNFT} from "../renderer/external/ZorbNFT.sol";
import {PtMonoFont} from "../renderer/external/PTMonoFont.sol";
import {SharedNFTLogic} from "@zoralabs/nft-editions-contracts/contracts/SharedNFTLogic.sol";
import {VM} from "./utils/VM.sol";
import {User} from "./utils/User.sol";
import {IFaucet, ETHFaucet} from "../ETHFaucet.sol";
import {ERC20Faucet} from "../ERC20Faucet.sol";
import {FaucetFactory} from "../FaucetFactory.sol";
import "../strategies/LinearStrategy.sol";
import {FaucetMetadataRenderer} from "../renderer/FaucetMetadataRenderer.sol";

contract ETHFaucetTest is Test {
    address internal userA;
    address internal userB;
    ETHFaucet internal faucetImpl;
    FaucetFactory internal factory;
    ETHFaucet internal faucet;
    LinearStrategy internal linearStrategy;

    function setUp() public {
        userA = address(new User());
        userB = address(new User());

        SharedNFTLogic sharedNFTLogic = new SharedNFTLogic();
        address zorbRenderer = address(new ZorbNFT(sharedNFTLogic));
        PtMonoFont font = new PtMonoFont();
        FaucetMetadataRenderer metadataRenderer = new FaucetMetadataRenderer(sharedNFTLogic, zorbRenderer, font);
        address erc20FaucetImpl = address(new ERC20Faucet(metadataRenderer));
        faucetImpl = new ETHFaucet(metadataRenderer);
        factory = new FaucetFactory(erc20FaucetImpl, address(faucetImpl));
        linearStrategy = new LinearStrategy();

        (address faucetAddr, ) = factory.faucetForToken(address(0));
        faucet = ETHFaucet(faucetAddr);
    }

    function mintFaucet(uint256 numTokens, uint96 duration) internal {
        vm.deal(userA, numTokens);
        vm.prank(userA);
        faucet.mint{value: numTokens}(userB, numTokens, duration, address(linearStrategy), false);
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
        assertEq(userA.balance, 0);
        assertEq(address(faucet).balance, numTokens);
    }

    function test_revertMint_invalidFaucet() public {
        vm.deal(userA, 100 ether);
        vm.prank(userA);
        vm.expectRevert(abi.encodeWithSelector(IFaucet.MintInvalidStrategy.selector, address(faucet)));
        faucet.mint{value: 100 ether}(userB, 100 ether, 1, address(faucet), false);
    }

    function test_revertMint_zeroAmount(uint256 duration) public {
        vm.assume(duration > 0);
        vm.expectRevert(IFaucet.MintNoValue.selector);
        faucet.mint(userB, 0, duration, address(linearStrategy), false);
    }

    function test_revertMint_zeroDuration(uint256 numTokens) public {
        vm.assume(numTokens > 0);
        vm.deal(address(this), numTokens);
        vm.expectRevert(IFaucet.MintNoDuration.selector);
        faucet.mint{value: numTokens}(userB, numTokens, 0, address(linearStrategy), false);
    }

    function test_claim_t0(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mintFaucet(numTokens, duration);

        vm.prank(userB);
        faucet.claim(userB, 0);

        assertEq(userB.balance, 0);
        assertEq(address(faucet).balance, numTokens);
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

        assertGt(userB.balance, 0);
        assertLt(address(faucet).balance, numTokens);
        assertEq(address(faucet).balance + userB.balance, numTokens);
    }

    function test_claim_expiry(uint256 numTokens, uint96 duration) public {
        vm.assume(numTokens > 0);
        vm.assume(duration > 0);
        mintFaucet(numTokens, duration);

        vm.warp(block.timestamp + duration);
        vm.prank(userB);
        faucet.claim(userB, 0);

        assertEq(userB.balance, numTokens);
        assertEq(address(faucet).balance, 0);
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

        assertEq(userB.balance, numTokens);
        assertEq(address(faucet).balance, 0);
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
        vm.deal(userA, numTokens);
        vm.prank(userA);
        faucet.mint{value: numTokens}(userB, numTokens, block.timestamp + duration, address(linearStrategy), true);

        vm.prank(userA);
        faucet.rescind(userA, 0);

        assertEq(userA.balance, numTokens);
        assertEq(address(faucet).balance, 0);
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
        vm.deal(userA, numTokens);
        vm.prank(userA);
        faucet.mint{value: numTokens}(userB, numTokens, duration, address(linearStrategy), true);

        vm.warp(timestamp);
        vm.prank(userB);
        faucet.claim(userB, 0);

        vm.prank(userA);
        faucet.rescind(userA, 0);

        assertGt(userA.balance, 0);
        assertGt(userB.balance, 0);
        assertEq(address(faucet).balance, 0);
        assertEq(userA.balance + userB.balance, numTokens);
        vm.expectRevert("ERC721: owner query for nonexistent token");
        faucet.ownerOf(0);
    }

    function test_revertRescind_onlySupplier() public {
        vm.deal(userA, 1 ether);
        vm.prank(userA);
        faucet.mint{value: 1 ether}(userB, 1 ether, block.timestamp + 1, address(linearStrategy), true);

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
