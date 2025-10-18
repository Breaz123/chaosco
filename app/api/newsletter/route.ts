
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request){
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Resend API key not configured" }, { status: 500 });
  }
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email } = await request.json();
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Welcome to Resend",
    text: "Welcome to Resend",
  });
  return NextResponse.json(response);
}       