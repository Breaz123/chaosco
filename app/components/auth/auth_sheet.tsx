"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase_browser";

export function AuthSheet(){
  const supabase = supabaseBrowser();
  const [email,setEmail]=useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function handleMagic(){
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options:{ emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback` }
    });
    if(error){ 
      alert(`Error: ${error.message}`); 
    } else { 
      alert("Check je mail - Magic link verstuurd."); 
    }
  }

  return(
    <div>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
      >
        Inloggen
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Welkom bij Chaos & Co</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="jij@voorbeeld.be" 
                value={email} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onClick={handleMagic}
              >
                Stuur magic link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
