// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import {Test} from "forge-std/Test.sol";
import {ZorbNFT} from "../renderer/external/ZorbNFT.sol";
import {PtMonoFont} from "../renderer/external/PTMonoFont.sol";
import {SharedNFTLogic} from "@zoralabs/nft-editions-contracts/contracts/SharedNFTLogic.sol";
import {VM} from "./utils/VM.sol";
import {User} from "./utils/User.sol";
import {TestERC20} from "./utils/TestERC20.sol";
import {BadERC20} from "./utils/BadERC20.sol";
import {ERC20Faucet} from "../ERC20Faucet.sol";
import {ETHFaucet} from "../ETHFaucet.sol";
import {FaucetFactory} from "../FaucetFactory.sol";
import {FaucetMetadataRenderer} from "../renderer/FaucetMetadataRenderer.sol";

contract FaucetFactoryTest is Test {
    address internal userA;
    address internal userB;
    address internal mockToken;
    ERC20Faucet internal erc20FaucetImpl;
    ETHFaucet internal ethFaucetImpl;
    FaucetFactory internal factory;

    function setUp() public {
        userA = address(new User());
        userB = address(new User());
        mockToken = address(new TestERC20());

        SharedNFTLogic sharedNFTLogic = new SharedNFTLogic();
        address zorbRenderer = address(new ZorbNFT(sharedNFTLogic));
        PtMonoFont font = new PtMonoFont();
        FaucetMetadataRenderer metadataRenderer = new FaucetMetadataRenderer(sharedNFTLogic, zorbRenderer, font);
        erc20FaucetImpl = new ERC20Faucet(metadataRenderer);
        ethFaucetImpl = new ETHFaucet(metadataRenderer);
        factory = new FaucetFactory(address(erc20FaucetImpl), address(ethFaucetImpl));
    }

    function test_Constructor() public {
        assertEq(address(erc20FaucetImpl), factory.erc20FaucetImplementation());
    }

    function test_FaucetForToken_undeployed() public {
        (address addr, bool deployed) = factory.faucetForToken(mockToken);

        assertTrue(deployed);

        ERC20Faucet faucet = ERC20Faucet(addr);

        assertEq(faucet.name(), "TestERC20 Faucet");
        assertEq(faucet.symbol(), "FCT-TEST");
    }

    function test_FaucetForToken_deployed() public {
        factory.faucetForToken(mockToken);
        (, bool deployed) = factory.faucetForToken(mockToken);

        assertTrue(!deployed);
    }

    function test_FaucetForToken_badMetadata() public {
        address bad = address(new BadERC20());

        (address faucetAddr, ) = factory.faucetForToken(bad);
        ERC20Faucet faucet = ERC20Faucet(faucetAddr);

        assertEq(faucet.symbol(), "FCT-???");
    }

    function test_FaucetForTokenView_undeployed() public {
        address computedAddr = factory.faucetForTokenView(mockToken);

        assertEq(computedAddr, address(0));
    }

    function test_FaucetForTokenView_deployed() public {
        factory.faucetForToken(mockToken);
        address deployedAddr = factory.deployedFaucetsForToken(mockToken);
        address addr = factory.faucetForTokenView(mockToken);

        assertEq(deployedAddr, addr);
    }
}
