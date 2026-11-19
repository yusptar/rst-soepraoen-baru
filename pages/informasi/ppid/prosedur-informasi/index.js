"use client";

import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import {
  LuFileText,
  LuClipboardCheck,
  LuFileSearch,
  LuFolderCheck,
  LuSendHorizonal,
  LuBadgeCheck,
} from "react-icons/lu";

export default function ProsedurInformasi() {
  const prosedur = [
    {
      id: 1,
      title: "Mengisi Formulir",
      desc: "Pemohon mengisi formulir permintaan informasi publik secara lengkap dan benar.",
      icon: LuFileText,
    },
    {
      id: 2,
      title: "Verifikasi Identitas",
      desc: "Petugas PPID melakukan pemeriksaan identitas dan kelengkapan dokumen pendukung.",
      icon: LuClipboardCheck,
    },
    {
      id: 3,
      title: "Pemeriksaan Informasi",
      desc: "Permintaan informasi akan diperiksa sesuai kategori informasi publik yang berlaku.",
      icon: LuFileSearch,
    },
    {
      id: 4,
      title: "Persetujuan Informasi",
      desc: "Informasi yang dapat diberikan akan diproses dan disetujui oleh pihak terkait.",
      icon: LuFolderCheck,
    },
    {
      id: 5,
      title: "Penyampaian Informasi",
      desc: "Informasi publik disampaikan kepada pemohon melalui media yang telah ditentukan.",
      icon: LuSendHorizonal,
    },
    {
      id: 6,
      title: "Selesai",
      desc: "Permohonan informasi selesai dan tercatat dalam sistem pelayanan PPID.",
      icon: LuBadgeCheck,
    },
  ];

  return (
    <>
      <BannerRS title="Prosedur Informasi" />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14 px-5">
        <div className="w-full 2xl:w-4/5 mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold tracking-wide">
              PPID RS Tk. II dr. Soepraoen
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-6">
              Prosedur Permintaan Informasi
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mt-5 max-w-3xl mx-auto">
              Prosedur pelayanan informasi publik dilakukan secara sistematis,
              transparan, dan mudah dipahami untuk memberikan pelayanan terbaik
              kepada masyarakat.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {prosedur.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >

                  {/* BACKGROUND GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-blue-900/0 group-hover:from-cyan-500/10 group-hover:to-blue-900/10 transition-all duration-500"></div>

                  {/* NUMBER */}
                  <div className="absolute top-5 right-5 text-6xl font-bold text-slate-300">
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
    </>
  );
}