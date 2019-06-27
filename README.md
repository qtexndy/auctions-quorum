# Auction Quorum Examples

This repository is based on the quorum [7nodes example](https://github.com/jpmorganchase/quorum-examples). Read it to find out how to get started.

## English Auction

English auctions are open-cry auctions, meaning that everyone's bid can be seen by everyone else.

Smart contract [englishauction.sol](examples/7nodes/englishauction.sol) implements an English auction.

One node, say node 1, creates an instance of EnglishAuction, 

    ```sh
    ./run.sh 1 deploy_englishauction.js
    ```

Note that the first argument "1" indicates the contract is deployed by node 1.

All nodes (including node 1) can submit bids to the contract. When the auction ends,
anyone can call "findWinnerAddress()" and "findWinnerBid()" to find the winner and the best bid.

To submit a bid of 100, a node, say node 3,  runs sh command

    ```sh
    ./run.sh 3 submit_100.js 
    ```


## Vickrey Auction
Unlike English auctions, Vickrey auctions are sealed auctions where no one knows other's bid. This is implemented using
Quorum's private transactions. 

An administration node, say node 1, first creates a private contract PrivateVickreyAuction.sol with every other nodes. Then other nodes submit their
bids to node 1. All the bids are privates, so every node only knows its own bid, not others.

Upon receiving a bid, node 1 publishes the hash of the bid to a public contract PublicVickeryAucation.sol (how to do that? Is it possible to call a deployed public contract from a private contract?). 

When the auctions ends, node 1 publishes all bids to PublicVickreyAuction and everyone can call "findWinner()" to verify the auction is valid.  

## Thoughts

1. Quorum smart contracts are Ethereum smart contracts. All knowledge one has on Ethereum can be re-used to program Quorum. This is a huge advantage of Quorum over other enterprise block-chains.

2. Private smart contracts are powerful tools to build enterprise applications.

3. Performance of Quorum seems to be good, even I didn't seriously test it. 

4. Programming tools can be improved, especially tools for Solidity, e.g. code assistance doesn't work for Solidity. Given that it is a strong-type language, code assistance should be supported relatively easily.
 


 