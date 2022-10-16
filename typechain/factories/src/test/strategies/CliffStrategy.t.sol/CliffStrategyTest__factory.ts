/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CliffStrategyTest,
  CliffStrategyTestInterface,
} from "../../../../../src/test/strategies/CliffStrategy.t.sol/CliffStrategyTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_SCRIPT",
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
    inputs: [],
    name: "IS_TEST",
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
    inputs: [],
    name: "failed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "test_beyondEnd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "test_end",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "test_middle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "test_t0",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805462ff00ff19166201000117905534801561002157600080fd5b50610e95806100316000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c80630a9254e4146100885780633a7684631461009257806397288292146100c4578063a0b6a80b146100d7578063ba414fa6146100ea578063f0e78d6014610102578063f782ebcb14610115578063f8ccbf4714610128578063fa7626d41461013b575b600080fd5b610090610148565b005b6100a7600080516020610e4083398151915281565b6040516001600160a01b0390911681526020015b60405180910390f35b6100906100d2366004610b97565b610193565b6100906100e5366004610b97565b6102e5565b6100f2610433565b60405190151581526020016100bb565b610090610110366004610b97565b610552565b610090610123366004610b97565b6106cf565b6000546100f29062010000900460ff1681565b6000546100f29060ff1681565b60405161015490610b8a565b604051809103906000f080158015610170573d6000803e3d6000fd5b50600880546001600160a01b0319166001600160a01b0392909216919091179055565b604051632631f2b160e11b81524283116004820152600080516020610e4083398151915290634c63e56290602401600060405180830381600087803b1580156101db57600080fd5b505af11580156101ef573d6000803e3d6000fd5b5050604051632631f2b160e11b81528484116004820152600080516020610e408339815191529250634c63e5629150602401600060405180830381600087803b15801561023b57600080fd5b505af115801561024f573d6000803e3d6000fd5b5050600854604051631ebbf28960e21b8152600481018790526024810186905260448101859052606481018590526102e093506001600160a01b039091169150637aefca24906084015b602060405180830381865afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da9190610bc3565b8461095f565b505050565b604051632631f2b160e11b81524283116004820152600080516020610e4083398151915290634c63e56290602401600060405180830381600087803b15801561032d57600080fd5b505af1158015610341573d6000803e3d6000fd5b5050604051632631f2b160e11b81528484116004820152600080516020610e408339815191529250634c63e5629150602401600060405180830381600087803b15801561038d57600080fd5b505af11580156103a1573d6000803e3d6000fd5b5050600854604051631ebbf28960e21b8152600481018790526024810186905260448101859052600060648201526102e093506001600160a01b039091169150637aefca24906084015b602060405180830381865afa158015610408573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042c9190610bc3565b600061095f565b60008054610100900460ff16156104535750600054610100900460ff1690565b6000600080516020610e408339815191523b1561054d5760408051600080516020610e40833981519152602082018190526519985a5b195960d21b828401528251808303840181526060830190935260009290916104d5917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001610c17565b60408051601f19818403018152908290526104ef91610c3b565b6000604051808303816000865af19150503d806000811461052c576040519150601f19603f3d011682016040523d82523d6000602084013e610531565b606091505b50915050808060200190518101906105499190610c4e565b9150505b919050565b604051632631f2b160e11b81524283116004820152600080516020610e4083398151915290634c63e56290602401600060405180830381600087803b15801561059a57600080fd5b505af11580156105ae573d6000803e3d6000fd5b5050604051632631f2b160e11b81528484116004820152600080516020610e408339815191529250634c63e5629150602401600060405180830381600087803b1580156105fa57600080fd5b505af115801561060e573d6000803e3d6000fd5b5050604051632631f2b160e11b8152600160fa1b84106004820152600080516020610e408339815191529250634c63e5629150602401600060405180830381600087803b15801561065e57600080fd5b505af1158015610672573d6000803e3d6000fd5b50506008546102e092506001600160a01b03169050637aefca248585856106998180610c70565b6040516001600160e01b031960e087901b1681526004810194909452602484019290925260448301526064820152608401610299565b600080516020610e40833981519152634c63e562600160fa1b831080156106f95750600160fa1b84105b6040518263ffffffff1660e01b8152600401610719911515815260200190565b600060405180830381600087803b15801561073357600080fd5b505af1158015610747573d6000803e3d6000fd5b5050604051632631f2b160e11b81524285116004820152600080516020610e408339815191529250634c63e5629150602401600060405180830381600087803b15801561079357600080fd5b505af11580156107a7573d6000803e3d6000fd5b5050604051632631f2b160e11b81528484116004820152600080516020610e408339815191529250634c63e5629150602401600060405180830381600087803b1580156107f357600080fd5b505af1158015610807573d6000803e3d6000fd5b50600080516020610e408339815191529250634c63e562915061082d9050600286610cac565b6040516001600160e01b031960e084901b16815290156004820152602401600060405180830381600087803b15801561086557600080fd5b505af1158015610879573d6000803e3d6000fd5b50600080516020610e408339815191529250634c63e5629150600290506108a08486610c70565b6108aa9190610cac565b6040516001600160e01b031960e084901b16815290156004820152602401600060405180830381600087803b1580156108e257600080fd5b505af11580156108f6573d6000803e3d6000fd5b50506008546102e092506001600160a01b03169050637aefca24858585600261091f8284610c70565b6109299190610cc0565b6040516001600160e01b031960e087901b16815260048101949094526024840192909252604483015260648201526084016103eb565b808214610a86577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516109d09060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808115e1c1958dd195960b21b60608201526020810183905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a160408051818152600a8183015269080808081058dd1d585b60b21b60608201526020810184905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a1610a86610a8a565b5050565b600080516020610e408339815191523b15610b795760408051600080516020610e40833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052610b189291602001610c17565b60408051601f1981840301815290829052610b3291610c3b565b6000604051808303816000865af19150503d8060008114610b6f576040519150601f19603f3d011682016040523d82523d6000602084013e610b74565b606091505b505050505b6000805461ff001916610100179055565b61016b80610cd583390190565b600080600060608486031215610bac57600080fd5b505081359360208301359350604090920135919050565b600060208284031215610bd557600080fd5b5051919050565b6000815160005b81811015610bfd5760208185018101518683015201610be3565b81811115610c0c576000828601525b509290920192915050565b6001600160e01b0319831681526000610c336004830184610bdc565b949350505050565b6000610c478284610bdc565b9392505050565b600060208284031215610c6057600080fd5b81518015158114610c4757600080fd5b60008219821115610c9157634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052601260045260246000fd5b600082610cbb57610cbb610c96565b500690565b600082610ccf57610ccf610c96565b50049056fe608060405234801561001057600080fd5b5061014b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca2414610074575b600080fd5b61005f6100493660046100b2565b6001600160e01b031916631ebbf28960e21b1490565b60405190151581526020015b60405180910390f35b6100876100823660046100e3565b610095565b60405190815260200161006b565b6000828210156100a7575060006100aa565b50835b949350505050565b6000602082840312156100c457600080fd5b81356001600160e01b0319811681146100dc57600080fd5b9392505050565b600080600080608085870312156100f957600080fd5b505082359460208401359450604084013593606001359250905056fea2646970667358221220ca92b808cad3f31387c14bfaace6147e2ff66c1d1e5beb70b5467d423550280164736f6c634300080c00330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12da264697066735822122028d2461bfea79a28e62626f26150cf0d3af32eab51ef83332001ebd3803fa2bc64736f6c634300080c0033";

type CliffStrategyTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CliffStrategyTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CliffStrategyTest__factory extends ContractFactory {
  constructor(...args: CliffStrategyTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CliffStrategyTest> {
    return super.deploy(overrides || {}) as Promise<CliffStrategyTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CliffStrategyTest {
    return super.attach(address) as CliffStrategyTest;
  }
  override connect(signer: Signer): CliffStrategyTest__factory {
    return super.connect(signer) as CliffStrategyTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CliffStrategyTestInterface {
    return new utils.Interface(_abi) as CliffStrategyTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CliffStrategyTest {
    return new Contract(address, _abi, signerOrProvider) as CliffStrategyTest;
  }
}
