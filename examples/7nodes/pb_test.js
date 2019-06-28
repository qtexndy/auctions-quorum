web3.eth.defaultAccount = web3.eth.accounts[0]
console.log(web3.eth.accounts[0])

publiccontract =[{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"priceHash","type":"bytes32"}],"name":"bid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"findWinnerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"findWinnerBid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"adr","type":"address"},{"name":"realbid","type":"uint256"}],"name":"putRealBid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"info","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

publicAddr="0xac9061ddf61500407ac8c1d6d1f14271d2c94b0a"


privatecontract= [{"constant":false,"inputs":[{"name":"price","type":"uint256"}],"name":"bid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pva","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_t","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

privateAddr="0x9ac8a5efc282afab3b2a7286704f232767645733"

pv=eth.contract(privatecontract).at(privateAddr)
pb=eth.contract(publiccontract).at(publicAddr)

pv=eth.contract(privatecontract).at(privateAddr)
pb=eth.contract(publiccontract).at(publicAddr)

//console.log(pb.bid("0xd0a5685a4ba479d0ff4e86ca8300738573816c63", 100))
console.log(pb.findWinnerAddress())
console.log(pb.findWinnerBid())
