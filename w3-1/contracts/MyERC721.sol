//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyERC721 is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721(unicode"乐乐作品", "LELE ART") {}


    //图片 ipfs://QmVrdNqqraGjvQQaatJZDi6hwBKeJmuuPUBvbXqQPQMjW9
    //JSON ipfs://QmbkCDwaZ2GqUJeZk28pMYVd8mzekfsnhWJ7AsM8JmVzHC

    //图片_HTTP  https://ipfs.io/ipfs/QmVrdNqqraGjvQQaatJZDi6hwBKeJmuuPUBvbXqQPQMjW9
    //JSON_with_http https://ipfs.io/ipfs/QmWy8sv2QvZLXbotuyZpW6tCCe9yM5HAgSXXiRPrEzQLyb

    function mint(address user, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(user, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}

//https://mumbai.polygonscan.com/token/0x2Df86a8b321fd4D54CA3Fa266C3E2dAF92b67E77

//https://testnets.opensea.io/zh-CN/assets/mumbai/0x2df86a8b321fd4d54ca3fa266c3e2daf92b67e77/1