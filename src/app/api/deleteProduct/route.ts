import { modelProd } from "@/utils/models/prodModel";
import { NextResponse } from "next/server";

export async function DELETE(request: NextResponse) {
  const id = request.url.split("=")[1];
  console.log(id);

  const result = await modelProd.deleteOne({ _id: id });

  return Response.json({ result });
}
