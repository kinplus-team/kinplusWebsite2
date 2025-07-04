import React from "react";

export default function PaymentPreferenceModal({ isOpen, onPaystack, onBankTransfer, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-semibold mb-6 text-black">
          Please select your preferred payment option
        </h2>
        {/* <p className="mb-6">How would you like to pay?</p> */}

        <div className="flex flex-col gap-4 lg:gap-6 mb-6">
          <button
            onClick={onPaystack}
            className="bg-blue-600 text-white px-4 py-3 lg:py-4 rounded-lg hover:bg-blue-700"
          >
            Pay via Paystack
          </button>
          <button
            onClick={onBankTransfer}
            className="bg-gray-600 text-white px-4 py-3 lg:py-4 rounded-lg hover:bg-gray-700"
          >
            Pay via Bank Transfer
          </button>
        </div>

        {/* <button
          onClick={onClose}
          className="text-sm text-red-600 hover:underline"
        >
          Cancel
        </button> */}
      </div>
    </div>
  );
}
