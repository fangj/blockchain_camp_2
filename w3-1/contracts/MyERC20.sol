//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MyERC20 is ERC20 {

    constructor() ERC20(unicode"乐乐", "LELE") {
        _mint(msg.sender, 10000 * 10 ** 18);
    }


}