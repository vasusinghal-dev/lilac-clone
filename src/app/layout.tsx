import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

export const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Anxiety, Trauma & Burnout Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist in Santa Monica offering therapy for anxiety, trauma, panic, burnout, and perfectionism. In-person sessions in Santa Monica and secure telehealth across California.",
  keywords: [
    "Anxiety therapy Santa Monica",
    "Trauma therapy Santa Monica",
    "EMDR therapist Santa Monica",
    "Burnout counseling California",
    "Licensed psychologist Santa Monica",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica",
    description:
      "Warm, collaborative therapy for adults experiencing anxiety, trauma, or burnout. In-person sessions in Santa Monica and telehealth across California.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-primary text-primary min-h-screen flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
