import StatsCardProps from "@/interfaces/StatsCardInterface";
import { currencyFormatter } from "@/utils/formatter";
import getColor from "@/utils/getColors";

const StastsCardVolume = ({ volume, color }: Partial<StatsCardProps>) => {
  return (
    <>
      {volume && (
        <div className="bg-pantone-gray px-10 pt-5 pb-5 self-end w-full">
          {volume.map(({ subtitle, data }, i) => {
            return (
              <div key={i}>
                <div className="flex flex-col items-end text-base ">
                  <div className="pb-2">{subtitle}</div>
                  <div className={`pb-4 text-2xl ` + getColor(color!)}>
                    {currencyFormatter.format(data)}
                  </div>
                </div>
                <div
                  className={
                    i === volume!.length - 1 ? `hidden pb-3` : `block pb-3`
                  }
                >
                  <div className="h-[1px] w-auto bg-[#CFCFCF] "></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default StastsCardVolume;
