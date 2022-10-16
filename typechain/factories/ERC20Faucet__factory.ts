/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Faucet, ERC20FaucetInterface } from "../ERC20Faucet";

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
      {
        internalType: "contract IERC20",
        name: "_faucetToken",
        type: "address",
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
  "0x60a06040523480156200001157600080fd5b5060405162002eb138038062002eb1833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612e166200009b6000396000818161034101526118140152612e166000f3fe6080604052600436106101755760003560e01c8063635f92ad116100cb578063a22cb4651161007f578063c38e4b6e11610059578063c38e4b6e14610423578063c87b56dd14610450578063e985e9c51461047057600080fd5b8063a22cb465146103c3578063aad3ec96146103e3578063b88d4fde1461040357600080fd5b806370a08231116100b057806370a082311461036357806395d89b41146103835780639d4993631461039857600080fd5b8063635f92ad1461031c578063703199701461032f57600080fd5b806318160ddd1161012d57806342842e0e1161010757806342842e0e146102bc57806358a4c99f146102dc5780636352211e146102fc57600080fd5b806318160ddd1461025857806323b872dd1461027c57806332f7a8221461029c57600080fd5b8063077f224a1161015e578063077f224a146101d1578063081812fc146101f3578063095ea7b31461023857600080fd5b806301ffc9a71461017a57806306fdde03146101af575b600080fd5b34801561018657600080fd5b5061019a610195366004612641565b6104c6565b60405190151581526020015b60405180910390f35b3480156101bb57600080fd5b506101c46105ab565b6040516101a691906126d4565b3480156101dd57600080fd5b506101f16101ec36600461282b565b61063d565b005b3480156101ff57600080fd5b5061021361020e3660046128a3565b6107ab565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a6565b34801561024457600080fd5b506101f16102533660046128bc565b610885565b34801561026457600080fd5b5061026e60975481565b6040519081526020016101a6565b34801561028857600080fd5b506101f16102973660046128e8565b610a12565b3480156102a857600080fd5b506101f16102b73660046128bc565b610ab3565b3480156102c857600080fd5b506101f16102d73660046128e8565b610cf1565b3480156102e857600080fd5b5061026e6102f7366004612929565b610d0c565b34801561030857600080fd5b506102136103173660046128a3565b610e91565b61026e61032a366004612959565b610f43565b34801561033b57600080fd5b506102137f000000000000000000000000000000000000000000000000000000000000000081565b34801561036f57600080fd5b5061026e61037e3660046129b8565b6112e9565b34801561038f57600080fd5b506101c46113b7565b3480156103a457600080fd5b5060995473ffffffffffffffffffffffffffffffffffffffff16610213565b3480156103cf57600080fd5b506101f16103de3660046129d5565b6113c6565b3480156103ef57600080fd5b506101f16103fe3660046128bc565b6113d5565b34801561040f57600080fd5b506101f161041e366004612a0e565b611556565b34801561042f57600080fd5b5061044361043e3660046128a3565b6115f8565b6040516101a69190612a8e565b34801561045c57600080fd5b506101c461046b3660046128a3565b6116fd565b34801561047c57600080fd5b5061019a61048b366004612af9565b73ffffffffffffffffffffffffffffffffffffffff9182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061055957507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806105a557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060606580546105ba90612b27565b80601f01602080910402602001604051908101604052809291908181526020018280546105e690612b27565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b5050505050905090565b600054610100900460ff166106585760005460ff161561065c565b303b155b6106ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b600054610100900460ff1615801561072c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b61073684846118b7565b609980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617905580156107a557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50505050565b60008181526067602052604081205473ffffffffffffffffffffffffffffffffffffffff1661085c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016106e4565b5060009081526069602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061089082610e91565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561094e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016106e4565b3373ffffffffffffffffffffffffffffffffffffffff821614806109775750610977813361048b565b610a03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016106e4565b610a0d8383611958565b505050565b610a1c33826119f8565b610aa8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016106e4565b610a0d838383611b68565b6000818152609a602052604090206005015473ffffffffffffffffffffffffffffffffffffffff163314610b45576000818152609a6020526040908190206005015490517f0308308800000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911660248201526044016106e4565b6000818152609a602052604090206005015474010000000000000000000000000000000000000000900460ff16610ba8576040517f6a37e42600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000818152609a6020908152604091829020825160e0810184528154808252600183015493820184905260028301549482019490945260038201546060820152600482015473ffffffffffffffffffffffffffffffffffffffff908116608083015260059092015480831660a083015274010000000000000000000000000000000000000000900460ff16151560c0820152609954909391169163a9059cbb918691610c5391612baa565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015260248201526044016020604051808303816000875af1158015610cc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce79190612bc1565b50610a0d82611dcf565b610a0d83838360405180602001604052806000815250611556565b6000828152609a60209081526040808320815160e0810183528154808252600183015494820194909452600282015481840181905260038301546060830181905260048085015473ffffffffffffffffffffffffffffffffffffffff9081166080860181905260059096015490811660a086015274010000000000000000000000000000000000000000900460ff16151560c085015294517f7aefca240000000000000000000000000000000000000000000000000000000081529485019590955260248401526044830193909352606482018590528391637aefca2490608401602060405180830381865afa158015610e0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2e9190612bde565b8251909150811115610e795781516040517f6b3e66260000000000000000000000000000000000000000000000000000000081526106e4918391600401918252602082015260400190565b6020820151610e889082612baa565b95945050505050565b60008181526067602052604081205473ffffffffffffffffffffffffffffffffffffffff16806105a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016106e4565b60003415610f7f576040517f5de212210000000000000000000000000000000000000000000000000000000081523460048201526024016106e4565b84610fb6576040517fd1a9d21400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83610fed576040517f59def3cc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527f7aefca2400000000000000000000000000000000000000000000000000000000600482015273ffffffffffffffffffffffffffffffffffffffff8416906301ffc9a790602401602060405180830381865afa158015611077573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109b9190612bc1565b6110e9576040517fe0a8828900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024016106e4565b6098546110f68782611e69565b6099546040517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810188905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd906064016020604051808303816000875af1158015611173573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111979190612bc1565b506040518060e001604052808781526020016000815260200142815260200186426111c29190612bf7565b815273ffffffffffffffffffffffffffffffffffffffff808716602080840191909152336040808501919091528715156060948501526000868152609a83528181208651815592860151600184015590850151600283015592840151600382015560808401516004820180549184167fffffffffffffffffffffffff000000000000000000000000000000000000000090921691909117905560a08401516005909101805460c090950151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090951691909216179290921790915560978054916112c483612c0f565b9091555050609880549060006112d983612c0f565b9091555090979650505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821661138e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016106e4565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526068602052604090205490565b6060606680546105ba90612b27565b6113d133838361202b565b5050565b6113de81610e91565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461146c573361141a82610e91565b6040517fa3ee740f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9283166004820152911660248201526044016106e4565b60006114788242610d0c565b6099546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526024820184905292935091169063a9059cbb906044016020604051808303816000875af11580156114f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115179190612bc1565b506000828152609a602052604081206001810180549192849261153b908490612bf7565b90915550508054600182015414156107a5576107a583611dcf565b61156033836119f8565b6115ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016106e4565b6107a584848484612159565b6116666040518060e0016040528060008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525090565b506000908152609a6020908152604091829020825160e0810184528154815260018201549281019290925260028101549282019290925260038201546060820152600482015473ffffffffffffffffffffffffffffffffffffffff908116608083015260059092015491821660a08201527401000000000000000000000000000000000000000090910460ff16151560c082015290565b60008181526067602052604090205460609073ffffffffffffffffffffffffffffffffffffffff1661175b576040517fa913267f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000828152609a6020908152604091829020825160e081018452815481526001820154928101929092526002810154828401526003810154606083015260048082015473ffffffffffffffffffffffffffffffffffffffff908116608085015260059092015480831660a085015274010000000000000000000000000000000000000000900460ff16151560c084015292517f7bf966e600000000000000000000000000000000000000000000000000000000815291927f000000000000000000000000000000000000000000000000000000000000000090911691637bf966e69161184d9130918891879101612c48565b600060405180830381865afa15801561186a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526118b09190810190612cd7565b9392505050565b600054610100900460ff1661194e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016106e4565b6113d182826121fc565b600081815260696020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915581906119b282610e91565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526067602052604081205473ffffffffffffffffffffffffffffffffffffffff16611aa9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084016106e4565b6000611ab483610e91565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611b2357508373ffffffffffffffffffffffffffffffffffffffff16611b0b846107ab565b73ffffffffffffffffffffffffffffffffffffffff16145b80611b60575073ffffffffffffffffffffffffffffffffffffffff8082166000908152606a602090815260408083209388168352929052205460ff165b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16611b8882610e91565b73ffffffffffffffffffffffffffffffffffffffff1614611c2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016106e4565b73ffffffffffffffffffffffffffffffffffffffff8216611ccd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016106e4565b611cd8600082611958565b73ffffffffffffffffffffffffffffffffffffffff83166000908152606860205260408120805460019290611d0e908490612baa565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152606860205260408120805460019290611d49908490612bf7565b909155505060008181526067602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b611dd8816122ba565b60978054906000611de883612d45565b90915550506000908152609a60205260408120818155600181018290556002810182905560038101919091556004810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905560050180547fffffffffffffffffffffff000000000000000000000000000000000000000000169055565b73ffffffffffffffffffffffffffffffffffffffff8216611ee6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106e4565b60008181526067602052604090205473ffffffffffffffffffffffffffffffffffffffff1615611f72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106e4565b73ffffffffffffffffffffffffffffffffffffffff82166000908152606860205260408120805460019290611fa8908490612bf7565b909155505060008181526067602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156120c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016106e4565b73ffffffffffffffffffffffffffffffffffffffff8381166000818152606a602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b612164848484611b68565b61217084848484612387565b6107a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016106e4565b600054610100900460ff16612293576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016106e4565b81516122a6906065906020850190612577565b508051610a0d906066906020840190612577565b60006122c582610e91565b90506122d2600083611958565b73ffffffffffffffffffffffffffffffffffffffff81166000908152606860205260408120805460019290612308908490612baa565b909155505060008281526067602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600073ffffffffffffffffffffffffffffffffffffffff84163b1561256c576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906123fe903390899088908890600401612d7a565b6020604051808303816000875af1925050508015612457575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261245491810190612dc3565b60015b612521573d808015612485576040519150601f19603f3d011682016040523d82523d6000602084013e61248a565b606091505b508051612519576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016106e4565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050611b60565b506001949350505050565b82805461258390612b27565b90600052602060002090601f0160209004810192826125a557600085556125eb565b82601f106125be57805160ff19168380011785556125eb565b828001600101855582156125eb579182015b828111156125eb5782518255916020019190600101906125d0565b506125f79291506125fb565b5090565b5b808211156125f757600081556001016125fc565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461263e57600080fd5b50565b60006020828403121561265357600080fd5b81356118b081612610565b60005b83811015612679578181015183820152602001612661565b838111156107a55750506000910152565b600081518084526126a281602086016020860161265e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006118b0602083018461268a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561275d5761275d6126e7565b604052919050565b600067ffffffffffffffff82111561277f5761277f6126e7565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006127be6127b984612765565b612716565b90508281528383830111156127d257600080fd5b828260208301376000602084830101529392505050565b600082601f8301126127fa57600080fd5b6118b0838335602085016127ab565b73ffffffffffffffffffffffffffffffffffffffff8116811461263e57600080fd5b60008060006060848603121561284057600080fd5b833567ffffffffffffffff8082111561285857600080fd5b612864878388016127e9565b9450602086013591508082111561287a57600080fd5b50612887868287016127e9565b925050604084013561289881612809565b809150509250925092565b6000602082840312156128b557600080fd5b5035919050565b600080604083850312156128cf57600080fd5b82356128da81612809565b946020939093013593505050565b6000806000606084860312156128fd57600080fd5b833561290881612809565b9250602084013561291881612809565b929592945050506040919091013590565b6000806040838503121561293c57600080fd5b50508035926020909101359150565b801515811461263e57600080fd5b600080600080600060a0868803121561297157600080fd5b853561297c81612809565b94506020860135935060408601359250606086013561299a81612809565b915060808601356129aa8161294b565b809150509295509295909350565b6000602082840312156129ca57600080fd5b81356118b081612809565b600080604083850312156129e857600080fd5b82356129f381612809565b91506020830135612a038161294b565b809150509250929050565b60008060008060808587031215612a2457600080fd5b8435612a2f81612809565b93506020850135612a3f81612809565b925060408501359150606085013567ffffffffffffffff811115612a6257600080fd5b8501601f81018713612a7357600080fd5b612a82878235602084016127ab565b91505092959194509250565b60e081016105a5828480518252602081015160208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff80821660808501528060a08401511660a0850152505060c0810151151560c08301525050565b60008060408385031215612b0c57600080fd5b8235612b1781612809565b91506020830135612a0381612809565b600181811c90821680612b3b57607f821691505b60208210811415612b75577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015612bbc57612bbc612b7b565b500390565b600060208284031215612bd357600080fd5b81516118b08161294b565b600060208284031215612bf057600080fd5b5051919050565b60008219821115612c0a57612c0a612b7b565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612c4157612c41612b7b565b5060010190565b73ffffffffffffffffffffffffffffffffffffffff84168152602081018390526101208101611b60604083018480518252602081015160208301526040810151604083015260608101516060830152608081015173ffffffffffffffffffffffffffffffffffffffff80821660808501528060a08401511660a0850152505060c0810151151560c08301525050565b600060208284031215612ce957600080fd5b815167ffffffffffffffff811115612d0057600080fd5b8201601f81018413612d1157600080fd5b8051612d1f6127b982612765565b818152856020838501011115612d3457600080fd5b610e8882602083016020860161265e565b600081612d5457612d54612b7b565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525083604083015260806060830152612db9608083018461268a565b9695505050505050565b600060208284031215612dd557600080fd5b81516118b08161261056fea2646970667358221220542a74aab447dcd2f5eb439875d8ce9b6490c06fa3faaa19a7f5a36e68071dde64736f6c634300080c0033";

type ERC20FaucetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20FaucetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Faucet__factory extends ContractFactory {
  constructor(...args: ERC20FaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _metadataRenderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Faucet> {
    return super.deploy(
      _metadataRenderer,
      overrides || {}
    ) as Promise<ERC20Faucet>;
  }
  override getDeployTransaction(
    _metadataRenderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_metadataRenderer, overrides || {});
  }
  override attach(address: string): ERC20Faucet {
    return super.attach(address) as ERC20Faucet;
  }
  override connect(signer: Signer): ERC20Faucet__factory {
    return super.connect(signer) as ERC20Faucet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20FaucetInterface {
    return new utils.Interface(_abi) as ERC20FaucetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Faucet {
    return new Contract(address, _abi, signerOrProvider) as ERC20Faucet;
  }
}
