import Image from "next/image";
import StatsCardProps from "@/interfaces/StatsCardInterface";

import StatsCardInfo from "@/components/StatsCardInfo";
import StastsCardVolume from "./StatsCardVolume";

export default function OpportunityCard({
  color,
  icon,
  title,
  info,
  volume,
}: StatsCardProps) {
  return (
    <div className="border border-[#EBEAED] ">
      <div className="bg-white pt-5 rounded-lg flex items-stretch flex-col">
        <Image className="mb-4 ml-10 mt-10" src={icon} alt="leads icons" />
        <div className="text-4xl font-bold mb-12  ml-10">{title}</div>
        <StatsCardInfo info={info} color={color} />
        <StastsCardVolume volume={volume} color={color} />
      </div>
    </div>
  );
}
