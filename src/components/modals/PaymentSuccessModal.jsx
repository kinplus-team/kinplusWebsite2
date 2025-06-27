import React from "react";

export default function PaymentSuccessModal({
  isOpen,
  onDownloadPDF,
  onDownloadImage,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          Payment Complete!
        </h2>
        <p className="mb-4"><strong>Download your receipt and keep it safe.</strong></p>

        <ul className="mb-4 list-disc list-inside flex flex-col gap-2 justify-center text-start pl-4">
          <li>
            Share your receipt with us on <a href="https://wa.me/2347075199782" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 ">WhatsApp</a> or call: 
            <a
              href="https://wa.me/2347075199782"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600 pl-1"
            >
              +2347075199782.
            </a>
          </li>


          <li>
            Did you choose to have the training "Onsite/Physical"? Proceed to the office to complete your onboarding.
          </li>
        </ul>

        <div className="flex justify-around mb-6 gap-6">
          <button
            onClick={onDownloadPDF}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Download as PDF
          </button>
          <button
            onClick={onDownloadImage}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Download as Image
          </button>
        </div>
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
