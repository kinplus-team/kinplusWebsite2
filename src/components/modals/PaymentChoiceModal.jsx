import React from "react";

export default function PaymentChoiceModal({ isOpen, onPayNow, onPayOnsite }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-4">Registration Submitted</h2>
        <p className="mb-6">
          Your registration was successful. Note that the next cohort starts 07 July, 2025. Would you like to pay now or pay onsite?
        </p>
        <div className="flex justify-around">
          <button
            onClick={onPayNow}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Pay Now
          </button>
          <button
            onClick={onPayOnsite}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Pay Onsite
          </button>
        </div>
        {/* <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Close
        </button> */}
      </div>
    </div>
  );
}
