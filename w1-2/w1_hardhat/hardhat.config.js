require("@nomicfoundation/hardhat-toolbox");


let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const PRIVATE_KEY_HARDHAT_1 = process.env.PRIVATE_KEY_HARDHAT_1
const PRIVATE_KEY_HARDHAT_2 = process.env.PRIVATE_KEY_HARDHAT_2
const PRIVATE_KEY_GOERLI_1 = process.env.PRIVATE_KEY_GOERLI_1


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    development: {
        url: "http://127.0.0.1:8545",
        chainId: 31337 ,
        accounts: [PRIVATE_KEY_HARDHAT_1,PRIVATE_KEY_HARDHAT_2],
      },
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: [PRIVATE_KEY_GOERLI_1],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: {
      goerli: '2B157HPSUP16SYGHS359HISWAXCWTHZ9TI'
    }
  }
};
