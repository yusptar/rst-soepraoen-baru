import React from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarTentang from "../../../components/Navbar/NavbarTentang";
import { listMitra } from "../../../components/List/listMitra";
import Image from "next/image";
import {
  FaHandshake,
  FaArrowRight,
  FaHospital,
} from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { asset } from "../../../helpers/asset";

export default function Mitra() {
  return (
    <>
      {/* Banner */}
      <BannerRS title="Mitra Kerjasama RS" />

      {/* Navigation */}
      <NavbarTentang
        active="Mitra Kerjasama RS"
        url="/profil/mitra-kerjasama-rs"
      />

      {/* CONTENT */}
      <section className="relative overflow-hidden py-10 md:py-16">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-cyan-50"></div>

        <div className="relative flex justify-center px-4">
          <div className="w-full 2xl:w-4/5">

            {/* HEADER */}
            <div className="text-center mb-14">

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-semibold mb-5">
                <FaHandshake />
                Kolaborasi & Kemitraan
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
                Mitra Kerjasama Rumah Sakit
              </h1>

              <p className="text-slate-500 mt-5 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                Rumah Sakit Tk. II dr. Soepraoen menjalin kerjasama dengan berbagai
                institusi, perusahaan, lembaga kesehatan, dan mitra strategis
                guna mendukung peningkatan mutu pelayanan kesehatan yang profesional,
                modern, dan terpercaya.
              </p>
            </div>

            {/* INFO CARD */}
            <div className="mb-14">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-900 rounded-[2rem] overflow-hidden shadow-2xl">

                <div className="grid lg:grid-cols-2 items-center">

                  {/* LEFT */}
                  <div className="p-8 md:p-12 text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm mb-5">
                      <HiOutlineOfficeBuilding />
                      Kemitraan Strategis
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                      Bersama Membangun
                      <br />
                      Pelayanan Terbaik
                    </h2>

                    <p className="text-slate-200 mt-6 leading-relaxed text-sm md:text-base">
                      Kolaborasi bersama berbagai mitra menjadi bagian penting
                      dalam pengembangan pelayanan kesehatan, inovasi digital,
                      peningkatan mutu layanan, pendidikan, penelitian,
                      dan pengembangan sistem rumah sakit modern.
                    </p>

                    <div className="mt-8 flex items-center gap-3 text-sm font-semibold">
                      <FaHospital />
                      Rumah Sakit Tk. II dr. Soepraoen
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="relative h-[260px] md:h-[420px]">
                    <Image
                      src={asset("/assets/bg-rssoepraoen-senja.png")}
                      alt="Mitra Rumah Sakit"
                      fill
                      className="object-cover"
                      priority
                    />

                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-950/40"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* GRID MITRA */}
            <div className="flex justify-center">
              <div className="w-full">

                <div className="flex flex-wrap justify-center gap-5">

                  {listMitra.map((item, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => window.open(item.link)}
                        className="group relative w-[160px] md:w-[190px] min-h-[160px] md:min-h-[190px] bg-white/90 backdrop-blur-sm border border-slate-200 rounded-[1.8rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-center items-center p-5"
                      >

                        {/* Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cyan-50 to-blue-50"></div>

                        {/* Logo */}
                        <div className="relative z-10 w-full flex justify-center items-center h-[90px] md:h-[110px]">
                          <Image
                            src={item.logo}
                            alt={item.nama}
                            width={500}
                            height={500}
                            className="w-10/12 object-contain transition-all duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Divider */}
                        <div className="relative z-10 w-10 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-900 rounded-full my-4"></div>

                        {/* Text */}
                        <div className="relative z-10 text-center">
                          <h3 className="text-xs md:text-sm font-semibold text-slate-700 leading-snug">
                            {item.nama}
                          </h3>

                          <div className="mt-3 inline-flex items-center gap-2 text-[11px] md:text-xs font-medium text-blue-800 group-hover:text-cyan-600 transition-all">
                            Kunjungi
                            <FaArrowRight className="text-[10px]" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}