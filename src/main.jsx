import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-M9FVKLGW", // Google Tag Manager ID
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        // console.log('Service Worker registered: ', registration);
      })
      .catch((registrationError) => {
        // console.log('Service Worker registration failed: ', registrationError);
      });
  });
}
