import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { StakingFormInputStake } from './StakingFormInputStake';
import { StakingFormInputUnstake } from './StakingFormInputUnstake';
import { ArrowRight } from '../common/icons/index';
import React from 'react';
import { BigNumber, utils } from 'ethers';

// context
import { AccountBalancesContext } from '../../../../providers/AccountBalancesProvider';

// hooks
import useAccountBalances from '../../../../hooks/useAccountBalances';

import {
  EtherspotBatches,
  EtherspotBatch,
  EtherspotTransaction,
  useEtherspotTransactions,
  useWalletAddress,
} from '@etherspot/transaction-kit';
interface StakingFormProps {
  className?: string;
}

export const StakingForm: React.FC<StakingFormProps> = ({ className }) => {
  const [isStake, setIsStake] = useState(true);
  const [promptText, setPromptText] = useState(
    'Enter amount and click Stake Now'
  );
  const [buttonText, setButtonText] = useState('Stake now');
  const [error, setError] = useState('');

  const handleInputChange = (inputValue: string) => {
    console.log(inputValue);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const { estimate, send } = useEtherspotTransactions();
  const etherspotAddresses = useWalletAddress();

  React.useEffect(() => {
    console.log(etherspotAddresses);
    if (!etherspotAddresses) {
      setError('Wallet not connected');
    } else {
      setError('');
    }
  }, [etherspotAddresses]);

  const accountBalancesContext = useContext(AccountBalancesContext);
  const balances = useAccountBalances();

  console.log('balances', balances);
  const weiBalance = BigNumber.from('0xeda17b5424e340').toString();
  const formattedBalance = utils.formatEther(weiBalance);

  useEffect(() => {
    if (error) {
      switch (error) {
        case 'Wallet not connected':
          setPromptText('Please connect your wallet to proceed.');
          setButtonText('Connect Wallet');
          break;
        case 'Insufficient funds':
          setPromptText('You have insufficient funds.');
          setButtonText('top-up your balance');
          break;
        case 'Minimum staking amount':
          setPromptText('Minimum staking amount is 0.1 ETH');
          setButtonText('Stake now');
          break;
        case `Maximum staking amount is *balance here*`:
          setPromptText('Maximum staking amount');
          setButtonText('Stake now');
          break;

        default:
          setPromptText('An unexpected error occurred.');
          setButtonText('Stake now');
      }
    } else {
      setPromptText('Enter amount and click Stake Now');
      setButtonText('Stake now');
    }
  }, [error]);

  if (!accountBalancesContext) {
    return <div className="mt-20 flex justify-center">Loading balances...</div>;
  }

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
          <StakingFormInputStake
            onChange={handleInputChange}
            onError={handleError}
          />
        ) : (
          <StakingFormInputUnstake />
        )}
      </div>

      <div className="mt-auto">
        <div className="py-3 px-5 min-h-11 bg-black lg:py-3.5 lg:px-10 lg:min-h-[65px] lg:flex lg:items-center">
          <p className="text-xs font-normal lg:text-sm">{promptText}</p>
        </div>

        <button
          disabled={!!error}
          className={`arrow-button h-[56px] lg:h-[80px] text-2xl lg:text-3xl uppercase text-black bg-yellow w-full flex items-center justify-center font-medium relative ${!!error ? 'opacity-70' : ''}`}
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
