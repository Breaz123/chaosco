// /app/community/[id]/page.tsx
import { supabaseServer } from "@/lib/supabase_server";
import Comments from "./realtime-comments";

export default async function Post({ params:{id} }:{ params:{id:string} }){
  const sb = await supabaseServer();
  const { data: post } = await sb.from("posts").select("*").eq("id", id).single();
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">{post?.title}</h1>
      <p className="whitespace-pre-line">{post?.content}</p>
      <Comments postId={id}/>
    </main>
  );
}

