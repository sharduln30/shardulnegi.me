import type { Metadata } from "next";
import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shardul Negi | Senior Software Engineer",
  description:
    "Portfolio of Shardul Negi — Senior Software Engineer at PayU, building high-scale distributed systems for GPay, PhonePe, Paytm, Meesho, Swiggy & BharatPe.",
  keywords: [
    "Shardul Negi",
    "Software Engineer",
    "PayU",
    "Java",
    "Spring Boot",
    "System Design",
    "Portfolio",
  ],
  openGraph: {
    title: "Shardul Negi | Senior Software Engineer",
    description:
      "Senior Software Engineer building high-scale fintech systems at PayU.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-f1-black text-f1-white font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
