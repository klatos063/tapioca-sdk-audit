/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  UniswapV3Swapper,
  UniswapV3SwapperInterface,
} from "../../Swapper/UniswapV3Swapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "contract ISwapRouter",
        name: "_swapRouter",
        type: "address",
      },
      {
        internalType: "contract IUniswapV3Factory",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressNotValid",
    type: "error",
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
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "PoolFee",
    type: "event",
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
            internalType: "struct ISwapper.SwapTokensData",
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
            internalType: "struct ISwapper.SwapAmountData",
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
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
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
            internalType: "struct ISwapper.SwapTokensData",
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
            internalType: "struct ISwapper.SwapAmountData",
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
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IUniswapV3Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDefaultDexOptions",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
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
            internalType: "struct ISwapper.SwapTokensData",
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
            internalType: "struct ISwapper.SwapAmountData",
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
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
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
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
            internalType: "struct ISwapper.SwapTokensData",
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
            internalType: "struct ISwapper.SwapAmountData",
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
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
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
    name: "poolFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
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
    inputs: [
      {
        internalType: "uint24",
        name: "_newFee",
        type: "uint24",
      },
    ],
    name: "setPoolFee",
    outputs: [],
    stateMutability: "nonpayable",
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
            internalType: "struct ISwapper.SwapTokensData",
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
            internalType: "struct ISwapper.SwapAmountData",
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
            internalType: "struct ISwapper.YieldBoxData",
            name: "yieldBoxData",
            type: "tuple",
          },
        ],
        internalType: "struct ISwapper.SwapData",
        name: "swapData",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
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
  {
    inputs: [],
    name: "swapRouter",
    outputs: [
      {
        internalType: "contract ISwapRouter",
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
  "0x60e0346200019357601f6200268138819003918201601f191683019291906001600160401b0384118385101762000198578160609284926040968752833981010312620001935780516001600160a01b0391908281168082036200019357602083015192848416908185036200019357860151948086169283870362000193576000543360018060a01b03198216176000558851923391167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a360018055610bb862ffffff1960025416176002551562000184575015620001735715620001625760805260a05260c052516124d29081620001af82396080518181816102650152818161046e01528181610701015281816107ad01528181610853015281816108ad015281816109750152610fe4015260a05181818161029b0152818161040a0152610da6015260c0518181816109f701528181610d6101526110690152f35b835163d23f952160e01b8152600490fd5b845163d23f952160e01b8152600490fd5b63d23f952160e01b8152600490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b60003560e01c908163089fe6aa14611351575080631a163210146113215780633fa2ef5e1461128c5780635bf66e4814610fd2578063715018a614610f7957806373dd250c14610f0e5780637b2a8bd214610dfe5780638da5cb5b14610dd5578063c31c9c0714610d90578063c45a015514610d4b578063e3c711a014610960578063efa84c6d1461017c5763f2fde38b146100ae57600080fd5b34610177576020366003190112610177576100c76113b1565b6100cf6114ac565b6001600160a01b0390811690811561012357600054826bffffffffffffffffffffffff60a01b821617600055167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3005b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b600080fd5b346101775736600319016101a08112610177576101401361017757610164356001600160a01b038116900361017757610184356001600160401b03811161017757366023820112156101775780600401356101d681611491565b916101e46040519384611470565b8183523660248383010111610177578160009260246020930183860137830101528060006004356001600160a01b0381168082036101775715801590610943575b1561083457916044356001600160a01b038116810361017757935b60006084358015801581610829575b156106ad575061028991505b60a43590602435877f0000000000000000000000000000000000000000000000000000000000000000611957565b60405163095ea7b360e01b60208201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031660248201526044810182905290929060009081906102ee81606481015b03601f198101835282611470565b60208151910182895af161030061190f565b8161067e575b5015610654575115610646575b602081805181010312610177576020015162ffffff600254166103346118e9565b1561063c5730905b60405195866101008101106001600160401b036101008901111761062657610100870160409081526001600160a01b0391821688528882166020808a01918252828a0194855294831660608a0190815260808a0196875260a08a019788526101443560c08b01908152600060e08c01818152945163414bf38960e01b81529b51861660048d01529251851660248c0152945162ffffff1660448b015251831660648a015294516084890152945160a4880152905160c48701529251831660e4860152918491610104918391907f0000000000000000000000000000000000000000000000000000000000000000165af1918215610561576000926105f2575b506104446118e9565b610459575b6040809350519182526020820152f35b5060405163095ea7b360e01b602082019081527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031660248301819052604483018490529360009283929083906104ba81606481016102e0565b51925af16104c661190f565b816105c3575b501561056d5760408051634d4d7cbd60e11b8152606480356004830152306024830152610164356001600160a01b0316604483015281018390526000608482018190529093849160a4918391905af1801561056157604092600091610532575b50610449565b6105529150833d851161055a575b61054a8183611470565b8101906118f9565b90508361052c565b503d610540565b6040513d6000823e3d90fd5b60405162461bcd60e51b815260206004820152602860248201527f42617365537761707065723a3a73616665417070726f76653a20617070726f76604482015267194819985a5b195960c21b6064820152608490fd5b80518015925082156105d8575b5050836104cc565b6105eb925060208091830101910161193f565b83806105d0565b9091506020813d60201161061e575b8161060e60209383611470565b810103126101775751908361043b565b3d9150610601565b634e487b7160e01b600052604160045260246000fd5b610164359061033c565b5061064f6115a6565b610313565b60405162461bcd60e51b8152602060048201526002602482015261534160f01b6044820152606490fd5b8051801592508215610693575b505087610306565b6106a6925060208091830101910161193f565b878061068b565b906024359182610777575b505050606435806106ce575b506102899061025b565b60c43561076d5760405163442c159960e01b8152600481019190915260e4356024820152600060448201526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa801561056157610742575b50610289905b906106c4565b602090813d8311610766575b6107588183611470565b810103126101775786610736565b503d61074e565b506102899061073c565b9192509015610822575060405163442c159960e01b8152600481019190915260a4356024820152600060448201526020816064817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa908115610561576000916107f0575b505b8680806106b8565b90506020813d60201161081a575b8161080b60209383611470565b810103126101775751866107e6565b3d91506107fe565b90506107e8565b5060c435151561024f565b50604051630cf35bdd60e41b81526024803560048301526080908290817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa90811561056157600091610920575b50604051630cf35bdd60e41b815260643560048201529092906080816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa908115610561576000916108ed575b5093610240565b61090f915060803d608011610919575b6109078183611470565b810190611609565b50509050856108e6565b503d6108fd565b610939915060803d608011610919576109078183611470565b505090508461088c565b506044356001600160a01b03811690819003610177571515610225565b34610177576109b7610971366113e5565b50507f000000000000000000000000000000000000000000000000000000000000000061099e8183611642565b9390916020936060810135906080868201359101611736565b600254604051630b4c774160e11b81526001600160a01b038581166004830152878116602483015262ffffff9092166044820152919592509084816064817f000000000000000000000000000000000000000000000000000000000000000086165afa90811561056157600091610d16575b508160405191610a388361143a565b600283528683016040368237603c610a4f85611bb1565b526000610a5b85611bd4565b5260405192839163883bdbfd60e01b8352602495868401908b60048601525180915260448401919060005b8c828210610cf65750505050600093918380920392165afa90811561056157600090600092610bed575b50610ac4610abd82611bd4565b5191611bb1565b5160060b9060060b0390667fffffffffffff8213667fffffffffffff19831217610bd85783610afe81610af684611bd4565b511692611bb1565b51169003928311610bc35760060b916000603c840560020b93600081129081610baf575b50610b86575b80610b735750851b640100000000600160c01b031615610b5f57506001600160801b03610b5794951690611bf7565b604051908152f35b634e487b7160e01b60009081526012600452fd5b634e487b7160e01b815260116004529050fd5b92627fffff198114610b9c576000190192610b28565b634e487b7160e01b845260116004528284fd5b915050603c6000910760060b151589610b22565b50634e487b7160e01b60009081526011600452fd5b82634e487b7160e01b60005260116004526000fd5b9150503d806000833e610c008183611470565b8101906040818303126101775780516001600160401b03908181116101775782019183601f8401121561017757825192610c3984611b9a565b93610c476040519586611470565b8085528a8086019160051b83010191868311610177578b01905b828210610cdd575050508881015191821161017757019180601f84011215610177578251610c8e81611b9a565b93610c9c6040519586611470565b818552898086019260051b820101928311610177578901905b828210610cc55750505088610ab0565b81518781168103610177578152908901908901610cb5565b81518060060b8103610177578152908b01908b01610c61565b835163ffffffff1685528896508a95509384019390920191600101610a86565b90508481813d8311610d44575b610d2d8183611470565b8101031261017757610d3e906115e1565b86610a29565b503d610d23565b34610177576000366003190112610177576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610177576000366003190112610177576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610177576000366003190112610177576000546040516001600160a01b039091168152602090f35b346101775760c036600319011261017757610f0a610e1a6113c7565b610e226113d6565b90610e2b611562565b50610e34611562565b91610e3d611504565b9060443582526064356020830152610e53611504565b90600082526000604083015260043560208301526024356060830152610e77611539565b93151584521515602084015283526020830152604082015260405191829182919091610120602060406101408401956060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b0390f35b346101775760203660031901126101775760043562ffffff80821680920361017757610f386114ac565b7f2bff118b9b9e3deb4fc5204e6ba828351c954685d0b119d0e21add79f878339960406002549281519084168152846020820152a162ffffff191617600255005b3461017757600036600319011261017757610f926114ac565b600080546001600160a01b0319811682556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b3461017757610fe0366113e5565b50507f00000000000000000000000000000000000000000000000000000000000000009061102a6110118383611642565b9190936020936060810135906080868201359101611736565b50600254604051630b4c774160e11b81526001600160a01b038681166004830152848116602483015262ffffff909216604482015291949184816064817f000000000000000000000000000000000000000000000000000000000000000086165afa90811561056157600091611257575b5081604051916110aa8361143a565b600283528683016040368237603c6110c185611bb1565b5260006110cd85611bd4565b5260405192839163883bdbfd60e01b8352602495868401908b60048601525180915260448401919060005b8c8282106112375750505050600093918380920392165afa9081156105615760009060009261112e5750610ac4610abd82611bd4565b9150503d806000833e6111418183611470565b8101906040818303126101775780516001600160401b03908181116101775782019183601f840112156101775782519261117a84611b9a565b936111886040519586611470565b8085528a8086019160051b83010191868311610177578b01905b82821061121e575050508881015191821161017757019180601f840112156101775782516111cf81611b9a565b936111dd6040519586611470565b818552898086019260051b820101928311610177578901905b8282106112065750505088610ab0565b815187811681036101775781529089019089016111f6565b81518060060b8103610177578152908b01908b016111a2565b835163ffffffff1685528896508a955093840193909201916001016110f8565b90508481813d8311611285575b61126e8183611470565b810103126101775761127f906115e1565b8661109b565b503d611264565b346101775760c0366003190112610177576112a56113b1565b6001600160a01b0390602435828116919082900361017757610f0a926112c96113c7565b916112d26113d6565b6112da611562565b506112e3611562565b946112ec611504565b9360443585526064356020860152611302611504565b9316835260408301526000602083015260006060830152610e77611539565b3461017757600036600319011261017757610f0a61133d6115a6565b604051918291602083526020830190611371565b346101775760003660031901126101775760209062ffffff600254168152f35b919082519283825260005b84811061139d575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520161137c565b600435906001600160a01b038216820361017757565b60843590811515820361017757565b60a43590811515820361017757565b60031981016101608112610177576101401361017757600491610144356001600160401b0392838211610177578060238301121561017757818501359384116101775760248483010111610177576024019190565b606081019081106001600160401b0382111761062657604052565b604081019081106001600160401b0382111761062657604052565b90601f801991011681019081106001600160401b0382111761062657604052565b6001600160401b03811161062657601f01601f191660200190565b6000546001600160a01b031633036114c057565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b60405190608082018281106001600160401b038211176106265760405260006060838281528260208201528260408201520152565b60405190604082018281106001600160401b038211176106265760405260006020838281520152565b60405190606082018281106001600160401b038211176106265760405281611588611504565b8152611592611504565b602082015260406115a1611539565b910152565b610e1042018042116115cb57604051906020820152602081526115c881611455565b90565b634e487b7160e01b600052601160045260246000fd5b51906001600160a01b038216820361017757565b356001600160a01b03811681036101775790565b91908260809103126101775781516005811015610177579161162d602082016115e1565b91606061163c604084016115e1565b92015190565b91906001600160a01b039081611657856115f5565b1615801590611720575b1561167d5750506115c86040611676846115f5565b93016115f5565b1691604051630cf35bdd60e41b90818152602083013560048201526080928382602481895afa9182156105615760609385936024926000916116ff575b509760405195869485938452013560048301525afa918215610561576000926116e257505090565b6116f89250803d10610919576109078183611470565b5050905090565b6117169150853d8711610919576109078183611470565b50509050386116ba565b508161172e604086016115f5565b161515611661565b9392843592600092839283929186158015816118dc575b15611762575050505050505060409092013590565b8192939496999598979161183a575b50505081611780575b50505050565b90919293945060408301358015600014611830575060405163442c159960e01b8152600481019290925260609092013560248201526044810183905290602090829060649082906001600160a01b03165afa9182156118245780926117ed575b50505b903880808061177a565b9091506020823d821161181c575b8161180860209383611470565b8101031261181957505138806117e0565b80fd5b3d91506117fb565b604051903d90823e3d90fd5b93505050506117e3565b9298509091156118d5575060405163442c159960e01b81526004810191909152602083810135602483015260448201859052816064816001600160a01b038b165afa9081156118ca578491611895575b505b95388080611771565b90506020813d82116118c2575b816118af60209383611470565b810103126118be57513861188a565b8380fd5b3d91506118a2565b6040513d86823e3d90fd5b905061188c565b5060408a0135151561174d565b6101243580151581036101775790565b9190826040910312610177576020825192015190565b3d1561193a573d9061192082611491565b9161192e6040519384611470565b82523d6000602084013e565b606090565b90816020910312610177575180151581036101775790565b939190929361010435801515810361017757611a8c5750506040516323b872dd60e01b6020820190815233602483015230604483015260648083018690528252909260a0840192506001600160a01b0316906001600160401b038311848410176106265760008091611a0e95856040526119d086611455565b602086527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656460c0820152519082855af1611a0861190f565b91611afd565b80519081611a1b57505090565b602080611a2c93830101910161193f565b15611a345790565b60405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608490fd5b6040935090600060a492859694965196879586946311a5cc7760e31b865260048601523060248601523060448601526064850152608484015260018060a01b03165af190811561056157600091611ae1575090565b611af9915060403d811161055a5761054a8183611470565b5090565b91929015611b5f5750815115611b11575090565b3b15611b1a5790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b825190915015611b725750805190602001fd5b60405162461bcd60e51b815260206004820152908190611b96906024830190611371565b0390fd5b6001600160401b0381116106265760051b60200190565b805115611bbe5760200190565b634e487b7160e01b600052603260045260246000fd5b805160011015611bbe5760400190565b818102929181159184041417156115cb57565b9291909260020b906000821260001461217e57600160ff1b82146115cb57816000035b620d89e88111612155576001811615612143576001600160881b036ffffcb933bd6fad37aa2d162d1a5940015b169260028216612117575b6004918281166120eb575b600881166120bf575b60108116612093575b60208116612067575b6040811661203b575b608090818116612010575b6101008116611fe5575b6102008116611fba575b6104008116611f8f575b6108008116611f64575b6110008116611f39575b6120008116611f0e575b6140008116611ee3575b6180008116611eb8575b620100008116611e8d575b620200008116611e63575b620400008116611e25575b6208000016611de6575b50600012611dc0575b63ffffffff8360201c931615600014611db75760ff60005b168301809311611da257506001600160801b03916001600160a01b039081908116848111611d795780611d5a91611be4565b941691161015611d6f576115c892169061242b565b6115c892166123d0565b80611d8391612184565b941691161015611d98576115c8921690612361565b6115c8921661220d565b601190634e487b7160e01b6000525260246000fd5b60ff6001611d28565b918015611dd1576000190491611d10565b601283634e487b7160e01b6000525260246000fd5b6b048a170391f7dc42444e8fa294919491828102928184041490151715611e10571c926000611d07565b601183634e487b7160e01b6000525260246000fd5b946d2216e584f5fa1ea926041bedfe9890818102918183041490151715611e4e57811c94611cfd565b601184634e487b7160e01b6000525260246000fd5b946e5d6af8dedb81196699c329225ee60490818102918183041490151715611e4e57811c94611cf2565b946f09aa508b5b7a84e1c677de54f3e99bc990818102918183041490151715611e4e57811c94611ce7565b946f31be135f97d08fd981231505542fcfa690818102918183041490151715611e4e57811c94611cdc565b946f70d869a156d2a1b890bb3df62baf32f790818102918183041490151715611e4e57811c94611cd2565b946fa9f746462d870fdf8a65dc1f90e061e590818102918183041490151715611e4e57811c94611cc8565b946fd097f3bdfd2022b8845ad8f792aa582590818102918183041490151715611e4e57811c94611cbe565b946fe7159475a2c29b7443b29c7fa6e889d990818102918183041490151715611e4e57811c94611cb4565b946ff3392b0822b70005940c7a398e4b70f390818102918183041490151715611e4e57811c94611caa565b946ff987a7253ac413176f2b074cf7815e5490818102918183041490151715611e4e57811c94611ca0565b946ffcbe86c7900a88aedcffc83b479aa3a490818102918183041490151715611e4e57811c94611c96565b946ffe5dee046a99a2a811c461f1969c305390818102918183041490151715611e4e57811c94611c8c565b936fff2ea16466c96a3843ec78b326b5286190818102918183041490151715611e105760801c93611c81565b936fff973b41fa98c081472e6896dfb254c090818102918183041490151715611e105760801c93611c78565b936fffcb9843d60f6159c9db58835c92664490818102918183041490151715611e105760801c93611c6f565b936fffe5caca7e10e4e61c3624eaa0941cd090818102918183041490151715611e105760801c93611c66565b936ffff2e50f5f656932ef12357cf3c7fdcc90818102918183041490151715611e105760801c93611c5d565b926ffff97272373d413259a46990580e213a908181029181830414901517156115cb5760801c92611c52565b6001600160881b03600160801b611c47565b60405162461bcd60e51b81526020600482015260016024820152601560fa1b6044820152606490fd5b81611c1a565b600019828209908281029081808410930393838503936000951461220257600160401b91848311156121fe57099181831184818303956121ea57508460c01b948504600160c01b14911417156115cb570360401c17808004600114811517156115cb5790565b634e487b7160e01b81526011600452602490fd5b8580fd5b505060401c92915050565b600160801b9291600019828509938260801b92838087109603958087039614612352578583111561017757829109908019600181018091116115cb57811680910491612268600096600184808a030401908684119003611be4565b9280600302966003880482036121ea5760028098186122878184611be4565b89039089821161233e579061229b91611be4565b6122a58184611be4565b89039089821161233e57906122b991611be4565b6122c38184611be4565b89039089821161233e57906122d791611be4565b6122e18184611be4565b89039089821161233e57906122f591611be4565b6122ff8184611be4565b89039089821161233e5761231d9161231691611be4565b8093611be4565b88039788116121ea57506115c8959661233591611be4565b93030417611be4565b634e487b7160e01b83526011600452602483fd5b50508092935015610177570490565b600019828209828202908180821091039381850391600095146123c557600160801b93828511156121fe5790849109928284119085828403966121ea57508560801b95860414911417156115cb570360801c17808004600114811517156115cb5790565b505060801c92915050565b600160c01b9291600019828509938260c01b92838087109603958087039614612352578583111561017757829109908019600181018091116115cb57811680910491612268600096600184808a030401908684119003611be4565b600019828209908281029081808410930393838503936000951461249157600160c01b91848311156121fe57099181831184818303956121ea57508460401b948504600160401b14911417156115cb570360c01c17808004600114811517156115cb5790565b505060c01c9291505056fea264697066735822122000df16e41b36acd5f2a5ed23c17256c5046604a5f300559276be36b696103aa564736f6c63430008120033";

type UniswapV3SwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3SwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3Swapper__factory extends ContractFactory {
  constructor(...args: UniswapV3SwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniswapV3Swapper";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV3Swapper> {
    return super.deploy(
      _yieldBox,
      _swapRouter,
      _factory,
      overrides || {}
    ) as Promise<UniswapV3Swapper>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _swapRouter: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _swapRouter,
      _factory,
      overrides || {}
    );
  }
  override attach(address: string): UniswapV3Swapper {
    return super.attach(address) as UniswapV3Swapper;
  }
  override connect(signer: Signer): UniswapV3Swapper__factory {
    return super.connect(signer) as UniswapV3Swapper__factory;
  }
  static readonly contractName: "UniswapV3Swapper";

  public readonly contractName: "UniswapV3Swapper";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3SwapperInterface {
    return new utils.Interface(_abi) as UniswapV3SwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3Swapper {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Swapper;
  }
}
