// 0x contract transfer event listener on Kovan

const ear = require('../index.js');
const abi = require('../abi.js');

// contract address
let contractAddress = "0x2002D3812F58e35F0EA1fFbf80A75a38c32175fA";

ear.transferListener(contractAddress, abi, 'kovan');
