import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import MessageUsEmail from "@/components/forms/EmailMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Parvez <parvez.me@resend.dev>",
      to: "clash.parwesh@gmail.com",
      subject: `Form sent by ${name}`,
      react: MessageUsEmail({ name, email, message }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
