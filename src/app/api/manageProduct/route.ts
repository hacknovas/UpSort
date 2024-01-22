import { modelProd } from "@/utils/models/prodModel";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await modelProd.find({});

  return Response.json({ result });
}

export async function POST(request: Request) {
  const data = await request.json();

  const result = await modelProd.findOne({ _id: data });

  return Response.json({ result });
}

export async function DELETE(request: NextResponse) {
  const id = request.url.split("=")[1];
  console.log(id);

  const result = await modelProd.deleteOne({ _id: id });

  return Response.json({ result });
}
