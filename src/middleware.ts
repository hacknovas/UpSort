import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest, res: NextResponse) {
  try {
    const data = cookies().get("Token");

    jwtVerify(
      JSON.stringify(data),
      new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY)
    );

    return NextResponse.next();
  } catch (error) {
    console.log(error);

    return NextResponse.rewrite(new URL("/verifyAdmin", req.url));
  }
}

export const config = {
  matcher: ["/addProduct"],
};
