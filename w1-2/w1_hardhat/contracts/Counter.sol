// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter{
    uint public counter;

    constructor(){
        counter=0;
    }

    function count() public {
        counter++;
    }

    function add(uint x)public{
        counter+=x;
    }
}