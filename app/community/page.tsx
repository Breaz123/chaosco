import { supabaseServer } from "@/lib/supabase_server";
import Link from "next/link";
import CreatePost from "./post-create";

type Post = {
  id: string;
  title: string;
  created_at: string;
  profiles: {
    display_name: string | null;
  } | null;
};

export default async function Community(){
  const supabase = await supabaseServer();
  const { data: posts } = await supabase.from("posts")
    .select("id,title,created_at,profiles!posts_author_id_fkey(display_name)")
    .order("created_at",{ ascending:false }) as { data: Post[] | null };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Community</h1>
      <CreatePost/>
      <ul className="space-y-4">
        {posts?.map(p=>(
          <li key={p.id} className="border rounded-lg p-4">
            <Link href={`/community/${p.id}`} className="text-lg font-semibold">{p.title}</Link>
            <p className="text-sm opacity-70">door {p.profiles?.display_name ?? "Anoniem"}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
