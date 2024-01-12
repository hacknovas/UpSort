import { NextRequest, NextResponse } from "next/server";
import { modelProd } from "@/utils/models/prodModel";

export async function GET(request: NextRequest) {
  const searchQ = await request.url.split("=")[1];

  if (searchQ != "") {
    let f1 = false,
      f2 = false,
      f3 = false;

    if (searchQ == "Fashion") {
      f3 = true;
    } else if (searchQ == "Electronics") {
      f2 = true;
    } else if (searchQ == "Mobile") {
      f1 = true;
    }

    const result = await modelProd.find({
      Category: {
        Mobile: f1,
        Electronics: f2,
        Fashion: f3,
      },
    });

    return NextResponse.json({
      result,
    });
  } else {
    const result = await modelProd.find({});
    return NextResponse.json({
      result,
    });
  }
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
