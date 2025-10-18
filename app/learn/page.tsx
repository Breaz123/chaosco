import { supabaseServer } from "@/lib/supabase_server";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const revalidate = 60;

export default async function LearnPage(){
  const supabase = await supabaseServer();
  const { data: lessons } = await supabase.from("lessons").select("slug,title,summary,duration_min,tags").order("created_at",{ ascending:false });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Leren</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {lessons?.map((l: any) => (
          <Link key={l.slug} href={`/learn/${l.slug}`}>
            <Card className="p-5 hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{l.title}</h2>
                <span className="text-sm opacity-70">{l.duration_min} min</span>
              </div>
              <p className="mt-2 opacity-80 line-clamp-3">{l.summary}</p>
              <div className="mt-3 flex gap-2 flex-wrap">{l.tags?.map((t: any) => <Badge key={t}>{t}</Badge>)}</div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
