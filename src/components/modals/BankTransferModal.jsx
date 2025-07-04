import React from "react";

export default function BankTransferModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          Bank Transfer Info
        </h2>
        <p className="mb-4">
          Please transfer the amount to the bank details below:
        </p>
        <ul className="text-left mb-6">
          <li>
            <strong>Bank Name:</strong> MoniePoint
          </li>
          <li>
            <strong>Account Name:</strong> Kinplus Technologies Limited
          </li>
          <li>
            <strong>Account Number:</strong> 7069718643
          </li>
        </ul>

        <ul className="text-[15px] mb-6 text-start leading-[150%] list-disc list-inside flex flex-col gap-2 pl-1 lg:pl-2">
          <li>
            After payment, kindly send your proof of payment to &nbsp;
            <a
              href="https://wa.me/2347075199782"
              className="text-blue-600 hover:underline decoration-[1.5px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp:
            </a>
            <a
              href="https://wa.me/2347075199782"
              className="text-blue-600 hover:underline decoration-[1.5px] pl-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              07075199782
            </a>
            .
          </li>

          <li>
            Did you choose to have the training "Onsite/Physical"? Proceed to the office to complete your onboarding.
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
