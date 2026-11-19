import React, { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";

export default function AccessibilityTools({
  increaseText,
  decreaseText,
  toggleHighContrast,
  toggleNegativeContrast,
  toggleGrayscale,
  resetSettings,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col">
      {/* Tombol utama */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        aria-label="Accessibility tools"
      >
        <FaUniversalAccess size={24} />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-xl overflow-hidden animate-fadeIn">
          <h2 className="bg-gray-100 text-gray-700 font-semibold px-3 py-2 border-b">
            Accessibility Tools
          </h2>
          <ul className="text-sm text-gray-800">
            <li>
              <button onClick={increaseText} className="w-full text-left px-3 py-2 hover:bg-gray-200">
                🔍 Perbesar Teks
              </button>
            </li>
            <li>
              <button onClick={decreaseText} className="w-full text-left px-3 py-2 hover:bg-gray-200">
                🔎 Perkecil Teks
              </button>
            </li>
            <li>
              <button onClick={toggleGrayscale} className="w-full text-left px-3 py-2 hover:bg-gray-200">
                ⚫ Hitam Putih
              </button>
            </li>
            <li>
              <button onClick={toggleHighContrast} className="w-full text-left px-3 py-2 hover:bg-gray-200">
                🌗 Tinggi Kontras
              </button>
            </li>
            <li>
              <button onClick={toggleNegativeContrast} className="w-full text-left px-3 py-2 hover:bg-gray-200">
                👁️ Kontras Negatif
              </button>
            </li>
            <li className="border-t">
              <button onClick={resetSettings} className="w-full text-left px-3 py-2 hover:bg-gray-200 font-semibold">
                🔄 Reset
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
