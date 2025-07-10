import React from "react";

export default function BankTransferModal({
  isOpen,
  onClose,
  onBack,
  promoStatus,
  fullAmount,
  discountedAmount,
}) {
  if (!isOpen) return null;
  console.log("BankTransferModal promoStatus:", promoStatus);
  console.log("BankTransferModal props:", { promoStatus, fullAmount, discountedAmount });



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        {/* Go Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 p-2 text-gray-700 hover:text-blue-700 text-3xl hover:left-3"
          aria-label="Go back"
        >
          ←
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-4 text-green-700 mt-6">
          Bank Transfer Info
        </h2>
        <p className="mb-4">
          Please transfer the amount to the bank details below:
        </p>

        <ul className="text-left mb-4">
          <li><strong>Bank Name:</strong> MoniePoint</li>
          <li><strong>Account Name:</strong> Kinplus Technologies Limited</li>
          <li><strong>Account Number:</strong> 7069718643</li>
        </ul>

        <div className="mb-6 text-sm text-start leading-6 bg-green-50 text-green-800 border border-green-300 p-3 rounded-md">
          {promoStatus === "valid" ? (
            <>
              ✅ Promo code applied! Please pay the discounted amount of{" "}
              <strong>₦{discountedAmount.toLocaleString()}</strong>
            </>
          ) : (
            <>
              Total amount to pay: <strong>₦{fullAmount.toLocaleString()}</strong>
            </>
          )}
        </div>

        <ul className="text-[15px] mb-6 text-start leading-[150%] list-disc list-inside flex flex-col gap-2 pl-1 lg:pl-2">
          <li>
            After payment, kindly send your proof of payment to &nbsp;
            <a
              href="https://wa.me/2347075199782"
              className="text-blue-600 hover:underline decoration-[1.5px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: 07075199782
            </a>
          </li>
          <li>
            Did you choose to have the training "Onsite/Physical"? Proceed to
            the office to complete your onboarding.
          </li>
        </ul>

        <button
          onClick={onClose}
          className="text-sm text-red-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
