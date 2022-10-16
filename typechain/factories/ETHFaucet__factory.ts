/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ETHFaucet, ETHFaucetInterface } from "../ETHFaucet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IFaucetMetadataRenderer",
        name: "_metadataRenderer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalClaimableAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    name: "ClaimableOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "FaucetDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
    ],
    name: "MintInvalidStrategy",
    type: "error",
  },
  {
    inputs: [],
    name: "MintNoDuration",
    type: "error",
  },
  {
    inputs: [],
    name: "MintNoValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
    ],
    name: "MintValueMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OnlyOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
    ],
    name: "OnlySupplier",
    type: "error",
  },
  {
    inputs: [],
    name: "RescindUnrescindable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "UnexpectedMsgValue",
    type: "error",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "claimableAmountForFaucet",
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
    inputs: [],
    name: "faucetTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getFaucetDetailsForToken",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimedAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "faucetStart",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "faucetExpiry",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "faucetStrategy",
            type: "address",
          },
          {
            internalType: "address",
            name: "supplier",
            type: "address",
          },
          {
            internalType: "bool",
            name: "canBeRescinded",
            type: "bool",
          },
        ],
        internalType: "struct IFaucet.FaucetDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "initialize",
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
    name: "metadataRenderer",
    outputs: [
      {
        internalType: "contract IFaucetMetadataRenderer",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_faucetDuration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_faucetStrategy",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_canBeRescinded",
        type: "bool",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
        name: "_remainingTokenDest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
    ],
    name: "rescind",
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
        name: "_tokenId",
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
    inputs: [],
    name: "totalSupply",
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
  "0x60a06040523480156200001157600080fd5b5060405162002d0f38038062002d0f833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612c746200009b60003960008181610341015261168d0152612c746000f3fe6080604052600436106101755760003560e01c8063635f92ad116100cb578063a22cb4651161007f578063c38e4b6e11610059578063c38e4b6e1461040c578063c87b56dd14610439578063e985e9c51461045957600080fd5b8063a22cb465146103ac578063aad3ec96146103cc578063b88d4fde146103ec57600080fd5b806370a08231116100b057806370a082311461036357806395d89b41146103835780639d4993631461039857600080fd5b8063635f92ad1461031c578063703199701461032f57600080fd5b806323b872dd1161012d5780634cd88b76116101075780634cd88b76146102bc57806358a4c99f146102dc5780636352211e146102fc57600080fd5b806323b872dd1461025c57806332f7a8221461027c57806342842e0e1461029c57600080fd5b8063081812fc1161015e578063081812fc146101d1578063095ea7b31461021657806318160ddd1461023857600080fd5b806301ffc9a71461017a57806306fdde03146101af575b600080fd5b34801561018657600080fd5b5061019a6101953660046124ba565b6104af565b60405190151581526020015b60405180910390f35b3480156101bb57600080fd5b506101c4610594565b6040516101a6919061254d565b3480156101dd57600080fd5b506101f16101ec366004612560565b610626565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a6565b34801561022257600080fd5b506102366102313660046125a2565b610705565b005b34801561024457600080fd5b5061024e60975481565b6040519081526020016101a6565b34801561026857600080fd5b506102366102773660046125cc565b610892565b34801561028857600080fd5b506102366102973660046125a2565b610933565b3480156102a857600080fd5b506102366102b73660046125cc565b610b15565b3480156102c857600080fd5b506102366102d736600461272a565b610b30565b3480156102e857600080fd5b5061024e6102f736600461278e565b610c57565b34801561030857600080fd5b506101f1610317366004612560565b610ddc565b61024e61032a3660046127be565b610e8e565b34801561033b57600080fd5b506101f17f000000000000000000000000000000000000000000000000000000000000000081565b34801561036f57600080fd5b5061024e61037e366004612819565b61119a565b34801561038f57600080fd5b506101c4611268565b3480156103a457600080fd5b5060006101f1565b3480156103b857600080fd5b506102366103c7366004612834565b611277565b3480156103d857600080fd5b506102366103e73660046125a2565b611286565b3480156103f857600080fd5b5061023661040736600461286b565b6113cf565b34801561041857600080fd5b5061042c610427366004612560565b611471565b6040516101a691906128e7565b34801561044557600080fd5b506101c4610454366004612560565b611576565b34801561046557600080fd5b5061019a610474366004612952565b73ffffffffffffffffffffffffffffffffffffffff9182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061054257507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061058e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060606580546105a390612985565b80601f01602080910402602001604051908101604052809291908181526020018280546105cf90612985565b801561061c5780601f106105f15761010080835404028352916020019161061c565b820191906000526020600020905b8154815290600101906020018083116105ff57829003601f168201915b5050505050905090565b60008181526067602052604081205473ffffffffffffffffffffffffffffffffffffffff166106dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526069602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061071082610ddc565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016106d3565b3373ffffffffffffffffffffffffffffffffffffffff821614806107f757506107f78133610474565b610883576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016106d3565b61088d8383611730565b505050565b61089c33826117d0565b610928576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016106d3565b61088d838383611940565b60008181526099602052604090206005015473ffffffffffffffffffffffffffffffffffffffff1633146109c557600081815260996020526040908190206005015490517f0308308800000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911660248201526044016106d3565b60008181526099602052604090206005015474010000000000000000000000000000000000000000900460ff16610a28576040517f6a37e42600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600081815260996020908152604091829020825160e0810184528154808252600183015493820184905260028301549482019490945260038201546060820152600482015473ffffffffffffffffffffffffffffffffffffffff908116608083015260059092015480831660a083015274010000000000000000000000000000000000000000900460ff16151560c08201529290851691610ac891612a08565b604051600081818185875af1925050503d8060008114610b04576040519150601f19603f3d011682016040523d82523d6000602084013e610b09565b606091505b50505061088d82611ba7565b61088d838383604051806020016040528060008152506113cf565b600054610100900460ff16610b4b5760005460ff1615610b4f565b303b155b610bdb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016106d3565b600054610100900460ff16158015610c1a57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b610c248383611c41565b801561088d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050565b6000828152609960209081526040808320815160e0810183528154808252600183015494820194909452600282015481840181905260038301546060830181905260048085015473ffffffffffffffffffffffffffffffffffffffff9081166080860181905260059096015490811660a086015274010000000000000000000000000000000000000000900460ff16151560c085015294517f7aefca240000000000000000000000000000000000000000000000000000000081529485019590955260248401526044830193909352606482018590528391637aefca2490608401602060405180830381865afa158015610d55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d799190612a1f565b8251909150811115610dc45781516040517f6b3e66260000000000000000000000000000000000000000000000000000000081526106d3918391600401918252602082015260400190565b6020820151610dd39082612a08565b95945050505050565b60008181526067602052604081205473ffffffffffffffffffffffffffffffffffffffff168061058e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016106d3565b6000843414610ed2576040517f88434475000000000000000000000000000000000000000000000000000000008152346004820152602481018690526044016106d3565b84610f09576040517fd1a9d21400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83610f40576040517f59def3cc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f7aefca2400000000000000000000000000000000000000000000000000000000600482015273ffffffffffffffffffffffffffffffffffffffff8416906301ffc9a790602401602060405180830381865afa158015610fca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fee9190612a38565b61103c576040517fe0a8828900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024016106d3565b6098546110498782611ce2565b6040518060e001604052808781526020016000815260200142815260200186426110739190612a55565b815273ffffffffffffffffffffffffffffffffffffffff808716602080840191909152336040808501919091528715156060948501526000868152609983528181208651815592860151600184015590850151600283015592840151600382015560808401516004820180549184167fffffffffffffffffffffffff000000000000000000000000000000000000000090921691909117905560a08401516005909101805460c090950151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff000000000000000000000000000000000000000000909516919092161792909217909155609780549161117583612a6d565b90915550506098805490600061118a83612a6d565b9091555090979650505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821661123f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016106d3565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526068602052604090205490565b6060606680546105a390612985565b611282338383611ea4565b5050565b61128f81610ddc565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461131d57336112cb82610ddc565b6040517fa3ee740f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283166004820152911660248201526044016106d3565b60006113298242610c57565b90508273ffffffffffffffffffffffffffffffffffffffff168160405160006040518083038185875af1925050503d8060008114611383576040519150601f19603f3d011682016040523d82523d6000602084013e611388565b606091505b5050506000828152609960205260408120600181018054919284926113ae908490612a55565b90915550508054600182015414156113c9576113c983611ba7565b50505050565b6113d933836117d0565b611465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016106d3565b6113c984848484611fd2565b6114df6040518060e0016040528060008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b50600090815260996020908152604091829020825160e0810184528154815260018201549281019290925260028101549282019290925260038201546060820152600482015473ffffffffffffffffffffffffffffffffffffffff908116608083015260059092015491821660a08201527401000000000000000000000000000000000000000090910460ff16151560c082015290565b60008181526067602052604090205460609073ffffffffffffffffffffffffffffffffffffffff166115d4576040517fa913267f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082815260996020908152604091829020825160e081018452815481526001820154928101929092526002810154828401526003810154606083015260048082015473ffffffffffffffffffffffffffffffffffffffff908116608085015260059092015480831660a085015274010000000000000000000000000000000000000000900460ff16151560c084015292517f7bf966e600000000000000000000000000000000000000000000000000000000815291927f000000000000000000000000000000000000000000000000000000000000000090911691637bf966e6916116c69130918891879101612aa6565b600060405180830381865afa1580156116e3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526117299190810190612b35565b9392505050565b600081815260696020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819061178a82610ddc565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526067602052604081205473ffffffffffffffffffffffffffffffffffffffff16611881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016106d3565b600061188c83610ddc565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806118fb57508373ffffffffffffffffffffffffffffffffffffffff166118e384610626565b73ffffffffffffffffffffffffffffffffffffffff16145b80611938575073ffffffffffffffffffffffffffffffffffffffff8082166000908152606a602090815260408083209388168352929052205460ff165b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff1661196082610ddc565b73ffffffffffffffffffffffffffffffffffffffff1614611a03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016106d3565b73ffffffffffffffffffffffffffffffffffffffff8216611aa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106d3565b611ab0600082611730565b73ffffffffffffffffffffffffffffffffffffffff83166000908152606860205260408120805460019290611ae6908490612a08565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152606860205260408120805460019290611b21908490612a55565b909155505060008181526067602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b611bb081612075565b60978054906000611bc083612ba3565b90915550506000908152609960205260408120818155600181018290556002810182905560038101919091556004810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905560050180547fffffffffffffffffffffff000000000000000000000000000000000000000000169055565b600054610100900460ff16611cd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016106d3565b6112828282612142565b73ffffffffffffffffffffffffffffffffffffffff8216611d5f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106d3565b60008181526067602052604090205473ffffffffffffffffffffffffffffffffffffffff1615611deb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106d3565b73ffffffffffffffffffffffffffffffffffffffff82166000908152606860205260408120805460019290611e21908490612a55565b909155505060008181526067602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611f3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106d3565b73ffffffffffffffffffffffffffffffffffffffff8381166000818152606a602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611fdd848484611940565b611fe984848484612200565b6113c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016106d3565b600061208082610ddc565b905061208d600083611730565b73ffffffffffffffffffffffffffffffffffffffff811660009081526068602052604081208054600192906120c3908490612a08565b909155505060008281526067602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600054610100900460ff166121d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016106d3565b81516121ec9060659060208501906123f0565b50805161088d9060669060208401906123f0565b600073ffffffffffffffffffffffffffffffffffffffff84163b156123e5576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290612277903390899088908890600401612bd8565b6020604051808303816000875af19250505080156122d0575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526122cd91810190612c21565b60015b61239a573d8080156122fe576040519150601f19603f3d011682016040523d82523d6000602084013e612303565b606091505b508051612392576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016106d3565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611938565b506001949350505050565b8280546123fc90612985565b90600052602060002090601f01602090048101928261241e5760008555612464565b82601f1061243757805160ff1916838001178555612464565b82800160010185558215612464579182015b82811115612464578251825591602001919060010190612449565b50612470929150612474565b5090565b5b808211156124705760008155600101612475565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146124b757600080fd5b50565b6000602082840312156124cc57600080fd5b813561172981612489565b60005b838110156124f25781810151838201526020016124da565b838111156113c95750506000910152565b6000815180845261251b8160208601602086016124d7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006117296020830184612503565b60006020828403121561257257600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461259d57600080fd5b919050565b600080604083850312156125b557600080fd5b6125be83612579565b946020939093013593505050565b6000806000606084860312156125e157600080fd5b6125ea84612579565b92506125f860208501612579565b9150604084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561267e5761267e612608565b604052919050565b600067ffffffffffffffff8211156126a0576126a0612608565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006126df6126da84612686565b612637565b90508281528383830111156126f357600080fd5b828260208301376000602084830101529392505050565b600082601f83011261271b57600080fd5b611729838335602085016126cc565b6000806040838503121561273d57600080fd5b823567ffffffffffffffff8082111561275557600080fd5b6127618683870161270a565b9350602085013591508082111561277757600080fd5b506127848582860161270a565b9150509250929050565b600080604083850312156127a157600080fd5b50508035926020909101359150565b80151581146124b757600080fd5b600080600080600060a086880312156127d657600080fd5b6127df86612579565b945060208601359350604086013592506127fb60608701612579565b9150608086013561280b816127b0565b809150509295509295909350565b60006020828403121561282b57600080fd5b61172982612579565b6000806040838503121561284757600080fd5b61285083612579565b91506020830135612860816127b0565b809150509250929050565b6000806000806080858703121561288157600080fd5b61288a85612579565b935061289860208601612579565b925060408501359150606085013567ffffffffffffffff8111156128bb57600080fd5b8501601f810187136128cc57600080fd5b6128db878235602084016126cc565b91505092959194509250565b60e0810161058e828480518252602081015160208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff80821660808501528060a08401511660a0850152505060c0810151151560c08301525050565b6000806040838503121561296557600080fd5b61296e83612579565b915061297c60208401612579565b90509250929050565b600181811c9082168061299957607f821691505b602082108114156129d3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015612a1a57612a1a6129d9565b500390565b600060208284031215612a3157600080fd5b5051919050565b600060208284031215612a4a57600080fd5b8151611729816127b0565b60008219821115612a6857612a686129d9565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612a9f57612a9f6129d9565b5060010190565b73ffffffffffffffffffffffffffffffffffffffff84168152602081018390526101208101611938604083018480518252602081015160208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff80821660808501528060a08401511660a0850152505060c0810151151560c08301525050565b600060208284031215612b4757600080fd5b815167ffffffffffffffff811115612b5e57600080fd5b8201601f81018413612b6f57600080fd5b8051612b7d6126da82612686565b818152856020838501011115612b9257600080fd5b610dd38260208301602086016124d7565b600081612bb257612bb26129d9565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152612c176080830184612503565b9695505050505050565b600060208284031215612c3357600080fd5b81516117298161248956fea2646970667358221220d51e418e2d2fcfbdca9794f628ba93ccc5e9ddebd724918f77179f81b788136d64736f6c634300080c0033";

type ETHFaucetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ETHFaucetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ETHFaucet__factory extends ContractFactory {
  constructor(...args: ETHFaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _metadataRenderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ETHFaucet> {
    return super.deploy(
      _metadataRenderer,
      overrides || {}
    ) as Promise<ETHFaucet>;
  }
  override getDeployTransaction(
    _metadataRenderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_metadataRenderer, overrides || {});
  }
  override attach(address: string): ETHFaucet {
    return super.attach(address) as ETHFaucet;
  }
  override connect(signer: Signer): ETHFaucet__factory {
    return super.connect(signer) as ETHFaucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ETHFaucetInterface {
    return new utils.Interface(_abi) as ETHFaucetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ETHFaucet {
    return new Contract(address, _abi, signerOrProvider) as ETHFaucet;
  }
}