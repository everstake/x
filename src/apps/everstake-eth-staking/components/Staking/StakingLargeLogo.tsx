import PropTypes from 'prop-types';
import ethereum from '../../assets/images/ethereum.webp';

interface StakingLargeLogoProps {
  className?: string;
}

export const StakingLargeLogo: React.FC<StakingLargeLogoProps> = ({ className }) => {
  return (
    <div className={`w-full border border-gray-dark p-3 lg:h-full lg:flex lg:px-6 lg:pt-9 lg:flex-col ${className}`}>
      <div className='flex items-center justify-center gap-6 mb-6 lg:flex-col-reverse lg:relative pt-10'>
        <div className='flex flex-col gap-2.5 shrink-0 order'>
          <p className='font-medium text-3xl uppercase'>Ethereum</p>
          <p className='font-bold text-3xl flex items-center gap-1 text-yellow lg:hidden'><span>~4-10%</span> <span className='font-normal text-base '>APR</span></p>
        </div>
        <div className='order-1'>
          <img className='size-24 lg:size-[170px]' src={ethereum} alt="Ethereum logo" />
        </div>
      <p className='hidden lg:block text-3xl text-gray-dark absolute top-0 left-0 font-normal'>ETH</p>
      </div>
      <div className='text-center lg:hidden'>
        <p><span className='text-xs uppercase '>ALL DELEGATIONS TO EVERSTAKE:</span> <span className='text-xs uppercase text-yellow'>803 210.05 ETH</span></p>
      </div>
      <div className='hidden lg:flex mt-auto pt-4 px-6 pb-1 items-end gap-1 justify-center lg:justify-start border-t border-gray-dark -mx-6'>
        <p className='font-bold text-3xl flex items-end gap-2 text-yellow lg:justify-start'><span className='text-5xl font-bold'>~4-10%</span> <span className='font-normal text-2xl text-white'>APR</span></p>
      </div>
    </div>
  );
};

StakingLargeLogo.propTypes = {
  className: PropTypes.string,
};