import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ConditionalShell } from "@/components/ConditionalShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Executive Command Centre",
    template: "%s · Executive Command Centre",
  },
  description:
    "Executive IT leadership operating system—deep knowledge, practice, STAR stories, company lenses, and final prep. Private, static-first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  );
}
