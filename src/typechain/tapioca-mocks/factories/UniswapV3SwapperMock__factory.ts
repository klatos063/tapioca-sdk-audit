/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  UniswapV3SwapperMock,
  UniswapV3SwapperMockInterface,
} from "../UniswapV3SwapperMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
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
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct UniswapV3SwapperMock.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawFromYb",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "depositToYb",
        type: "bool",
      },
    ],
    name: "buildSwapData",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct UniswapV3SwapperMock.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct UniswapV3SwapperMock.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct UniswapV3SwapperMock.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "tokenIn",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenInId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "tokenOut",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenOutId",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapTokensData",
            name: "tokensData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shareOut",
                type: "uint256",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.SwapAmountData",
            name: "amountData",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "withdrawFromYb",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "depositToYb",
                type: "bool",
              },
            ],
            internalType: "struct UniswapV3SwapperMock.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct UniswapV3SwapperMock.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60803461005d57601f61086938819003918201601f19168301916001600160401b038311848410176100625780849260209460405283398101031261005d57516001600160a01b0381160361005d576040516107f090816100798239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260048036101561001457600080fd5b600090813560e01c80633fa2ef5e146103915780635bf66e481461037c5780637b2a8bd214610270578063e3c711a0146102505763efa84c6d1461005757600080fd5b346102485736600319016101a0811261024c5761014013610248576001600160a01b0390610164358281160361024c57610184359267ffffffffffffffff80851161024857366023860112156102485784830135946100b5866104d5565b946100c28851968761049d565b868652602096878701906024933685838301011161024457818792868c93018537890101528785978051908161022c575b505050508435958187168097036102165788516323b872dd60e01b898201523384820152306044820152608435606480830182905282529760a082018681118382101761021a578b52610146919061051f565b156101ae575b610154610509565b169287519463a9059cbb60e01b8887015233838701528660448701526044865260808601938685109085111761019e575050508552610193919061051f565b825191818352820152f35b634e487b7160e01b825260419052fd5b806101b7610509565b16803b1561021657848091848b5180948193637c928fe960e01b83528c8c8401525af1801561020c576101eb575b5061014c565b8381116101fa578852386101e5565b634e487b7160e01b8552604186528285fd5b89513d87823e3d90fd5b8480fd5b634e487b7160e01b8852604189528588fd5b61023a9499500101906104f1565b94388781806100f3565b8680fd5b5080fd5b8280fd5b8284346102485760209060c061026536610447565b505091519101358152f35b5091346102485760c0366003190112610248576103789261028f610424565b90610298610438565b936102a1610775565b506102aa610775565b946102b3610715565b92604435845260643560208501526102c9610715565b928084528684015235602083015260243560608301526102e761074b565b9315158452151560208401528452602084015281830152519182918291909161012060206040610140840195606081516001600160a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b82843461024857602090608061026536610447565b50346102485760c03660031901126102485735916001600160a01b039283811680910361024c5760243593841680940361024c57610378936103d1610424565b916103da610438565b6103e2610775565b506103eb610775565b956103f4610715565b936044358552606435602086015261040a610715565b9384528684015280602084015260608301526102e761074b565b60843590811515820361043357565b600080fd5b60a43590811515820361043357565b600319810161016081126104335761014013610433576004916101443567ffffffffffffffff92838211610433578060238301121561043357818501359384116104335760248483010111610433576024019190565b90601f8019910116810190811067ffffffffffffffff8211176104bf57604052565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116104bf57601f01601f191660200190565b90816020910312610433575180151581036104335790565b6044356001600160a01b03811681036104335790565b6001600160a01b0316604051604081019181831067ffffffffffffffff8411176104bf576105ae926040526000806020958685527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656487860152868151910182855af13d1561063d573d91610592836104d5565b926105a0604051948561049d565b83523d60008785013e610641565b805190816105bb57505050565b82806105cb9383010191016104f1565b156105d35750565b6084906040519062461bcd60e51b82526004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152fd5b6060915b919290156106a35750815115610655575090565b3b1561065e5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156106b65750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b8285106106fc575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506106d9565b604051906080820182811067ffffffffffffffff8211176104bf5760405260006060838281528260208201528260408201520152565b604051906040820182811067ffffffffffffffff8211176104bf5760405260006020838281520152565b604051906060820182811067ffffffffffffffff8211176104bf576040528161079c610715565b81526107a6610715565b602082015260406107b561074b565b91015256fea2646970667358221220af7d7dfaa3ab23945a264df2f651c8e9de37ee38319c27960aec10572c8ff54e64736f6c63430008120033";

type UniswapV3SwapperMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3SwapperMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3SwapperMock__factory extends ContractFactory {
  constructor(...args: UniswapV3SwapperMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniswapV3SwapperMock";
  }

  override deploy(
    arg0: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV3SwapperMock> {
    return super.deploy(arg0, overrides || {}) as Promise<UniswapV3SwapperMock>;
  }
  override getDeployTransaction(
    arg0: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(arg0, overrides || {});
  }
  override attach(address: string): UniswapV3SwapperMock {
    return super.attach(address) as UniswapV3SwapperMock;
  }
  override connect(signer: Signer): UniswapV3SwapperMock__factory {
    return super.connect(signer) as UniswapV3SwapperMock__factory;
  }
  static readonly contractName: "UniswapV3SwapperMock";

  public readonly contractName: "UniswapV3SwapperMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3SwapperMockInterface {
    return new utils.Interface(_abi) as UniswapV3SwapperMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3SwapperMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapV3SwapperMock;
  }
}
