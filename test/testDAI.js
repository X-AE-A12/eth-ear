// DAI transfer event listener on Homestead

const ear = require('../index.js');
const abi = require('../abi.js');

// DAI contract address on mainnet
let contractAddress = "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359";

ear.transferListener(contractAddress, abi, 'homestead');
