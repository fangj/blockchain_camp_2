// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter{
    uint public counter;
    address owner;

    constructor(){
        owner=msg.sender;
        counter=0;
    }

    //仅有部署者 可以调⽤ count();
    function count() public {
        require(msg.sender==owner,"only owner can count");
        counter++;
    }

    function add(uint x)public{
        counter+=x;
    }
}