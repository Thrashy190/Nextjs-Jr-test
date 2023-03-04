import Image from "next/image";
import arrow from "@/assets/MdArrowRoundDown.svg";

export default function RankCard() {
  return (
    <div className="mx-2 lg:mx-32 shadow-md absolute top-72">
      <section className="bg-white rounded-lg grid grid-cols-1 lg:grid-cols-2">
        <div className="ml-14 mt-7 mb-8 mr-36">
          <div className="text-base mb-4 ">
            Our referrals are routed to the top performing agents in our
            network. Rankings are based on numerous factors, including:
          </div>
          <div className="grid grid-cols-2 text-sm">
            <ul className="list-none ">
              <li className="my-2">
                <span className="text-pantone-red mr-2">+</span>
                <span> Transaction Statistics</span>
              </li>
              <li>
                <span className="text-pantone-red mr-2">+</span>
                <span> Responsiveness</span>
              </li>
            </ul>
            <ul className="list-none ">
              <li className="my-2">
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
        <div className="bg-pantone-gray rounded-lg mr-6 mt-7 mb-8">
          <div className="flex ml-5 mr-5 mb-4 mt-6">
            <div className="flex justify-start">
              <div className="text-xl font-bold">
                Your average rank in the markets you serve is:
              </div>
              <div className="flex">
                <span className="text-pantone-red text-4xl font-bold ">25</span>
                <Image src={arrow} alt="Arrow" />
              </div>
            </div>
            <div>
              <button className=" text-white bg-pantone-red hover:bg-red-600 font-bold rounded text-base py-3 w-28 ml-20">
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
        </div>
      </section>
    </div>
  );
}
