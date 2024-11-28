import PropTypes from 'prop-types';
import { useContext, useEffect, useState, ChangeEvent } from 'react';
import { Ethereum } from '../common/icons/index';
import { BigNumber, utils } from 'ethers';

// hooks
import useAccountBalances from '../../../../hooks/useAccountBalances';

// context
import { AccountBalancesContext } from '../../../../providers/AccountBalancesProvider';

interface StakingFormInputStakeProps {
  onChange?: (value: string) => void;
  onError?: (error: string) => void;
  minStakingAmount?: number;
  maxStakingAmount?: number;
}

export const StakingFormInputStake: React.FC<StakingFormInputStakeProps> = ({
  onChange,
  onError = () => {},
  minStakingAmount = 0.1,
  maxStakingAmount = 100,
}) => {
 
  const formattedBalance = '0'; //utils.formatEther(weiBalance);
  const [inputValue, setInputValue] = useState("0.1");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);



  const validateInput = (value: string) => {
    const numValue = parseFloat(value);
    console.log('parsedFloat', numValue)
    const validations = [
      { valid: !isNaN(numValue), message: "Value must be a number" },
      { valid: numValue >= minStakingAmount, message: `Minimum staking amount` },
      { valid: numValue <= maxStakingAmount, message: `Maximum staking amount` },
    ];
    const firstInvalid = validations.find((v) => !v.valid);
    if (firstInvalid) {
      setError(firstInvalid.message);
      onError(firstInvalid.message);
      console.log('error:::', error)
      return false;
    }
    setError("");
    onError("");
    console.log('error:::', error)
    return true;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(e)
    if (/^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
      if (validateInput(value)) {
        onChange?.(value);
      }
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (!validateInput(inputValue)) {
      setInputValue("");
      onChange?.("0");
    }
  };

  const setMinValue = () => {
    setInputValue(minStakingAmount.toString());
    onChange?.(minStakingAmount.toString());
    validateInput(minStakingAmount.toString())
  };

  const setMaxValue = () => {
    setInputValue(formattedBalance);
    onChange?.(formattedBalance);
    validateInput(formattedBalance)
  };

  return (
    <div className='mt-20'>
      <div className={`pb-2 border-b flex items-center ${error ? 'border-b-red-500' : 'border-b-gray-border'}`}>
        <div className='shrink-0'>
          <Ethereum width={55} height={55} fill='#b1b1b1' />
        </div>
        <input
          className={`flex-grow text-center text-3xl w-full lg:text-5xl ${error && 'input-error'}`}
          placeholder='0.00'
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        <div className='shrink-0 flex flex-col'>
          <button
            className={`uppercase py-1 px-2 border border-gray-border text-xs ${+inputValue === minStakingAmount ? 'text-yellow' : 'text-gray-dark'}`}
            onClick={setMinValue}
          >
            min
          </button>
          <button
            className={`uppercase py-1 px-2 border border-gray-border  text-xs ${inputValue === formattedBalance ? 'text-yellow' : 'text-gray-dark'}`}
            onClick={setMaxValue}
          >
            max
          </button>
        </div>
      </div>

      <div className='flex justify-between text-gray-light-2 font-normal text-base pt-1.5'>
        <p>POOL FEE: 10 %</p>
        <p>WALLET BALANCE: <span className='text-yellow'>{(+formattedBalance).toFixed(3)}</span></p>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

StakingFormInputStake.propTypes = {
  onChange: PropTypes.func,
  onError: PropTypes.func,
  minStakingAmount: PropTypes.number,
  maxStakingAmount: PropTypes.number,
};
