"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Tools(){
  const [items,setItems]=useState<string[]>([]);
  const [text,setText]=useState("");

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Tools</h1>
      <Card className="p-5 space-y-3">
        <h2 className="font-semibold text-lg">To-Don't list</h2>
        <div className="flex gap-2">
          <input className="border rounded px-3 py-2 flex-1" value={text} onChange={e=>setText(e.target.value)} placeholder="Wat ga je bewust NIET doen?"/>
          <Button onClick={()=>{ if(text) setItems([...items,text]); setText(""); }}>Toevoegen</Button>
        </div>
        <ul className="list-disc pl-6">{items.map((i,idx)=><li key={idx}>{i}</li>)}</ul>
      </Card>
    </main>
  );
}
