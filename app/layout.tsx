import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourscore-fresh.vercel.app"),
  title: { default: "YourScore | GMAT, GRE, EA & SAT coaching", template: "%s | YourScore" },
  description: "1:1 coaching for the GMAT, GRE, Executive Assessment (EA) and SAT. 21 years of mentoring, 4,000+ students guided, average GMAT 730.",
  alternates: { canonical: "./" },
  openGraph: { siteName: "YourScore", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="skip-link" href="#main">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
