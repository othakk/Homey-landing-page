import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#f0ebe1",
};

export const metadata: Metadata = {
  title: "Homey — A Friend to Find Home",
  description:
    "The swipe-first sublease marketplace for college students. Verified users, 300+ campuses.",
  openGraph: {
    title: "Homey — A Friend to Find Home",
    description: "Subleasing, unlocked. Find your next place near campus.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homey — A Friend to Find Home",
    description: "Subleasing, unlocked. Find your next place near campus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
