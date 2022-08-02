import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "jhyoo9161@naver.com",
      name: "유지호",
    },
  });

  res.json({
    ok: true,
    data: "success",
  });
}
