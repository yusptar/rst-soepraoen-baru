"use client";

import React, { useState, useMemo } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import { listBooklet } from "../../../components/List/listBooklet";

// Format "2025-01-10" -> "10 Januari 2025"
const formatTanggal = (dateStr) => {
  if (!dateStr) return "-";
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const [year, month, day] = dateStr.split("-").map(Number);
  return `${day} ${bulan[month - 1]} ${year}`;
};

export default function BookletDigital() {
  const [selectedBooklet, setSelectedBooklet] = useState(null);

  // Kelompokkan leaflet per poliklinik + generate nomor otomatis (1.1, 1.2, 2.1, ...)
  const groupedBooklet = useMemo(() => {
    const groups = {};
    let groupCounter = 0;

    listBooklet.forEach((item, index) => {
      const poli = item.poliklinik || "Lainnya";
      if (!groups[poli]) {
        groupCounter += 1;
        groups[poli] = { groupNumber: groupCounter, items: [] };
      }
      const itemNumber = groups[poli].items.length + 1;
      groups[poli].items.push({
        ...item,
        originalIndex: index,
        displayNumber: `${groups[poli].groupNumber}.${itemNumber}`,
      });
    });

    return groups;
  }, []);

  const handleChange = (e) => {
    const index = e.target.value;
    setSelectedBooklet(listBooklet[index]);
  };

  return (
    <>
      <BannerRS title="E-LEAFLET" />

      <div className="flex justify-center my-10 px-4">
        <div className="w-full 2xl:w-3/5">

          {/* 📝 HEADER / DESKRIPSI SINGKAT */}
          <div className="text-center mb-8 px-2">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Media Edukasi Digital Rumah Sakit Tk.II dr. Soepraoen
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
              Pusat E-Leaflet
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
              Kumpulan leaflet edukasi kesehatan dari berbagai poliklinik &amp; instalasi.
              Pilih judul di bawah untuk melihat isi leafletnya secara digital.
            </p>
          </div>

          {/* 🔽 DROPDOWN */}
          <div className="mb-6 bg-gradient-to-br from-blue-900 to-blue-700 p-5 sm:p-6 rounded-2xl shadow-lg shadow-blue-900/20 border border-blue-800/40 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-900/25">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="font-bold text-lg text-white tracking-wide text-center">
                DAFTAR E-LEAFLET
              </h2>
            </div>

            <div className="relative">
              <select
                onChange={handleChange}
                defaultValue=""
                className="w-full appearance-none border-0 text-black bg-white/95 backdrop-blur
                           transition-all duration-200 rounded-xl px-4 py-3 pr-10 text-sm sm:text-base
                           shadow-sm hover:shadow-md
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled>
                  -- Pilih E-Leaflet --
                </option>

                {Object.entries(groupedBooklet).map(([poliName, group]) => (
                  <optgroup key={poliName} label={`${group.groupNumber}. ${poliName}`}>
                    {group.items.map((item) => (
                      <option key={item.originalIndex} value={item.originalIndex}>
                        {`${item.displayNumber} ${item.title}`}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>

              {/* custom dropdown arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {!selectedBooklet && (
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 text-amber-800
                            rounded-xl p-4 text-sm shadow-sm animate-in fade-in duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p>Silakan pilih E-Leaflet terlebih dahulu untuk menampilkan konten.</p>
            </div>
          )}

          {/* 🖼️ PREVIEW LEAFLET */}
          {selectedBooklet && (() => {
            // Ambil hanya gambar yang benar-benar ada (tidak kosong/null/undefined)
            const images = [selectedBooklet.image, selectedBooklet.image2].filter(
              (src) => typeof src === "string" && src.trim() !== ""
            );
            const isSingle = images.length === 1;

            return (
              <div
                key={selectedBooklet.title}
                className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-6 sm:p-8
                          transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-2"
              >
                <div className="flex flex-col items-center mb-5 text-center">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2 tracking-wide">
                    {selectedBooklet.poliklinik}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug">
                    {selectedBooklet.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Diperbarui tanggal : {formatTanggal(selectedBooklet.uploadDate)}
                  </p>
                </div>

                <div
                  className={`grid gap-4 sm:gap-5 ${
                    isSingle ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
                  }`}
                >
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${selectedBooklet.title} - halaman ${i + 1}`}
                      className="w-full rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-0.5
                                transition-all duration-300 ease-out"
                    />
                  ))}
                </div>
              </div>
            );
          })()}

        </div>
      </div>
    </>
  );
}