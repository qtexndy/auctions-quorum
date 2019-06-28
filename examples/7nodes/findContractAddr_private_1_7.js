//var s1=eth.getTransaction("0x8e77dbfcd29da1ede0bee60d7e430939144136e57a87501d3da7d27e8197824a")
var s1=eth.getTransaction("0x8e74405e106ba280fadad9d9fdda37f48d467fd155acce670bb690f1cfde02f6")
console.log(s1.hash)

var s2=eth.getTransactionReceipt(s1.hash)
console.log(s2.contractAddress)
"0x9ac8a5efc282afab3b2a7286704f232767645733"