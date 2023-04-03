# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


npx hardhat run scripts/deployMyERC20.js --network ganache

MyERC20 deployed to 0xDAE721C0024ae402921F3DF227C6e06245F3D87F
Vault deployed to 0xffa814BE989C0Fd3B2e36f27f761cB99D57D7781



npx hardhat run scripts/deposit.js --network ganache
bank approved
bank deposited
balance of 0x2cD8c50FBb9DFb9AaaE9bdCEaBf33a72674Ad82c is 9999990000000000000000


npm install --save-dev hardhat-abi-exporter

npx hardhat export-abi
 


npx hardhat run .\scripts\transferMyERC721.js --network mumbai
balance of 0xF823a9f55c4A3eeF3192311cbd5Ea8FE469a3Bc5 is 2
transfered a token
balance of 0xF823a9f55c4A3eeF3192311cbd5Ea8FE469a3Bc5 is 1



npx hardhat run .\scripts\deployMyERC721.js --network ganache
MyERC721 deployed to 0x795D8065Fc6D76130cb8565487697AE2dD5Ab70a
NFT mint

npx hardhat run .\scripts\transferMyERC721.js --network ganache
balance of 0x3C92e4069752EE9F13405198999805252fF95290 is 1
transfered a token
balance of 0x3C92e4069752EE9F13405198999805252fF95290 is 0