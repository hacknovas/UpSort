import { modelProd } from "@/utils/models/prodModel";

export async function GET() {
  const result = await modelProd.find({});

  return Response.json({ result });
}
