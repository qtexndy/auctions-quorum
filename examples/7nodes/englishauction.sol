pragma solidity ^0.5.0;

contract EnglishAuction {
    string private itemInfo;
    mapping(address =>uint) private bids;
    address[] private addresses;

    constructor(string memory info) public {
        itemInfo = info;
    }
    
    function getInfo() public view returns (string memory){
        return itemInfo;
    }
    
    function bid(uint price) public {
        bool foundAddr= false;
        for(uint i=0; i<addresses.length; i++) {
            if(addresses[i]==msg.sender){
                foundAddr=true;
                break;
            }
        }
        if(foundAddr==false){
            addresses.push(msg.sender);
        }
        
        bids[msg.sender] = price;
    }
    
    function findWinnerAddress() public view returns (address){
        uint highestBid=0;
        address winnerAddr;
        for(uint i=0; i<addresses.length; i++) {
            if(bids[addresses[i]] >= highestBid){
                highestBid=bids[addresses[i]];
                winnerAddr=addresses[i];
            }
        }
        return winnerAddr;
    }
    
    function findWinnerBid() public view returns (uint){
        uint highestBid=0;
        address winnerAddr;
        for(uint i=0; i<addresses.length; i++) {
            if(bids[addresses[i]] >= highestBid){
                highestBid=bids[addresses[i]];
                winnerAddr=addresses[i];
            }
        }
        return highestBid;
    }
}

