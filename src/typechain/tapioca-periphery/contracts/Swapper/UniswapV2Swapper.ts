/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace ISwapper {
  export type SwapTokensDataStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenInId: PromiseOrValue<BigNumberish>;
    tokenOut: PromiseOrValue<string>;
    tokenOutId: PromiseOrValue<BigNumberish>;
  };

  export type SwapTokensDataStructOutput = [
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    tokenIn: string;
    tokenInId: BigNumber;
    tokenOut: string;
    tokenOutId: BigNumber;
  };

  export type SwapAmountDataStruct = {
    amountIn: PromiseOrValue<BigNumberish>;
    shareIn: PromiseOrValue<BigNumberish>;
    amountOut: PromiseOrValue<BigNumberish>;
    shareOut: PromiseOrValue<BigNumberish>;
  };

  export type SwapAmountDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    amountIn: BigNumber;
    shareIn: BigNumber;
    amountOut: BigNumber;
    shareOut: BigNumber;
  };

  export type YieldBoxDataStruct = {
    withdrawFromYb: PromiseOrValue<boolean>;
    depositToYb: PromiseOrValue<boolean>;
  };

  export type YieldBoxDataStructOutput = [boolean, boolean] & {
    withdrawFromYb: boolean;
    depositToYb: boolean;
  };

  export type SwapDataStruct = {
    tokensData: ISwapper.SwapTokensDataStruct;
    amountData: ISwapper.SwapAmountDataStruct;
    yieldBoxData: ISwapper.YieldBoxDataStruct;
  };

  export type SwapDataStructOutput = [
    ISwapper.SwapTokensDataStructOutput,
    ISwapper.SwapAmountDataStructOutput,
    ISwapper.YieldBoxDataStructOutput
  ] & {
    tokensData: ISwapper.SwapTokensDataStructOutput;
    amountData: ISwapper.SwapAmountDataStructOutput;
    yieldBoxData: ISwapper.YieldBoxDataStructOutput;
  };
}

export interface UniswapV2SwapperInterface extends utils.Interface {
  functions: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)": FunctionFragment;
    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)": FunctionFragment;
    "factory()": FunctionFragment;
    "getDefaultDexOptions()": FunctionFragment;
    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)": FunctionFragment;
    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)": FunctionFragment;
    "swapRouter()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "yieldBox()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buildSwapData(address,address,uint256,uint256,bool,bool)"
      | "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"
      | "factory"
      | "factory()"
      | "getDefaultDexOptions"
      | "getDefaultDexOptions()"
      | "getInputAmount"
      | "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"
      | "getOutputAmount"
      | "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "swap"
      | "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"
      | "swapRouter"
      | "swapRouter()"
      | "transferOwnership"
      | "transferOwnership(address)"
      | "yieldBox"
      | "yieldBox()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buildSwapData(address,address,uint256,uint256,bool,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDefaultDexOptions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDefaultDexOptions()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInputAmount",
    values: [ISwapper.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    values: [ISwapper.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutputAmount",
    values: [ISwapper.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    values: [ISwapper.SwapDataStruct, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      ISwapper.SwapDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)",
    values: [
      ISwapper.SwapDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "yieldBox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "yieldBox()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "buildSwapData(address,address,uint256,uint256,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDefaultDexOptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDefaultDexOptions()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutputAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapRouter()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldBox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "yieldBox()", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface UniswapV2Swapper extends BaseContract {
  contractName: "UniswapV2Swapper";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniswapV2SwapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[ISwapper.SwapDataStructOutput]>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[ISwapper.SwapDataStructOutput]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    getDefaultDexOptions(overrides?: CallOverrides): Promise<[string]>;

    "getDefaultDexOptions()"(overrides?: CallOverrides): Promise<[string]>;

    getInputAmount(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountIn: BigNumber }>;

    getOutputAmount(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      swapData: ISwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: ISwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<[string]>;

    "swapRouter()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<[string]>;

    "yieldBox()"(overrides?: CallOverrides): Promise<[string]>;
  };

  "buildSwapData(address,address,uint256,uint256,bool,bool)"(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amountIn: PromiseOrValue<BigNumberish>,
    shareIn: PromiseOrValue<BigNumberish>,
    withdrawFromYb: PromiseOrValue<boolean>,
    depositToYb: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<ISwapper.SwapDataStructOutput>;

  "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
    tokenInId: PromiseOrValue<BigNumberish>,
    tokenOutId: PromiseOrValue<BigNumberish>,
    amountIn: PromiseOrValue<BigNumberish>,
    shareIn: PromiseOrValue<BigNumberish>,
    withdrawFromYb: PromiseOrValue<boolean>,
    depositToYb: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<ISwapper.SwapDataStructOutput>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  getDefaultDexOptions(overrides?: CallOverrides): Promise<string>;

  "getDefaultDexOptions()"(overrides?: CallOverrides): Promise<string>;

  getInputAmount(
    swapData: ISwapper.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
    swapData: ISwapper.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOutputAmount(
    swapData: ISwapper.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
    swapData: ISwapper.SwapDataStruct,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    swapData: ISwapper.SwapDataStruct,
    amountOutMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
    swapData: ISwapper.SwapDataStruct,
    amountOutMin: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapRouter(overrides?: CallOverrides): Promise<string>;

  "swapRouter()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  yieldBox(overrides?: CallOverrides): Promise<string>;

  "yieldBox()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<ISwapper.SwapDataStructOutput>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<ISwapper.SwapDataStructOutput>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    getDefaultDexOptions(overrides?: CallOverrides): Promise<string>;

    "getDefaultDexOptions()"(overrides?: CallOverrides): Promise<string>;

    getInputAmount(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutputAmount(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    swap(
      swapData: ISwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountOut: BigNumber; shareOut: BigNumber }
    >;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: ISwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountOut: BigNumber; shareOut: BigNumber }
    >;

    swapRouter(overrides?: CallOverrides): Promise<string>;

    "swapRouter()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    yieldBox(overrides?: CallOverrides): Promise<string>;

    "yieldBox()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDefaultDexOptions(overrides?: CallOverrides): Promise<BigNumber>;

    "getDefaultDexOptions()"(overrides?: CallOverrides): Promise<BigNumber>;

    getInputAmount(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutputAmount(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      swapData: ISwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: ISwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapRouter(overrides?: CallOverrides): Promise<BigNumber>;

    "swapRouter()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    yieldBox(overrides?: CallOverrides): Promise<BigNumber>;

    "yieldBox()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    "buildSwapData(address,address,uint256,uint256,bool,bool)"(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "buildSwapData(uint256,uint256,uint256,uint256,bool,bool)"(
      tokenInId: PromiseOrValue<BigNumberish>,
      tokenOutId: PromiseOrValue<BigNumberish>,
      amountIn: PromiseOrValue<BigNumberish>,
      shareIn: PromiseOrValue<BigNumberish>,
      withdrawFromYb: PromiseOrValue<boolean>,
      depositToYb: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDefaultDexOptions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDefaultDexOptions()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInputAmount(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getInputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOutputAmount(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOutputAmount(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),bytes)"(
      swapData: ISwapper.SwapDataStruct,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      swapData: ISwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "swap(((address,uint256,address,uint256),(uint256,uint256,uint256,uint256),(bool,bool)),uint256,address,bytes)"(
      swapData: ISwapper.SwapDataStruct,
      amountOutMin: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "swapRouter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    yieldBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "yieldBox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
