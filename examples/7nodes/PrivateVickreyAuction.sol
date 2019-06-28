pragma solidity ^0.5.0;

import "./public_vickreyauction.sol";

contract PrivateVickreyAuction{
    uint private realBid;
    address private addr;
    PublicVickreyAuction public pva;

    constructor(address _t) public {
       pva=PublicVickreyAuction(_t);
    }
    
    function bid(uint price) public {
        addr = msg.sender;
        realBid= price;
        pva.bid(addr, keccak256(abi.encodePacked(price)));
    }
    
    function finish() public{
       pva.putRealBid(addr, realBid);
    }
}

