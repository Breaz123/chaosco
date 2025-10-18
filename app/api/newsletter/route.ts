
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request){
  const { email } = await request.json();
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Welcome to Resend",
    text: "Welcome to Resend",
  });
  return NextResponse.json(response);
}       