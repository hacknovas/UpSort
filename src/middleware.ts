import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import verifyToken from "./utils/verify";

export function middleware(req: NextRequest, res: NextResponse) {
  const jwt = require("jsonwebtoken");
  try {
    const data = cookies().get("Token");

    const decode = verifyToken(data?.value);
    console.log(decode);

    return NextResponse.next();
  } catch (error) {
    console.log(error);

    return NextResponse.rewrite(new URL("/verifyAdmin", req.url));
  }
}

export const config = {
  matcher: ["/addProduct"],
};
