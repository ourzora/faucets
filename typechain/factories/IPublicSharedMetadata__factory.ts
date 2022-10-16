/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPublicSharedMetadata,
  IPublicSharedMetadataInterface,
} from "../IPublicSharedMetadata";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "unencoded",
        type: "bytes",
      },
    ],
    name: "base64Encode",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "json",
        type: "bytes",
      },
    ],
    name: "encodeMetadataJSON",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "numberToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class IPublicSharedMetadata__factory {
  static readonly abi = _abi;
  static createInterface(): IPublicSharedMetadataInterface {
    return new utils.Interface(_abi) as IPublicSharedMetadataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPublicSharedMetadata {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPublicSharedMetadata;
  }
}
