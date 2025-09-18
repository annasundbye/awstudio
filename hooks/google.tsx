"use client";
import { COOKIE_CONSENT_KEY } from "@/lib/constants";
import { hasValidConsent } from "@/lib/utils";
import Script from "next/script";
import { useEffect, useState } from "react";

const GA_TRACKING_ID = "G-KK1CWJGHCY";

export function GoogleAnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (hasValidConsent()) {
      setEnabled(true);
    }
  }, []);

  if (!enabled) return null;

  return (
    <>
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
    </>
  );
}
