import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ControlShowIntro from "@/components/control-show-intro";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Book",
  description: "online book application for kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Books" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Books" />
        <meta name="description" content="online book app" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#FAC63D" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FAC63D" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/Profile(192x192).png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/Profile (384x384).png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/Profile(192x192).png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/Profile(384x384).png"
        />
        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" href="/icons/Profile(192x192).png" />
        <meta property="og:type" content="pwa" />
        <meta property="og:title" content="Books" />
        <meta property="og:description" content="online book application" />
        <meta property="og:site_name" content="Books" />
        <meta property="og:url" content="https://Books.com" />
      </head>
      <body className={inter.className}>
        <ControlShowIntro>
          <div>
            {children}
            <Menu />
          </div>
        </ControlShowIntro>
      </body>
    </html>
  );
}
