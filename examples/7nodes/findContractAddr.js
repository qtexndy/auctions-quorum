process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

web3.eth.defaultAccount = web3.eth.accounts[0]

var s1=eth.getTransaction("0x7e2593dceea2d69c763c07b2a61a998a9e5d27200afcd9adf700a33ed7fd4201")
console.log(s1.hash)

var s2=eth.getTransactionReceipt(s1.hash)
console.log(s2.contractAddress)

var abi =[{"constant":false,"inputs":[{"name":"price","type":"uint256"}],"name":"bid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"findWinnerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"findWinnerBid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"info","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

var contract=eth.contract(abi).at(s2.contractAddress)

console.log(contract.getInfo())
console.log(contract.bid(100))
console.log(contract.findWinnerAddress())
console.log(contract.findWinnerBid())


