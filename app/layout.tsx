import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cemex — Premium Cement Mixing, Bangalore",
  description:
    "Cemex designs and delivers premium ready-mix concrete for modern construction across Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#e3e4d2] text-[#1a1817] font-sans">
        {children}
      </body>
    </html>
  );
}
