/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface FaucetFactoryInterface extends utils.Interface {
  functions: {
    "deployedFaucetsForToken(address)": FunctionFragment;
    "erc20FaucetImplementation()": FunctionFragment;
    "ethFaucetImplementation()": FunctionFragment;
    "faucetForToken(address)": FunctionFragment;
    "faucetForTokenView(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deployedFaucetsForToken"
      | "erc20FaucetImplementation"
      | "ethFaucetImplementation"
      | "faucetForToken"
      | "faucetForTokenView"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployedFaucetsForToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "erc20FaucetImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ethFaucetImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "faucetForToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "faucetForTokenView",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployedFaucetsForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc20FaucetImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ethFaucetImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "faucetForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "faucetForTokenView",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FaucetFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FaucetFactoryInterface;

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
    deployedFaucetsForToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    erc20FaucetImplementation(overrides?: CallOverrides): Promise<[string]>;

    ethFaucetImplementation(overrides?: CallOverrides): Promise<[string]>;

    faucetForToken(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    faucetForTokenView(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[string] & { faucetAddr: string }>;
  };

  deployedFaucetsForToken(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  erc20FaucetImplementation(overrides?: CallOverrides): Promise<string>;

  ethFaucetImplementation(overrides?: CallOverrides): Promise<string>;

  faucetForToken(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  faucetForTokenView(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    deployedFaucetsForToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    erc20FaucetImplementation(overrides?: CallOverrides): Promise<string>;

    ethFaucetImplementation(overrides?: CallOverrides): Promise<string>;

    faucetForToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[string, boolean] & { faucetAddr: string; deployed: boolean }>;

    faucetForTokenView(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    deployedFaucetsForToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    erc20FaucetImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    ethFaucetImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    faucetForToken(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    faucetForTokenView(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployedFaucetsForToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    erc20FaucetImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ethFaucetImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    faucetForToken(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    faucetForTokenView(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
