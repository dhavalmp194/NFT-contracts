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

- [NFT Token](https://github.com/dhavalmp194/NFT-contracts/blob/contracts/nft.sol):
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
