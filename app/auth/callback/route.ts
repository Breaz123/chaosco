import { NextResponse } from "next/server";
import { supabaseServer } from "../../lib/supabase_server";

export async function GET(req: Request){
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  if(code){
    const supabase = await supabaseServer();
    await supabase.auth.exchangeCodeForSession(code);
  }
  return NextResponse.redirect(new URL("/dashboard", process.env.NEXT_PUBLIC_APP_URL));
}

