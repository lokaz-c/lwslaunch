import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The LWS - AI-Powered Website Builder (Coming Soon)",
  description: "Create stunning websites instantly with the power of AI. Transform your vision into a beautiful, functional website with The LWS.",
  keywords: ["AI website builder", "website generator", "AI-powered web design", "instant website creation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
