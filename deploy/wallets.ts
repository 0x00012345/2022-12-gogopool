import { ethers } from "ethers";
import dotenv from "dotenv";
import { HardhatNetworkAccountUserConfig } from "hardhat/types";
import { accounts2 } from "./evm-wallets";

dotenv.config();

const { PRIMARY_PRIVATE_KEY, MNEMONIC } = process.env;

const balance = "1000000000000000000000000"; // 1000000000000000000000000/1e18 = 1000,000 ETH

export const accounts: HardhatNetworkAccountUserConfig[] = [
  {
    privateKey: PRIMARY_PRIVATE_KEY
      ? PRIMARY_PRIVATE_KEY
      : ethers.Wallet.fromMnemonic(`${MNEMONIC}`).privateKey,
    balance,
  },
  {
    privateKey:
      "0xc5e8f61d1ab959b397eecc0a37a6517b8e67a0e7cf1f4bce5591f3ed80199122",
    balance,
  },
  {
    privateKey:
      "0xd49743deccbccc5dc7baa8e69e5be03298da8688a15dd202e20f15d5e0e9a9fb",
    balance,
  },
  {
    privateKey:
      "0x23c601ae397441f3ef6f1075dcb0031ff17fb079837beadaf3c84d96c6f3e569",
    balance,
  },
  {
    privateKey:
      "0xee9d129c1997549ee09c0757af5939b2483d80ad649a0eda68e8b0357ad11131",
    balance,
  },
  {
    privateKey:
      "0x87630b2d1de0fbd5044eb6891b3d9d98c34c8d310c852f98550ba774480e47cc",
    balance,
  },
  {
    privateKey:
      "0x275cc4a2bfd4f612625204a20a2280ab53a6da2d14860c47a9f5affe58ad86d4",
    balance,
  },
  {
    privateKey:
      "0xaee25d55ce586148a853ca83fdfacaf7bc42d5762c6e7187e6f8e822d8e6a650",
    balance,
  },
  {
    privateKey:
      "0xa2e0097c961c67ec197b6865d7ecea6caffc68ebeb00e6050368c8f67fc9c588",
    balance,
  },
  {
    privateKey: ethers.Wallet.fromMnemonic(`${MNEMONIC}`).privateKey,
    balance,
  },
  ...accounts2,
];

export default {
  accounts,
};
