import PropTypes from 'prop-types';

interface StakingDashboardProps {
  className?: string;
}

export const StakingDashboard: React.FC<StakingDashboardProps> = ({ className }) => {
  return (
    <div className={`lg:flex lg:flex-col  ${className}`}>
      <div className="p-6 border border-gray-border  lg:grow">
        <div className='flex justify-between mb-5'>
          <p className='text-xl uppercase'>Your balance</p>
          <p><span className='text-xl'>0</span> <span className='font-normal text-xs uppercase'>eth</span></p>
        </div>
      
        <div className='flex justify-between'>
          <p className='text-lg font-normal text-gray-2 uppercase'>Staked amount</p>
          <p><span className='text-xl'>0</span> <span className='font-normal text-xs uppercase'>eth</span></p>
        </div>
      </div>
      <button className='uppercase text-3xl bg-transparent w-full h-20 flex justify-center items-center text-yellow border border-yellow md:hover:bg-yellow md:hover:text-black transition-colors'>
        Dashboard
      </button>
    </div>
  );
};

StakingDashboard.propTypes = {
  className: PropTypes.string,
};