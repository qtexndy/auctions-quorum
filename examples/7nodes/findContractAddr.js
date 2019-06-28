var s1=eth.getTransaction("0x7e2593dceea2d69c763c07b2a61a998a9e5d27200afcd9adf700a33ed7fd4201")
console.log(s1.hash)

var s2=eth.getTransactionReceipt(s1.hash)
console.log(s2.contractAddress)
