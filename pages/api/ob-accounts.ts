// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const sdk = require("api")("@truelayer/v1.0#f9fu7c1pl3c6nrp0");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const access_token = req.query.access_token;
    sdk.server("https://api.truelayer-sandbox.com/data/v1");
    sdk.auth(access_token);
    const response = await sdk.GetAccounts();
    const { results } = response;
    res.status(200).json(results);
  } catch (error: any) {
    // console.log("Error:", error);
    console.log("Error:", await error.json());
    res.status(500).json(error);
  }
}
