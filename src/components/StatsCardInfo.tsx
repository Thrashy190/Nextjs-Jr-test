import getColor from "@/utils/getColors";
import StatsCardProps from "@/interfaces/StatsCardInterface";

const StastsCardInfo = ({ info, color }: Partial<StatsCardProps>) => {
  return (
    <div className="mx-10 mb-5">
      {info &&
        info.map(({ subtitle, data, percetage }, index) => {
          return (
            <div key={index} className="flex flex-col mb-4">
              <div className="grid grid-cols-3 text-base mb-5">
                <div className="col-span-2 ">{subtitle}</div>
                <div className="flex items-end flex-col">
                  <div
                    className={
                      index === 0
                        ? `font-bold text-3xl ` + getColor(color!)
                        : `font-bold text-2xl ` + getColor(color!)
                    }
                  >
                    {data}
                  </div>
                </div>
              </div>
              {percetage && (
                <div className="mb-5 flex justify-end w-full">
                  <div className="flex items-center w-auto">
                    <div className="w-16 bg-[#EBEAED] rounded-sm h-1.5 ">
                      <div
                        className={
                          `bg-pantone-blue` + ` h-1.5 rounded-full w-1/2`
                        }
                      ></div>
                    </div>

                    <div className={`ml-2 ` + getColor(color!)}>(XX%)</div>
                  </div>
                </div>
              )}
              <div className={index === info.length - 1 ? `hidden` : `block`}>
                <div className="h-[1px] w-auto border-dashed border border-[#CFCFCF] "></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default StastsCardInfo;
