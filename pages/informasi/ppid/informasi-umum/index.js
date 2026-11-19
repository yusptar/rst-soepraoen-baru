"use client";

import React from "react";
import Link from "next/link";
import BannerRS from "../../../../components/Banner/BannerRS";
import {
  LuNewspaper,
  LuFileText,
  LuBookOpen,
  LuPhoneCall,
  LuArrowRight,
  LuGlobe,
} from "react-icons/lu";

export default function InformasiUmum() {
  const informasi = [
    {
      id: 1,
      title: "Berita & Informasi",
      desc: "Akses berita terbaru, pengumuman, dan informasi resmi Rumah Sakit Tk. II dr. Soepraoen.",
      icon: LuNewspaper,
      link: "/informasi/berita",
      button: "Lihat Berita",
    },
    {
      id: 2,
      title: "Informasi Pelayanan",
      desc: "Informasi mengenai layanan rawat jalan, rawat inap, jadwal pelayanan, dan fasilitas rumah sakit.",
      icon: LuFileText,
      link: "/informasi/tarif-pelayanan/rawat-jalan",
      button: "Lihat Layanan",
    },
    {
      id: 3,
      title: "Profil Rumah Sakit",
      desc: "Mengenal lebih dekat sejarah, visi misi, serta layanan unggulan Rumah Sakit Tk. II dr. Soepraoen.",
      icon: LuBookOpen,
      link: "/profil/profil-rs",
      button: "Lihat Profil",
    },
    {
      id: 4,
      title: "Kontak & Bantuan",
      desc: "Hubungi layanan informasi dan bantuan untuk memperoleh informasi publik maupun pelayanan rumah sakit.",
      icon: LuPhoneCall,
      link: "/contact",
      button: "Hubungi Kami",
    },
  ];

  return (
    <>
      <BannerRS title="Informasi Umum" />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14 px-5">
        <div className="w-full 2xl:w-4/5 mx-auto">

          {/* HERO */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-cyan-600 via-blue-800 to-slate-900 p-10 md:p-16 mb-16 shadow-2xl">

            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-sm font-medium">
                <LuGlobe className="text-lg" />
                PPID RS Tk. II dr. Soepraoen
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mt-6">
                Informasi Umum Pelayanan Publik
              </h1>

              <p className="text-slate-200 text-lg leading-relaxed mt-6">
                Dapatkan akses informasi publik, berita rumah sakit,
                layanan kesehatan, serta berbagai informasi umum lainnya
                secara cepat, transparan, dan mudah diakses.
              </p>
            </div>
          </div>

          {/* CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {informasi.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.link}
                  key={item.id}
                  className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >

                  {/* BACKGROUND */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-blue-900/0 group-hover:from-cyan-500/10 group-hover:to-blue-900/10 transition-all duration-500"></div>

                  {/* ICON */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg mb-6">
                    <Icon className="text-white text-3xl" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed mb-8">
                      {item.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 text-cyan-700 font-semibold group-hover:text-blue-900 transition-colors">
                      {item.button}

                      <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}

          </div>

        </div>
      </div>
    </>
  );
}