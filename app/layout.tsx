import config from "@/configs/main.config";
import "@/styles/globals.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  authors: { name: config.author, url: config.socials.site },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      // { url: "/icon.svg", type: "image/svg+xml" },
    ],
    // apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(config.url),
  openGraph: {
    type: "website",
    title: {
      default: config.title,
      template: `%s | ${config.title}`,
    },
    description: config.description,
    siteName: config.title,
    url: config.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
