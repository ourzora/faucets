/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeployStrategies,
  DeployStrategiesInterface,
} from "../../../../src/scripts/DeployStrategies.s.sol/DeployStrategies";

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
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b5061141a8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633a76846314610046578063c04062261461007e578063f8ccbf4714610088575b600080fd5b610061737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020015b60405180910390f35b6100866100a5565b005b6000546100959060ff1681565b6040519015158152602001610075565b60405163c1978d1f60e01b815260206004820152600860248201526710d210525397d25160c21b6044820152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f906064016020604051808303816000875af1158015610112573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013691906108f2565b90506101626040518060400160405280600881526020016710d210525397d25160c21b815250826105bc565b60405163c1978d1f60e01b815260206004820152600b60248201526a505249564154455f4b455960a81b6044820152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f906064016020604051808303816000875af11580156101d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f691906108f2565b60405163ce817d4760e01b815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b15801561024657600080fd5b505af115801561025a573d6000803e3d6000fd5b50505050600060405161026c906108cb565b604051809103906000f080158015610288573d6000803e3d6000fd5b5090506000604051610299906108d8565b604051809103906000f0801580156102b5573d6000803e3d6000fd5b50905060006040516102c6906108e5565b604051809103906000f0801580156102e2573d6000803e3d6000fd5b5090507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c60601b60601c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561034957600080fd5b505af115801561035d573d6000803e3d6000fd5b50505050600061036c86610605565b60405160200161037c919061093b565b60408051601f198184030181529082905263897e0a9760e01b82529150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063897e0a97906103c39084906004016109ac565b600060405180830381600087803b1580156103dd57600080fd5b505af11580156103f1573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d925063619d897f915083905061041c8761070b565b60405160200161042c91906109d6565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610458929190610a0e565b600060405180830381600087803b15801561047257600080fd5b505af1158015610486573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d925063619d897f91508390506104b18661070b565b6040516020016104c19190610a3c565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016104ed929190610a0e565b600060405180830381600087803b15801561050757600080fd5b505af115801561051b573d6000803e3d6000fd5b50737109709ecfa91a80626ff3989d68f67f5b1dd12d925063619d897f91508390506105468561070b565b6040516020016105569190610a73565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610582929190610a0e565b600060405180830381600087803b15801561059c57600080fd5b505af11580156105b0573d6000803e3d6000fd5b50505050505050505050565b61060182826040516024016105d2929190610aae565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610874565b5050565b6060816106295750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610653578061063d81610ae6565b915061064c9050600a83610b17565b915061062d565b60008167ffffffffffffffff81111561066e5761066e610b2b565b6040519080825280601f01601f191660200182016040528015610698576020820181803683370190505b5090505b8415610703576106ad600183610b41565b91506106ba600a86610b58565b6106c5906030610b6c565b60f81b8183815181106106da576106da610b84565b60200101906001600160f81b031916908160001a9053506106fc600a86610b17565b945061069c565b949350505050565b60408051602880825260608281019093526000919060208201818036833701905050905060005b601481101561084b576000610748826013610b41565b610753906008610b9a565b61075e906002610c9f565b610771906001600160a01b038716610b17565b60f81b9050600060108260f81c6107889190610cb2565b60f81b905060008160f81c601061079f9190610cd4565b8360f81c6107ad9190610cf5565b60f81b90506107bb82610895565b856107c7866002610b9a565b815181106107d7576107d7610b84565b60200101906001600160f81b031916908160001a9053506107f781610895565b85610803866002610b9a565b61080e906001610b6c565b8151811061081e5761081e610b84565b60200101906001600160f81b031916908160001a905350505050808061084390610ae6565b915050610732565b508060405160200161085d9190610d18565b604051602081830303815290604052915050919050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000600a60f883901c10156108bc576108b360f883901c6030610d42565b60f81b92915050565b6108b360f883901c6057610d42565b6102c980610d6883390190565b61016b8061103183390190565b6102498061119c83390190565b60006020828403121561090457600080fd5b5051919050565b60005b8381101561092657818101518382015260200161090e565b83811115610935576000848401525b50505050565b6e6465706c6f79732f7374726174732d60881b81526000825161096581600f85016020870161090b565b630b9d1e1d60e21b600f939091019283015250601301919050565b6000815180845261099881602086016020860161090b565b601f01601f19169290920160200192915050565b6040815260006109bf6040830184610980565b828103602093840152600081529190910192915050565b6f02634b732b0b929ba3930ba32b3bc9d160851b815260008251610a0181601085016020870161090b565b9190910160100192915050565b604081526000610a216040830185610980565b8281036020840152610a338185610980565b95945050505050565b6e021b634b33329ba3930ba32b3bc9d1608d1b815260008251610a6681600f85016020870161090b565b91909101600f0192915050565b7202230b4b63ca9ba32b829ba3930ba32b3bc9d1606d1b815260008251610aa181601385016020870161090b565b9190910160130192915050565b604081526000610ac16040830185610980565b90508260208301529392505050565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610afa57610afa610ad0565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082610b2657610b26610b01565b500490565b634e487b7160e01b600052604160045260246000fd5b600082821015610b5357610b53610ad0565b500390565b600082610b6757610b67610b01565b500690565b60008219821115610b7f57610b7f610ad0565b500190565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615610bb457610bb4610ad0565b500290565b600181815b80851115610bf4578160001904821115610bda57610bda610ad0565b80851615610be757918102915b93841c9390800290610bbe565b509250929050565b600082610c0b57506001610c99565b81610c1857506000610c99565b8160018114610c2e5760028114610c3857610c54565b6001915050610c99565b60ff841115610c4957610c49610ad0565b50506001821b610c99565b5060208310610133831016604e8410600b8410161715610c77575081810a610c99565b610c818383610bb9565b8060001904821115610c9557610c95610ad0565b0290505b92915050565b6000610cab8383610bfc565b9392505050565b600060ff831680610cc557610cc5610b01565b8060ff84160491505092915050565b600060ff821660ff84168160ff0481118215151615610c9557610c95610ad0565b600060ff821660ff841680821015610d0f57610d0f610ad0565b90039392505050565b61060f60f31b815260008251610d3581600285016020870161090b565b9190910160020192915050565b600060ff821660ff84168060ff03821115610d5f57610d5f610ad0565b01939250505056fe608060405234801561001057600080fd5b506102a9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca2414610074575b600080fd5b61005f6100493660046101c9565b6001600160e01b031916631ebbf28960e21b1490565b60405190151581526020015b60405180910390f35b6100876100823660046101fa565b610095565b60405190815260200161006b565b60008382116100a6575060006100d4565b8282106100b45750836100d4565b6100d16100c1858461022c565b866100cc878761022c565b6100dc565b90505b949350505050565b60008060006100eb8686610178565b9150915060006100fa85610197565b90506000610107866101b3565b90506000806000805b861561014e576101208787610178565b9094509250818401918210908301016101398786610178565b98810198818a10810198509094509250610110565b610167828261015d8d8c610251565b8201929183100190565b509c9b505050505050505050505050565b6000806000198385098385029250828110838203039150509250929050565b6000600182116101a657600080fd5b5060008190030460010190565b6000816101bf57600080fd5b5060008190030690565b6000602082840312156101db57600080fd5b81356001600160e01b0319811681146101f357600080fd5b9392505050565b6000806000806080858703121561021057600080fd5b5050823594602084013594506040840135936060013592509050565b60008282101561024c57634e487b7160e01b600052601160045260246000fd5b500390565b60008261026e57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212200885b13b4cc7f71c73be092021b48e0a831c4f252468d317b77ecffe00738e6564736f6c634300080c0033608060405234801561001057600080fd5b5061014b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca2414610074575b600080fd5b61005f6100493660046100b2565b6001600160e01b031916631ebbf28960e21b1490565b60405190151581526020015b60405180910390f35b6100876100823660046100e3565b610095565b60405190815260200161006b565b6000828210156100a7575060006100aa565b50835b949350505050565b6000602082840312156100c457600080fd5b81356001600160e01b0319811681146100dc57600080fd5b9392505050565b600080600080608085870312156100f957600080fd5b505082359460208401359450604084013593606001359250905056fea2646970667358221220ca92b808cad3f31387c14bfaace6147e2ff66c1d1e5beb70b5467d423550280164736f6c634300080c0033608060405234801561001057600080fd5b50610229806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b5780637aefca2414610074575b600080fd5b61005f610049366004610122565b6001600160e01b031916631ebbf28960e21b1490565b60405190151581526020015b60405180910390f35b610087610082366004610153565b610095565b60405190815260200161006b565b6000838210156100a75750600061011a565b8282106100b557508361011a565b6000620151806100c5868661019b565b6100cf91906101b2565b9050806100e057600091505061011a565b60006100ec82886101b2565b90506000620151806100fe888761019b565b61010891906101b2565b905061011482826101d4565b93505050505b949350505050565b60006020828403121561013457600080fd5b81356001600160e01b03198116811461014c57600080fd5b9392505050565b6000806000806080858703121561016957600080fd5b5050823594602084013594506040840135936060013592509050565b634e487b7160e01b600052601160045260246000fd5b6000828210156101ad576101ad610185565b500390565b6000826101cf57634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156101ee576101ee610185565b50029056fea2646970667358221220800827a6a742e34b4087bebbe63f5e7572634b69680683c5c81c23cc1ece203b64736f6c634300080c0033a2646970667358221220de906b918133de51ffebe26c10543af08a4885a8f43369109e31c3058b517df064736f6c634300080c0033";

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