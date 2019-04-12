const ethers = require('ethers');

function eventListener(eventName, contractAddress, abi, network) {
  let provider = new ethers.getDefaultProvider(network);
  let contract = new ethers.Contract(contractAddress, abi, provider);


  (async function() {
    let transferEvent = new Promise((resolve, reject) => {
      contract.on(eventName, (from, to, amount, event) => {
        console.log("From  : " + from);
        console.log("To    : " + to);
        console.log("Amount: " + amount);
        console.log("\n");

        resolve({
          from: from,
          to: to,
          amount: amount
        });
      });
    });
  })();
}

module.exports = {
  eventListener
}
