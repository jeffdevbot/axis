import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jb-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Axis Brands Group — Your Amazon Partner. Not Your Amazon Agency.",
  description:
    "Axis Brands is run by operators and investors in consumer product companies. We manage Amazon and Walmart with your P&L in mind — flat monthly fee, no percentage of ad spend, no lock-in contracts.",
  icons: {
    icon: "/axis-logo-blue.svg",
  },
  openGraph: {
    title: "Axis Brands Group — Your Amazon Partner. Not Your Amazon Agency.",
    description:
      "Operator-led Amazon & Walmart growth partner. Flat fee, no percentage of ad spend, no lock-in contracts.",
    type: "website",
    url: "/",
    siteName: "Axis Brands Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axis Brands Group — Your Amazon Partner. Not Your Amazon Agency.",
    description:
      "Operator-led Amazon & Walmart growth partner. Flat fee, no percentage of ad spend, no lock-in contracts.",
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
      className={`${inter.variable} ${jakarta.variable} ${jbMono.variable}`}
    >
      <body>{children}</body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-LBTW0MSJ5N" />
      )}
    </html>
  );
}
