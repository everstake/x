import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Ethereum } from '../common/icons/index';
import { BigNumber, utils } from 'ethers';

// hooks
import useAccountBalances from '../../../../hooks/useAccountBalances';


// contect
import { AccountBalancesContext } from '../../../../providers/AccountBalancesProvider';

export const StakingFormInputStake = () => {
  const chainId = 11155111;
  const accountBalancesContext = useContext(AccountBalancesContext);
  const balances = useAccountBalances();
  console.log(balances, 'balances')
  const weiBalance = BigNumber.from("0xf12ef9f8eb6340").toString();
  const formattedBalance = utils.formatEther(weiBalance);
  
  if (!accountBalancesContext) {
    return <div className='mt-20 flex justify-center'>Loading balances...</div>;
  }

  return (
    <div className='mt-20'>
      <div className='pb-2 border-b border-b-gray-border flex items-center'>
        <div className='shrink-0'>
          <Ethereum width={55} height={55} fill='#b1b1b1' />
        </div>
        <input className='flex-grow text-center text-3xl w-full lg:text-5xl' placeholder='0.00'/>
        <div className='shrink-0 flex flex-col'>
          <button className='uppercase py-1 px-2 border border-gray-border text-gray-dark text-xs'>min</button>
          <button className='uppercase py-1 px-2 border border-gray-border text-gray-dark text-xs'>max</button>
        </div>
      </div>

      <div className='flex justify-between text-gray-light-2 font-normal text-base pt-1.5'>
        <p>POOL FEE: 10 %</p>
        <p>WALLET BALANCE: <span className='text-yellow'>{(+formattedBalance).toFixed(3)}</span></p>
      </div>
    </div>
  );
};

StakingFormInputStake.propTypes = {
  className: PropTypes.string,
};
