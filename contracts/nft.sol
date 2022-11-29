// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    uint256 public tokenId;

    mapping(uint256 => string) public _tokenURI;

    constructor() ERC721("DEMO", "DM") {}

    function mint(string memory _quote) external {
        _safeMint(msg.sender, tokenId);
        _tokenURI[tokenId] = _quote;
        tokenId++;
    }
}
