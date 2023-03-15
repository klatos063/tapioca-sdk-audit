/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC20Mock, ERC20MockInterface } from "../../mocks/ERC20Mock";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "account",
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
    stateMutability: "pure",
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
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
] as const;

const _bytecode =
  "0x6080604052346200031d5762000d3a803803806200001d8162000322565b9283398101906040818303126200031d5780516001600160401b03908181116200031d57836200004f91840162000348565b91602093848201518381116200031d576200006b920162000348565b82518281116200021d576003918254916001958684811c9416801562000312575b88851014620002fc578190601f94858111620002a6575b5088908583116001146200023f5760009262000233575b505060001982861b1c191690861b1783555b80519384116200021d5760049586548681811c9116801562000212575b82821014620001fd57838111620001b2575b508092851160011462000144575093839491849260009562000138575b50501b92600019911b1c19161790555b60405161097f9081620003bb8239f35b01519350388062000118565b92919084601f1981168860005285600020956000905b898383106200019757505050106200017c575b50505050811b01905562000128565b01519060f884600019921b161c19169055388080806200016d565b8587015189559097019694850194889350908101906200015a565b87600052816000208480880160051c820192848910620001f3575b0160051c019087905b828110620001e6575050620000fb565b60008155018790620001d6565b92508192620001cd565b602288634e487b7160e01b6000525260246000fd5b90607f1690620000e9565b634e487b7160e01b600052604160045260246000fd5b015190503880620000ba565b90889350601f19831691876000528a6000209260005b8c8282106200028f575050841162000276575b505050811b018355620000cc565b015160001983881b60f8161c1916905538808062000268565b8385015186558c9790950194938401930162000255565b90915085600052886000208580850160051c8201928b8610620002f2575b918a91869594930160051c01915b828110620002e2575050620000a3565b600081558594508a9101620002d2565b92508192620002c4565b634e487b7160e01b600052602260045260246000fd5b93607f16936200008c565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200021d57604052565b919080601f840112156200031d5782516001600160401b0381116200021d576020906200037e601f8201601f1916830162000322565b928184528282870101116200031d5760005b818110620003a657508260009394955001015290565b85810183015184820184015282016200039056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461056457508163095ea7b31461053a57816318160ddd1461051b57816323b872dd14610451578163313ce5671461043557816339509351146103e557816340c10f191461032257816370a08231146102eb57816395d89b41146101cc578163a457c2d71461012457508063a9059cbb146100f45763dd62ed3e146100a957600080fd5b346100f057806003193601126100f057806020926100c5610685565b6100cd6106a0565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b50346100f057806003193601126100f05760209061011d610113610685565b60243590336106d9565b5160018152f35b905082346101c957826003193601126101c95761013f610685565b918360243592338152600160205281812060018060a01b03861682526020522054908282106101785760208561011d8585038733610847565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b8383346100f057816003193601126100f057805190828454600181811c908083169283156102e1575b60209384841081146102ce578388529081156102b2575060011461025d575b505050829003601f01601f191682019267ffffffffffffffff84118385101761024a575082918261024692528261063c565b0390f35b634e487b7160e01b815260418552602490fd5b8787529192508591837f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b83851061029e5750505050830101858080610214565b805488860183015293019284908201610288565b60ff1916878501525050151560051b8401019050858080610214565b634e487b7160e01b895260228a52602489fd5b91607f16916101f5565b5050346100f05760203660031901126100f05760209181906001600160a01b03610313610685565b16815280845220549051908152f35b919050346103e157806003193601126103e15761033d610685565b6001600160a01b0316916024359190831561039f57506020827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9261038587956002546106b6565b60025585855284835280852082815401905551908152a380f35b6020606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b8280fd5b5050346100f057806003193601126100f05761011d60209261042e610408610685565b338352600186528483206001600160a01b038216845286529184902054602435906106b6565b9033610847565b5050346100f057816003193601126100f0576020905160128152f35b839150346100f05760603660031901126100f05761046d610685565b6104756106a0565b91846044359460018060a01b0384168152600160205281812033825260205220549060001982036104af575b60208661011d8787876106d9565b8482106104d857509183916104cd6020969561011d95033383610847565b9193948193506104a1565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346100f057816003193601126100f0576020906002549051908152f35b5050346100f057806003193601126100f05760209061011d61055a610685565b6024359033610847565b849084346103e157826003193601126103e15782600354600181811c90808316928315610632575b60209384841081146102ce578388529081156102b257506001146105dc57505050829003601f01601f191682019267ffffffffffffffff84118385101761024a575082918261024692528261063c565b600387529192508591837fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b83851061061e5750505050830101858080610214565b805488860183015293019284908201610608565b91607f169161058c565b6020808252825181830181905290939260005b82811061067157505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161064f565b600435906001600160a01b038216820361069b57565b600080fd5b602435906001600160a01b038216820361069b57565b919082018092116106c357565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b039081169182156107f457169182156107a35760008281528060205260408120549180831061074f57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b039081169182156108f857169182156108a85760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fdfea2646970667358221220bead435dc9fcaeb37140f6d03dc262641d332472663f918f074a93a3f83173b164736f6c63430008120033";

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
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Mock> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
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
