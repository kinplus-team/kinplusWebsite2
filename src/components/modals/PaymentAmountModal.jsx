import React from "react";

export default function PaymentAmountModal({ isOpen, amount, onPay, onClose }) {
  if (!isOpen) return null;

//   const sixtyPercent = Math.floor(amount * 0.6);
  const sixtyPercent = Math.floor((amount || 0) * 0.6);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-4">Choose Payment Option</h2>
        <p className="mb-6">
          Would you like to pay 60% now (₦{sixtyPercent.toLocaleString()}) or make the full payment (₦{amount.toLocaleString()})?
        </p>
        <div className="flex justify-around mb-4">
          <button
            onClick={() => onPay("60")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Pay 60%
          </button>
          <button
            onClick={() => onPay("full")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Pay Full
          </button>
        </div>
        {/* <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button> */}
      </div>
    </div>
  );
}
