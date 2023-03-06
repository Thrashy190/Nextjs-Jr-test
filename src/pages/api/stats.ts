// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type InfoItems = {
  data: number;
  percetage?: number;
};

type VolumeItems = {
  data: number;
};

type Data = {
  info: InfoItems[];
  volume?: VolumeItems[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      info: [{ data: 500 }, { data: 100, percetage: 20 }, { data: 30 }],
    },
    {
      info: [{ data: 15 }, { data: 10 }],
      volume: [{ data: 3000000 }, { data: 50000 }],
    },
    {
      info: [{ data: 15 }, { data: 10 }],
      volume: [{ data: 3000000 }, { data: 50000 }],
    },
  ]);
}
