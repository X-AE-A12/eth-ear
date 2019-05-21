# eth-ear
NPM module for an ethereum blockchain event and transaction listener.

### Installation

```
npm i eth-ear
```

### Usage

```
// Import
const ear = require('eth-ear');

// Call Methods
ear.transferListener("0x0", [{abi...}], "kovan")
```

### Methods

ERC-20 Events:

transferListener(contractAddress, contractABI, networkName)

approvalListener(contractAddress, contractABI, networkName)

<!-- 
Transactions:

transactionListener() -->

#### Tests

```
npm test
```

Test: Listening to ZRX token transfer event on the Kovan network.

#### Dependencies
- [ethers](https://www.npmjs.com/package/ethers)

#### License

MIT
