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
  metadataBase: new URL("https://keploy-go-tutorial.vercel.app"),
  title: "Keploy Go Quickstart: Zero-Code Testing for Gin & MongoDB",
  description:
    "A beginner-friendly DevRel guide to capturing real-world API traffic, generating deterministic test suites, and mocking MongoDB with zero code changes using Keploy.",
  keywords: [
    "Keploy",
    "Go",
    "Golang",
    "Gin",
    "MongoDB",
    "eBPF",
    "Zero-Code Testing",
    "API Testing",
    "Integration Testing",
    "Mocking",
    "DevRel",
  ],
  authors: [{ name: "Keploy DevRel Team", url: "https://keploy.io" }],
  creator: "Keploy DevRel",
  publisher: "Keploy Inc.",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://keploy-go-tutorial.vercel.app",
    siteName: "Keploy Go Quickstart Guide",
    title: "Keploy Go Quickstart: Zero-Code Testing for Gin & MongoDB",
    description:
      "Learn how Keploy captures HTTP API calls and MongoDB wire packets at the transport layer to replay regression tests without a database.",
    images: [
      {
        url: "https://keploy.io/assets/images/keploy-banner.png",
        width: 1200,
        height: 630,
        alt: "Keploy Zero-Code Testing for Go",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keploy Go Quickstart: Zero-Code Testing for Gin & MongoDB",
    description:
      "Learn how to capture real-world traffic and replay hermetic Go regression tests without writing mocks.",
    creator: "@Keploy_io",
    images: ["https://keploy.io/assets/images/keploy-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors antialiased selection:bg-orange-500/20 selection:text-orange-900 dark:selection:text-orange-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReadingProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
