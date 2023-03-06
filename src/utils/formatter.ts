import StatsCardProps from "@/interfaces/StatsCardInterface";

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const statsFormatter = (
  opportunity: StatsCardProps,
  losses: StatsCardProps,
  wins: StatsCardProps,
  apiResponse: StatsCardProps[]
) => {
  opportunity.info.map((item: any, index: any) => {
    item.data = apiResponse[0].info[index].data;
    item.percetage = apiResponse[0].info[index].percetage;
  });

  losses.info.map((item: any, index: any) => {
    item.data = apiResponse[1].info[index].data;
  });

  wins.info.map((item: any, index: any) => {
    item.data = apiResponse[2].info[index].data;
  });

  losses.volume!.map((item: any, index: any) => {
    item.data = apiResponse[1].volume![index].data;
  });

  wins.volume!.map((item: any, index: any) => {
    item.data = apiResponse[2].volume![index].data;
  });

  return [opportunity, losses, wins];
};
