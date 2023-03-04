import Image from "next/image";
import CardProps from "@/interface/CardInterface";
import currencyFormatter from "@/utils/currencyFormatter";

export default function OpportunityCard({
  color,
  icon,
  title,
  info,
  volume,
}: CardProps) {
  return (
    <div className=" border border-[#EBEAED] ">
      <div className="bg-white pt-5 rounded-lg flex items-stretch flex-col">
        <Image className="mb-4 ml-10 mt-10" src={icon} alt="leads icons" />
        <div className="text-4xl font-bold mb-12  ml-10">{title}</div>
        <div className="mx-10 mb-5">
          {info.map(({ subtitle, data, percetage }, index) => {
            return (
              <div key={index} className="flex flex-col mb-4">
                <div className="grid grid-cols-3 text-base mb-5">
                  <div className="col-span-2">{subtitle}</div>
                  <div className="flex items-end flex-col">
                    <div
                      className={
                        index === 0
                          ? `font-bold text-3xl text-` + color
                          : `font-bold text-2xl text-` + color
                      }
                    >
                      {data}
                    </div>
                  </div>
                </div>
                {percetage && (
                  <div className="flex justify-end mb-5">
                    <div className="flex items-center w-full">
                      <div className="w-1/4 bg-[#EBEAED] rounded-sm h-1.5">
                        <div
                          className={
                            `bg-` + color + ` h-1.5 rounded-full w-1/2`
                          }
                        ></div>
                      </div>

                      <div className={`text-` + color}>(XX%)</div>
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
        {volume && (
          <div className="bg-pantone-gray px-10 pt-5 pb-5 self-end w-full">
            {volume.map(({ subtitle, data }, i) => {
              return (
                <div>
                  <div className="flex flex-col items-end text-base ">
                    <div className="pb-2">{subtitle}</div>
                    <div className={`pb-4 text-2xl text-` + color}>
                      {currencyFormatter.format(data)}
                    </div>
                  </div>
                  <div
                    className={
                      i === info.length - 1 ? `hidden pb-3` : `block pb-3`
                    }
                  >
                    <div className="h-[1px] w-auto bg-[#CFCFCF] "></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
