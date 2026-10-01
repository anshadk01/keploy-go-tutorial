import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReadingProgressBar } from "@/components/layout/ReadingProgressBar";
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
  title: "Keploy Go Quickstart Guide | Zero-Code Testing for Go (Gin + MongoDB)",
  description:
    "A beginner-friendly DevRel tutorial on running Keploy with Go (Gin + MongoDB) to automatically record HTTP tests and mock database calls with zero code changes.",
  keywords: [
    "Keploy",
    "Go",
    "Golang",
    "Gin",
    "MongoDB",
    "eBPF",
    "Testing",
    "Mocking",
    "Integration Testing",
    "DevRel",
  ],
  authors: [{ name: "Keploy DevRel Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReadingProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
