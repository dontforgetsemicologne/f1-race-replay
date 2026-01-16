import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "F1 Race Replay",
  description:
    "Replay and analyze Formula 1 races with interactive visualizations, detailed race statistics, and comprehensive race data.",
  openGraph: {
    title: "F1 Race Replay",
    description:
      "Replay and analyze Formula 1 races with interactive visualizations, detailed race statistics, and comprehensive race data.",
    url: "https://f1-race-replay.com/",
    siteName: "F1 Race Replay",
    images: [
      {
        url: "https://f1-race-replay.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "F1 Race Replay",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
