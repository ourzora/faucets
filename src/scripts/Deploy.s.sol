// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "forge-std/Script.sol";
import "../FaucetFactory.sol";
import {FaucetMetadataRenderer} from "../renderer/FaucetMetadataRenderer.sol";
import {PtMonoFont} from "../renderer/external/PTMonoFont.sol";
import {SharedNFTLogic} from "@zoralabs/nft-editions-contracts/contracts/SharedNFTLogic.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract Deploy is Script {
    using Strings for uint256;

    function run() public {
        uint256 chainID = vm.envUint("CHAIN_ID");
        console.log("CHAIN_ID", chainID);
        uint256 key = vm.envUint("PRIVATE_KEY");

        // metadata renderer dependencies
        address sharedNFTLogicAddress;
        address zorbRenderer;
        address fontAddress;

        if (chainID == 5) {
            sharedNFTLogicAddress = vm.envAddress("GOERLI_SHARED_NFT_LOGIC");
            console.log("got goerli shared nft address", sharedNFTLogicAddress);
            zorbRenderer = vm.envAddress("GOERLI_ZORB_RENDERER_ADDRESS");
            console.log("got goerli zorb renderer address", zorbRenderer);
            fontAddress = vm.envAddress("GOERLI_FONT_ADDRESS");
            console.log("got goerli font address", fontAddress);
        } else if (chainID == 1) {
            sharedNFTLogicAddress = vm.envAddress("MAINNET_SHARED_NFT_LOGIC");
            console.log("got mainnet shared nft address", sharedNFTLogicAddress);
            zorbRenderer = vm.envAddress("MAINNET_ZORB_RENDERER_ADDRESS");
            console.log("got mainnet zorb renderer address", zorbRenderer);
            fontAddress = vm.envAddress("MAINNET_FONT_ADDRESS");
            console.log("got mainnet font address", fontAddress);
        } else {
            // SharedNFTLogic sharedNFTLogic = new SharedNFTLogic();
            // address zorbRenderer = address(new ZorbNFT(sharedNFTLogic));
            // PtMonoFont font = new PtMonoFont();
            // metadataRenderer = new FaucetMetadataRenderer(sharedNFTLogic, zorbRenderer, font);
        }

        vm.startBroadcast(key);
        FaucetMetadataRenderer renderer = new FaucetMetadataRenderer(SharedNFTLogic(sharedNFTLogicAddress), zorbRenderer, PtMonoFont(fontAddress));
        ERC20Faucet erc20FaucetImpl = new ERC20Faucet(renderer);
        erc20FaucetImpl.initialize("", "", IERC20(address(0)));
        ETHFaucet ethFaucetImpl = new ETHFaucet(renderer);
        ethFaucetImpl.initialize("", "");
        FaucetFactory factory = new FaucetFactory(address(erc20FaucetImpl), address(ethFaucetImpl));
        vm.stopBroadcast();

        string memory filePath = string(abi.encodePacked("deploys/", chainID.toString(), ".txt"));
        vm.writeFile(filePath, "");
        vm.writeLine(filePath, string(abi.encodePacked("FaucetMetadataRenderer: ", addressToString(address(renderer)))));
        vm.writeLine(filePath, string(abi.encodePacked("ERC20Faucet implementation: ", addressToString(address(erc20FaucetImpl)))));
        vm.writeLine(filePath, string(abi.encodePacked("ETHFaucet implementation: ", addressToString(address(ethFaucetImpl)))));
        vm.writeLine(filePath, string(abi.encodePacked("FaucetFactory: ", addressToString(address(factory)))));
    }

    function addressToString(address _addr) private pure returns (string memory) {
        bytes memory s = new bytes(40);
        for (uint256 i = 0; i < 20; i++) {
            bytes1 b = bytes1(uint8(uint256(uint160(_addr)) / (2**(8 * (19 - i)))));
            bytes1 hi = bytes1(uint8(b) / 16);
            bytes1 lo = bytes1(uint8(b) - 16 * uint8(hi));
            s[2 * i] = char(hi);
            s[2 * i + 1] = char(lo);
        }
        return string(abi.encodePacked("0x", string(s)));
    }

    function char(bytes1 b) private pure returns (bytes1 c) {
        if (uint8(b) < 10) return bytes1(uint8(b) + 0x30);
        else return bytes1(uint8(b) + 0x57);
    }
}
