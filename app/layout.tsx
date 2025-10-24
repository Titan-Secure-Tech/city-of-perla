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
  title: "City of Perla | The New Black American Silicon Valley",
  description: "Perla, Arkansas is reimagining its future as a thriving hub for Black innovation, technology, and entrepreneurship. Join us in building the next great American tech ecosystem.",
  keywords: ["Perla Arkansas", "Black Silicon Valley", "Black tech hub", "Arkansas technology", "Black entrepreneurship", "innovation hub"],
  openGraph: {
    title: "City of Perla | The New Black American Silicon Valley",
    description: "Join us in building the next great American tech ecosystem in Perla, Arkansas.",
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
