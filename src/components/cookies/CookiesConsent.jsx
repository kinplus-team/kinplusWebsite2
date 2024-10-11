import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [performanceCookies, setPerformanceCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(true);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setIsBannerVisible(true);
    }
    if (isBannerVisible) {
      document.getElementById("cookie-banner").focus();
    }
  }, [isBannerVisible]);

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    initializeGoogleAnalytics();
    initializeFacebookPixel();
    setIsBannerVisible(false);
  };

  const handleRejectCookies = () => {
    Cookies.set("cookieConsent", "false", { expires: 365 });
    setIsBannerVisible(false);
  };

  const initializeGoogleAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-M8G6XBFLQC");
  };

  const initializeFacebookPixel = () => {
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
    fbq("init", "FB_PIXEL_ID");
    fbq("track", "PageView");
  };

  const handleSavePreferences = () => {
    Cookies.set(
      "cookieConsent",
      JSON.stringify({ performanceCookies, marketingCookies }),
      { expires: 365 }
    );
    setShowPreferences(false);
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div
      id="cookie-banner"
      className="fixed bottom-0 left-0 w-full bg-black text-white text-center p-4 z-[999]"
      tabIndex="0"
      aria-live="polite"
    >
      <p className="text-[1.15rem] max-w-[60%] mx-auto text-center">
        This website uses cookies to ensure you get the best experience. By
        continuing, you consent to our use of cookies.
      </p>
      <div className="mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAcceptCookies}
          aria-label="Accept all cookies"
        >
          Accept All
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
          onClick={handleRejectCookies}
          aria-label="Reject all cookies"
        >
          Reject All
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowPreferences(true)}
          aria-label="Manage cookie preferences"
        >
          Manage Preferences
        </button>
      </div>

      {showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 py-8 flex flex-col justify-between items-center z-[1001]">
          <h3 className="text-xl mb-4">Manage Cookie Preferences</h3>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                id="performance"
                name="performance"
                type="checkbox"
                checked={performanceCookies}
                onChange={() => setPerformanceCookies(!performanceCookies)}
              />
              <label
                htmlFor="performance"
                className="ml-3"
              >
                Performance Cookies
              </label>
            </div>

            <div className="flex items-center ">
              <input
                id="marketing"
                name="marketing"
                type="checkbox"
                checked={marketingCookies}
                onChange={() => setMarketingCookies(!marketingCookies)}
              />
              <label
                htmlFor="marketing"
                className="ml-3"
              >
                Marketing Cookies
              </label>
            </div>
          </div>
          <button
            onClick={handleSavePreferences}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Preferences
          </button>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
