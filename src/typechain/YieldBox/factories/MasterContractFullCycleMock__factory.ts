/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MasterContractFullCycleMock,
  MasterContractFullCycleMockInterface,
} from "../MasterContractFullCycleMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract YieldBox",
        name: "_yieldBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "deployer",
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
    name: "erc1155",
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
    name: "erc1155Strategy",
    outputs: [
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ethStrategy",
    outputs: [
      {
        internalType: "contract IStrategy",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "run",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
    name: "tokenStrategy",
    outputs: [
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract YieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610e39380380610e3983398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610d5a6100df600039600081816101760152818161025a0152818161031c015281816103e00152818161048a01528181610536015281816105ef015281816106af015281816107700152818161081c015281816108c8015281816109960152610a1f0152610d5a6000f3fe6080604052600436106100865760003560e01c8063c040622611610059578063c04062261461011c578063d56022d714610124578063d5f3948814610144578063de40657714610164578063fc0c546a1461019857600080fd5b80634ddf47d41461008b57806359a81aef146100a0578063a59a9db8146100dc578063ab49ba2b146100fc575b600080fd5b61009e610099366004610add565b6101b8565b005b3480156100ac57600080fd5b506005546100c0906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b3480156100e857600080fd5b506003546100c0906001600160a01b031681565b34801561010857600080fd5b506004546100c0906001600160a01b031681565b61009e610238565b34801561013057600080fd5b506002546100c0906001600160a01b031681565b34801561015057600080fd5b506000546100c0906001600160a01b031681565b34801561017057600080fd5b506100c07f000000000000000000000000000000000000000000000000000000000000000081565b3480156101a457600080fd5b506001546100c0906001600160a01b031681565b6101c481830183610b67565b600580546001600160a01b03199081166001600160a01b03938416179091556004805482169383169390931790925560038054831693821693909317909255600280548216938316939093179092556001805483169382169390931790925560008054909116929091169190911790555050565b6001805460035460008054604051636cd5703160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811696636cd57031966102a796919590831694918316939092919091169081906103e8908490600401610c0b565b6040805180830381600087803b1580156102c057600080fd5b505af11580156102d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f89190610c5d565b50506001805460035460008054604051636cd5703160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811696636cd570319661036c9691959083169491831693909291909116908190839064174876e80090600401610c0b565b6040805180830381600087803b15801561038557600080fd5b505af1158015610399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bd9190610c5d565b5050600180546003546040516316a70ea960e11b81526000936001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811694632d4e1d529461041c949183169216908790600401610c81565b60206040518083038186803b15801561043457600080fd5b505afa158015610448573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046c9190610cb6565b600080546040516311a5cc7760e31b81529293506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811693638d2e63b8936104c8938793169182916103e891600401610ccf565b6040805180830381600087803b1580156104e157600080fd5b505af11580156104f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105199190610c5d565b5050600080546040516311a5cc7760e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811693638d2e63b89361057a9387939190911691829164174876e80090600401610ccf565b6040805180830381600087803b15801561059357600080fd5b505af11580156105a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cb9190610c5d565b50506002546004805460008054604051636cd5703160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811696636cd570319661063a966003969284169590841694602a94919091169283926103e89201610c0b565b6040805180830381600087803b15801561065357600080fd5b505af1158015610667573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068b9190610c5d565b50506002546004805460008054604051636cd5703160e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811696636cd57031966106ff966003969284169590841694602a9491909116928392909164174876e8009101610c0b565b6040805180830381600087803b15801561071857600080fd5b505af115801561072c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107509190610c5d565b5050600254600480546040516316a70ea960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811694632d4e1d52946107ae94600394928416931691602a9101610c81565b60206040518083038186803b1580156107c657600080fd5b505afa1580156107da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fe9190610cb6565b600080546040516311a5cc7760e31b81529293506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811693638d2e63b89361085a938793169182916103e891600401610ccf565b6040805180830381600087803b15801561087357600080fd5b505af1158015610887573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ab9190610c5d565b5050600080546040516311a5cc7760e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811693638d2e63b89361090c9387939190911691829164174876e80090600401610ccf565b6040805180830381600087803b15801561092557600080fd5b505af1158015610939573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095d9190610c5d565b505060055460005460405163028e08eb60e61b81526001600160a01b03928316600482015290821660248201526103e8604482018190527f00000000000000000000000000000000000000000000000000000000000000009092169163a3823ac09160640160408051808303818588803b1580156109da57600080fd5b505af11580156109ee573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a139190610c5d565b50506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638d2e63b8610a4f836001610cfe565b600080546040516001600160e01b031960e086901b168152610a8793926001600160a01b039092169182916103e89190600401610ccf565b6040805180830381600087803b158015610aa057600080fd5b505af1158015610ab4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad89190610c5d565b505050565b60008060208385031215610af057600080fd5b823567ffffffffffffffff80821115610b0857600080fd5b818501915085601f830112610b1c57600080fd5b813581811115610b2b57600080fd5b866020828501011115610b3d57600080fd5b60209290920196919550909350505050565b6001600160a01b0381168114610b6457600080fd5b50565b60008060008060008060c08789031215610b8057600080fd5b8635610b8b81610b4f565b95506020870135610b9b81610b4f565b94506040870135610bab81610b4f565b93506060870135610bbb81610b4f565b92506080870135610bcb81610b4f565b915060a0870135610bdb81610b4f565b809150509295509295509295565b60058110610c0757634e487b7160e01b600052602160045260246000fd5b9052565b6101008101610c1a828b610be9565b6001600160a01b039889166020830152968816604082015260608101959095529286166080850152941660a083015260c082019390935260e00191909152919050565b60008060408385031215610c7057600080fd5b505080516020909101519092909150565b60808101610c8f8287610be9565b6001600160a01b039485166020830152929093166040840152606090920191909152919050565b600060208284031215610cc857600080fd5b5051919050565b9485526001600160a01b0393841660208601529190921660408401526060830191909152608082015260a00190565b60008219821115610d1f57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220bb10ec7f9596ce4c6a2ab9f36cb8d53587195e370d7c95f177c4a2310f549e8664736f6c63430008090033";

type MasterContractFullCycleMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MasterContractFullCycleMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MasterContractFullCycleMock__factory extends ContractFactory {
  constructor(...args: MasterContractFullCycleMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MasterContractFullCycleMock";
  }

  deploy(
    _yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterContractFullCycleMock> {
    return super.deploy(
      _yieldBox,
      overrides || {}
    ) as Promise<MasterContractFullCycleMock>;
  }
  getDeployTransaction(
    _yieldBox: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_yieldBox, overrides || {});
  }
  attach(address: string): MasterContractFullCycleMock {
    return super.attach(address) as MasterContractFullCycleMock;
  }
  connect(signer: Signer): MasterContractFullCycleMock__factory {
    return super.connect(signer) as MasterContractFullCycleMock__factory;
  }
  static readonly contractName: "MasterContractFullCycleMock";
  public readonly contractName: "MasterContractFullCycleMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterContractFullCycleMockInterface {
    return new utils.Interface(_abi) as MasterContractFullCycleMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterContractFullCycleMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MasterContractFullCycleMock;
  }
}