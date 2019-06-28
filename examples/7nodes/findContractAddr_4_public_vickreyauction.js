var s1=eth.getTransaction("0x5a83900f052ccc5f25430ea25be50fc67c06ff67f59daea15693fc44cbb5d34f")
console.log(s1.hash)

var s2=eth.getTransactionReceipt(s1.hash)
console.log(s2.contractAddress)
"0xac9061ddf61500407ac8c1d6d1f14271d2c94b0a"