/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFaucetStrategy,
  IFaucetStrategyInterface,
} from "../../../src/strategies/IFaucetStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_faucetStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_faucetExpiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "claimableAtTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IFaucetStrategy__factory {
  static readonly abi = _abi;
  static createInterface(): IFaucetStrategyInterface {
    return new utils.Interface(_abi) as IFaucetStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFaucetStrategy {
    return new Contract(address, _abi, signerOrProvider) as IFaucetStrategy;
  }
}
