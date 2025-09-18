import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { COOKIE_CONSENT_KEY, EXPIRY_DAYS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasValidConsent(): boolean {
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return false;

  try {
    const { choice, timestamp } = JSON.parse(stored);
    const now = Date.now();
    const age = (now - timestamp) / (1000 * 60 * 60 * 24); // days
    return age < EXPIRY_DAYS && choice === "accepted";
  } catch {
    return false;
  }
}
