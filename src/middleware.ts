import { NextRequest, NextResponse } from "next/server";
import { modelAdmin } from "./utils/models/adminModel";

export async function middleware(request: NextRequest) {

  

  return NextResponse.redirect(new URL("/verifyAdmin", request.url));
}

export const config = {
  matcher: ["/addProduct"],
};
