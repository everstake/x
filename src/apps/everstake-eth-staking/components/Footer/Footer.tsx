import { Phone, X } from '@mui/icons-material';
import {
  ArrowRight,
  Discord,
} from '../common/icons/index';
interface FooterProps { }

export const Footer: React.FC<FooterProps> = () => {

  return (
    <div className="flex flex-col md:flex-row space-between gap-4 bg-black text-white md:border-t md:border-t-gray-light">

      <a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0P1Gk5eYeQcs5shpHMUuvO3WFZHgqZuq3ZNJitr-IfHxnIzPT_WDX-FRMukAHclS7wAhkY0Ahx' className="flex flex-col grow gap-5 pt-12 px-5 pb-16 max-md:border-t max-md:border-t-gray-light md:border-r md:border-r-gray-light lg:h-72 lg:flex lg:justify-end lg:flex-col lg:w-1/3 lg:pr-10 lg:px-16 lg:hover:pr-7 lg:duration-500 lg:transition-all">
        <Phone />
        <div className='flex justify-between lg:items-center'>
          <p className='text-md font-bold uppercase text-2xl max-w-44'>
            Book a call with us
          </p>
         <ArrowRight width={24}/>
        </div>
      </a>
     
      <a href='https://x.com/everstake_pool' className="flex flex-col grow gap-5 pt-12 px-5 pb-16 max-md:border-t max-md:border-t-gray-light md:border-r md:border-r-gray-light lg:h-72 lg:flex lg:justify-end lg:flex-col lg:w-1/3 lg:pr-10 lg:px-16 lg:hover:pr-7 lg:duration-500 lg:transition-all">
        <X />
        <div className='flex justify-between lg:items-center'>
          <p className='text-md font-bold uppercase text-2xl max-w-44'>
            Follow us on twitter
          </p>
         <ArrowRight width={24}/>
        </div>
      </a>
     
      <a href='https://discord.com/invite/PqrbhKNpA5' className="flex flex-col grow gap-5 pt-12 px-5 pb-16 max-md:border-t max-md:border-t-gray-light lg:h-72 lg:flex lg:justify-end lg:flex-col lg:w-1/3 lg:pr-10 lg:px-16 lg:hover:pr-7 lg:duration-500 lg:transition-all">
        <Discord />
        <div className='flex justify-between lg:items-center'>
          <p className='text-md font-bold uppercase text-2xl max-w-44'>
            Stay in touch via discord
          </p>
         <ArrowRight width={24}/>
        </div>
      </a>

    </div>
  )
};
