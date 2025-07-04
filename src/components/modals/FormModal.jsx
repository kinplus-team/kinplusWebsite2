import React from "react";

export default function FormModal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000d8]">
        <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Notice</h2>
          <p className="text-gray-700 mb-6">{message}</p>
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            onClick={onClose}
          >
            Okay
          </button>
        </div>
      </div>
  );
}
