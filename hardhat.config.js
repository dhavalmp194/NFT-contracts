require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: process.env.MUMBAI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  solidity: "0.8.9",

  etherscan: {
    apiKey: {
      goerli: process.env.ETH_API_KEY,
      polygonMumbai: process.env.POLYGON_API_KEY,
    },
  },
};
