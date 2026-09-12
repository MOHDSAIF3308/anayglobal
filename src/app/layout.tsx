import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Providers } from "@/components/providers";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
