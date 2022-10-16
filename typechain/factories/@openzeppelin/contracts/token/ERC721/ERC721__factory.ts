/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200149d3803806200149d8339810160408190526200003491620001db565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b828054620000769062000245565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b61120b80620002926000396000f3fe608060405234801561001057600080fd5b50600436106100bf5760003560e01c80636352211e1161007c5780636352211e1461016757806370a082311461017a57806395d89b411461019b578063a22cb465146101a3578063b88d4fde146101b6578063c87b56dd146101c9578063e985e9c5146101dc57600080fd5b806301ffc9a7146100c457806306fdde03146100ec578063081812fc14610101578063095ea7b31461012c57806323b872dd1461014157806342842e0e14610154575b600080fd5b6100d76100d2366004610d1b565b6101ef565b60405190151581526020015b60405180910390f35b6100f4610241565b6040516100e39190610d90565b61011461010f366004610da3565b6102d3565b6040516001600160a01b0390911681526020016100e3565b61013f61013a366004610dd8565b610360565b005b61013f61014f366004610e02565b610471565b61013f610162366004610e02565b6104a2565b610114610175366004610da3565b6104bd565b61018d610188366004610e3e565b610534565b6040519081526020016100e3565b6100f46105bb565b61013f6101b1366004610e59565b6105ca565b61013f6101c4366004610eab565b6105d9565b6100f46101d7366004610da3565b610611565b6100d76101ea366004610f87565b6106e9565b60006001600160e01b031982166380ac58cd60e01b148061022057506001600160e01b03198216635b5e139f60e01b145b8061023b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461025090610fba565b80601f016020809104026020016040519081016040528092919081815260200182805461027c90610fba565b80156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b5050505050905090565b60006102de82610717565b6103445760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061036b826104bd565b9050806001600160a01b0316836001600160a01b031614156103d95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161033b565b336001600160a01b03821614806103f557506103f581336106e9565b6104625760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606482015260840161033b565b61046c8383610734565b505050565b61047b33826107a2565b6104975760405162461bcd60e51b815260040161033b90610ff5565b61046c83838361086c565b61046c838383604051806020016040528060008152506105d9565b6000818152600260205260408120546001600160a01b03168061023b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161033b565b60006001600160a01b03821661059f5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161033b565b506001600160a01b031660009081526003602052604090205490565b60606001805461025090610fba565b6105d5338383610a08565b5050565b6105e333836107a2565b6105ff5760405162461bcd60e51b815260040161033b90610ff5565b61060b84848484610ad3565b50505050565b606061061c82610717565b6106805760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161033b565b600061069760408051602081019091526000815290565b905060008151116106b757604051806020016040528060008152506106e2565b806106c184610b06565b6040516020016106d2929190611046565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610769826104bd565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006107ad82610717565b61080e5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161033b565b6000610819836104bd565b9050806001600160a01b0316846001600160a01b031614806108545750836001600160a01b0316610849846102d3565b6001600160a01b0316145b80610864575061086481856106e9565b949350505050565b826001600160a01b031661087f826104bd565b6001600160a01b0316146108e35760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161033b565b6001600160a01b0382166109455760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161033b565b610950600082610734565b6001600160a01b038316600090815260036020526040812080546001929061097990849061108b565b90915550506001600160a01b03821660009081526003602052604081208054600192906109a79084906110a2565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610a665760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161033b565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610ade84848461086c565b610aea84848484610c04565b61060b5760405162461bcd60e51b815260040161033b906110ba565b606081610b2a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b545780610b3e8161110c565b9150610b4d9050600a8361113d565b9150610b2e565b60008167ffffffffffffffff811115610b6f57610b6f610e95565b6040519080825280601f01601f191660200182016040528015610b99576020820181803683370190505b5090505b841561086457610bae60018361108b565b9150610bbb600a86611151565b610bc69060306110a2565b60f81b818381518110610bdb57610bdb611165565b60200101906001600160f81b031916908160001a905350610bfd600a8661113d565b9450610b9d565b60006001600160a01b0384163b15610cf757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c4890339089908890889060040161117b565b6020604051808303816000875af1925050508015610c83575060408051601f3d908101601f19168201909252610c80918101906111b8565b60015b610cdd573d808015610cb1576040519150601f19603f3d011682016040523d82523d6000602084013e610cb6565b606091505b508051610cd55760405162461bcd60e51b815260040161033b906110ba565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610864565b506001949350505050565b6001600160e01b031981168114610d1857600080fd5b50565b600060208284031215610d2d57600080fd5b81356106e281610d02565b60005b83811015610d53578181015183820152602001610d3b565b8381111561060b5750506000910152565b60008151808452610d7c816020860160208601610d38565b601f01601f19169290920160200192915050565b6020815260006106e26020830184610d64565b600060208284031215610db557600080fd5b5035919050565b80356001600160a01b0381168114610dd357600080fd5b919050565b60008060408385031215610deb57600080fd5b610df483610dbc565b946020939093013593505050565b600080600060608486031215610e1757600080fd5b610e2084610dbc565b9250610e2e60208501610dbc565b9150604084013590509250925092565b600060208284031215610e5057600080fd5b6106e282610dbc565b60008060408385031215610e6c57600080fd5b610e7583610dbc565b915060208301358015158114610e8a57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610ec157600080fd5b610eca85610dbc565b9350610ed860208601610dbc565b925060408501359150606085013567ffffffffffffffff80821115610efc57600080fd5b818701915087601f830112610f1057600080fd5b813581811115610f2257610f22610e95565b604051601f8201601f19908116603f01168101908382118183101715610f4a57610f4a610e95565b816040528281528a6020848701011115610f6357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610f9a57600080fd5b610fa383610dbc565b9150610fb160208401610dbc565b90509250929050565b600181811c90821680610fce57607f821691505b60208210811415610fef57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008351611058818460208801610d38565b83519083019061106c818360208801610d38565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561109d5761109d611075565b500390565b600082198211156110b5576110b5611075565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060001982141561112057611120611075565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261114c5761114c611127565b500490565b60008261116057611160611127565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111ae90830184610d64565b9695505050505050565b6000602082840312156111ca57600080fd5b81516106e281610d0256fea2646970667358221220c62c652559433b87ec42af003fa3e37acaad04ca1c50130760b2055705f634a764736f6c634300080c0033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}