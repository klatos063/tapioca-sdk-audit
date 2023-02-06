/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { OTAP, OTAPInterface } from "../../../options/oTAP.sol/OTAP";

const _abi = [
  {
    inputs: [],
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
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "expiry",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "discount",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "tOLP",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct TapOption",
        name: "option",
        type: "tuple",
      },
    ],
    name: "Mint",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "attributes",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "expiry",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "discount",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "tOLP",
            type: "uint256",
          },
        ],
        internalType: "struct TapOption",
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
    inputs: [],
    name: "broker",
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
    inputs: [],
    name: "brokerClaim",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isApprovedOrOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_expiry",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_discount",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_tOLP",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintedOTAP",
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
    name: "mintedTAP",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "options",
    outputs: [
      {
        internalType: "uint128",
        name: "expiry",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "discount",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "tOLP",
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
        name: "data",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "setTokenURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenURIs",
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
  "0x60806040523480156200001157600080fd5b50604080518082018252600a81526904f7074696f6e205441560b41b60208083019182528351808501909452600484526306f5441560e41b90840152815191929162000060916000916200007f565b508051620000769060019060208401906200007f565b50505062000162565b8280546200008d9062000125565b90600052602060002090601f016020900481019282620000b15760008555620000fc565b82601f10620000cc57805160ff1916838001178555620000fc565b82800160010185558215620000fc579182015b82811115620000fc578251825591602001919060010190620000df565b506200010a9291506200010e565b5090565b5b808211156200010a57600081556001016200010f565b600181811c908216806200013a57607f821691505b602082108114156200015c57634e487b7160e01b600052602260045260246000fd5b50919050565b61175080620001726000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80636352211e116100c3578063abff01101161007c578063abff011014610303578063b47be4fc14610316578063b88d4fde1461031f578063c87b56dd14610332578063d05dcc6a14610345578063e985e9c51461039657600080fd5b80636352211e146102a65780636c8b703f146102b957806370a08231146102cc57806395d89b41146102df5780639c049fe5146102e7578063a22cb465146102f057600080fd5b8063162094c411610115578063162094c4146101f05780631eac071c1461020357806323b872dd1461020b578063409e22051461021e57806342842e0e14610280578063430c20811461029357600080fd5b806301ffc9a71461015257806306fdde031461017a578063081812fc1461018f578063095ea7b3146101ba5780631239824c146101cf575b600080fd5b6101656101603660046111e1565b6103a9565b60405190151581526020015b60405180910390f35b6101826103fb565b604051610171919061124b565b6101a261019d36600461125e565b61048d565b6040516001600160a01b039091168152602001610171565b6101cd6101c8366004611293565b6104b4565b005b6101e26101dd3660046112d4565b6105cf565b604051908152602001610171565b6101cd6101fe36600461131f565b6106e1565b6101cd610756565b6101cd61021936600461139b565b6107b5565b61025a61022c36600461125e565b600960205260009081526040902080546001909101546001600160801b0380831692600160801b9004169083565b604080516001600160801b03948516815293909216602084015290820152606001610171565b6101cd61028e36600461139b565b6107e6565b6101656102a1366004611293565b610801565b6101a26102b436600461125e565b610814565b6101826102c736600461125e565b610849565b6101e26102da3660046113d7565b6108e3565b610182610969565b6101e260075481565b6101cd6102fe3660046113f2565b610978565b6008546101a2906001600160a01b031681565b6101e260065481565b6101cd61032d366004611444565b610987565b61018261034036600461125e565b6109b9565b61035861035336600461125e565b610a5b565b604080516001600160a01b03909316835281516001600160801b03908116602080860191909152830151168382015201516060820152608001610171565b6101656103a4366004611520565b610aca565b60006001600160e01b031982166380ac58cd60e01b14806103da57506001600160e01b03198216635b5e139f60e01b145b806103f557506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461040a90611553565b80601f016020809104026020016040519081016040528092919081815260200182805461043690611553565b80156104835780601f1061045857610100808354040283529160200191610483565b820191906000526020600020905b81548152906001019060200180831161046657829003601f168201915b5050505050905090565b600061049882610af8565b506000908152600460205260409020546001600160a01b031690565b60006104bf82610814565b9050806001600160a01b0316836001600160a01b031614156105325760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061054e575061054e8133610aca565b6105c05760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610529565b6105ca8383610b2f565b505050565b6008546000906001600160a01b031633146106245760405162461bcd60e51b815260206004820152601560248201527427aa20a81d1037b7363c9037b7363ca13937b5b2b960591b6044820152606401610529565b600660008154610633906115a4565b918290555090506106448582610b9d565b600081815260096020526040908190206001600160801b03858116600160801b0290871617815560018101849055905182906001600160a01b038816907ff85fc5db92230761a679201cf357af068b25f3ca445054bcf465e9bc61383920906106d090859081546001600160801b038116825260801c6020820152600190910154604082015260600190565b60405180910390a350949350505050565b6106eb3384610bb7565b6107375760405162461bcd60e51b815260206004820152601c60248201527f4f5441503a206f6e6c7920617070726f766564206f72206f776e6572000000006044820152606401610529565b6000838152600a60205260409020610750908383611132565b50505050565b6008546001600160a01b0316156107a15760405162461bcd60e51b815260206004820152600f60248201526e4f5441503a206f6e6c79206f6e636560881b6044820152606401610529565b600880546001600160a01b03191633179055565b6107bf3382610bb7565b6107db5760405162461bcd60e51b8152600401610529906115bf565b6105ca838383610c16565b6105ca83838360405180602001604052806000815250610987565b600061080d8383610bb7565b9392505050565b6000818152600260205260408120546001600160a01b0316806103f55760405162461bcd60e51b81526004016105299061160d565b600a602052600090815260409020805461086290611553565b80601f016020809104026020016040519081016040528092919081815260200182805461088e90611553565b80156108db5780601f106108b0576101008083540402835291602001916108db565b820191906000526020600020905b8154815290600101906020018083116108be57829003601f168201915b505050505081565b60006001600160a01b03821661094d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610529565b506001600160a01b031660009081526003602052604090205490565b60606001805461040a90611553565b610983338383610db2565b5050565b6109913383610bb7565b6109ad5760405162461bcd60e51b8152600401610529906115bf565b61075084848484610e7d565b6000818152600a602052604090208054606091906109d690611553565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0290611553565b8015610a4f5780601f10610a2457610100808354040283529160200191610a4f565b820191906000526020600020905b815481529060010190602001808311610a3257829003601f168201915b50505050509050919050565b60408051606081018252600080825260208201819052918101829052610a8083610814565b600093845260096020908152604094859020855160608101875281546001600160801b038082168352600160801b9091041692810192909252600101549481019490945293915050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000818152600260205260409020546001600160a01b0316610b2c5760405162461bcd60e51b81526004016105299061160d565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b6482610814565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b610983828260405180602001604052806000815250610eb0565b600080610bc383610814565b9050806001600160a01b0316846001600160a01b03161480610bea5750610bea8185610aca565b80610c0e5750836001600160a01b0316610c038461048d565b6001600160a01b0316145b949350505050565b826001600160a01b0316610c2982610814565b6001600160a01b031614610c8d5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610529565b6001600160a01b038216610cef5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610529565b610cfa600082610b2f565b6001600160a01b0383166000908152600360205260408120805460019290610d2390849061163f565b90915550506001600160a01b0382166000908152600360205260408120805460019290610d51908490611656565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610e105760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610529565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e88848484610c16565b610e9484848484610ee3565b6107505760405162461bcd60e51b81526004016105299061166e565b610eba8383610ff0565b610ec76000848484610ee3565b6105ca5760405162461bcd60e51b81526004016105299061166e565b60006001600160a01b0384163b15610fe557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610f279033908990889088906004016116c0565b602060405180830381600087803b158015610f4157600080fd5b505af1925050508015610f71575060408051601f3d908101601f19168201909252610f6e918101906116fd565b60015b610fcb573d808015610f9f576040519150601f19603f3d011682016040523d82523d6000602084013e610fa4565b606091505b508051610fc35760405162461bcd60e51b81526004016105299061166e565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c0e565b506001949350505050565b6001600160a01b0382166110465760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610529565b6000818152600260205260409020546001600160a01b0316156110ab5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610529565b6001600160a01b03821660009081526003602052604081208054600192906110d4908490611656565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461113e90611553565b90600052602060002090601f01602090048101928261116057600085556111a6565b82601f106111795782800160ff198235161785556111a6565b828001600101855582156111a6579182015b828111156111a657823582559160200191906001019061118b565b506111b29291506111b6565b5090565b5b808211156111b257600081556001016111b7565b6001600160e01b031981168114610b2c57600080fd5b6000602082840312156111f357600080fd5b813561080d816111cb565b6000815180845260005b8181101561122457602081850181015186830182015201611208565b81811115611236576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061080d60208301846111fe565b60006020828403121561127057600080fd5b5035919050565b80356001600160a01b038116811461128e57600080fd5b919050565b600080604083850312156112a657600080fd5b6112af83611277565b946020939093013593505050565b80356001600160801b038116811461128e57600080fd5b600080600080608085870312156112ea57600080fd5b6112f385611277565b9350611301602086016112bd565b925061130f604086016112bd565b9396929550929360600135925050565b60008060006040848603121561133457600080fd5b83359250602084013567ffffffffffffffff8082111561135357600080fd5b818601915086601f83011261136757600080fd5b81358181111561137657600080fd5b87602082850101111561138857600080fd5b6020830194508093505050509250925092565b6000806000606084860312156113b057600080fd5b6113b984611277565b92506113c760208501611277565b9150604084013590509250925092565b6000602082840312156113e957600080fd5b61080d82611277565b6000806040838503121561140557600080fd5b61140e83611277565b91506020830135801515811461142357600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561145a57600080fd5b61146385611277565b935061147160208601611277565b925060408501359150606085013567ffffffffffffffff8082111561149557600080fd5b818701915087601f8301126114a957600080fd5b8135818111156114bb576114bb61142e565b604051601f8201601f19908116603f011681019083821181831017156114e3576114e361142e565b816040528281528a60208487010111156114fc57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561153357600080fd5b61153c83611277565b915061154a60208401611277565b90509250929050565b600181811c9082168061156757607f821691505b6020821081141561158857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156115b8576115b861158e565b5060010190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b602080825260189082015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604082015260600190565b6000828210156116515761165161158e565b500390565b600082198211156116695761166961158e565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906116f3908301846111fe565b9695505050505050565b60006020828403121561170f57600080fd5b815161080d816111cb56fea2646970667358221220494c811cc4f9bf0d77b18667cd5f4a4dd97179e68271b62ee3a159eb0886387964736f6c63430008090033";

type OTAPConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OTAPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OTAP__factory extends ContractFactory {
  constructor(...args: OTAPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OTAP";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OTAP> {
    return super.deploy(overrides || {}) as Promise<OTAP>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OTAP {
    return super.attach(address) as OTAP;
  }
  override connect(signer: Signer): OTAP__factory {
    return super.connect(signer) as OTAP__factory;
  }
  static readonly contractName: "OTAP";

  public readonly contractName: "OTAP";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OTAPInterface {
    return new utils.Interface(_abi) as OTAPInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OTAP {
    return new Contract(address, _abi, signerOrProvider) as OTAP;
  }
}