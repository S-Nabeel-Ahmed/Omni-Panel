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

export interface StakingPoolInterface extends utils.Interface {
  functions: {
    "Claim_reward(uint256)": FunctionFragment;
    "Withdraw_Emergency(uint256)": FunctionFragment;
    "admin()": FunctionFragment;
    "getUserStaking(address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "invest(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setPaused(bool)": FunctionFragment;
    "tokens_staking(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userStake(address,uint256)": FunctionFragment;
    "withdrawAndClaim(uint256)": FunctionFragment;
    "withdraw_amount(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "Claim_reward"
      | "Withdraw_Emergency"
      | "admin"
      | "getUserStaking"
      | "initialize"
      | "invest"
      | "owner"
      | "paused"
      | "renounceOwnership"
      | "setPaused"
      | "tokens_staking"
      | "transferOwnership"
      | "userStake"
      | "withdrawAndClaim"
      | "withdraw_amount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "Claim_reward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "Withdraw_Emergency",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getUserStaking",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "invest",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setPaused", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "tokens_staking",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userStake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAndClaim",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw_amount",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "Claim_reward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "Withdraw_Emergency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "invest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokens_staking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAndClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw_amount",
    data: BytesLike
  ): Result;

  events: {
    "Claim(address,uint256,uint256)": EventFragment;
    "Invest(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Invest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface ClaimEventObject {
  user: string;
  lockId: BigNumber;
  amountclaimed: BigNumber;
}
export type ClaimEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  ClaimEventObject
>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface InvestEventObject {
  user: string;
  lockId: BigNumber;
  endDate: BigNumber;
  duration: BigNumber;
  amountStaked: BigNumber;
  reward: BigNumber;
}
export type InvestEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  InvestEventObject
>;

export type InvestEventFilter = TypedEventFilter<InvestEvent>;

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

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WithdrawEventObject {
  user: string;
  lockId: BigNumber;
  amountWithdrawn: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface StakingPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingPoolInterface;

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
    Claim_reward(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    Withdraw_Emergency(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    getUserStaking(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    initialize(
      _rewardToken: string,
      _stakeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    invest(
      end_date: BigNumberish,
      qty_ort: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPaused(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokens_staking(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, boolean, BigNumber] & {
        owner: string;
        balances: BigNumber;
        end_staking: BigNumber;
        duration: BigNumber;
        changeClaimed: boolean;
        check_claim: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userStake(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawAndClaim(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw_amount(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  Claim_reward(
    lockId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  Withdraw_Emergency(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  admin(overrides?: CallOverrides): Promise<string>;

  getUserStaking(user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  initialize(
    _rewardToken: string,
    _stakeToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  invest(
    end_date: BigNumberish,
    qty_ort: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPaused(
    _paused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokens_staking(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, boolean, BigNumber] & {
      owner: string;
      balances: BigNumber;
      end_staking: BigNumber;
      duration: BigNumber;
      changeClaimed: boolean;
      check_claim: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userStake(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdrawAndClaim(
    lockId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw_amount(
    lockId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    Claim_reward(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    Withdraw_Emergency(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    admin(overrides?: CallOverrides): Promise<string>;

    getUserStaking(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    initialize(
      _rewardToken: string,
      _stakeToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    invest(
      end_date: BigNumberish,
      qty_ort: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setPaused(_paused: boolean, overrides?: CallOverrides): Promise<void>;

    tokens_staking(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, boolean, BigNumber] & {
        owner: string;
        balances: BigNumber;
        end_staking: BigNumber;
        duration: BigNumber;
        changeClaimed: boolean;
        check_claim: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userStake(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawAndClaim(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw_amount(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Claim(address,uint256,uint256)"(
      user?: string | null,
      lockId?: BigNumberish | null,
      amountclaimed?: null
    ): ClaimEventFilter;
    Claim(
      user?: string | null,
      lockId?: BigNumberish | null,
      amountclaimed?: null
    ): ClaimEventFilter;

    "Invest(address,uint256,uint256,uint256,uint256,uint256)"(
      user?: string | null,
      lockId?: BigNumberish | null,
      endDate?: null,
      duration?: null,
      amountStaked?: null,
      reward?: null
    ): InvestEventFilter;
    Invest(
      user?: string | null,
      lockId?: BigNumberish | null,
      endDate?: null,
      duration?: null,
      amountStaked?: null,
      reward?: null
    ): InvestEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Withdraw(address,uint256,uint256)"(
      user?: string | null,
      lockId?: BigNumberish | null,
      amountWithdrawn?: null
    ): WithdrawEventFilter;
    Withdraw(
      user?: string | null,
      lockId?: BigNumberish | null,
      amountWithdrawn?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    Claim_reward(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    Withdraw_Emergency(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    getUserStaking(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _rewardToken: string,
      _stakeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    invest(
      end_date: BigNumberish,
      qty_ort: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPaused(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokens_staking(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userStake(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawAndClaim(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw_amount(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Claim_reward(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    Withdraw_Emergency(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserStaking(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _rewardToken: string,
      _stakeToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    invest(
      end_date: BigNumberish,
      qty_ort: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPaused(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokens_staking(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userStake(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawAndClaim(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw_amount(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
