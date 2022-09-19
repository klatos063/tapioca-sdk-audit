/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20Mock,
  ERC20MockInterface,
} from "../../../../../contracts/mixologist/legacy/mocks/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x610100604052600a60c0908152692a32b9ba102a37b5b2b760b11b60e0526004906200002c9082620001a9565b50604080518082019091526002815261151560f21b6020820152600590620000559082620001a9565b506006805460ff191660121790553480156200007057600080fd5b5060405162000fc138038062000fc1833981016040819052620000939162000275565b4660a0819052620000f781604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001604051602081830303815290604052805190602001209050919050565b608052506003556200028f565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200012f57607f821691505b6020821081036200015057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001a457600081815260208120601f850160051c810160208610156200017f5750805b601f850160051c820191505b81811015620001a0578281556001016200018b565b5050505b505050565b81516001600160401b03811115620001c557620001c562000104565b620001dd81620001d684546200011a565b8462000156565b602080601f831160018114620002155760008415620001fc5750858301515b600019600386901b1c1916600185901b178555620001a0565b600085815260208120601f198616915b82811015620002465788860151825594840194600190910190840162000225565b5085821015620002655787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156200028857600080fd5b5051919050565b60805160a051610d0c620002b560003960006108260152600061085b0152610d0c6000f3fe608060405234801561001057600080fd5b50600436106100bf5760003560e01c806370a082311161007c57806370a08231146101565780637c928fe9146101765780637ecebe001461018b57806395d89b41146101ab578063a9059cbb146101b3578063d505accf146101c6578063dd62ed3e146101d957600080fd5b806306fdde03146100c4578063095ea7b3146100e257806318160ddd1461010557806323b872dd1461011c578063313ce5671461012f5780633644e5151461014e575b600080fd5b6100cc610204565b6040516100d99190610a01565b60405180910390f35b6100f56100f0366004610a50565b610292565b60405190151581526020016100d9565b61010e60035481565b6040519081526020016100d9565b6100f561012a366004610a7a565b6102fe565b60065461013c9060ff1681565b60405160ff90911681526020016100d9565b61010e6104bc565b61010e610164366004610ab6565b60006020819052908152604090205481565b610189610184366004610ad8565b6104cb565b005b61010e610199366004610ab6565b60026020526000908152604090205481565b6100cc6104d8565b6100f56101c1366004610a50565b6104e5565b6101896101d4366004610af1565b6105d8565b61010e6101e7366004610b64565b600160209081526000928352604080842090915290825290205481565b6004805461021190610b97565b80601f016020809104026020016040519081016040528092919081815260200182805461023d90610b97565b801561028a5780601f1061025f5761010080835404028352916020019161028a565b820191906000526020600020905b81548152906001019060200180831161026d57829003601f168201915b505050505081565b3360008181526001602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102ed9086815260200190565b60405180910390a350600192915050565b60008115610477576001600160a01b038416600090815260208190526040902054828110156103485760405162461bcd60e51b815260040161033f90610bd1565b60405180910390fd5b836001600160a01b0316856001600160a01b031614610475576001600160a01b0385166000908152600160209081526040808320338452909152902054600019811461040857838110156103d95760405162461bcd60e51b815260206004820152601860248201527745524332303a20616c6c6f77616e636520746f6f206c6f7760401b604482015260640161033f565b6103e38482610c17565b6001600160a01b03871660009081526001602090815260408083203384529091529020555b6001600160a01b03851661042e5760405162461bcd60e51b815260040161033f90610c2e565b6104388483610c17565b6001600160a01b03808816600090815260208190526040808220939093559087168152908120805486929061046e908490610c5e565b9091555050505b505b826001600160a01b0316846001600160a01b0316600080516020610cb7833981519152846040516104aa91815260200190565b60405180910390a35060019392505050565b60006104c6610821565b905090565b6104d53382610881565b50565b6005805461021190610b97565b6000811515806104fd5750336001600160a01b038416145b156105ad5733600090815260208190526040902054828110156105325760405162461bcd60e51b815260040161033f90610bd1565b336001600160a01b038516146105ab576001600160a01b0384166105685760405162461bcd60e51b815260040161033f90610c2e565b6105728382610c17565b33600090815260208190526040808220929092556001600160a01b038616815290812080548592906105a5908490610c5e565b90915550505b505b6040518281526001600160a01b038416903390600080516020610cb7833981519152906020016102ed565b6001600160a01b0387166106295760405162461bcd60e51b8152602060048201526018602482015277045524332303a204f776e65722063616e6e6f7420626520360441b604482015260640161033f565b8342106106695760405162461bcd60e51b815260206004820152600e60248201526d115490cc8c0e88115e1c1a5c995960921b604482015260640161033f565b6001600160a01b03871660008181526002602052604081208054600192610713927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928d928d928d92916106bc83610c76565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e0016040516020818303038152906040528051906020012061093b565b6040805160008152602081018083529290925260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610761573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146107bc5760405162461bcd60e51b815260206004820152601860248201527745524332303a20496e76616c6964205369676e617475726560401b604482015260640161033f565b6001600160a01b038781166000818152600160209081526040808320948b168084529482529182902089905590518881527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6000467f000000000000000000000000000000000000000000000000000000000000000081146108595761085481610990565b61087b565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b6000816003546108919190610c5e565b90506003548110156108d55760405162461bcd60e51b815260206004820152600d60248201526c4d696e74206f766572666c6f7760981b604482015260640161033f565b60038190556001600160a01b03831660009081526020819052604081208054849290610902908490610c5e565b90915550506040518281526001600160a01b03841690600090600080516020610cb78339815191529060200160405180910390a3505050565b600060405180604001604052806002815260200161190160f01b815250610960610821565b8360405160200161097393929190610c8f565b604051602081830303815290604052805190602001209050919050565b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152908101829052306060820152600090608001610973565b60005b838110156109ec5781810151838201526020016109d4565b838111156109fb576000848401525b50505050565b6020815260008251806020840152610a208160408501602087016109d1565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610a4b57600080fd5b919050565b60008060408385031215610a6357600080fd5b610a6c83610a34565b946020939093013593505050565b600080600060608486031215610a8f57600080fd5b610a9884610a34565b9250610aa660208501610a34565b9150604084013590509250925092565b600060208284031215610ac857600080fd5b610ad182610a34565b9392505050565b600060208284031215610aea57600080fd5b5035919050565b600080600080600080600060e0888a031215610b0c57600080fd5b610b1588610a34565b9650610b2360208901610a34565b95506040880135945060608801359350608088013560ff81168114610b4757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610b7757600080fd5b610b8083610a34565b9150610b8e60208401610a34565b90509250929050565b600181811c90821680610bab57607f821691505b602082108103610bcb57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526016908201527545524332303a2062616c616e636520746f6f206c6f7760501b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015610c2957610c29610c01565b500390565b60208082526016908201527545524332303a206e6f207a65726f206164647265737360501b604082015260600190565b60008219821115610c7157610c71610c01565b500190565b600060018201610c8857610c88610c01565b5060010190565b60008451610ca18184602089016109d1565b9190910192835250602082015260400191905056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212208e9b9361d93b85aed232bbb795744daf5cc8213765abb33786f987d1cdf4167f64736f6c634300080f0033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Mock";
  }

  override deploy(
    _initialAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(_initialAmount, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    _initialAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialAmount, overrides || {});
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }
  static readonly contractName: "ERC20Mock";

  public readonly contractName: "ERC20Mock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}
