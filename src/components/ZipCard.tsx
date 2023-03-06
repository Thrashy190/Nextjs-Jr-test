import redIcon from "@/assets/RedIconZip.svg";
import greenIcon from "@/assets/GreenIconZip.svg";
import Image from "next/image";
import ZipCardProps from "@/interfaces/ZipCardInterface";

export default function ZipCard({ sales, commision }: ZipCardProps) {
  return (
    <div className=" p-4 shadow-md lg:max-w-lg ">
      <div className="bg-white pt-5 px-8 rounded-lg flex-col">
        <div className="flex items-center justify-center pb-6">
          <h3 className="text-sm">
            In your zips over the last 18 months, we’ve originated:
          </h3>
        </div>
        <div className="grid grid-cols-3 pb-12 ">
          <div className="flex flex-col ">
            <Image src={redIcon} alt="RedIcon" className="pb-3.5" />
            <span className="font-semibold text-3xl pb-1.5">${sales}M</span>
            <span className="text-xs opacity-70">in sales</span>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-24 w-[1px] bg-[#EFEFEF] "></div>
          </div>
          <div className="flex flex-col ">
            <Image src={greenIcon} alt="RedIcon" className="pb-3.5" />
            <span className="font-semibold text-3xl pb-1.5">${commision}K</span>
            <span className="text-xs opacity-70 ">in Commissions (est)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
