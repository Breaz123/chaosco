import "./styles/globals.css";
import { Poppins, Nunito_Sans } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600","700"], variable: "--font-heading" });
const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400","600"], variable: "--font-body" });

export const metadata = {
  title: "Chaos & Co – ADHD community",
  description: "Een beetje chaos, veel begrip.",
};

import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${poppins.variable} ${nunito.variable} bg-offwhite text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
