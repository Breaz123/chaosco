import { supabaseServer } from "@/lib/supabase_server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function Lesson({ params }: { params: Promise<{ slug: string }> }){
  const { slug } = await params;
  const supabase = await supabaseServer();
  const { data: lesson } = await supabase.from("lessons").select("*").eq("slug", slug).single();

  if(!lesson) return <div className="p-10">Niet gevonden</div>;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose prose-slate">
      <h1>{lesson.title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.body_md ?? ""}</ReactMarkdown>
    </main>
  );
}
