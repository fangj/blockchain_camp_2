require("@nomicfoundation/hardhat-toolbox");


let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const PRIVATE_KEY_HARDHAT_00 = process.env.PRIVATE_KEY_HARDHAT_00
const PRIVATE_KEY_HARDHAT_01 = process.env.PRIVATE_KEY_HARDHAT_01
const PRIVATE_KEY_HARDHAT_02 = process.env.PRIVATE_KEY_HARDHAT_02

const PRIVATE_KEY_GOERLI_1 = process.env.PRIVATE_KEY_GOERLI_1
const PRIVATE_KEY_GANACHE_00 = process.env.PRIVATE_KEY_GANACHE_00


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    development: {
        url: "http://127.0.0.1:8545",
        chainId: 31337 ,
        accounts: [PRIVATE_KEY_HARDHAT_00,PRIVATE_KEY_HARDHAT_01,PRIVATE_KEY_HARDHAT_02],
      },
    ganache: {
        url: "http://127.0.0.1:7545",
        accounts: [PRIVATE_KEY_GANACHE_00],
        chainId: 1337,
      },
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: [PRIVATE_KEY_GOERLI_1],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: {
      goerli: 'your API key'
    }
  }
};
