import Image from 'next/image';
import arrow from '@/assets/MdArrowRoundDown.svg';

export default function RankCard() {
  return (
    <div className="mx-5 xl:mx-28 shadow-md absolute top-[600px] lg:top-72">
      <section className="bg-white p-5 lg:p-0 rounded-lg grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:ml-10 lg:mt-7 lg:mr-4  2xl:ml-14 xl:mt-7 xl:mb-8 xl:mr-30">
          <div className="text-base mb-4 ">
            Our referrals are routed to the top performing agents in our
            network. Rankings are based on numerous factors, including:
          </div>
          <div className="text-sm m-8 xl:m-0">
            <ul className="list-none grid grid-cols-1 xl:grid-cols-2 lg:gap-2 xl:gap-0">
              <li className="xl:my-2">
                <span className="text-pantone-red mr-2">+</span>
                <span> Transaction Statistics</span>
              </li>
              <li className="xl:my-2">
                <span className="text-pantone-red mr-2">+</span>
                <span> Responsiveness</span>
              </li>
              <li>
                <span className="text-pantone-red mr-2">+</span>
                <span> Customer Satisfaction</span>
              </li>
              <li>
                <span className="text-pantone-red mr-2">+</span>
                <span> Portal Updates</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-pantone-gray rounded-lg lg:mr-6 lg:mt-7 lg:mb-8">
          <div className="flex ml-5 mr-5 mb-4 mt-6">
            <div className="flex justify-start">
              <div className="text-xl font-bold">
                Your average rank in the markets you serve is:
              </div>
              <div className="flex pl-7 pr-8 items-center">
                <span className="text-pantone-red text-4xl font-bold ">25</span>
                <Image src={arrow} alt="Arrow" />
              </div>
            </div>
            <div className="hidden xl:block">
              <button className=" text-white bg-pantone-red hover:bg-red-600 font-bold rounded text-base py-3 w-28 2xl:ml-20">
                Learn More
              </button>
            </div>
          </div>
          <article className="text-sm  ml-5 mr-5 mb-6">
            Your ranking will directly affect the number of referrals you
            receive. Learn about our
            <span className="text-pantone-red pl-1">Guaranteed Display </span>
            program to help improve your ranking.
          </article>
          <div className="xl:hidden block">
            <button className=" text-white bg-pantone-red hover:bg-red-600 font-bold rounded text-base py-3 w-full xl:w-28 xl:ml-20">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
