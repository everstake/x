import {
  EverstakeSmallLogo,
} from '../common/icons/index';

interface MenuTitleProps { }

export const MenuTitle: React.FC<MenuTitleProps> = () => {

  return (
    <div className="flex gap-5 items-center wrapper">
        <EverstakeSmallLogo className='shrink-0'/>
        <p className='uppercase text-xl md:text-3xl font-bold'>
            Safe and simple staking from Everstake
        </p>
    </div>
  )
};
