/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CliffStrategy,
  CliffStrategyInterface,
} from "../../../src/strategies/CliffStrategy";

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

const _bytecode =
  "0x608060405234801561001057600080fd5b5061014b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca2414610074575b600080fd5b61005f6100493660046100b2565b6001600160e01b031916631ebbf28960e21b1490565b60405190151581526020015b60405180910390f35b6100876100823660046100e3565b610095565b60405190815260200161006b565b6000828210156100a7575060006100aa565b50835b949350505050565b6000602082840312156100c457600080fd5b81356001600160e01b0319811681146100dc57600080fd5b9392505050565b600080600080608085870312156100f957600080fd5b505082359460208401359450604084013593606001359250905056fea2646970667358221220ca92b808cad3f31387c14bfaace6147e2ff66c1d1e5beb70b5467d423550280164736f6c634300080c0033";

type CliffStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CliffStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CliffStrategy__factory extends ContractFactory {
  constructor(...args: CliffStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CliffStrategy> {
    return super.deploy(overrides || {}) as Promise<CliffStrategy>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CliffStrategy {
    return super.attach(address) as CliffStrategy;
  }
  override connect(signer: Signer): CliffStrategy__factory {
    return super.connect(signer) as CliffStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CliffStrategyInterface {
    return new utils.Interface(_abi) as CliffStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CliffStrategy {
    return new Contract(address, _abi, signerOrProvider) as CliffStrategy;
  }
}
