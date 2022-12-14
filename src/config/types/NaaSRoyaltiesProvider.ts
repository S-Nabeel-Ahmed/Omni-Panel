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
} from "./common";

export declare namespace LibPart {
  export type PartStruct = { account: string; value: BigNumberish };

  export type PartStructOutput = [string, BigNumber] & {
    account: string;
    value: BigNumber;
  };
}

export interface NaaSRoyaltiesProviderInterface extends utils.Interface {
  functions: {
    "extraRoyaltiesByToken(address)": FunctionFragment;
    "extraRoyaltiesByTokenAndCollectionId(bytes32)": FunctionFragment;
    "getGeneralRoyalties(address,address,(address,uint256)[])": FunctionFragment;
    "getRoyalties(address,uint256,address)": FunctionFragment;
    "initialize()": FunctionFragment;
    "owner()": FunctionFragment;
    "referrersPercentages(address,uint256)": FunctionFragment;
    "registerReferrer(address,address)": FunctionFragment;
    "registerReferrers(address,address,address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "royaltiesByToken(address)": FunctionFragment;
    "royaltiesByTokenAndCollectionId(bytes32)": FunctionFragment;
    "royaltiesByTokenAndTokenId(bytes32)": FunctionFragment;
    "setFixedRoyaltiesForCollectionId(address,uint256,(address,uint256)[])": FunctionFragment;
    "setFixedRoyaltiesForToken(address,(address,uint256)[])": FunctionFragment;
    "setReferrersPercentages(address,uint256[])": FunctionFragment;
    "setRoyaltiesForCollectionId(address,uint256,(address,uint256)[])": FunctionFragment;
    "setRoyaltiesForToken(address,(address,uint256)[])": FunctionFragment;
    "setRoyaltiesForTokenId(address,uint256,(address,uint256)[])": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokenReferrers(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "extraRoyaltiesByToken"
      | "extraRoyaltiesByTokenAndCollectionId"
      | "getGeneralRoyalties"
      | "getRoyalties"
      | "initialize"
      | "owner"
      | "referrersPercentages"
      | "registerReferrer"
      | "registerReferrers"
      | "renounceOwnership"
      | "royaltiesByToken"
      | "royaltiesByTokenAndCollectionId"
      | "royaltiesByTokenAndTokenId"
      | "setFixedRoyaltiesForCollectionId"
      | "setFixedRoyaltiesForToken"
      | "setReferrersPercentages"
      | "setRoyaltiesForCollectionId"
      | "setRoyaltiesForToken"
      | "setRoyaltiesForTokenId"
      | "supportsInterface"
      | "tokenReferrers"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "extraRoyaltiesByToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "extraRoyaltiesByTokenAndCollectionId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getGeneralRoyalties",
    values: [string, string, LibPart.PartStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyalties",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "referrersPercentages",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerReferrer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerReferrers",
    values: [string, string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "royaltiesByToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltiesByTokenAndCollectionId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltiesByTokenAndTokenId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFixedRoyaltiesForCollectionId",
    values: [string, BigNumberish, LibPart.PartStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setFixedRoyaltiesForToken",
    values: [string, LibPart.PartStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferrersPercentages",
    values: [string, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyaltiesForCollectionId",
    values: [string, BigNumberish, LibPart.PartStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyaltiesForToken",
    values: [string, LibPart.PartStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyaltiesForTokenId",
    values: [string, BigNumberish, LibPart.PartStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenReferrers",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "extraRoyaltiesByToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extraRoyaltiesByTokenAndCollectionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGeneralRoyalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoyalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referrersPercentages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerReferrer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerReferrers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltiesByToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltiesByTokenAndCollectionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltiesByTokenAndTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFixedRoyaltiesForCollectionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFixedRoyaltiesForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferrersPercentages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoyaltiesForCollectionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoyaltiesForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoyaltiesForTokenId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenReferrers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "FixedRoyaltiesSet(address,int256,int256,tuple[])": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RoyaltiesAccountUpdated(address,int256,int256,address,address)": EventFragment;
    "RoyaltiesSet(address,int256,int256,tuple[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FixedRoyaltiesSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltiesAccountUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoyaltiesSet"): EventFragment;
}

export interface FixedRoyaltiesSetEventObject {
  token: string;
  collectionId: BigNumber;
  tokenId: BigNumber;
  royalties: LibPart.PartStructOutput[];
}
export type FixedRoyaltiesSetEvent = TypedEvent<
  [string, BigNumber, BigNumber, LibPart.PartStructOutput[]],
  FixedRoyaltiesSetEventObject
>;

export type FixedRoyaltiesSetEventFilter =
  TypedEventFilter<FixedRoyaltiesSetEvent>;

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

export interface RoyaltiesAccountUpdatedEventObject {
  token: string;
  collectionId: BigNumber;
  tokenId: BigNumber;
  oldAccount: string;
  newAccount: string;
}
export type RoyaltiesAccountUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string, string],
  RoyaltiesAccountUpdatedEventObject
>;

export type RoyaltiesAccountUpdatedEventFilter =
  TypedEventFilter<RoyaltiesAccountUpdatedEvent>;

export interface RoyaltiesSetEventObject {
  token: string;
  collectionId: BigNumber;
  tokenId: BigNumber;
  royalties: LibPart.PartStructOutput[];
}
export type RoyaltiesSetEvent = TypedEvent<
  [string, BigNumber, BigNumber, LibPart.PartStructOutput[]],
  RoyaltiesSetEventObject
>;

export type RoyaltiesSetEventFilter = TypedEventFilter<RoyaltiesSetEvent>;

export interface NaaSRoyaltiesProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NaaSRoyaltiesProviderInterface;

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
    extraRoyaltiesByToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { initialized: boolean }>;

    extraRoyaltiesByTokenAndCollectionId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { initialized: boolean }>;

    getGeneralRoyalties(
      token: string,
      buyer: string,
      existingRoyalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<[LibPart.PartStructOutput[]]>;

    getRoyalties(
      token: string,
      tokenId: BigNumberish,
      buyer: string,
      overrides?: CallOverrides
    ): Promise<[LibPart.PartStructOutput[]]>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    referrersPercentages(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    registerReferrer(
      token: string,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerReferrers(
      token: string,
      referrer: string,
      users: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    royaltiesByToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { initialized: boolean }>;

    royaltiesByTokenAndCollectionId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { initialized: boolean }>;

    royaltiesByTokenAndTokenId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { initialized: boolean }>;

    setFixedRoyaltiesForCollectionId(
      token: string,
      collectionId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFixedRoyaltiesForToken(
      token: string,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReferrersPercentages(
      token: string,
      percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoyaltiesForCollectionId(
      token: string,
      collectionId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoyaltiesForToken(
      token: string,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoyaltiesForTokenId(
      token: string,
      tokenId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenReferrers(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  extraRoyaltiesByToken(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  extraRoyaltiesByTokenAndCollectionId(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getGeneralRoyalties(
    token: string,
    buyer: string,
    existingRoyalties: LibPart.PartStruct[],
    overrides?: CallOverrides
  ): Promise<LibPart.PartStructOutput[]>;

  getRoyalties(
    token: string,
    tokenId: BigNumberish,
    buyer: string,
    overrides?: CallOverrides
  ): Promise<LibPart.PartStructOutput[]>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  referrersPercentages(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  registerReferrer(
    token: string,
    referrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerReferrers(
    token: string,
    referrer: string,
    users: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  royaltiesByToken(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  royaltiesByTokenAndCollectionId(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  royaltiesByTokenAndTokenId(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setFixedRoyaltiesForCollectionId(
    token: string,
    collectionId: BigNumberish,
    royalties: LibPart.PartStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFixedRoyaltiesForToken(
    token: string,
    royalties: LibPart.PartStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReferrersPercentages(
    token: string,
    percentages: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoyaltiesForCollectionId(
    token: string,
    collectionId: BigNumberish,
    royalties: LibPart.PartStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoyaltiesForToken(
    token: string,
    royalties: LibPart.PartStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoyaltiesForTokenId(
    token: string,
    tokenId: BigNumberish,
    royalties: LibPart.PartStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenReferrers(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    extraRoyaltiesByToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    extraRoyaltiesByTokenAndCollectionId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getGeneralRoyalties(
      token: string,
      buyer: string,
      existingRoyalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<LibPart.PartStructOutput[]>;

    getRoyalties(
      token: string,
      tokenId: BigNumberish,
      buyer: string,
      overrides?: CallOverrides
    ): Promise<LibPart.PartStructOutput[]>;

    initialize(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    referrersPercentages(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerReferrer(
      token: string,
      referrer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registerReferrers(
      token: string,
      referrer: string,
      users: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    royaltiesByToken(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    royaltiesByTokenAndCollectionId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    royaltiesByTokenAndTokenId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setFixedRoyaltiesForCollectionId(
      token: string,
      collectionId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setFixedRoyaltiesForToken(
      token: string,
      royalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setReferrersPercentages(
      token: string,
      percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyaltiesForCollectionId(
      token: string,
      collectionId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyaltiesForToken(
      token: string,
      royalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyaltiesForTokenId(
      token: string,
      tokenId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenReferrers(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "FixedRoyaltiesSet(address,int256,int256,tuple[])"(
      token?: string | null,
      collectionId?: BigNumberish | null,
      tokenId?: BigNumberish | null,
      royalties?: null
    ): FixedRoyaltiesSetEventFilter;
    FixedRoyaltiesSet(
      token?: string | null,
      collectionId?: BigNumberish | null,
      tokenId?: BigNumberish | null,
      royalties?: null
    ): FixedRoyaltiesSetEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RoyaltiesAccountUpdated(address,int256,int256,address,address)"(
      token?: string | null,
      collectionId?: BigNumberish | null,
      tokenId?: BigNumberish | null,
      oldAccount?: null,
      newAccount?: null
    ): RoyaltiesAccountUpdatedEventFilter;
    RoyaltiesAccountUpdated(
      token?: string | null,
      collectionId?: BigNumberish | null,
      tokenId?: BigNumberish | null,
      oldAccount?: null,
      newAccount?: null
    ): RoyaltiesAccountUpdatedEventFilter;

    "RoyaltiesSet(address,int256,int256,tuple[])"(
      token?: string | null,
      collectionId?: BigNumberish | null,
      tokenId?: BigNumberish | null,
      royalties?: null
    ): RoyaltiesSetEventFilter;
    RoyaltiesSet(
      token?: string | null,
      collectionId?: BigNumberish | null,
      tokenId?: BigNumberish | null,
      royalties?: null
    ): RoyaltiesSetEventFilter;
  };

  estimateGas: {
    extraRoyaltiesByToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    extraRoyaltiesByTokenAndCollectionId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGeneralRoyalties(
      token: string,
      buyer: string,
      existingRoyalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoyalties(
      token: string,
      tokenId: BigNumberish,
      buyer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    referrersPercentages(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerReferrer(
      token: string,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerReferrers(
      token: string,
      referrer: string,
      users: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    royaltiesByToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltiesByTokenAndCollectionId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltiesByTokenAndTokenId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFixedRoyaltiesForCollectionId(
      token: string,
      collectionId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFixedRoyaltiesForToken(
      token: string,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReferrersPercentages(
      token: string,
      percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoyaltiesForCollectionId(
      token: string,
      collectionId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoyaltiesForToken(
      token: string,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoyaltiesForTokenId(
      token: string,
      tokenId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenReferrers(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    extraRoyaltiesByToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    extraRoyaltiesByTokenAndCollectionId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGeneralRoyalties(
      token: string,
      buyer: string,
      existingRoyalties: LibPart.PartStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoyalties(
      token: string,
      tokenId: BigNumberish,
      buyer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referrersPercentages(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerReferrer(
      token: string,
      referrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerReferrers(
      token: string,
      referrer: string,
      users: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    royaltiesByToken(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltiesByTokenAndCollectionId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltiesByTokenAndTokenId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFixedRoyaltiesForCollectionId(
      token: string,
      collectionId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFixedRoyaltiesForToken(
      token: string,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReferrersPercentages(
      token: string,
      percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoyaltiesForCollectionId(
      token: string,
      collectionId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoyaltiesForToken(
      token: string,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoyaltiesForTokenId(
      token: string,
      tokenId: BigNumberish,
      royalties: LibPart.PartStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenReferrers(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
