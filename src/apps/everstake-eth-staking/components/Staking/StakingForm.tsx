import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { BigNumber, utils } from 'ethers';
import { StakingFormInputStake } from './StakingFormInputStake';
import { StakingFormInputUnstake } from './StakingFormInputUnstake';
import { ArrowRight } from '../common/icons';
import { AccountBalancesContext } from '../../../../providers/AccountBalancesProvider';
import useAccountBalances from '../../../../hooks/useAccountBalances';
import { useWalletAddress } from '@etherspot/transaction-kit';

// import { stake } from '@everstake/wallet-sdk';
// import { Ethereum } from '@everstake/wallet-sdk';
import * as Ethereum from '@everstake/wallet-sdk/ethereum';

import { WALLET_SDK_KEY, WALLET_SDK_SOURCE } from '../../constants';
interface StakingFormProps {
  className?: string;
}

export const StakingForm: React.FC<StakingFormProps> = ({ className }) => {
  const [isStake, setIsStake] = useState(true);
  const [promptText, setPromptText] = useState(
    'Enter amount and click Stake Now'
  );
  const [buttonText, setButtonText] = useState('Stake now');
  const [error, setError] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number>(1);

  const walletAddress = useWalletAddress();
  const accountBalancesContext = useContext(AccountBalancesContext);
  const balances = useAccountBalances();
  const [nativeBalance, setNativeBalance] = useState<string>('0');

  useEffect(() => {
    if (!walletAddress || !balances[chainId]) {
      setNativeBalance('0');
      return;
    }

    const walletBalances = balances[chainId][walletAddress];
    if (!walletBalances) {
      setNativeBalance('0');
      return;
    }

    const nativeToken = walletBalances.find((balance) => {
      const isNative =
        balance.token === null ||
        balance.token === '0x0000000000000000000000000000000000000000';
      return isNative;
    });

    if (nativeToken) {
      setNativeBalance(utils.formatEther(BigNumber.from(nativeToken.balance)));
    } else {
      setNativeBalance('0');
    }
  }, [balances, walletAddress, chainId]);

  useEffect(() => {
    if (!walletAddress) {
      setError('Wallet not connected');
    } else {
      setError(null);
    }
  }, [walletAddress]);

  useEffect(() => {
    if (error) {
      switch (error) {
        case 'Wallet not connected':
          setPromptText('Please connect your wallet to proceed.');
          setButtonText('Connect Wallet');
          break;
        default:
          setPromptText('An unexpected error occurred.');
          setButtonText('Retry');
      }
    } else {
      setPromptText('Enter amount and click Stake Now');
      setButtonText('Stake now');
    }
  }, [error]);

  if (!accountBalancesContext) {
    return <div className="mt-20 flex justify-center">Loading balances...</div>;
  }

  const stakeEthereum = async function () {
    try {
      if(!walletAddress) return;
      // selectNetwork first
      Ethereum.selectNetwork('mainnet');

      // The amount that the user stake
      const amount = 1; // must be >= 0.1
      console.log(walletAddress, Ethereum)
      // Stake - return Raw Transaction
      // @ts-ignore
      const txnRequest = await Ethereum.stake(
        '0x69E0951Ae0efA1Cb4a8d6702bf064C98Fc8E9A6a',
        '1',
        '14'
      );
      console.log(txnRequest);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`bg-es-gray-gradient flex flex-col ${className}`}>
      <div className="flex">
        <button
          className={`w-1/2 h-12 uppercase text-md border-b ${
            isStake ? 'border-b-yellow' : 'border-b-gray'
          } lg:h-[60px] lg:text-xl`}
          onClick={() => setIsStake(true)}
        >
          STAKE
        </button>
        <button
          className={`w-1/2 h-12 uppercase text-md border-b ${
            !isStake ? 'border-b-yellow' : 'border-b-gray'
          } lg:h-[60px] lg:text-xl`}
          onClick={() => setIsStake(false)}
        >
          UNSTAKE
        </button>
      </div>

      <div className="px-5">
        {isStake ? (
          <StakingFormInputStake onError={setError} />
        ) : (
          <StakingFormInputUnstake />
        )}
      </div>

      {/* Balance Display */}
      <div className="px-5 mt-4">
        <p>Your native balance: {nativeBalance} ETH</p>
      </div>

      {/* Prompt and Button */}
      <div className="mt-auto">
        <div className="py-3 px-5 min-h-11 bg-black lg:py-3.5 lg:px-10 lg:min-h-[65px] lg:flex lg:items-center">
          <p className="text-xs font-normal lg:text-sm">{promptText}</p>
        </div>

        <button
          onClick={stakeEthereum}
          disabled={!!error}
          className={`arrow-button h-[56px] lg:h-[80px] text-2xl lg:text-3xl uppercase text-black bg-yellow w-full flex items-center justify-center font-medium relative ${
            !!error ? 'opacity-70' : ''
          }`}
        >
          <span>{buttonText}</span>
          <div className="hidden lg:block absolute right-16 top-7">
            <ArrowRight stroke="#111111" width={35} height={25} />
          </div>
        </button>
      </div>
    </div>
  );
};

StakingForm.propTypes = {
  className: PropTypes.string,
};
