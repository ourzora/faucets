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
} from "./common";

export interface VMInterface extends utils.Interface {
  functions: {
    "addr(uint256)": FunctionFragment;
    "clearMockedCalls()": FunctionFragment;
    "deal(address,uint256)": FunctionFragment;
    "etch(address,bytes)": FunctionFragment;
    "expectCall(address,bytes)": FunctionFragment;
    "expectEmit(bool,bool,bool,bool)": FunctionFragment;
    "expectRevert(bytes)": FunctionFragment;
    "ffi(string[])": FunctionFragment;
    "load(address,bytes32)": FunctionFragment;
    "mockCall(address,bytes,bytes)": FunctionFragment;
    "prank(address)": FunctionFragment;
    "record()": FunctionFragment;
    "roll(uint256)": FunctionFragment;
    "sign(uint256,bytes32)": FunctionFragment;
    "startPrank(address)": FunctionFragment;
    "stopPrank()": FunctionFragment;
    "store(address,bytes32,bytes32)": FunctionFragment;
    "warp(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addr"
      | "clearMockedCalls"
      | "deal"
      | "etch"
      | "expectCall"
      | "expectEmit"
      | "expectRevert"
      | "ffi"
      | "load"
      | "mockCall"
      | "prank"
      | "record"
      | "roll"
      | "sign"
      | "startPrank"
      | "stopPrank"
      | "store"
      | "warp"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "addr", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "clearMockedCalls",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deal",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "etch",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expectCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expectEmit",
    values: [boolean, boolean, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "expectRevert",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "ffi", values: [string[]]): string;
  encodeFunctionData(
    functionFragment: "load",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mockCall",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "prank", values: [string]): string;
  encodeFunctionData(functionFragment: "record", values?: undefined): string;
  encodeFunctionData(functionFragment: "roll", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "sign",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "startPrank", values: [string]): string;
  encodeFunctionData(functionFragment: "stopPrank", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "store",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "warp", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearMockedCalls",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "etch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expectCall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expectEmit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "expectRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ffi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "load", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mockCall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prank", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "record", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sign", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startPrank", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopPrank", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "warp", data: BytesLike): Result;

  events: {};
}

export interface VM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VMInterface;

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
    addr(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    clearMockedCalls(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deal(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    etch(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    expectCall(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    expectEmit(
      arg0: boolean,
      arg1: boolean,
      arg2: boolean,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    expectRevert(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ffi(
      arg0: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    load(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mockCall(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    prank(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    record(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    roll(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sign(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startPrank(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stopPrank(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    store(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    warp(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addr(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  clearMockedCalls(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deal(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  etch(
    arg0: string,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  expectCall(
    arg0: string,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  expectEmit(
    arg0: boolean,
    arg1: boolean,
    arg2: boolean,
    arg3: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  expectRevert(
    arg0: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ffi(
    arg0: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  load(
    arg0: string,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mockCall(
    arg0: string,
    arg1: BytesLike,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  prank(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  record(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  roll(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sign(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startPrank(
    arg0: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stopPrank(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  store(
    arg0: string,
    arg1: BytesLike,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  warp(
    arg0: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addr(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    clearMockedCalls(overrides?: CallOverrides): Promise<void>;

    deal(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    etch(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    expectCall(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    expectEmit(
      arg0: boolean,
      arg1: boolean,
      arg2: boolean,
      arg3: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    expectRevert(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;

    ffi(arg0: string[], overrides?: CallOverrides): Promise<string>;

    load(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    mockCall(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    prank(arg0: string, overrides?: CallOverrides): Promise<void>;

    record(overrides?: CallOverrides): Promise<void>;

    roll(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    sign(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number, string, string]>;

    startPrank(arg0: string, overrides?: CallOverrides): Promise<void>;

    stopPrank(overrides?: CallOverrides): Promise<void>;

    store(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    warp(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addr(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    clearMockedCalls(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deal(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    etch(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    expectCall(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    expectEmit(
      arg0: boolean,
      arg1: boolean,
      arg2: boolean,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    expectRevert(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ffi(
      arg0: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    load(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mockCall(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    prank(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    record(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    roll(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sign(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startPrank(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stopPrank(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    store(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    warp(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addr(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    clearMockedCalls(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deal(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    etch(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    expectCall(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    expectEmit(
      arg0: boolean,
      arg1: boolean,
      arg2: boolean,
      arg3: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    expectRevert(
      arg0: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ffi(
      arg0: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    load(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mockCall(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    prank(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    record(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    roll(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sign(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startPrank(
      arg0: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stopPrank(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    store(
      arg0: string,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    warp(
      arg0: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
