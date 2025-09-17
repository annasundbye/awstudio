// lib/gtag.js

export const GA_TRACKING_ID = "G-KK1CWJGHCY";

// Log pageviews
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log spesifikke events (valgfritt)
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
