/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LinearStrategyTest,
  LinearStrategyTestInterface,
} from "../../LinearStrategy.t.sol/LinearStrategyTest";

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
  "0x60806040526000805462ff00ff19166201000117905534801561002157600080fd5b50611495806100316000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063ba414fa611610076578063f782ebcb1161005b578063f782ebcb14610148578063f8ccbf471461015b578063fa7626d41461016e57600080fd5b8063ba414fa61461011d578063f0e78d601461013557600080fd5b80630a9254e4146100a85780633a768463146100b257806397288292146100f7578063a0b6a80b1461010a575b600080fd5b6100b061017b565b005b6100cd737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100b0610105366004610f76565b6101eb565b6100b0610118366004610f76565b6103a1565b610125610552565b60405190151581526020016100ee565b6100b0610143366004610f76565b6106b2565b6100b0610156366004610f76565b6108cd565b6000546101259062010000900460ff1681565b6000546101259060ff1681565b60405161018790610f69565b604051809103906000f0801580156101a3573d6000803e3d6000fd5b50600880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6040517f4c63e5620000000000000000000000000000000000000000000000000000000081524283116004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d90634c63e56290602401600060405180830381600087803b15801561025257600080fd5b505af1158015610266573d6000803e3d6000fd5b50506040517f4c63e5620000000000000000000000000000000000000000000000000000000081528484116004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634c63e5629150602401600060405180830381600087803b1580156102d157600080fd5b505af11580156102e5573d6000803e3d6000fd5b50506008546040517f7aefca240000000000000000000000000000000000000000000000000000000081526004810187905260248101869052604481018590526064810185905261039c935073ffffffffffffffffffffffffffffffffffffffff9091169150637aefca24906084015b602060405180830381865afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190610fa2565b84610c81565b505050565b6040517f4c63e5620000000000000000000000000000000000000000000000000000000081524283116004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d90634c63e56290602401600060405180830381600087803b15801561040857600080fd5b505af115801561041c573d6000803e3d6000fd5b50506040517f4c63e5620000000000000000000000000000000000000000000000000000000081528484116004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634c63e5629150602401600060405180830381600087803b15801561048757600080fd5b505af115801561049b573d6000803e3d6000fd5b50506008546040517f7aefca240000000000000000000000000000000000000000000000000000000081526004810187905260248101869052604481018590526000606482015261039c935073ffffffffffffffffffffffffffffffffffffffff9091169150637aefca2490608401602060405180830381865afa158015610527573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054b9190610fa2565b6000610c81565b60008054610100900460ff16156105725750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156106ad5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c6564000000000000000000000000000000000000000000000000000082840152825180830384018152606083019093526000929091610617917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001610ff6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261064f91611032565b6000604051808303816000865af19150503d806000811461068c576040519150601f19603f3d011682016040523d82523d6000602084013e610691565b606091505b50915050808060200190518101906106a99190611045565b9150505b919050565b6040517f4c63e5620000000000000000000000000000000000000000000000000000000081524283116004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d90634c63e56290602401600060405180830381600087803b15801561071957600080fd5b505af115801561072d573d6000803e3d6000fd5b50506040517f4c63e5620000000000000000000000000000000000000000000000000000000081528484116004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634c63e5629150602401600060405180830381600087803b15801561079857600080fd5b505af11580156107ac573d6000803e3d6000fd5b50506040517f4c63e5620000000000000000000000000000000000000000000000000000000081527f040000000000000000000000000000000000000000000000000000000000000084106004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634c63e5629150602401600060405180830381600087803b15801561083757600080fd5b505af115801561084b573d6000803e3d6000fd5b505060085461039c925073ffffffffffffffffffffffffffffffffffffffff169050637aefca2485858561087f8180611067565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526004810194909452602484019290925260448301526064820152608401610355565b737109709ecfa91a80626ff3989d68f67f5b1dd12d634c63e5627f04000000000000000000000000000000000000000000000000000000000000008310801561093557507f040000000000000000000000000000000000000000000000000000000000000084105b6040518263ffffffff1660e01b8152600401610955911515815260200190565b600060405180830381600087803b15801561096f57600080fd5b505af1158015610983573d6000803e3d6000fd5b50506040517f4c63e5620000000000000000000000000000000000000000000000000000000081524285116004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634c63e5629150602401600060405180830381600087803b1580156109ee57600080fd5b505af1158015610a02573d6000803e3d6000fd5b50506040517f4c63e5620000000000000000000000000000000000000000000000000000000081528484116004820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634c63e5629150602401600060405180830381600087803b158015610a6d57600080fd5b505af1158015610a81573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634c63e5629150610aad90506002866110d5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815290156004820152602401600060405180830381600087803b158015610afd57600080fd5b505af1158015610b11573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d9250634c63e562915060029050610b3e8486611067565b610b4891906110d5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815290156004820152602401600060405180830381600087803b158015610b9857600080fd5b505af1158015610bac573d6000803e3d6000fd5b505060085461039c925073ffffffffffffffffffffffffffffffffffffffff169050637aefca248585856002610be28284611067565b610bec91906110e9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526004810194909452602484019290925260448301526064820152608401602060405180830381865afa158015610c52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c769190610fa2565b610c816002866110e9565b808214610de9577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f50604051610d0d9060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e60408201527f745d000000000000000000000000000000000000000000000000000000000000606082015260800190565b60405180910390a160408051818152600a818301527f202045787065637465640000000000000000000000000000000000000000000060608201526020810183905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a160408051818152600a818301527f2020202041637475616c0000000000000000000000000000000000000000000060608201526020810184905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a1610de9610ded565b5050565b737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610f3b5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c656400000000000000000000000000000000000000000000000000009282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc490608001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610ebc9291602001610ff6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610ef491611032565b6000604051808303816000865af19150503d8060008114610f31576040519150601f19603f3d011682016040523d82523d6000602084013e610f36565b606091505b505050505b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b610362806110fe83390190565b600080600060608486031215610f8b57600080fd5b505081359360208301359350604090920135919050565b600060208284031215610fb457600080fd5b5051919050565b6000815160005b81811015610fdc5760208185018101518683015201610fc2565b81811115610feb576000828601525b509290920192915050565b7fffffffff0000000000000000000000000000000000000000000000000000000083168152600061102a6004830184610fbb565b949350505050565b600061103e8284610fbb565b9392505050565b60006020828403121561105757600080fd5b8151801515811461103e57600080fd5b600082198211156110a1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826110e4576110e46110a6565b500690565b6000826110f8576110f86110a6565b50049056fe608060405234801561001057600080fd5b50610342806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca24146100a5575b600080fd5b610090610049366004610218565b7fffffffff00000000000000000000000000000000000000000000000000000000167f7aefca24000000000000000000000000000000000000000000000000000000001490565b60405190151581526020015b60405180910390f35b6100b86100b3366004610261565b6100c6565b60405190815260200161009c565b60008382116100d757506000610105565b8282106100e5575083610105565b6101026100f28584610293565b866100fd8787610293565b61010d565b90505b949350505050565b600080600061011c86866101a9565b91509150600061012b856101e6565b9050600061013886610202565b90506000806000805b861561017f5761015187876101a9565b90945092508184019182109083010161016a87866101a9565b98810198818a10810198509094509250610141565b610198828261018e8d8c6102d1565b8201929183100190565b509c9b505050505050505050505050565b6000807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098385029250828110838203039150509250929050565b6000600182116101f557600080fd5b5060008190030460010190565b60008161020e57600080fd5b5060008190030690565b60006020828403121561022a57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461025a57600080fd5b9392505050565b6000806000806080858703121561027757600080fd5b5050823594602084013594506040840135936060013592509050565b6000828210156102cc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b600082610307577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea264697066735822122032dc62af3ab80cb57adfbe3958ec30de67c72b619f98828a66a378045dfff2c664736f6c634300080c0033a264697066735822122041fcc19caf1a356dd0542daff6bb0297a488553fa54e6bc4d3594b1d48d92d2564736f6c634300080c0033";

type LinearStrategyTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LinearStrategyTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LinearStrategyTest__factory extends ContractFactory {
  constructor(...args: LinearStrategyTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LinearStrategyTest> {
    return super.deploy(overrides || {}) as Promise<LinearStrategyTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LinearStrategyTest {
    return super.attach(address) as LinearStrategyTest;
  }
  override connect(signer: Signer): LinearStrategyTest__factory {
    return super.connect(signer) as LinearStrategyTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LinearStrategyTestInterface {
    return new utils.Interface(_abi) as LinearStrategyTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LinearStrategyTest {
    return new Contract(address, _abi, signerOrProvider) as LinearStrategyTest;
  }
}