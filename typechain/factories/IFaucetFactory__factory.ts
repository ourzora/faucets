/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFaucetFactory,
  IFaucetFactoryInterface,
} from "../IFaucetFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "faucetForToken",
    outputs: [
      {
        internalType: "address",
        name: "_faucetAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "deployed",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "faucetForTokenView",
    outputs: [
      {
        internalType: "address",
        name: "_faucetAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IFaucetFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IFaucetFactoryInterface {
    return new utils.Interface(_abi) as IFaucetFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFaucetFactory {
    return new Contract(address, _abi, signerOrProvider) as IFaucetFactory;
  }
}
