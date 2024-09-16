import PropTypes from 'prop-types';
import {
  Ethereum,
} from '../common/icons/index';
interface StakingStatsProps {
  className?: string;
}

export const StakingStats: React.FC<StakingStatsProps> = ({ className }) => {
  return (
    <div className={`bg-gradient--gray p-6 ${className}`}>
      <p className='uppercase text-sm mb-5 lg:text-xl'>ETH LEFT TO GET REWARDS</p>
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