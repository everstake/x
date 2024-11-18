import { StakingDashboard } from './StakingDashboard';
import { StakingForm } from './StakingForm';
import { StakingLargeLogo } from './StakingLargeLogo';
import { StakingStats } from './StakingStats';
import { StakingTest } from './StakingTest';
import { StakingBalanceTest } from './StakingBalanceTest';

interface StakingProps { }

export const Staking: React.FC<StakingProps> = () => {

  return (
    <div className="flex flex-col md:flex-row py-10 mb-10 lg:mb-20 lg:pt-14 wrapper relative">
      <div className='staking grid w-full gap-5 lg:gap-5 lg:min-h-[480px] lg:col-span-1 z-10'>
        <StakingBalanceTest/>
        <StakingLargeLogo className='staking-logo' />
        <StakingForm className='staking-form' />
        <StakingDashboard className='staking-dashboard' />
        <StakingStats className='staking-stats' />
      </div>
      <div className="blob blob--staking"></div>
    </div>
  )
};