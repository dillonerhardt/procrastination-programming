// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.redirect(
    `https://auth.truelayer-sandbox.com/?response_type=code&client_id=${process.env.TRUELAYER_CLIENT_ID}&scope=info%20accounts%20balance%20cards%20transactions%20direct_debits%20standing_orders%20offline_access&redirect_uri=http://localhost:3000/callback&providers=uk-cs-mock%20uk-ob-all%20uk-oauth-all`
  );
}
