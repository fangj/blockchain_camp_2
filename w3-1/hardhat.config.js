require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');

let dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const PRIVATE_KEY_HARDHAT_00 = process.env.PRIVATE_KEY_HARDHAT_00
const PRIVATE_KEY_HARDHAT_01 = process.env.PRIVATE_KEY_HARDHAT_01
const PRIVATE_KEY_HARDHAT_02 = process.env.PRIVATE_KEY_HARDHAT_02

const PRIVATE_KEY_GOERLI_1 = process.env.PRIVATE_KEY_GOERLI_1
const PRIVATE_KEY_GANACHE_00 = process.env.PRIVATE_KEY_GANACHE_00
const PRIVATE_KEY_GANACHE_01 = process.env.PRIVATE_KEY_GANACHE_01

const PRIVATE_KEY_MUMBAI_1=process.env.PRIVATE_KEY_MUMBAI_1
const PRIVATE_KEY_MUMBAI_2=process.env.PRIVATE_KEY_MUMBAI_2

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
        accounts: [PRIVATE_KEY_GANACHE_00,PRIVATE_KEY_GANACHE_01],
        chainId: 1337,
      },
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: [PRIVATE_KEY_GOERLI_1],
      chainId: 5,
    },
    mumbai: {
      // url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      url: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
      
      accounts:[PRIVATE_KEY_MUMBAI_1,PRIVATE_KEY_MUMBAI_2],
      chainId: 80001,
    },
  },

  abiExporter:[{
      path: './deployments/abi',
      clear: true,
      flat: true,
      only: [],
      spacing: 2,
      pretty: true,
  },{
    path: './abi/minimal',
    format: "minimal",
    pretty: false,
  }],

  etherscan: {
    apiKey: 'HQBRR4IH1HIDWVAUEJCJWZN2A64Q9S3XHY'
  }
};

