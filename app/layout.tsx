export const metadata = {
  title: "AWStudio - Webdesign for små bedrifter i Norge",
  description:
    "Jeg skaper profesjonelle og effektive nettsider for små bedrifter i Norge.",
};

import type React from "react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import SwipeNavigation from "@/components/SwipeNavigation";
import Link from "next/link";
import Script from "next/script";
import { GA_TRACKING_ID } from "@/lib/gtag";
import AnalyticsProvider from "@/hooks/analytics";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
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
              <Footer />
            </SwipeNavigation>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
