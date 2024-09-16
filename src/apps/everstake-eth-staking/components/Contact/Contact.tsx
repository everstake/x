interface ContactProps { }

export const Contact: React.FC<ContactProps> = () => {

  return (
    <div className="flex flex-col md:flex-row md:gap-2 wrapper pb-10 lg:pb-20 lg:items-end">
        <div className="uppercase text-3xl font-bold mb-6 lg:w-1/2 lg:mb-0">
        HAVE QUESTIONS? <br />
        WE’RE ALWAYS THERE TO ANSWER!
        </div>
        <div className="text-xl lg:w-1/2 font-normal">
            Our distributed team of 20+ community managers is online 24/7 and is ready to assist you.
        </div>
    </div>
  )
};
