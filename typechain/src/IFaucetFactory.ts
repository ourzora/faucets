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
} from "../common";

export interface IFaucetFactoryInterface extends utils.Interface {
  functions: {
    "faucetForToken(address)": FunctionFragment;
    "faucetForTokenView(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "faucetForToken" | "faucetForTokenView"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "faucetForToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "faucetForTokenView",
    values: [string]
  ): string;

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

export interface IFaucetFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFaucetFactoryInterface;

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
    faucetForToken(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    faucetForTokenView(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[string] & { _faucetAddress: string }>;
  };

  faucetForToken(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  faucetForTokenView(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    faucetForToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [string, boolean] & { _faucetAddress: string; deployed: boolean }
    >;

    faucetForTokenView(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
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