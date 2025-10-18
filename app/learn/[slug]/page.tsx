import { supabaseServer } from "@/lib/supabase_server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams(){
  const supabase = await supabaseServer();
  const { data } = await supabase.from("lessons").select("slug");
  return data?.map(d=>({ slug: d.slug })) ?? [];
}

export default async function Lesson({ params }: { params: { slug: string } }){
  const supabase = await supabaseServer();
  const { data: lesson } = await supabase.from("lessons").select("*").eq("slug", params.slug).single();

  if(!lesson) return <div className="p-10">Niet gevonden</div>;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-slate">
      <h1>{lesson.title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.body_md ?? ""}</ReactMarkdown>
    </main>
  );
}
