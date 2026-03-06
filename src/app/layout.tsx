import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PM Industrial Suppliers | Industrial Scrap Dealers, Chennai",
  description:
    "PM Industrial Suppliers is a trusted scrap metal trading company based in Chennai, specializing in iron, ferrous, and non-ferrous metals. Founded by Peer Mohamed.",
  keywords: [
    "scrap metal Chennai",
    "iron scrap dealer",
    "ferrous metal supplier",
    "non-ferrous scrap",
    "industrial scrap trading",
    "PM Industrial Suppliers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
