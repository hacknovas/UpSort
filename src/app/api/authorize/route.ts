import { modelAdmin } from "@/utils/models/adminModel";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const res = await modelAdmin.find({ email: data.email });

  const pass: String = res[0].pass;

  return NextResponse.json({
    isAdmin: true,
  });
}
