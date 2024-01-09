import { modelProd } from "@/utils/models/prodModel";

export async function GET() {
  const result = await modelProd.find({});

  return Response.json({ result });
}

export async function POST(request: Request) {
  const data = await request.json();

  const result = await modelProd.findOne({ _id: data });

  return Response.json({ result });
}
