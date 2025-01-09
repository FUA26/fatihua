import "@/styles/globals.css";
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'
import { SearchProvider, SearchConfig } from 'pliny/search'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";

import SectionContainer from "@/components/common/SectionContainer";
import siteMetadata from "config/siteMetadata";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <div className="px-4 xl:px-12">
                <main className="mb-auto">{children}</main>
              </div>
            </SearchProvider>
            {/* <Footer /> */}
          </SectionContainer>
        </ThemeProvider>

      </body>
    </html>
  );
}
