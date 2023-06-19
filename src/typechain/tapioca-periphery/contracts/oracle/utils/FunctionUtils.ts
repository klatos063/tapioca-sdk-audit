/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface FunctionUtilsInterface extends utils.Interface {
  functions: {
    "BASE_PARAMS()": FunctionFragment;
    "BASE_TOKENS()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASE_PARAMS"
      | "BASE_PARAMS()"
      | "BASE_TOKENS"
      | "BASE_TOKENS()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BASE_PARAMS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_PARAMS()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_TOKENS()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BASE_PARAMS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_PARAMS()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_TOKENS()",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FunctionUtils extends BaseContract {
  contractName: "FunctionUtils";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FunctionUtilsInterface;

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
    BASE_PARAMS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "BASE_PARAMS()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    BASE_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "BASE_TOKENS()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BASE_PARAMS(overrides?: CallOverrides): Promise<BigNumber>;

  "BASE_PARAMS()"(overrides?: CallOverrides): Promise<BigNumber>;

  BASE_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  "BASE_TOKENS()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BASE_PARAMS(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE_PARAMS()"(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE_TOKENS()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    BASE_PARAMS(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE_PARAMS()"(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    "BASE_TOKENS()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_PARAMS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BASE_PARAMS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BASE_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BASE_TOKENS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}