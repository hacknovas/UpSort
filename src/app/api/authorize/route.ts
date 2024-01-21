import { modelAdmin } from "@/utils/models/adminModel";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
// import jwt from "jsonwebtoken"; //error

export async function POST(request: NextRequest, response: NextResponse) {
  const jwt = require("jsonwebtoken");

  try {
    const data = await request.json();

    const res = await modelAdmin.find({ email: data.email });

    if (data.pass != res[0].pass) {
      throw new Error("Password doesn't match");
    }
    const id = res[0]._id;

    const token = jwt.sign({ id }, process.env.NEXT_PUBLIC_SECRET_KEY, {
      expiresIn: "1h",
    });

    cookies().set("Token", token);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ status: 400 });
  }
}
