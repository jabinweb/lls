import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landour Language School - Learn Hindi in Mussoorie",
  description: "Learn Hindi, Urdu, Garhwali, Punjabi, and Sanskrit at Landour Language School in Mussoorie. Located in the beautiful hills of Landour, offering intensive and comprehensive language courses.",
  keywords: ["Hindi courses", "Language school", "Mussoorie", "Landour", "Learn Hindi", "Urdu", "Sanskrit", "India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
