const ethers = require('ethers');

// ERC-20 transfer event
function transferListener(contractAddress, abi, network) {
  let provider = new ethers.getDefaultProvider(network);
  let contract = new ethers.Contract(contractAddress, abi, provider);

  console.log("Listening to event 'Transfer' on contract " + contractAddress +
    " on the " + network + " network: \n");

  (async function() {
    new Promise((resolve, reject) => {

      contract.on('Transfer', (from, to, amount) => {
        console.log("From  : " + from);
        console.log("To    : " + to);
        console.log("Amount: " + amount);
        console.log("\n");
      });
    });
  })();
}

// ERC-20 approval event
function approvalListener(contractAddress, abi, network) {
  let provider = new ethers.getDefaultProvider(network);
  let contract = new ethers.Contract(contractAddress, abi, provider);

  console.log("Listening to event 'Approval' on contract " + contractAddress +
    " on the " + network + " network: \n");

  (async function() {
    new Promise((resolve, reject) => {

      contract.on('Approval', (owner, spender, amount) => {
        console.log("Owner  : " + owner);
        console.log("Spender: " + spender);
        console.log("Amount : " + amount);
        console.log("\n");
      });
    });
  })();
}

// Transaction listener
function transactionListener(txHash, network) {
  let provider = new ethers.getDefaultProvider(network);

  console.log("Listening to transaction " + txHash +
    " on the " + network + " network: \n");

  (async () => {
    let receipt = await provider.waitForTransaction(txHash);
    console.log('Transaction Mined: ' + receipt.transactionHash);
    console.log('Transaction Receipt:');
    console.log(receipt);
  })();
}

module.exports = {
  transferListener,
  approvalListener,
  transactionListener,
}

// TODO:
// More generic function below to call ANY event
// ---------------------------------------------

// function eventListener(eventName, eventParams, contractAddress, abi, network) {
//   let provider = new ethers.getDefaultProvider(network);
//   let contract = new ethers.Contract(contractAddress, abi, provider);
//   let eventParamsLocal = eventParams.slice();
//
//   console.log("Listening to event \'" + eventName +
//     "\' on contract " + contractAddress +
//     " on the " + network + " network: \n");
//
//   (async function() {
//     new Promise((resolve, reject) => {
//
//       contract.on(eventName, (...eventParams) => {
//
//         eventParams.forEach((arg, i) => {
//           console.log(eventParamsLocal[i] + ": " + arg);
//         })
//         console.log("\n");
//
//       });
//     });
//   })();
// }
