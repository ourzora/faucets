/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StdStorage,
  StdStorageInterface,
} from "../../test.sol/StdStorage";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "fsig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "keysHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
    ],
    name: "SlotFound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
    ],
    name: "WARNING_UninitedSlot",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "b",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
    name: "bytesToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61031861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063535849391461003a575b600080fd5b61004d610048366004610123565b61005f565b60405190815260200160405180910390f35b60008060006020855111610074578451610077565b60205b905060005b818110156100ea5761008f816008610225565b8661009a8388610262565b815181106100aa576100aa61027a565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016901c9290921791806100e2816102a9565b91505061007c565b5090949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561013657600080fd5b823567ffffffffffffffff8082111561014e57600080fd5b818501915085601f83011261016257600080fd5b813581811115610174576101746100f4565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101ba576101ba6100f4565b816040528281528860208487010111156101d357600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561025d5761025d6101f6565b500290565b60008219821115610275576102756101f6565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156102db576102db6101f6565b506001019056fea2646970667358221220117e9afa8bcff11b9490d941b2996f2365245b43cd92011eb8cd956606f5a83d64736f6c634300080c0033";

type StdStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdStorage__factory extends ContractFactory {
  constructor(...args: StdStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StdStorage> {
    return super.deploy(overrides || {}) as Promise<StdStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdStorage {
    return super.attach(address) as StdStorage;
  }
  override connect(signer: Signer): StdStorage__factory {
    return super.connect(signer) as StdStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdStorageInterface {
    return new utils.Interface(_abi) as StdStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdStorage {
    return new Contract(address, _abi, signerOrProvider) as StdStorage;
  }
}
