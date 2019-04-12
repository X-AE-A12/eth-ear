const ethers = require('ethers');

function eventListener(eventName, eventParams, contractAddress, abi, network) {
  let provider = new ethers.getDefaultProvider(network);
  let contract = new ethers.Contract(contractAddress, abi, provider);
  let eventParamsLocal = eventParams.slice();

  console.log("Listening to event \'" + eventName +
    "\' on contract " + contractAddress +
    " on the " + network + " network: \n");

  (async function() {
    new Promise((resolve, reject) => {

      contract.on(eventName, (...eventParams) => {

        eventParams.forEach((arg, i) => {
          console.log(eventParamsLocal[i] + ": " + arg);
        })
        // console.log("From  : " + from);
        // console.log("To    : " + to);
        // console.log("Amount: " + amount);
        console.log("\n");

      });
    });
  })();
}

module.exports = {
  eventListener
}
