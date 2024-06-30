import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

import NewsletterSignUpFooterSection from "../components/footer";
import { Contact } from "@/components/contact";
import { HeaderNavigation } from "@/components/default";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-flowbite-react-landing",
  description: "Nextjs Flowbite React Starter | Saas Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
