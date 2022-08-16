import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, phone } = req.body;
  const user = email ? { email } : { phone: +phone };

  if (!user) {
    res.status(400).json({
      ok: false,
    });
  }

  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  await client.user.upsert({
    where: {
      ...user,
    },
    create: {
      ...user,
      name: "Anonymous",
    },
    update: {},
  });

  res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
