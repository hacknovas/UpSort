import { NextRequest, NextResponse } from "next/server";
import { modelProd } from "@/utils/models/prodModel";


export async function GET(request: NextRequest) {
  const searchQ = await request.json();

  const result = await modelProd.find({
    Product_Name: { $regex: searchQ, $options: "i" },
  });

  return NextResponse.json({
    result,
  });
}

export async function POST(request: NextRequest) {
  const searchQ = await request.json();

  const result = await modelProd.find({
    Product_Name: { $regex: searchQ, $options: "i" },
  });

  return NextResponse.json({
    result,
  });
}
