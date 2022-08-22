import { withIronSessionApiRoute } from "iron-session/next";

const cookieOption = {
  cookieName: "access_token",
  password: process.env.IRON_SESSION_PASSWORD || "",
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOption);
}
