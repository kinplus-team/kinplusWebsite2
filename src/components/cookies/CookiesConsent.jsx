import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    performance: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setIsBannerVisible(true);
    } else {
      try {
        const parsedConsent = JSON.parse(cookieConsent);
        setCookiePreferences(parsedConsent);
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
        setIsBannerVisible(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isBannerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBannerVisible]);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      performance: true,
      marketing: true,
    };
    saveCookiePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      performance: false,
      marketing: false,
    };
    saveCookiePreferences(allRejected);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(cookiePreferences);
  };

  const saveCookiePreferences = (preferences) => {
    Cookies.set("cookieConsent", JSON.stringify(preferences), { expires: 365 });
    setCookiePreferences(preferences);
    setIsBannerVisible(false);
    setShowPreferences(false);
    initializeCookies(preferences);
  };

  const initializeCookies = (preferences) => {
    if (preferences.performance) {
      initializeGoogleAnalytics();
    }
    if (preferences.marketing) {
      initializeFacebookPixel();
    }
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
    // Facebook Pixel initialization code (unchanged)
  };

  if (!isBannerVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000]">
      <div
        role="dialog"
        aria-labelledby="cookie-consent-title"
        className="bg-white text-black p-6 rounded-lg max-w-2xl w-full mx-4"
      >
        <h2
          id="cookie-consent-title"
          className="text-2xl font-bold mb-4"
        >
          Cookie Consent
        </h2>
        <p className="mb-4">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking "Accept All", you
          consent to our use of cookies.
        </p>
        {showPreferences ? (
          <>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input
                  id="necessary"
                  name="necessary"
                  type="checkbox"
                  checked={cookiePreferences.necessary}
                  disabled
                  className="mr-2"
                />
                <label htmlFor="necessary">Necessary Cookies</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="performance"
                  name="performance"
                  type="checkbox"
                  checked={cookiePreferences.performance}
                  onChange={(e) =>
                    setCookiePreferences({
                      ...cookiePreferences,
                      performance: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="performance">Performance Cookies</label>
              </div>
              <div className="flex items-center">
                <input
                  id="marketing"
                  name="marketing"
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={(e) =>
                    setCookiePreferences({
                      ...cookiePreferences,
                      marketing: e.target.checked,
                    })
                  }
                  className="mr-2"
                />
                <label htmlFor="marketing">Marketing Cookies</label>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSavePreferences}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save Preferences
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4">
            <button
              onClick={handleRejectAll}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              Reject All
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            >
              Manage Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Accept All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
