import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brixon Tech - UI/UX Design, Web Development & Digital Solutions",
  description: "Expert UI/UX design, web & app development, branding, and social media management. Transform your digital presence with Brixon Tech.",
  keywords: "UI/UX design, web development, app development, branding, social media management, digital solutions",
  authors: [{ name: "Brixon Tech" }],
  openGraph: {
    title: "Brixon Tech - Digital Solutions & Development",
    description: "Expert UI/UX design, web & app development, branding, and social media management.",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <Navbar />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
