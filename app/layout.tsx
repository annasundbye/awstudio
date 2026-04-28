export const metadata = {
  title: "AWStudio - Webdesign for små bedrifter i Norge",
  description:
    "Jeg skaper profesjonelle og effektive nettsider for små bedrifter i Norge.",
};

import type React from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import SwipeNavigation from "@/components/SwipeNavigation";
import AnalyticsProvider from "@/hooks/analytics";
import CookieBanner from "@/components/CookieBanner";
// import { GoogleAnalyticsScripts } from "@/hooks/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <GoogleTagManager gtmId="GTM-5QH7L8RH" />
        <link rel="shortcut icon" href="/signatur2.png" type="image/x-icon" />
        {/* <GoogleAnalyticsScripts /> */}
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QH7L8RH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider />
          <div className="flex flex-col min-h-screen">
            <Header />
            <SwipeNavigation>
              {children}
              <section className="py-16 md:py-24 bg-gradient-to-b from-pink-400 to-pink-500 text-white">
                <div className="container px-4 md:px-6">
                  <div className="grid gap-6 lg:grid-cols-2 items-center">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Klar til å ta din bedrift til neste nivå?
                      </h2>
                      <p className="text-lg opacity-90 max-w-[600px]">
                        La meg hjelpe deg med å skape en digital tilstedeværelse
                        som skiller seg ut og gir resultater.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <CookieBanner />
              <Footer />
            </SwipeNavigation>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
