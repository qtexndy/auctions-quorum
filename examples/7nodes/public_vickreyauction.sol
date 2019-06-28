pragma solidity ^0.5.0;

contract PublicVickreyAuction {
    string private itemInfo;
    mapping(address => bytes32) private hashBids;
    mapping(address => uint) private realBids;
    address[] private addresses;

    constructor(string memory info) public {
        itemInfo = info;
    }
    
    function getInfo() public view returns (string memory){
        return itemInfo;
    }
    
    function bid(address addr, bytes32 priceHash) public {
        bool foundAddr= false;
        for(uint i=0; i<addresses.length; i++) {
            if(addresses[i]==addr){
                foundAddr=true;
                break;
            }
        }
        if(foundAddr==false){
            addresses.push(addr);
        }
        
        hashBids[addr] = priceHash;
    }
    
    function putRealBid(address adr, uint realbid) public{
        realBids[adr]=realbid;
    }
    
    function findWinnerAddress() public view returns (address){
        uint highestBid=0;
        address winnerAddr;
        for(uint i=0; i<addresses.length; i++) {
            if(realBids[addresses[i]] >= highestBid){
                highestBid=realBids[addresses[i]];
                winnerAddr=addresses[i];
            }
        }
        return winnerAddr;
    }
    
    function findWinnerBid() public view returns (uint){
        uint highestBid=0;
        address winnerAddr;
        for(uint i=0; i<addresses.length; i++) {
            if(realBids[addresses[i]] >= highestBid){
                highestBid=realBids[addresses[i]];
                winnerAddr=addresses[i];
            }
        }
        return highestBid;
    }
}

