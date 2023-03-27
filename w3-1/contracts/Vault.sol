//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract Vault {
    IERC20  immutable LELETOKEN;
    mapping(address => uint) private accounts;

    constructor(address token_address) {
        LELETOKEN = IERC20(token_address);
    }


    function deposit(uint amount) external {
        LELETOKEN.transferFrom(msg.sender,address(this),amount);
        accounts[msg.sender] += amount;
    }

    function withdraw(uint amount)  external {
        accounts[msg.sender] -= amount;
        LELETOKEN.transfer(msg.sender, amount);
    }

}