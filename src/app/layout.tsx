import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

const gopher = localFont({
  src: [
    {
      path: "../../public/fonts/Gopher_Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gopher_Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gopher_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gopher_Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gopher",
  display: "swap",
});

const HelveticaNeue = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeue_Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue_Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue_Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-HelveticaNeue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appointments - Lilac Template",
  description:
    "Therapy for adults in Minneapolis, MN. Providing a safe and supportive environment to help you live your life in full bloom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gopher.variable} ${HelveticaNeue.variable}`}>
      <body className="bg-primary text-primary min-h-screen flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
