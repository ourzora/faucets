/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BadERC20,
  BadERC20Interface,
} from "../../../../src/test/utils/BadERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212202e3f3439f12c9647e712d943d07a68167eefd1643f2fb35a39f9c439e7e8b1d064736f6c634300080c0033";

type BadERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BadERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BadERC20__factory extends ContractFactory {
  constructor(...args: BadERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BadERC20> {
    return super.deploy(overrides || {}) as Promise<BadERC20>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BadERC20 {
    return super.attach(address) as BadERC20;
  }
  override connect(signer: Signer): BadERC20__factory {
    return super.connect(signer) as BadERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BadERC20Interface {
    return new utils.Interface(_abi) as BadERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BadERC20 {
    return new Contract(address, _abi, signerOrProvider) as BadERC20;
  }
}
