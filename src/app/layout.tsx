import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./finic.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AiAssistant from "@/components/AiAssistant";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Finic Global Solutions | Precision, Performance, Progress",
  description: "Finic Global Solutions helps ambitious businesses design, build, and scale exceptional digital products. Custom software engineering, enterprise ERP/CRM platforms, cloud operations, AI, and digital growth.",
  icons: {
    icon: "/finic-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${instrumentSerif.variable} min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AiAssistant />
      </body>
    </html>
  );
}
