// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "forge-std/Script.sol";
import {ZorbNFT} from "../renderer/external/ZorbNFT.sol";
import {PtMonoFont} from "../renderer/external/PTMonoFont.sol";
import {SharedNFTLogic} from "@zoralabs/nft-editions-contracts/contracts/SharedNFTLogic.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract DeployDeps is Script {
    using Strings for uint256;

    function run() public {
        uint256 chainID = vm.envUint("CHAIN_ID");
        uint256 key = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(key);
        SharedNFTLogic sharedNFTLogic = new SharedNFTLogic();
        address zorbRenderer = address(new ZorbNFT(sharedNFTLogic));
        PtMonoFont font = new PtMonoFont();
        vm.stopBroadcast();

        string memory filePath = string(abi.encodePacked("deploys/deps-", chainID.toString(), ".txt"));
        vm.writeFile(filePath, "");
        vm.writeLine(filePath, string(abi.encodePacked("SharedNFTLogic: ", addressToString(address(sharedNFTLogic)))));
        vm.writeLine(filePath, string(abi.encodePacked("ZorbRenderer: ", addressToString(zorbRenderer))));
        vm.writeLine(filePath, string(abi.encodePacked("PTMonoFont: ", addressToString(address(font)))));
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
