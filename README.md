## ERC721 Smart Contract

### Clone repository

```bash

git clone https://github.com/dhavalmp194/NFT-contracts.git

```

---

### Installation

```bash

cd NFT-contracts

npm install

```

---

### Smart contract structure

- [NFT Token](https://github.com/dhavalmp194/NFT-contracts/blob/main/contracts/nft.sol):
  ERC721 standard NFT

---

### Smart contract Interaction

#### Compile smart contracts

```bash

npx hardhat compile

```

#### Test smart contracts

```bash

npx hardhat test

```

#### Test smart contracts coverage

```bash

npx hardhat coverage

```

#### Smart contract Deployment

Create a .env file in the root directory and add the following variables

- GOERLI_RPC_URL = ""

- MUMBAI_RPC_URL = ""

- PRIVATE_KEY = ""

- ETH_API_KEY = ""

- POLYGON_API_KEY = ""

Supported networks for deployment

- `mumbai`

- `goerli`

##### Deploying NFT Token Smart Contract On `Goerli` Testnet

```bash

npx hardhat run scripts/deploy.js --network goerli

```

##### Deploying NFT Token Smart Contract On `Mumbai` Testnet

```bash

npx hardhat run scripts/deploy.js --network polygon

```

#### Smart contract Verfication

```bash

npx hardhat verify DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1" --network goerli
npx hardhat verify DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1" --network polygon

```

# Smart Contracts

Smart contracts are deployed on [Goerli Testnet](https://rinkeby.etherscan.io) & [Mumbai Testnet](https://mumbai.polygonscan.com)

- NFT on Goerli : [0x0D79298CaBB79253BE7e4819D4584af188c66457](https://goerli.etherscan.io/address/0x0D79298CaBB79253BE7e4819D4584af188c66457#code)
- NFT on Mumbai : [0xC4C9c8cBd434204e9b1917fDb5958df15035b59C](https://mumbai.polygonscan.com/address/0xc4c9c8cbd434204e9b1917fdb5958df15035b59c#code)

# Mint Transactions

- Mint on Goerli : [Transaction Hash : 0xdf4c828bbfea67d31e96f4754da7720872d2cc3e69a97dd7780a17c7b182dfb8](https://goerli.etherscan.io/tx/0xdf4c828bbfea67d31e96f4754da7720872d2cc3e69a97dd7780a17c7b182dfb8)

- Mint on Mumbai : [Transaction Hash : 0x64800b7730febdd9d97bad8b46f7f041db55ae6fd302ff560f6e0adfbb59338c](https://mumbai.polygonscan.com/tx/0x64800b7730febdd9d97bad8b46f7f041db55ae6fd302ff560f6e0adfbb59338c)
