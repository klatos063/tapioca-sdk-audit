/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StargateRouterETHMock,
  StargateRouterETHMockInterface,
} from "../../mocks/StargateRouterETHMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IStargateRouterBase",
        name: "_router",
        type: "address",
      },
      {
        internalType: "contract ERC20Mock",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IStargateRouterBase",
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
        internalType: "uint16",
        name: "_dstChainId",
        type: "uint16",
      },
      {
        internalType: "address payable",
        name: "_refundAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_toAddress",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_amountLD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minAmountLD",
        type: "uint256",
      },
    ],
    name: "swapETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract ERC20Mock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234610024576100116100ca565b50506040516106866100ed823961068690f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b90601f01601f191681019081106001600160401b0382111761006057604052565b610029565b9061007961007260405190565b928361003f565b565b90565b6001600160a01b031690565b6100938161007e565b0361002457565b905051906100798261008a565b91906040838203126100245761007b906100c1818561009a565b9360200161009a565b6100e8610773803803806100dd81610065565b9283398101906100a7565b909156fe6080604052600436101561001257600080fd5b60003560e01c80631114cd2a14610042578063f887ea401461003d5763fc0c546a0361005457610205565b6101d3565b610137565b61ffff81165b0361005457565b600080fd5b9050359061006682610047565b565b6001600160a01b031690565b90565b6001600160a01b03811661004d565b9050359061006682610077565b909182601f830112156100545781359167ffffffffffffffff831161005457602001926001830284011161005457565b8061004d565b90503590610066826100c3565b9060a082820312610054576100eb8183610059565b926100f98260208501610086565b9260408101359167ffffffffffffffff83116100545761011e84610074948401610093565b93909461012e81606086016100c9565b936080016100c9565b6101516101453660046100d6565b949390939291926104c3565b604051005b0390f35b600091031261005457565b610074916008021c6001600160a01b031690565b906100749154610165565b61007460006001610179565b61007490610068906001600160a01b031682565b61007490610190565b610074906101a4565b6101bf906101ad565b9052565b60208101929161006691906101b6565b34610054576101e336600461015a565b6101566101ee610184565b604051918291826101c3565b610074600080610179565b346100545761021536600461015a565b6101566101ee6101fa565b0190565b1561022b57565b60405162461bcd60e51b815260206004820152602760248201527f53746172676174653a206d73672e76616c7565206d757374206265203e205f616044820152661b5bdd5b9d131160ca1b6064820152608490fd5b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff8211176102b857604052565b610280565b906100666102ca60405190565b9283610296565b61007460606102bd565b6102e36102d1565b600080825260208201526060604082015290565b6100746102db565b61007490610068565b61007490546102ff565b6001600160a01b0390911681526040810192916100669160200152565b6040513d6000823e3d90fd5b80151561004d565b905051906100668261033b565b906020828203126100545761007491610343565b6100746100746100749290565b6101bf90610364565b60005b83811061038d5750506000910152565b818101518382015260200161037d565b6103be6103c7602093610220936103b2815190565b80835293849260200190565b9586910161037a565b601f01601f191690565b805182526100749160608101916040906103f060208201516020850152565b015190604081840391015261039d565b90826000939282370152565b91906103c781610423816102209560209181520190565b8095610400565b979561048d6100749a966104866104a197610476610494969860408f6104af9f9a61046f9061046561012084019e600085019061ffff169052565b6020830190610371565b0190610371565b6001600160a01b031660608d0152565b60808b0152565b60a0890152565b86820360c08801526103d1565b9184830360e086015261040c565b906101008183039101526000815260200190565b9293949091946104e1346104db6104d78490565b9190565b11610224565b6104e96102f7565b946104fc6104f76000610308565b6101ad565b6340c10f1961050a306101ad565b823b156100545784926105336000809461053e61052660405190565b9788968795869460e01b90565b845260048401610312565b03925af180156106095761063a575b5081602061055e6104f76000610308565b63095ea7b39061053360006105766104f76001610308565b9361058361052660405190565b03925af180156106095761060e575b506105a06104f76001610308565b93639fbf10fc91600198863b15610054576000986105d5968a966105e0958d6105c860405190565b9e8f9d8e9c8d9b60e01b90565b8b5260048b0161042a565b03925af18015610609576105f15750565b6100669060006106018183610296565b81019061015a565b61032f565b61062e9060203d8111610633575b6106268183610296565b810190610350565b610592565b503d61061c565b61064a9060006106018183610296565b3861054d56fea2646970667358221220b18296ac88b5aff0445469e4e821d11075b10bb2d611829151d4556c8bcc4cf764736f6c63430008120033";

type StargateRouterETHMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StargateRouterETHMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StargateRouterETHMock__factory extends ContractFactory {
  constructor(...args: StargateRouterETHMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StargateRouterETHMock";
  }

  override deploy(
    _router: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StargateRouterETHMock> {
    return super.deploy(
      _router,
      _token,
      overrides || {}
    ) as Promise<StargateRouterETHMock>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_router, _token, overrides || {});
  }
  override attach(address: string): StargateRouterETHMock {
    return super.attach(address) as StargateRouterETHMock;
  }
  override connect(signer: Signer): StargateRouterETHMock__factory {
    return super.connect(signer) as StargateRouterETHMock__factory;
  }
  static readonly contractName: "StargateRouterETHMock";

  public readonly contractName: "StargateRouterETHMock";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StargateRouterETHMockInterface {
    return new utils.Interface(_abi) as StargateRouterETHMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StargateRouterETHMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StargateRouterETHMock;
  }
}
