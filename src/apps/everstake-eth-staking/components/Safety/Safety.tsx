import {
  Chainsecurity,
  Ackee,
  ArrowRight
} from '../common/icons/index';

interface SafetyProps { }

export const Safety: React.FC<SafetyProps> = () => {

  return (
    <div className="flex flex-col pb-10 lg:pb-20 wrapper relative">
      <h4 className='text-3xl mb-10 lg:hidden'>
        Safety
      </h4>

   <div className='lg:flex z-10'>
   <div className='hidden lg:block w-1/3 relative'>
        <div className="title text-8xl uppercase relative z-20 w-[300px]">
          <p className='leading-none'>why</p>
          <p className='ml-24 leading-none'>is it</p>
          <p className='text-shadow leading-none'>safe</p>
        </div>
        <div className="size-[180px] rounded-full bg-yellow flex justify-center items-center gap-2 z-0 absolute -top-7 right-12">
          <span className='text-lg text-black uppercase'>explore</span>
          <ArrowRight stroke='#111111' />
        </div>
      </div>

      <div className='flex flex-col gap-10 md:flex-row lg:w-2/3'>
      <div className="flex flex-col md:w-1/2">
        <div className='mb-8'>
          <Chainsecurity />
        </div>
        <p className="text-md text-gray-2 leading-7 mb-4  font-normal">
          Our 0.1+ ETH staking solution has been audited by ChainSecurity, ensuring it meets industry standards for safety and reliability. This adds an extra layer of confidence for our users.
        </p>
        <a className='text-lg text-yellow uppercase mt-6' href="https://www.chainsecurity.com/security-audit/everstake-eth-b2c-staking" target='_blank' rel='noreferrer'>View report</a>
      </div>
     
     
      <div className="flex flex-col md:w-1/2">
        <div className='mb-8'>
          <Ackee />
        </div>
        <p className="text-md text-gray-2 leading-7 mb-4 font-normal">
        Our staking platform also passed an audit by Ackee, affirming its security and operational excellence. This further boosts the security of Everstake`s staking experience.
        </p>
        <a className='text-lg text-yellow uppercase mt-6' href="https://ackee.xyz/blog/everstake-ethereum-staking-protocol-audit-summary/" target='_blank' rel='noreferrer'>View report</a>
      </div>
      </div>
   </div>
   <div className="blob blob--safety"></div>
    </div>
  )
};
