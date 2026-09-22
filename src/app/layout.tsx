import type { Metadata } from "next";
import { Syne, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VERTEX JET | O Ápice da Hidrodinâmica Pura",
  description: "Embarcações pessoais de hiperluxo construídas em fibra de carbono aeroespacial e motores marinhos supercharged de 380 HP.",
  keywords: ["jet ski de luxo", "vertex jet", "pwc carbon", "marine dynamics", "nautical luxury", "avantgarde"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-white text-[#0a0a0a] antialiased selection:bg-[#c43818]/15 selection:text-[#0a0a0a]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
