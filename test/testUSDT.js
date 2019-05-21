// Tether contract approval event listener on Mainnet

const ear = require('../index.js');
const abi = require('../abi.js');

// contract address
let contractAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";

ear.approvalListener(contractAddress, abi, 'homestead');
