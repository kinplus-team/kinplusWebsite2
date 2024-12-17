import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import CookieOption from "./CookieOption";

const COOKIE_NAME = "cookieConsent";
const COOKIE_EXPIRE_DAYS = 365;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    performance: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = Cookies.get(COOKIE_NAME);
    if (!savedConsent) {
      setTimeout(() => setIsVisible(true), 200); // Short delay to avoid LCP impact
      return;
    }
    try {
      const parsedConsent = JSON.parse(savedConsent);
      setPreferences(parsedConsent);
      setIsVisible(false);
    } catch {
      setIsVisible(true);
      Cookies.remove(COOKIE_NAME);
    }
  }, []);

  const savePreferences = (newPreferences) => {
    Cookies.set(COOKIE_NAME, JSON.stringify(newPreferences), {
      expires: COOKIE_EXPIRE_DAYS,
      sameSite: "Strict",
    });
    setPreferences(newPreferences);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      performance: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      performance: false,
      marketing: false,
    });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000] transition-opacity duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Cookie Consent</h2>
        <p className="mb-4">
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking{" "}
          <span className="text-blue-800 border-b-2 border-blue-800">
            Accept All
          </span>
          , you consent to our use of cookies.
        </p>

        {showPreferences ? (
          <div className="mb-4 space-y-3">
            <CookieOption
              id="necessary"
              label="Necessary Cookies"
              description="Required for the website to function properly. Cannot be disabled."
              checked={preferences.necessary}
              disabled={true}
            />

            <CookieOption
              id="performance"
              label="Performance Cookies"
              description="Help us understand how visitors interact with our website."
              checked={preferences.performance}
              onChange={(checked) =>
                setPreferences({ ...preferences, performance: checked })
              }
            />

            <CookieOption
              id="marketing"
              label="Marketing Cookies"
              description="Used to deliver personalized advertisements."
              checked={preferences.marketing}
              onChange={(checked) =>
                setPreferences({ ...preferences, marketing: checked })
              }
            />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:justify-center gap-4">
            <motion.button
              onClick={handleRejectAll}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reject All
            </motion.button>
            <motion.button
              onClick={() => setShowPreferences(true)}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Manage Preferences
            </motion.button>
            <motion.button
              onClick={handleAcceptAll}
              className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Accept All
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};



export default CookieConsent;
