import PropTypes from 'prop-types';
import { StakingFormInputStake } from './StakingFormInputStake';
import {
  ArrowRight,
} from '../common/icons/index';

interface StakingFormProps {
  className?: string;
}

export const StakingForm: React.FC<StakingFormProps> = ({ className }) => {
  return (
    <div className={`bg-es-gray-gradient flex flex-col ${className}`}>
      <div className='flex'>
        <button className='w-1/2 h-12 uppercase text-md border-b border-b-yellow lg:h-[60px] lg:text-xl'>STAKE</button>
        <button className='w-1/2 h-12 uppercase text-md border-b border-b-gray lg:h-[60px] lg:text-xl'>UNSTAKE</button>
      </div>

      <div className="px-5">
        <StakingFormInputStake />
        {/* <StakingFormInputUnstake/> */}
      </div>

      <div className="mt-auto">
        <div className='py-3 px-5 min-h-11 bg-black lg:py-3.5 lg:px-10 lg:min-h-[65px] lg:flex lg:items-center'>
          <p className='text-xs font-normal lg:text-sm'>Please connect your wallet to proceed</p>
        </div>

        <button className='arrow-button h-[56px] lg:h-[80px] text-2xl lg:text-3xl uppercase text-black bg-yellow w-full flex items-center justify-center font-medium relative'>
          <span>Get started</span>
          <div className='hidden lg:block absolute right-16 top-7'>
            <ArrowRight stroke='#111111' width={35} height={25} />
          </div>
        </button>
      </div>

    </div>
  );
};

StakingForm.propTypes = {
  className: PropTypes.string,
};