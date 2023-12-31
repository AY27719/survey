import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "survey",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu></Menu>
        {children}
      </body>
    </html>
  );
}
