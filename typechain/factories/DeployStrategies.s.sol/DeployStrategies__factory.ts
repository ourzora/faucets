/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeployStrategies,
  DeployStrategiesInterface,
} from "../../DeployStrategies.s.sol/DeployStrategies";

const _abi = [
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
    name: "run",
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
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b5061188b8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461008b578063f8ccbf4714610095575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100936100b2565b005b6000546100a29060ff1681565b6040519015158152602001610082565b6040517fc1978d1f00000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f434841494e5f49440000000000000000000000000000000000000000000000006044820152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f906064016020604051808303816000875af115801561014d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101719190610a87565b90506101b26040518060400160405280600881526020017f434841494e5f494400000000000000000000000000000000000000000000000081525082610694565b6040517fc1978d1f00000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f505249564154455f4b45590000000000000000000000000000000000000000006044820152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f906064016020604051808303816000875af115801561024d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102719190610a87565b6040517fce817d4700000000000000000000000000000000000000000000000000000000815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156102da57600080fd5b505af11580156102ee573d6000803e3d6000fd5b50505050600060405161030090610a60565b604051809103906000f08015801561031c573d6000803e3d6000fd5b509050600060405161032d90610a6d565b604051809103906000f080158015610349573d6000803e3d6000fd5b509050600060405161035a90610a7a565b604051809103906000f080158015610376573d6000803e3d6000fd5b5090507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103ea57600080fd5b505af11580156103fe573d6000803e3d6000fd5b50505050600061040d86610729565b60405160200161041d9190610ad0565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f897e0a970000000000000000000000000000000000000000000000000000000082529150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063897e0a979061049b908490600401610b86565b600060405180830381600087803b1580156104b557600080fd5b505af11580156104c9573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d925063619d897f91508390506104f487610863565b6040516020016105049190610bb0565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610530929190610bf5565b600060405180830381600087803b15801561054a57600080fd5b505af115801561055e573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d925063619d897f915083905061058986610863565b6040516020016105999190610c23565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016105c5929190610bf5565b600060405180830381600087803b1580156105df57600080fd5b505af11580156105f3573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d925063619d897f915083905061061e85610863565b60405160200161062e9190610c68565b6040516020818303038152906040526040518363ffffffff1660e01b815260040161065a929190610bf5565b600060405180830381600087803b15801561067457600080fd5b505af1158015610688573d6000803e3d6000fd5b50505050505050505050565b61072582826040516024016106aa929190610cad565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f9710a9d000000000000000000000000000000000000000000000000000000000179052610a09565b5050565b60608161076957505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610793578061077d81610cfe565b915061078c9050600a83610d66565b915061076d565b60008167ffffffffffffffff8111156107ae576107ae610d7a565b6040519080825280601f01601f1916602001820160405280156107d8576020820181803683370190505b5090505b841561085b576107ed600183610da9565b91506107fa600a86610dc0565b610805906030610dd4565b60f81b81838151811061081a5761081a610dec565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610854600a86610d66565b94506107dc565b949350505050565b60408051602880825260608281019093526000919060208201818036833701905050905060005b60148110156109e05760006108a0826013610da9565b6108ab906008610e1b565b6108b6906002610f7a565b6108d69073ffffffffffffffffffffffffffffffffffffffff8716610d66565b60f81b9050600060108260f81c6108ed9190610f8d565b60f81b905060008160f81c60106109049190610faf565b8360f81c6109129190610fd0565b60f81b905061092082610a2a565b8561092c866002610e1b565b8151811061093c5761093c610dec565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061097481610a2a565b85610980866002610e1b565b61098b906001610dd4565b8151811061099b5761099b610dec565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535050505080806109d890610cfe565b91505061088a565b50806040516020016109f29190610ff3565b604051602081830303815290604052915050919050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000600a60f883901c1015610a5157610a4860f883901c6030611038565b60f81b92915050565b610a4860f883901c6057611038565b6103628061105e83390190565b6101b4806113c083390190565b6102e28061157483390190565b600060208284031215610a9957600080fd5b5051919050565b60005b83811015610abb578181015183820152602001610aa3565b83811115610aca576000848401525b50505050565b7f6465706c6f79732f7374726174732d0000000000000000000000000000000000815260008251610b0881600f850160208701610aa0565b7f2e74787400000000000000000000000000000000000000000000000000000000600f939091019283015250601301919050565b60008151808452610b54816020860160208601610aa0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b604081526000610b996040830184610b3c565b828103602093840152600081529190910192915050565b7f4c696e65617253747261746567793a2000000000000000000000000000000000815260008251610be8816010850160208701610aa0565b9190910160100192915050565b604081526000610c086040830185610b3c565b8281036020840152610c1a8185610b3c565b95945050505050565b7f436c69666653747261746567793a200000000000000000000000000000000000815260008251610c5b81600f850160208701610aa0565b91909101600f0192915050565b7f4461696c795374657053747261746567793a2000000000000000000000000000815260008251610ca0816013850160208701610aa0565b9190910160130192915050565b604081526000610cc06040830185610b3c565b90508260208301529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d3057610d30610ccf565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082610d7557610d75610d37565b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082821015610dbb57610dbb610ccf565b500390565b600082610dcf57610dcf610d37565b500690565b60008219821115610de757610de7610ccf565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e5357610e53610ccf565b500290565b600181815b80851115610eb157817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610e9757610e97610ccf565b80851615610ea457918102915b93841c9390800290610e5d565b509250929050565b600082610ec857506001610f74565b81610ed557506000610f74565b8160018114610eeb5760028114610ef557610f11565b6001915050610f74565b60ff841115610f0657610f06610ccf565b50506001821b610f74565b5060208310610133831016604e8410600b8410161715610f34575081810a610f74565b610f3e8383610e58565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610f7057610f70610ccf565b0290505b92915050565b6000610f868383610eb9565b9392505050565b600060ff831680610fa057610fa0610d37565b8060ff84160491505092915050565b600060ff821660ff84168160ff0481118215151615610f7057610f70610ccf565b600060ff821660ff841680821015610fea57610fea610ccf565b90039392505050565b7f307800000000000000000000000000000000000000000000000000000000000081526000825161102b816002850160208701610aa0565b9190910160020192915050565b600060ff821660ff84168060ff0382111561105557611055610ccf565b01939250505056fe608060405234801561001057600080fd5b50610342806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca24146100a5575b600080fd5b610090610049366004610218565b7fffffffff00000000000000000000000000000000000000000000000000000000167f7aefca24000000000000000000000000000000000000000000000000000000001490565b60405190151581526020015b60405180910390f35b6100b86100b3366004610261565b6100c6565b60405190815260200161009c565b60008382116100d757506000610105565b8282106100e5575083610105565b6101026100f28584610293565b866100fd8787610293565b61010d565b90505b949350505050565b600080600061011c86866101a9565b91509150600061012b856101e6565b9050600061013886610202565b90506000806000805b861561017f5761015187876101a9565b90945092508184019182109083010161016a87866101a9565b98810198818a10810198509094509250610141565b610198828261018e8d8c6102d1565b8201929183100190565b509c9b505050505050505050505050565b6000807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098385029250828110838203039150509250929050565b6000600182116101f557600080fd5b5060008190030460010190565b60008161020e57600080fd5b5060008190030690565b60006020828403121561022a57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461025a57600080fd5b9392505050565b6000806000806080858703121561027757600080fd5b5050823594602084013594506040840135936060013592509050565b6000828210156102cc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b600082610307577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea264697066735822122032dc62af3ab80cb57adfbe3958ec30de67c72b619f98828a66a378045dfff2c664736f6c634300080c0033608060405234801561001057600080fd5b50610194806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca24146100a5575b600080fd5b6100906100493660046100e3565b7fffffffff00000000000000000000000000000000000000000000000000000000167f7aefca24000000000000000000000000000000000000000000000000000000001490565b60405190151581526020015b60405180910390f35b6100b86100b336600461012c565b6100c6565b60405190815260200161009c565b6000828210156100d8575060006100db565b50835b949350505050565b6000602082840312156100f557600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461012557600080fd5b9392505050565b6000806000806080858703121561014257600080fd5b505082359460208401359450604084013593606001359250905056fea264697066735822122082acdb31dd7b40168e30061f40bd5b1c9b9ee11432cb3bec62cb2c20d392bced64736f6c634300080c0033608060405234801561001057600080fd5b506102c2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca24146100a5575b600080fd5b610090610049366004610153565b7fffffffff00000000000000000000000000000000000000000000000000000000167f7aefca24000000000000000000000000000000000000000000000000000000001490565b60405190151581526020015b60405180910390f35b6100b86100b336600461019c565b6100c6565b60405190815260200161009c565b6000838210156100d85750600061014b565b8282106100e657508361014b565b6000620151806100f686866101fd565b6101009190610214565b90508061011157600091505061014b565b600061011d8288610214565b905060006201518061012f88876101fd565b6101399190610214565b9050610145828261024f565b93505050505b949350505050565b60006020828403121561016557600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461019557600080fd5b9392505050565b600080600080608085870312156101b257600080fd5b5050823594602084013594506040840135936060013592509050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561020f5761020f6101ce565b500390565b60008261024a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610287576102876101ce565b50029056fea26469706673582212207562fb133cddb18e374aa3f1cabaa5794e794de9568962439bb9a01bea46b2b864736f6c634300080c0033a26469706673582212206d05fe5bae6ec26dff26aa24b95dfda9c0585bbf10cdba8934993d8d810a1a1e64736f6c634300080c0033";

type DeployStrategiesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DeployStrategiesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DeployStrategies__factory extends ContractFactory {
  constructor(...args: DeployStrategiesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DeployStrategies> {
    return super.deploy(overrides || {}) as Promise<DeployStrategies>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DeployStrategies {
    return super.attach(address) as DeployStrategies;
  }
  override connect(signer: Signer): DeployStrategies__factory {
    return super.connect(signer) as DeployStrategies__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployStrategiesInterface {
    return new utils.Interface(_abi) as DeployStrategiesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DeployStrategies {
    return new Contract(address, _abi, signerOrProvider) as DeployStrategies;
  }
}
