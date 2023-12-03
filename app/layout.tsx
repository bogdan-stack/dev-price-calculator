import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bogdan Helerea - Full Stack Developer",
  description:
    "Developer, Designer, and Creator. I love working with React and Next.js",
  metadataBase: new URL("https://dev-price-calculator.vercel.app"),
  openGraph: {
    title: "Bogdan Helerea - Full Stack Developer",
    description:
      "Developer, Designer, and Creator. I love working with React and Next.js",
    siteName: "Bogdan Helerea - Full Stack Developer",
    images: "/public/logobhwbb.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
