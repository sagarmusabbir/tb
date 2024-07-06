import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

import NewsletterSignUpFooterSection from "../components/footer";
import { Contact } from "@/components/contact";
import { HeaderNavigation } from "@/components/default";

import { MegaHeader } from "@/components/mega-menu";

import { HeaderWithDropdownMenu } from "@/components/dropdown";
import MainHeader from "@/components/mainheader";
import { MegaDropdownHeader } from "@/components/mega-dropdown";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Third Bracket Solution",
  description: "Your web Transformation Starts Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Implements Dark Theme functionality */}
        <ThemeModeScript />
      </head>
      <body className={`dark:bg-gray-950 ${inter.className}`}>
        {/* <DefaultHeaderNavigation /> */}
        <HeaderNavigation />

        {children}

        <NewsletterSignUpFooterSection />
      </body>
    </html>
  );
}
