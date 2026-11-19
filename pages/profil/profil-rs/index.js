"use client";

import React from "react";
import Image from "next/image";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarTentang from "../../../components/Navbar/NavbarTentang";
import {
  LuBuilding,
  LuHeartPulse,
  LuShieldCheck,
} from "react-icons/lu";

export default function ProfilRs() {
  return (
    <>
      {/* BANNER */}
      <BannerRS title="Profil Rumah Sakit" />

      {/* NAVIGATION */}
      <NavbarTentang active="Profil" url="/profil/profil-rs" />

      {/* CONTENT */}
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 px-4">

        <div className="w-full 2xl:w-4/5 mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold tracking-wide">
              <LuBuilding className="text-lg" />
              Profil Rumah Sakit
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mt-6 leading-tight">
              Rumah Sakit Tk. II dr. Soepraoen
            </h1>

            <p className="text-slate-500 text-base md:text-lg leading-relaxed mt-5 max-w-3xl mx-auto">
              Rumah Sakit Tk. II dr. Soepraoen merupakan rumah sakit
              yang memberikan pelayanan kesehatan profesional,
              modern, dan berorientasi pada keselamatan pasien
              dengan dukungan teknologi serta sumber daya manusia berkualitas.
            </p>
          </div>

          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-xl p-4 md:p-6">

            {/* BACKGROUND EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/30 via-transparent to-blue-100/30"></div>

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/assets/profil-rs-2026.jpeg"
                alt="Profil Rumah Sakit"
                width={1991}
                height={997}
                priority
                className="w-full h-auto object-cover hover:scale-[1.02] transition-all duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-200/70 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* FEATURE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">
                <LuHeartPulse className="text-cyan-600 text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Pelayanan Prima
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Memberikan pelayanan kesehatan yang cepat,
                tepat, dan berorientasi pada kebutuhan pasien.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                <LuShieldCheck className="text-blue-900 text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Keselamatan Pasien
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Mengutamakan keamanan dan keselamatan pasien
                melalui standar pelayanan berkualitas.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-5">
                <LuBuilding className="text-cyan-700 text-2xl" />
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Fasilitas Modern
              </h3>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Didukung fasilitas kesehatan modern dan teknologi
                terkini untuk pelayanan optimal.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}