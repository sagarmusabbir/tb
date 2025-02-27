import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { WebPage, WithContext } from "schema-dts";
import { ThemeScript } from "@thirdbracket/bracketui";
import MegaHeader from "@/components/megamenu";
import SiteFooter from "@/components/Footer";

export const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Third Bracket Solution",

  url: "https://www.thirdbracket.co.uk/",
  description:
    "Step into Third Bracket Solutions, a UK-based modern web infrastructure development service born from the collective efforts of a group of nomads who conquered platforms like Upwork and Fiverr",

  isPartOf: {
    "@type": "WebSite",
    name: "Third Bracket Solution",
    url: "https://www.thirdbracket.co.uk/",
  },
  publisher: {
    "@type": "Organization",
    name: "Third Bracket Solution",
    url: "https://www.thirdbracket.co.uk/",
    legalName: "Third Bracket Solution",
    sameAs: ["https://www.facebook.com/thirdbracket.co.uk"],
  },
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Third Bracket Solutions",
  title: {
    template: "%s | Third Bracket",
    default: "Your web Transformation Starts Here | Third Bracket Solutions",
  },
  alternates: {
    canonical: "https://www.thirdbracket.co.uk/",
  },
  keywords: [
    "third bracket",
    "third bracket solution",
    "web development uk",
    "digital marketing uk",
    "web design uk",
    "web development company uk",
    "digital marketing company uk",
    "web design company uk",
    "web development agency uk",
    "digital marketing agency uk",
    "web design agency uk",
    "web development company in uk",
    "digital marketing company in uk",
    "web design company in uk",
    "web development agency in uk",
    "digital marketing agency in uk",
    "web design agency in uk",
    "web development company near me",
    "digital marketing company near me",
    "web design company near me",
    "web development agency near me",
    "digital marketing agency near me",
    "web design agency near me",
  ],

  description:
    "Step into Third Bracket Solutions, a UK-based modern web infrastructure development service born from the collective efforts of a group of nomads who conquered platforms like Upwork and Fiverr.",

  openGraph: {
    url: "https://thirdbracket.co.uk/",
    title: "Your web Transformation Starts Here | Third Bracket",
    description:
      "Step into Third Bracket Solutions, a UK-based modern web infrastructure development service born from the collective efforts of a group of nomads who conquered platforms like Upwork and Fiverr.",
    siteName: "Third Bracket Solutions",
    type: "website",
    images: [
      {
        url: "https://og.tailgraph.com/og?fontFamily=Inter&title=Third%20Bracket%20Solutions&titleTailwind=font-bold%20text-6xl%20text-gray-900&text=UK-based%20Modern%20Web%20Infrastructure%20Development%20Service&textTailwind=text-gray-700%20text-2xl%20mt-4&logoUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Ftb%2Fmain%2Fpublic%2Foldlogo.svg&logoTailwind=w-14%20mx-auto&bgUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Ftb%2Fmain%2Fpublic%2Fcover-mint.svg&bgTailwind=bg-white%20bg-opacity-60&footer=musabbirsagar.com&footerTailwind=bg-transparent%20border-0%20mt-2%20opacity-70%20text-white&t=1720911146972&refresh=1",
        alt: "thirdbracket.co.uk og-image",
        width: 800,
        height: 600,
      },
    ],
  },
  // twitter: {
  //   handle: "@handle",
  //   site: "@site",
  //   cardType: "summary_large_image",
  // },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="facebook-domain-verification"
          content="gigwwhzcg4fv2e2op335hfoejmb9ol"
        />
        <ThemeScript />
      </head>
      <body className={`dark:bg-gray-950 ${inter.className}`}>
        {/* <DefaultHeaderNavigation /> */}

        <MegaHeader />

        <main className="px-4 mt-14 sm:mt-18 bg-white dark:bg-gray-950">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
