import PropTypes from 'prop-types';
import {
  Ethereum,
} from '../common/icons/index';
import Tooltip from '../Tooltip/Tooltip';
interface StakingStatsProps {
  className?: string;
}

export const StakingStats: React.FC<StakingStatsProps> = ({ className }) => {
  return (
    <div className={`bg-gradient--gray p-6 ${className}`}>
      <div className='flex items-center justify-between gap-5  mb-5'>
      <p className='uppercase text-sm lg:text-xl'>ETH LEFT TO GET REWARDS</p>
      <div className='shrink-0'>
      <Tooltip content='32 ETH is the minimum amount of staked tokens for a pool to start producing rewards for users.'/>

      </div>
      </div>
      <div className='flex gap-1 items-center text-3xl text-green  font-medium uppercase'>
        <span>only 13.01</span>
        <Ethereum/>
        <span>left</span>
      </div>
      <div className="h-2 w-full bg-gray-dark my-2.5">
        <span className='w-1/2 block h-full bg-gradient--green'></span>
      </div>
      <div className='w-full flex justify-between'>
        <span className='text-gray-2 text-xs font-normal'>staked</span>
        <span className='text-gray-2 text-xs font-normal'>validator activated</span>
      </div>
    </div>
  );
};

StakingStats.propTypes = {
  className: PropTypes.string,
};