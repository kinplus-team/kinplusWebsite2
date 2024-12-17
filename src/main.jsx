// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import TagManager from "react-gtm-module";
import analyticsService from "./components/google-analytics.jsx";
import App from "./App.jsx";
import "./index.css";

const CONFIG = {
  GTM_ID: import.meta.env.VITE_GTM_ID,
  DEV_MODE: import.meta.env.DEV,
  INITIAL_CONSENT: {
    performance: true,
    marketing: false,
  },
};

// Defer GTM initialization
const initializeGTM = () => {
  if (!CONFIG.GTM_ID) return;

  const tagManagerArgs = {
    gtmId: CONFIG.GTM_ID,
    auth: import.meta.env.VITE_GTM_AUTH || "",
    preview: import.meta.env.VITE_GTM_PREVIEW || "",
    dataLayerName: "dataLayer",
    events: {
      pageView: true,
      browserDetails: true,
    },
    dataLayer: {
      platform: "web",
      environment: CONFIG.DEV_MODE ? "development" : "production",
    },
  };

  // Defer GTM initialization
  setTimeout(() => {
    TagManager.initialize(tagManagerArgs);
  }, 2000);
};

// Render app immediately
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize services after render
Promise.resolve().then(async () => {
  try {
    await analyticsService.initialize(CONFIG.INITIAL_CONSENT);
    initializeGTM();
  } catch (error) {
    console.error("Failed to initialize analytics:", error);
  }
});

export const trackEvent = analyticsService.trackEvent.bind(analyticsService);
export const trackPageView =
  analyticsService.trackPageView.bind(analyticsService);
