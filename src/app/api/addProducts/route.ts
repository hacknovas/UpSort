import { extratFun } from "@/utils/Scraping/extractData";
import { modelProd } from "@/utils/models/prodModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const dt = await request.json();
  // Extraction
  const data = await extratFun(dt.amazon, dt.flipkart);
  //
  const saveData = {
    Product_Name: dt.name,
    Links: {
      Amazon: dt.amazon,
      Flipkart: dt.flipkart,
    },
    Prices: data.Prices,
    Ratings: data.Ratings,
    Images: data.Images,
    Category: {
      Mobile: dt.option == "Mobile",
      Electronics: dt.option == "Electronics",
      Fashion: dt.option == "Fashion",
    },
  };

  const result = new modelProd(saveData);

  await result.save();

  return NextResponse.json({ saveData });
}
