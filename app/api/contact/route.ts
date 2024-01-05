import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json("contact details");
}

export async function POST(request: NextRequest) {
  return NextResponse.json("contact details");
}
