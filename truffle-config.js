const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: { // this is for the truffle console command with a running Ganache blockchain
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777
    },
    develop: { // this is for the truffle develop command with an ephemeral personal blockchain
      port: 8545,
      network_id: 20,
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3
    }
  },
  compilers: {
    solc: {
      version: "^0.8.1"
    }
  }
};