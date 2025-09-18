"use client";
import { EXPIRY_DAYS, COOKIE_CONSENT_KEY } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!stored) {
      setVisible(true); // never set → ask for consent
      return;
    }

    try {
      const { timestamp } = JSON.parse(stored);
      const now = Date.now();
      const age = (now - timestamp) / (1000 * 60 * 60 * 24); // days
      if (age >= EXPIRY_DAYS) {
        setVisible(true); // expired → re-ask
      }
    } catch {
      setVisible(true); // corrupted data → re-ask
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ choice, timestamp: Date.now() })
    );
    setVisible(false);

    if (choice === "accepted") {
      window.location.reload(); // ensures GA starts after consent
    }
  };

  // ⬇️ Example: use `hasValidConsent()` in your GA logic
  // e.g., in RootLayout or AnalyticsProvider:
  // if (hasValidConsent()) { load GA scripts }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 shadow-lg px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
      <p className="text-sm text-gray-800">
        Vi bruker cookies for å forbedre opplevelsen din. Du kan lese mer i vår{" "}
        <a href="/personvern" className="underline">
          personvernerklæring
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent("rejected")}
          className="px-4 py-2 text-sm bg-gray-200 rounded"
        >
          Avvis
        </button>
        <button
          onClick={() => handleConsent("accepted")}
          className="px-4 py-2 text-sm bg-pink-500 text-white rounded"
        >
          Godta
        </button>
      </div>
    </div>
  );
}
