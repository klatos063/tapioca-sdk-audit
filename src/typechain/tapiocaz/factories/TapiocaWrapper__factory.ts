/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TapiocaWrapper,
  TapiocaWrapperInterface,
} from "../TapiocaWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "TapiocaWrapper__AlreadyDeployed",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__FailedDeploy",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__MngmtFeeTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "TapiocaWrapper__NoTOFTDeployed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "TapiocaWrapper__TOFTExecutionFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract ITapiocaOFT",
        name: "_tapiocaOFT",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
    ],
    name: "CreateOFT",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "HarvestFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
    ],
    name: "SetFees",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_linked",
        type: "bool",
      },
    ],
    name: "createTOFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "toft",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "bytecode",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "revertOnFailure",
            type: "bool",
          },
        ],
        internalType: "struct TapiocaWrapper.ExecutionCall[]",
        name: "_call",
        type: "tuple[]",
      },
    ],
    name: "executeCalls",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_toft",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "_revertOnFailure",
        type: "bool",
      },
    ],
    name: "executeTOFT",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestableTapiocaOFTsLength",
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
    name: "lastTOFT",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tapiocaOFTLength",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "tapiocaOFTs",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
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
        name: "",
        type: "address",
      },
    ],
    name: "tapiocaOFTsByErc20",
    outputs: [
      {
        internalType: "contract ITapiocaOFT",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461007057601f610e1238819003918201601f19168301916001600160401b038311848410176100755780849260209460405283398101031261007057516001600160a01b0381168103610070576100619061005c3361008b565b61008b565b604051610d3f90816100d38239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6040608081526004908136101561001557600080fd5b600091823560e01c8063138cc18f1461091d5780632f3e1b91146108fe57806339930d73146108df5780633b6ac5a3146108a5578063715018a61461084b5780638da5cb5b14610825578063b3c7d6a3146104f4578063b8454db81461042a578063c5181c70146103cd578063c99e12b214610389578063e4c472061461016a5763f2fde38b146100a557600080fd5b34610166576020366003190112610166576100be610a01565b906100c7610ad7565b6001600160a01b0380921692831561011457505082546001600160a01b0319811683178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b906020608492519162461bcd60e51b8352820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152fd5b8280fd5b506020806003193601126103665781359067ffffffffffffffff8083116103855736602384011215610385578284013593818511610381576024808501948136918860051b01011161037d579296939491906101c4610ad7565b84936101cf84610bd8565b966101dc89519889610b54565b848852601f196101eb86610bd8565b01875b81811061036e57505086945b80861061026857505050505050835193808501911515855285850152825180915260608401948060608360051b870101940192955b82871061023c5785850386f35b909192938280610258600193605f198a82030186528851610a4a565b960192019601959291909261022f565b909192939496809a965061027d888385610bf0565b356001600160a01b03811680910361036a5761029a898486610bf0565b8881013590601e1981360301821215610366570190813591888311610366578901918036038313610366578392818e5192839283378101848152039134905af1966102e3610ba8565b6102ed828b610c12565b52878a6102fb838587610bf0565b01359081151582036103625781610359575b506103295761031b90610b2f565b9493929190999695996101fa565b846103558b8661033a8b958e610c12565b5191519485946310847b0960e01b8652850152830190610a4a565b0390fd5b9050153861030d565b8c80fd5b8380fd5b5080fd5b60608a82018d01528b016101ee565b8780fd5b8680fd5b8580fd5b50346101665760203660031901126101665735916001548310156103ca57506001600160a01b036103bb602093610a8a565b92905490519260031b1c168152f35b80fd5b5091346103ca57806003193601126103ca5760015492831561041c576000198401938411610409576020836001600160a01b036103bb87610a8a565b634e487b7160e01b825260119052602490fd5b8251634df930f160e01b8152fd5b508260603660031901126103ca57610440610a01565b9060243567ffffffffffffffff811161036a576104609036908501610a1c565b60443593918415158503610366579083929161047a610ad7565b8188519283928337810184815203916001600160a01b033491165af19161049f610ba8565b91806104ec575b6104ca57506104c690835193849315158452806020850152830190610a4a565b0390f35b61035560209285519384936310847b0960e01b85528401526024830190610a4a565b5082156104a6565b5090346101665760803660031901126101665761050f610a01565b60243567ffffffffffffffff81116108215761052e9036908501610a1c565b919093604435946064359384159485150361037d5761054b610ad7565b6001600160a01b039384811697888a526020966003885286898c20541661080a57869492888695938b936000146107e857916105ea6105f594926105dc6105fb9895610598368a89610c26565b838151910120955194859384019630908892606894929184526bffffffffffffffffffffffff19809260601b16602085015260601b16603483015260488201520190565b03601f198101835282610b54565b519020923691610c26565b90610c5d565b165b16938051633c2f4f4360e11b815284818481895afa9081156107de57879185918a916107a3575b5016036107965760015492680100000000000000009384811015610783578060016106529201600155610a8a565b8154600391821b89811b94901b1916929092179055868852845280872080546001600160a01b031990811687179091558151622a579d60e11b81529094808285818a5afa92831561077a5750889261074c575b505046146106d8575b5050507f7512d1d2a31be00735451a10b76db5dca1e1581b1cb23d7910b4741e8eb148768380a380f35b60025491821015610739576001820180600255821015610726575082907f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01918254161790553880806106ae565b634e487b7160e01b865260329052602485fd5b634e487b7160e01b865260419052602485fd5b90809250813d8311610773575b6107638183610b54565b81010312610381575138806106a5565b503d610759565b513d8a823e3d90fd5b634e487b7160e01b895260418452602489fd5b5163f083e5f760e01b8152fd5b925050508481813d83116107d7575b6107bc8183610b54565b8101031261037d5751838116810361037d5783879138610624565b503d6107b2565b82513d8a823e3d90fd5b916105ea6105f594926105dc6108049895610598368a89610c26565b166105fd565b8851638a8d142560e01b81528087018b9052602490fd5b8480fd5b50503461036a578160031936011261036a576001600160a01b0360209254169051908152f35b83346103ca57806003193601126103ca57610864610ad7565b80546001600160a01b03198116825581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b50503461036a57602036600319011261036a57602091816001600160a01b0391826108ce610a01565b168152600385522054169051908152f35b50503461036a578160031936011261036a576020906002549051908152f35b50503461036a578160031936011261036a576020906001549051908152f35b5091346103ca57806003193601126103ca57805b600280548210156109d85782526001600160a01b03817f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace015416803b15610166578280918686518094819363138cc18f60e01b83525af180156109ce576109a2575b5061099d90610b2f565b610931565b67ffffffffffffffff81116109bb57835261099d610993565b634e487b7160e01b835260418552602483fd5b84513d85823e3d90fd5b82337ffafa110fb81a7f88423c7aa6e23116f2fbbc14aa953f81c5b5bf1571647f76b98280a280f35b600435906001600160a01b0382168203610a1757565b600080fd5b9181601f84011215610a175782359167ffffffffffffffff8311610a175760208381860195010111610a1757565b919082519283825260005b848110610a76575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610a55565b600154811015610ac15760016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190600090565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03600054163303610aeb57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6000198114610b3e5760010190565b634e487b7160e01b600052601160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610b7657604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff8111610b7657601f01601f191660200190565b3d15610bd3573d90610bb982610b8c565b91610bc76040519384610b54565b82523d6000602084013e565b606090565b67ffffffffffffffff8111610b765760051b60200190565b9190811015610ac15760051b81013590605e1981360301821215610a17570190565b8051821015610ac15760209160051b010190565b929192610c3282610b8c565b91610c406040519384610b54565b829481845281830111610a17578281602093846000960137010152565b90805115610cc5576020815191016000f5906001600160a01b03821615610c8057565b60405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152606490fd5b606460405162461bcd60e51b815260206004820152602060248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152fdfea26469706673582212208b4c133ad867294eedf4124a60adf7cb9518b18bae58c7408cb9815f955089b264736f6c63430008120033";

type TapiocaWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TapiocaWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TapiocaWrapper__factory extends ContractFactory {
  constructor(...args: TapiocaWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TapiocaWrapper";
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TapiocaWrapper> {
    return super.deploy(_owner, overrides || {}) as Promise<TapiocaWrapper>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): TapiocaWrapper {
    return super.attach(address) as TapiocaWrapper;
  }
  override connect(signer: Signer): TapiocaWrapper__factory {
    return super.connect(signer) as TapiocaWrapper__factory;
  }
  static readonly contractName: "TapiocaWrapper";

  public readonly contractName: "TapiocaWrapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TapiocaWrapperInterface {
    return new utils.Interface(_abi) as TapiocaWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TapiocaWrapper {
    return new Contract(address, _abi, signerOrProvider) as TapiocaWrapper;
  }
}
