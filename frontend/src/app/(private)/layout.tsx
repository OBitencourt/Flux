import type { Metadata } from "next";
import "../globals.css";
import { Inter } from 'next/font/google'
import Sidebar from "@/components/private-pages/sidebar/sidebar";
import PrivateHeader from "@/components/private-pages/private-header";
import CookiesWrapper from "@/providers/CookiesProviderWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Flux",
  description: "Have your best organization with Flux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <CookiesWrapper>

          <PrivateHeader />
          <div className="flex">

            <Sidebar />
            {children}
          </div>
        </CookiesWrapper>
      </body>
    </html>
  );
}
