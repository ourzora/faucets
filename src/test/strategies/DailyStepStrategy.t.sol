// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import {DailyStepStrategy} from "../../strategies/DailyStepStrategy.sol";

contract DailyStepStrategyTest is Test {
    DailyStepStrategy internal strat;

    function setUp() public {
        strat = new DailyStepStrategy();
    }

    function test_t0(
        uint256 numTokens,
        uint256 start,
        uint256 expiry
    ) public {
        vm.assume(start > block.timestamp);
        vm.assume(expiry > start);
        assertEq(strat.claimableAtTimestamp(numTokens, start, expiry, 0), 0);
    }

    function test_end(
        uint256 numTokens,
        uint256 start,
        uint256 expiry
    ) public {
        vm.assume(start > block.timestamp);
        vm.assume(expiry > start);
        assertEq(strat.claimableAtTimestamp(numTokens, start, expiry, expiry), numTokens);
    }

    function test_beyondEnd(
        uint256 numTokens,
        uint256 start,
        uint256 expiry
    ) public {
        vm.assume(start > block.timestamp);
        vm.assume(expiry > start);
        vm.assume(expiry < 2**250);
        assertEq(strat.claimableAtTimestamp(numTokens, start, expiry, expiry + expiry), numTokens);
    }
}
