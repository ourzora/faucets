// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title TestERC20
/// @notice FOR TEST PURPOSES ONLY.
contract TestERC20 is ERC20, Ownable {
    constructor() ERC20("TestERC20", "TEST") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
