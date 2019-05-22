// Transaction listener on Kovan

const ear = require('../index.js');

// A random transaction that has been mined
let txHash = "0x0b58501727af1a6656fba1ce10ddfa7b5542bb279254fe0ae7b0926c66e93ff8";

ear.transactionListener(txHash, 'kovan');
