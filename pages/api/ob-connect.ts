// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const sdk = require("api")("@truelayer/v1.0#va0n71pl2ri4wst");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const code = req.query.code;
    sdk.server("https://auth.truelayer-sandbox.com");
    const response = await sdk.GenerateAccessToken({
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://localhost:3000/callback",
      client_id: process.env.TRUELAYER_CLIENT_ID,
      client_secret: process.env.TRUELAYER_CLIENT_SECRET,
    });
    const { access_token } = response;
    res.status(200).json(response);
  } catch (error: any) {
    console.log("Error:", await error.json());
    res.status(500).json(error);
  }
}
