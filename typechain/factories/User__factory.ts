/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { User, UserInterface } from "../User";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610605806100206000396000f3fe6080604052600436106100435760003560e01c806301ffc9a71461008d578063150b7a02146100c2578063bc197c8114610137578063f23a6e611461017c57600080fd5b366100885760408051338152346020820152478183015290517f74cf3d18d0ddca79038197ad0dd2c7fa5005ef61a5d1ed190e8a8a437e2fcf109181900360600190a1005b600080fd5b34801561009957600080fd5b506100ad6100a836600461025a565b6101c1565b60405190151581526020015b60405180910390f35b3480156100ce57600080fd5b506101066100dd3660046103d8565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100b9565b34801561014357600080fd5b506101066101523660046104c0565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b34801561018857600080fd5b5061010661019736600461056a565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061025457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60006020828403121561026c57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461029c57600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146102c757600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610342576103426102cc565b604052919050565b600082601f83011261035b57600080fd5b813567ffffffffffffffff811115610375576103756102cc565b6103a660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016102fb565b8181528460208386010111156103bb57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156103ee57600080fd5b6103f7856102a3565b9350610405602086016102a3565b925060408501359150606085013567ffffffffffffffff81111561042857600080fd5b6104348782880161034a565b91505092959194509250565b600082601f83011261045157600080fd5b8135602067ffffffffffffffff82111561046d5761046d6102cc565b8160051b61047c8282016102fb565b928352848101820192828101908785111561049657600080fd5b83870192505b848310156104b55782358252918301919083019061049c565b979650505050505050565b600080600080600060a086880312156104d857600080fd5b6104e1866102a3565b94506104ef602087016102a3565b9350604086013567ffffffffffffffff8082111561050c57600080fd5b61051889838a01610440565b9450606088013591508082111561052e57600080fd5b61053a89838a01610440565b9350608088013591508082111561055057600080fd5b5061055d8882890161034a565b9150509295509295909350565b600080600080600060a0868803121561058257600080fd5b61058b866102a3565b9450610599602087016102a3565b93506040860135925060608601359150608086013567ffffffffffffffff8111156105c357600080fd5b61055d8882890161034a56fea264697066735822122069ce0946be9250683ef3b9eb84649b6161bca94462c37add02b8a509d64bcfd164736f6c634300080c0033";

type UserConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class User__factory extends ContractFactory {
  constructor(...args: UserConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<User> {
    return super.deploy(overrides || {}) as Promise<User>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): User {
    return super.attach(address) as User;
  }
  override connect(signer: Signer): User__factory {
    return super.connect(signer) as User__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserInterface {
    return new utils.Interface(_abi) as UserInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): User {
    return new Contract(address, _abi, signerOrProvider) as User;
  }
}