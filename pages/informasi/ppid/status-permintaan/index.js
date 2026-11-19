"use client";

import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import Link from "next/link";
import { LuSearchCheck, LuClipboardCheck, LuFileSearch } from "react-icons/lu";

export default function StatusPermintaan() {
  return (
    <>
      <BannerRS title="Status Permintaan" />

      <div className="flex justify-center py-14 px-5 bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen">
        <div className="w-full 2xl:w-4/5">

          {/* HEADER */}
          <div className="text-center mb-14">
            <span className="inline-block px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm tracking-wide">
              PPID RS Tk. II dr. Soepraoen
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-6 leading-tight">
              Status Permintaan Informasi
            </h1>

            <p className="text-slate-500 text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
              Pantau proses permintaan informasi publik secara cepat,
              transparan, dan mudah melalui layanan PPID Rumah Sakit
              Tk. II dr. Soepraoen.
            </p>
          </div>

          {/* CARD */}
          <div className="grid lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg mb-6">
                <LuSearchCheck className="text-white text-3xl" />
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Cek Status Permintaan
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8">
                Lihat perkembangan permintaan informasi publik yang telah
                diajukan secara online dengan mudah dan real-time.
              </p>

              <Link
                href="/informasi/ppid/status-permintaan"
                className="inline-flex items-center gap-2 text-cyan-700 font-semibold hover:text-blue-900 transition-colors"
              >
                Lihat Status
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-700 flex items-center justify-center shadow-lg mb-6">
                <LuClipboardCheck className="text-white text-3xl" />
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Proses Verifikasi
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Setiap permintaan informasi akan diverifikasi oleh petugas PPID
                untuk memastikan kelengkapan data dan proses pelayanan berjalan
                optimal.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg mb-6">
                <LuFileSearch className="text-white text-3xl" />
              </div>

              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Transparansi Informasi
              </h2>

              <p className="text-slate-600 leading-relaxed">
                PPID berkomitmen memberikan pelayanan informasi publik yang
                terbuka, cepat, akurat, dan dapat dipertanggungjawabkan.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}