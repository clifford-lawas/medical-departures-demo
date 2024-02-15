import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./shared/header";
import Search from "./shared/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dental Departures Demo",
  description: "Dental Departures Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link href='https://fonts.googleapis.com/css?family=Manrope' rel='stylesheet'></link>
        <div className="sticky top-0">
          <Header></Header>
          <Search></Search>
        </div>
        <div>
          {children}
        </div></body>
    </html>
  );
}
