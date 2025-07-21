import { loadPaystackScript } from "../utilities/loadPaystackScript";



// Paystack Integration functionality
export const handlePaystackPayment = async ({
  email,
  amount,
  fullName,
  track,
  onSuccess,
  onClose,
}) => {
  const scriptLoaded = await loadPaystackScript();

  if (!scriptLoaded) {
    alert("Failed to load Paystack. Please check your internet and try again.");
    return;
  }

  const paystack = window.PaystackPop.setup({
    key: import.meta.env.VITE_REACT_APP_PAYSTACK_PUBLIC_LIVE_KEY_PROD, // Company's actual public key
    // key: "pk_test_afd9bb9d64abc7638f5d453e0ebdfcd29319c5d2", // test key (move to env later)
    email,
    amount: amount * 100,
    currency: "NGN",
    callback: () => {
      if (typeof onSuccess === "function") onSuccess();
    },
    onClose: () => {
      if (typeof onClose === "function") onClose();
    },
  });

  paystack.openIframe();
};
