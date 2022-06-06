var contractABI = [];
var contractAddress = '0xD210169eE2240E6800D98521FCFE6252A0069bEE';
var web3 = new Web3('HTTP://127.0.0.1:7545');
var simpleSmartContract = new web3.eth.contract(contractABI, contractAddress);

console.log(simpleSmartContract);
