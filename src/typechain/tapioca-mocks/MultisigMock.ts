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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface MultisigMockInterface extends utils.Interface {
  functions: {
    "addOwner(address)": FunctionFragment;
    "confirmTransaction(uint256)": FunctionFragment;
    "executeTransaction(uint256)": FunctionFragment;
    "getOwners()": FunctionFragment;
    "getTransaction(uint256)": FunctionFragment;
    "getTransactionCount()": FunctionFragment;
    "isConfirmed(uint256,address)": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "numConfirmationsRequired()": FunctionFragment;
    "owners(uint256)": FunctionFragment;
    "submitTransaction(address,uint256,bytes)": FunctionFragment;
    "transactions(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addOwner"
      | "addOwner(address)"
      | "confirmTransaction"
      | "confirmTransaction(uint256)"
      | "executeTransaction"
      | "executeTransaction(uint256)"
      | "getOwners"
      | "getOwners()"
      | "getTransaction"
      | "getTransaction(uint256)"
      | "getTransactionCount"
      | "getTransactionCount()"
      | "isConfirmed"
      | "isConfirmed(uint256,address)"
      | "isOwner"
      | "isOwner(address)"
      | "numConfirmationsRequired"
      | "numConfirmationsRequired()"
      | "owners"
      | "owners(uint256)"
      | "submitTransaction"
      | "submitTransaction(address,uint256,bytes)"
      | "transactions"
      | "transactions(uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addOwner(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmTransaction(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeTransaction(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getOwners", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getOwners()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransaction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransaction(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionCount()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmed",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isConfirmed(uint256,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOwner(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "numConfirmationsRequired",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numConfirmationsRequired()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "owners",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "owners(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitTransaction",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "submitTransaction(address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transactions",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transactions(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addOwner(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmTransaction(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeTransaction(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOwners()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransaction(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionCount()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConfirmed(uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isOwner(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numConfirmationsRequired",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numConfirmationsRequired()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "owners(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitTransaction(address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactions(uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MultisigMock extends BaseContract {
  contractName: "MultisigMock";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MultisigMockInterface;

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
    addOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addOwner(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "confirmTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "executeTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getOwners(overrides?: CallOverrides): Promise<[string[]]>;

    "getOwners()"(overrides?: CallOverrides): Promise<[string[]]>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    "getTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    getTransactionCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getTransactionCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isConfirmed(uint256,address)"(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOwner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isOwner(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    numConfirmationsRequired(overrides?: CallOverrides): Promise<[BigNumber]>;

    "numConfirmationsRequired()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owners(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "owners(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    submitTransaction(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "submitTransaction(address,uint256,bytes)"(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transactions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    "transactions(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;
  };

  addOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addOwner(address)"(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  confirmTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "confirmTransaction(uint256)"(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "executeTransaction(uint256)"(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getOwners(overrides?: CallOverrides): Promise<string[]>;

  "getOwners()"(overrides?: CallOverrides): Promise<string[]>;

  getTransaction(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      to: string;
      value: BigNumber;
      data: string;
      executed: boolean;
      numConfirmations: BigNumber;
    }
  >;

  "getTransaction(uint256)"(
    _txIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      to: string;
      value: BigNumber;
      data: string;
      executed: boolean;
      numConfirmations: BigNumber;
    }
  >;

  getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getTransactionCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  isConfirmed(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isConfirmed(uint256,address)"(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOwner(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isOwner(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numConfirmationsRequired(overrides?: CallOverrides): Promise<BigNumber>;

  "numConfirmationsRequired()"(overrides?: CallOverrides): Promise<BigNumber>;

  owners(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "owners(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  submitTransaction(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "submitTransaction(address,uint256,bytes)"(
    _to: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transactions(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      to: string;
      value: BigNumber;
      data: string;
      executed: boolean;
      numConfirmations: BigNumber;
    }
  >;

  "transactions(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      to: string;
      value: BigNumber;
      data: string;
      executed: boolean;
      numConfirmations: BigNumber;
    }
  >;

  callStatic: {
    addOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "addOwner(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "confirmTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "executeTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getOwners(overrides?: CallOverrides): Promise<string[]>;

    "getOwners()"(overrides?: CallOverrides): Promise<string[]>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    "getTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getTransactionCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isConfirmed(uint256,address)"(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOwner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isOwner(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numConfirmationsRequired(overrides?: CallOverrides): Promise<BigNumber>;

    "numConfirmationsRequired()"(overrides?: CallOverrides): Promise<BigNumber>;

    owners(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "owners(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    submitTransaction(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "submitTransaction(address,uint256,bytes)"(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transactions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;

    "transactions(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        to: string;
        value: BigNumber;
        data: string;
        executed: boolean;
        numConfirmations: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    addOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addOwner(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "confirmTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "executeTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getOwners(overrides?: CallOverrides): Promise<BigNumber>;

    "getOwners()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getTransactionCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isConfirmed(uint256,address)"(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isOwner(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numConfirmationsRequired(overrides?: CallOverrides): Promise<BigNumber>;

    "numConfirmationsRequired()"(overrides?: CallOverrides): Promise<BigNumber>;

    owners(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "owners(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submitTransaction(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "submitTransaction(address,uint256,bytes)"(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transactions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "transactions(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addOwner(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    confirmTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "confirmTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "executeTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOwners()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTransaction(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTransaction(uint256)"(
      _txIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTransactionCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isConfirmed(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isConfirmed(uint256,address)"(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isOwner(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numConfirmationsRequired(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "numConfirmationsRequired()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owners(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "owners(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submitTransaction(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "submitTransaction(address,uint256,bytes)"(
      _to: PromiseOrValue<string>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transactions(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "transactions(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
