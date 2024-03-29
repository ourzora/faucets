/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { VM, VMInterface } from "../VM";

const _abi = [
  {
    type: "function",
    name: "addr",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "clearMockedCalls",
    inputs: [],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deal",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "etch",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "expectCall",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "expectEmit",
    inputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "expectRevert",
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ffi",
    inputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "load",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "mockCall",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "prank",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "record",
    inputs: [],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "roll",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sign",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startPrank",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "stopPrank",
    inputs: [],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "store",
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "warp",
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    outputs: [],
    constant: null,
    stateMutability: "nonpayable",
  },
];

export class VM__factory {
  static readonly abi = _abi;
  static createInterface(): VMInterface {
    return new utils.Interface(_abi) as VMInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VM {
    return new Contract(address, _abi, signerOrProvider) as VM;
  }
}
