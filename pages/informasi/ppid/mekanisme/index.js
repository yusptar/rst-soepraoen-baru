"use client";

import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import {
  LuFileSearch,
  LuClipboardSignature,
  LuBadgeCheck,
  LuSend,
  LuCheckCircle2,
} from "react-icons/lu";

export default function Mekanisme() {
  const mekanisme = [
    {
      id: 1,
      title: "Ajukan Permohonan",
      desc: "Pemohon mengajukan permintaan informasi publik melalui layanan PPID secara online maupun offline.",
      icon: LuFileSearch,
    },
    {
      id: 2,
      title: "Verifikasi Data",
      desc: "Petugas PPID melakukan pemeriksaan dan verifikasi terhadap data permohonan yang masuk.",
      icon: LuClipboardSignature,
    },
    {
      id: 3,
      title: "Proses Informasi",
      desc: "Permintaan informasi diproses sesuai ketentuan dan klasifikasi informasi publik yang berlaku.",
      icon: LuSend,
    },
    {
      id: 4,
      title: "Persetujuan",
      desc: "Informasi yang telah diproses akan diverifikasi dan disetujui oleh petugas terkait.",
      icon: LuBadgeCheck,
    },
    {
      id: 5,
      title: "Informasi Diterima",
      desc: "Pemohon menerima hasil permintaan informasi publik secara transparan dan akuntabel.",
      icon: LuCheckCircle2,
    },
  ];

  return (
    <>
      <BannerRS title="Mekanisme" />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14 px-5">
        <div className="w-full 2xl:w-4/5 mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold tracking-wide">
              PPID RS Tk. II dr. Soepraoen
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-6">
              Mekanisme Permintaan Informasi
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mt-5 max-w-3xl mx-auto">
              Proses pelayanan informasi publik dilakukan secara cepat,
              transparan, dan terstruktur untuk memastikan masyarakat
              mendapatkan akses informasi dengan mudah.
            </p>
          </div>

          {/* FLOW */}
          <div className="relative">

            {/* LINE */}
            <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">

              {mekanisme.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                  >

                    {/* GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-blue-900/0 group-hover:from-cyan-500/10 group-hover:to-blue-900/10 transition-all duration-500"></div>

                    {/* STEP */}
                    <div className="absolute top-5 right-5 text-5xl font-bold text-slate-100">
                      {item.id}
                    </div>

                    {/* ICON */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg mb-6">
                      <Icon className="text-white text-3xl" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold text-slate-800 mb-4">
                        {item.title}
                      </h2>

                      <p className="text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </>
  );
}