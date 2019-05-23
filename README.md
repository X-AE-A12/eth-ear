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
- transferListener(contractAddress, contractABI, networkName)
- approvalListener(contractAddress, contractABI, networkName)


Transactions:
- transactionListener(transactionHash, networkName)

### Tests

Listening to DAI token transfer event on the Main network:
```
npm test
```

Additional Tests:
```
// DAI token transfer event on Mainnet
npm run testDAI

// 0x token transfer event on Kovan
npm run testZRX

// Tether token approval event on Mainnet
npm run testUSDT

// Transaction hash listener on Kovan
npm run testTx
```

### Dependencies
- [ethers](https://www.npmjs.com/package/ethers)

### License

MIT
