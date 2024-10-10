import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setIsBannerVisible(true);
    }
  }, []);

  // Set the cookie for consent
  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });

    // Set marketing cookies or initialize tracking services
    initializeGoogleAnalytics();
    initializeFacebookPixel();

    setIsBannerVisible(false);
  };

  const initializeGoogleAnalytics = () => {
    // initializing Google Analytics
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-M8G6XBFLQC"); // Replace with your Google Analytics ID
  };

  const initializeFacebookPixel = () => {
    // initializing Facebook Pixel
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    fbq("init", "FB_PIXEL_ID"); // Replace with your Facebook Pixel ID
    fbq("track", "PageView");
  };

  const handleRejectCookies = () => {
    // Optional: Handle rejection logic (e.g., setting cookies for essential only)
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 py-8 flex flex-col justify-between items-center z-[1000]">
      
      <p className="text-[1.15rem] max-w-[60%] text-center">
        This website uses cookies to ensure you get the best experience. By
        continuing, you consent to our use of cookies.
      </p>
      <div className="mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5"
          onClick={handleAcceptCookies}
        >
          Accept
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRejectCookies}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

const bannerStyles = {
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default CookieConsent;
