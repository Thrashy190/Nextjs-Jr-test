import { useState, useEffect } from "react";
import StatsCardProps from "@/interfaces/StatsCardInterface";
import ZipCardProps from "@/interfaces/ZipCardInterface";
import RankCardProps from "@/interfaces/RankCardInterface";
import { oportunityCard, winsCard, lossesCard } from "@/utils/cardInfo";
import { statsFormatter } from "@/utils/formatter";

const useData = () => {
  const [isLoading, setLoading] = useState(false);
  const [zipData, setZipData] = useState<ZipCardProps>({
    sales: 0,
    commision: 0,
  });
  const [rankData, setRankData] = useState<RankCardProps>({
    rank: 0,
  });
  const [statsData, setStatsData] = useState<StatsCardProps[] | []>([]);

  useEffect(() => {
    setLoading(true);
    fetch("/api/zip")
      .then((res) => res.json())
      .then((data) => {
        setZipData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/api/rank")
      .then((res) => res.json())
      .then((data) => {
        setRankData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStatsData(
          statsFormatter(oportunityCard, winsCard, lossesCard, data)
        );
        setLoading(false);
      });
  }, []);

  return { zipData, rankData, statsData, isLoading };
};

export default useData;
