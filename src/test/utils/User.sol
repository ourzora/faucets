// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import {ERC721Holder} from "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import {ERC1155Holder} from "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract User is ERC721Holder, ERC1155Holder {
    constructor() {}

    /// ------------ ETH Receivable ------------

    event Received(address sender, uint256 amount, uint256 balance);

    receive() external payable {
        emit Received(msg.sender, msg.value, address(this).balance);
    }
}
