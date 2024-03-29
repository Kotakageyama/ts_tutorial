import { request } from "http";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ name: "OK. GET" });
  } else {
    res.status(200).json({ name: "OK. POST" });
  }
}
