"use client";

import { useEffect, useState } from "react";
import { COOKIE_CONSENT_KEY } from "@/lib/constants";

export default function CookiesPage() {
  const [consent, setConsent] = useState<null | "accepted" | "rejected">(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      try {
        const { choice } = JSON.parse(stored);
        setConsent(choice);
      } catch {
        setConsent(null);
      }
    }
  }, []);

  const updateConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ choice, timestamp: Date.now() })
    );
    setConsent(choice);
    window.location.reload(); // refresher GA/analytics-status
  };

  return (
    <main className="container max-w-3xl mx-auto px-4 py-12 prose text-gray-700 space-y-8">
      <p>
        Vi bruker cookies for å forbedre opplevelsen din og samle anonym
        statistikk om bruk av nettsiden.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">
        Typer cookies vi bruker
      </h2>
      <ul className="space-y-2">
        <li>
          <strong>Nødvendige cookies:</strong> Disse kreves for at nettsiden
          skal fungere (f.eks. huske ditt samtykke).
        </li>
        <li>
          <strong>Analyse-cookies (Google Analytics):</strong> Brukes til å
          samle anonymisert informasjon om hvordan nettsiden brukes. Disse
          settes kun dersom du har gitt samtykke i vårt cookie-banner.
        </li>
      </ul>

      <h2 className="text-2xl text-black font-semibold mb-3">Lagringstid</h2>
      <p>
        Samtykke til analyse-cookies lagres i 6 måneder. Etter dette vil du bli
        bedt om å ta stilling på nytt.
      </p>

      {consent && (
        <h2 className="text-2xl text-black font-semibold mb-3">
          Administrere samtykke
        </h2>
      )}
      {consent === "accepted" && (
        <p>
          Du har <strong>akseptert</strong> analyse-cookies.{" "}
          <button
            onClick={() => updateConsent("rejected")}
            className="px-3 py-1 rounded bg-gray-200"
          >
            Trekk tilbake samtykke
          </button>
        </p>
      )}
      {consent === "rejected" && (
        <p>
          Du har <strong>avvist</strong> analyse-cookies.{" "}
          <button
            onClick={() => updateConsent("accepted")}
            className="px-3 py-1 rounded bg-pink-500 text-white"
          >
            Godta cookies
          </button>
        </p>
      )}
    </main>
  );
}
