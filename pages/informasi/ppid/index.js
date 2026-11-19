"use client";

import React from "react";
import Link from "next/link";
import Slider from "../../../components/Slider/PPID";
import BannerRS from "../../../components/Banner/BannerRS";
import {
  LuFileText,
  LuUsers,
  LuMessageCircle,
  LuFolderOpen,
  LuShieldAlert,
  LuClipboardCheck,
  LuMessageSquare,
  LuInfo,
  LuSettings,
  LuBadgeInfo,
  LuWorkflow,
  LuBuilding,
} from "react-icons/lu";

const listMenu = [
  {
    id: 1,
    title: "SK PPID",
    link: "/assets/ppid/SP 860 V 2026.pdf",
    icon: LuFileText,
  },
  {
    id: 2,
    title: "Struktur PPID",
    link: "/informasi/ppid/petugas-ppid",
    icon: LuUsers,
  },
  {
    id: 3,
    title: "Permintaan Informasi",
    link: "https://forms.gle/oiFghYY4vgzLqSkC7",
    icon: LuMessageCircle,
  },
  {
    id: 4,
    title: "Informasi Publik",
    link: "/informasi/ppid/informasi-publik",
    icon: LuFolderOpen,
  },
  {
    id: 5,
    title: "Pengaduan",
    link: "/informasi/ppid/pengaduan",
    icon: LuShieldAlert,
  },
  {
    id: 6,
    title: "Survey",
    link: "https://linktr.ee/rssoepraoen",
    icon: LuClipboardCheck,
  },
  {
    id: 7,
    title: "Tanya Jawab",
    link: "https://wa.me/6281132299222",
    icon: LuMessageSquare,
  },
  {
    id: 8,
    title: "Informasi Umum",
    link: "/informasi/ppid/informasi-umum",
    icon: LuInfo,
  },
  {
    id: 9,
    title: "Prosedur Informasi",
    link: "/informasi/ppid/prosedur-informasi",
    icon: LuSettings,
  },
  {
    id: 10,
    title: "Status Permintaan",
    link: "/informasi/ppid/status-permintaan",
    icon: LuBadgeInfo,
  },
  {
    id: 11,
    title: "Mekanisme",
    link: "/informasi/ppid/mekanisme",
    icon: LuWorkflow,
  },
  {
    id: 12,
    title: "Maklumat",
    link: "/informasi/ppid/maklumat-pelayanan",
    icon: LuBuilding,
  },
];

export default function PPID() {
  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen">

      {/* BANNER */}
      <BannerRS title="PPID" />

      {/* CONTENT */}
      <section className="flex justify-center px-4 sm:px-5 py-8 md:py-10">
        <div className="w-full 2xl:w-4/5">

          {/* ABOUT */}
          <div className="relative mb-16 md:mb-24">

            {/* BG EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 via-transparent to-blue-100/40 rounded-[2rem] md:rounded-[3rem] blur-3xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-10 overflow-hidden">

              {/* LEFT */}
              <div className="relative order-1">

                {/* DECOR */}
                <div className="absolute -top-10 -left-10 w-32 md:w-40 h-32 md:h-40 bg-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-blue-800/20 rounded-full blur-3xl"></div>

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-slate-200">

                  <Slider />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>

                  {/* FLOATING CARD */}
                  <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl px-3 py-2 md:px-5 md:py-3 max-w-[85%]">
                    <p className="text-white text-xs md:text-sm font-medium">
                      Pelayanan Informasi Publik
                    </p>

                    <h3 className="text-white font-bold text-sm md:text-lg leading-snug">
                      RS Tk. II dr. Soepraoen
                    </h3>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative z-10 order-2">

                {/* BADGE */}
                <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  Tentang PPID
                </div>

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mt-5 leading-tight">
                  Informasi Publik yang
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-900 bg-clip-text text-transparent">
                    {" "}Modern & Transparan
                  </span>
                </h2>

                {/* DESC */}
                <p className="text-slate-600 leading-relaxed mt-5 text-sm sm:text-base md:text-lg">
                  PPID merupakan Pejabat Pengelola Informasi dan Dokumentasi yang
                  bertugas memberikan layanan informasi publik secara cepat,
                  akurat, transparan, dan mudah diakses oleh masyarakat sesuai
                  amanat Undang-Undang Keterbukaan Informasi Publik.
                </p>

                <p className="text-slate-600 leading-relaxed mt-4 text-sm sm:text-base md:text-lg">
                  Dengan sistem pelayanan satu pintu, masyarakat dapat memperoleh
                  informasi secara efektif, efisien, dan terintegrasi melalui
                  layanan digital Rumah Sakit Tk. II dr. Soepraoen.
                </p>

                {/* FEATURE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">

                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-all">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <span className="text-cyan-600 text-base md:text-lg">
                        ✓
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">
                        Transparan
                      </h4>

                      <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                        Informasi publik tersedia secara terbuka.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-all">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-blue-900/10 flex items-center justify-center shrink-0">
                      <span className="text-blue-900 text-base md:text-lg">
                        ⚡
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">
                        Responsif
                      </h4>

                      <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                        Pelayanan cepat dan mudah diakses masyarakat.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="mb-10">

            <div className="text-center mb-10 md:mb-12">
              <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                Layanan PPID
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mt-3">
                Menu Informasi Publik
              </h2>

              <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
                Akses berbagai layanan dan informasi publik Rumah Sakit
                Tk. II dr. Soepraoen dengan tampilan modern dan mudah digunakan.
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">

              {listMenu.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href={item.link}
                    key={item.id}
                    target="_blank"
                    className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >

                    {/* BG */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-blue-900/0 group-hover:from-cyan-500/10 group-hover:to-blue-900/10 transition-all duration-500"></div>

                    {/* ICON */}
                    <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg mb-5 md:mb-6 mx-auto">
                      <Icon className="text-white text-2xl md:text-3xl" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10">
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-blue-900 transition-colors duration-300 leading-snug text-center">
                        {item.title}
                      </h3>

                      <div className="mt-4 md:mt-5 flex items-center text-cyan-600 font-medium text-sm md:text-base justify-center">
                        Lihat Detail

                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2 justify-center">
                          →
                        </span>
                      </div>
                    </div>

                  </Link>
                );
              })}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}