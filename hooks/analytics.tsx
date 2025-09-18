"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import * as gtag from "@/lib/gtag";
import { COOKIE_CONSENT_KEY } from "@/lib/constants";

function AnalyticsProviderInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (consent === "accepted") {
      const url = pathname + searchParams.toString();
      gtag.pageview(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsProvider() {
  return (
    <Suspense fallback={null}>
      <AnalyticsProviderInner />
    </Suspense>
  );
}
