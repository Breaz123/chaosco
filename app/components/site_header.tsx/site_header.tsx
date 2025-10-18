"use client";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AuthSheet } from "@/components/auth/auth_sheet";
import { Switch } from "@/components/ui/switch";

export function SiteHeader(){
  const [focus,setFocus]=useState(false);

  return (
    <header className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">Chaos & Co</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/learn">Leren</Link>
          <Link href="/community">Community</Link>
          <Link href="/tools">Tools</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-sm">
            <span>Focus mode</span>
            <Switch checked={focus} onCheckedChange={setFocus}/>
          </div>
          <AuthSheet/>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" variant="outline">Menu</Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-6">
              <nav className="flex flex-col gap-4">
                <Link href="/learn">Leren</Link>
                <Link href="/community">Community</Link>
                <Link href="/tools">Tools</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
