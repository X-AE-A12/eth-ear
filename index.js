const ethers = require('ethers');

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

module.exports = {
  transferListener
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
