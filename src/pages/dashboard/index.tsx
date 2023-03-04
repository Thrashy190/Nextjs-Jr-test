import { Inter } from "next/font/google";
import ZipCard from "@/components/ZipCard";
import RankCard from "@/components/RankCard";
import StatsCard from "@/components/StatsCard";

import { oportunityCard, winsCard, lossesCard } from "@/utils/cardInfo";
import CardProps from "@/interface/CardInterface";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="relative ">
        <section className="bg-pantone pb-[390px] lg:pb-40 pt-16  h-3/5 lg:h-96 flex flex-col lg:flex-row lg:justify-evenly lg:items-center ">
          <div className="w-full p-4  lg:max-w-lg text-white flex flex-col gap-4">
            <span className="font-bold text-2xl "> SOLD.com Difference </span>
            <span className="text-base">
              Unlike other lead sources and portals, we don’t focus on worthless
              metrics like impressions or even leads. SOLD.com shows you how
              many clients actually cross the finish line and buy or sell a
              home.
            </span>
            <span className="text-base">
              After all, isn’t that the metric that matters most?
            </span>
          </div>
          <ZipCard />
        </section>
        <RankCard />
        <section className="lg:mt-36 mt-[240px]">
          <div className=" flex justify-start gap-3 mx-8 mb-3 items-center">
            <div className="w-4 h-8 bg-pantone-red rounded"></div>
            <span className="text-base font-bold ">
              Since you joined our network, here’s what we’ve been up to in your
              zip codes:
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5 lg:mx-8">
            {[oportunityCard, winsCard, lossesCard].map(
              ({ color, icon, title, info, volume }, index) => {
                return (
                  <StatsCard
                    key={index}
                    color={color}
                    icon={icon}
                    title={title}
                    info={info}
                    volume={volume}
                  />
                );
              }
            )}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center mt-16 mb-14 my-auto">
          <span className="text-xl font-bold mb-4 hidden lg:block">
            Unsatisfied with these stats? We can help you improve them.
          </span>

          <span className="text-xl font-bold lg:hidden block">
            Unsatisfied with these stats?
          </span>
          <span className="text-xl font-bold mb-4 lg:hidden block">
            We can help you improve them.
          </span>

          <button className=" text-white bg-pantone-red hover:bg-red-600 font-bold rounded text-base  py-3  w-40">
            Schedule A Call
          </button>
        </section>
      </main>
    </>
  );
}
