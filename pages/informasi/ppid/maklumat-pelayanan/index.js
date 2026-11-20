"use client";

import React from "react";
import Image from "next/image";
import BannerRS from "../../../../components/Banner/BannerRS";
import { LuBadgeCheck } from "react-icons/lu";
import { asset } from "../../../../helpers/asset";

export default function IndikatorKinerja() {
  return (
    <>
      <BannerRS title="Maklumat Pelayanan" />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-14 px-5">
        <div className="w-full 2xl:w-4/5 mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold tracking-wide">
              <LuBadgeCheck className="text-lg" />
              PPID RS Tk. II dr. Soepraoen
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-6">
              Maklumat Pelayanan
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed mt-5 max-w-3xl mx-auto">
              Rumah Sakit Tk. II dr. Soepraoen berkomitmen memberikan
              pelayanan yang profesional, transparan, cepat, dan
              berorientasi pada kepuasan masyarakat sesuai standar
              pelayanan publik yang berlaku.
            </p>
          </div>

          {/* IMAGE CARD */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-slate-200 bg-white max-w-5xl w-full">

              {/* BACKGROUND EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-cyan-400/10 z-10"></div>

              {/* IMAGE */}
              <div className="relative p-4 md:p-6">
                <Image
                  src={asset("/assets/ppid/maklumat-pelayanan-2.jpeg")}
                  alt="Maklumat Pelayanan"
                  width={1600}
                  height={900}
                  priority
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
``