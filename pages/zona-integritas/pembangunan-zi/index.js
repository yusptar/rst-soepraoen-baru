import React from "react";
import Link from "next/link";
import YouTube from "react-youtube";
import {
  RiShieldCheckLine,
  RiGovernmentLine,
  RiMedalLine,
} from "react-icons/ri";

const videos = [
  {
    id: "RkSfQhBIrqY",
    year: "2020 - 2021",
  },
  {
    id: "SoVMPvgJQpM",
    year: "2021 - 2022",
  },
  {
    id: "lTksg-0E47A",
    year: "2022 - 2023",
  },
  {
    id: "UnzNoIfLg08",
    year: "2023 - 2024",
  },
];

const opts = {
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

export default function PembangunanZI() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.png')]"></div>

        <div className="relative w-11/12 2xl:w-4/5 mx-auto py-20">
          {/* Breadcrumb */}
          <div className="flex items-center text-black text-sm mb-6">
            <Link href="/zona-integritas/pembangunan-zi">
              <span className="hover:text-black transition cursor-pointer">
                Zona Integritas
              </span>
            </Link>

            <span className="mx-2">/</span>

            <span className="text-black font-semibold">
              Pembangunan ZI
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                <RiShieldCheckLine className="text-black text-xl" />
                <span className="text-sm font-medium text-black">
                  Menuju WBK & WBBM
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl text-blue-800 font-black leading-tight mb-6">
                Pembangunan
                <span className="block text-blue-800">
                  Zona Integritas
                </span>
              </h1>

              <p className="text-black text-base md:text-lg leading-relaxed">
                Rumah Sakit Tk. II dr. Soepraoen berkomitmen membangun
                budaya kerja yang profesional, bersih, transparan,
                akuntabel, serta berorientasi pada pelayanan publik
                berkualitas.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <RiGovernmentLine className="text-3xl mb-2 text-black" />
                  <h1 className="text-2xl font-bold text-black">6</h1>
                  <p className="text-sm text-black">
                    Area Perubahan
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <RiShieldCheckLine className="text-3xl mb-2 text-black" />
                  <h1 className="text-2xl font-bold text-black">100%</h1>
                  <p className="text-sm text-black">
                    Komitmen Integritas
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <RiMedalLine className="text-3xl mb-2 text-black" />
                  <h1 className="text-2xl font-bold text-black">4+</h1>
                  <p className="text-sm text-black">
                    Tahun Perjalanan
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full"></div>

              <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/20">
                <img
                  src="/assets/wbbm/bagan-wbbm.png"
                  alt="Bagan Zona Integritas"
                  className="w-full object-cover hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-slate-50 py-16">
        <div className="w-11/12 2xl:w-4/5 mx-auto">
          {/* CARD */}
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 p-8 md:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm mb-5">
                  Tentang Pembangunan ZI
                </div>

                <h2 className="text-3xl font-black text-slate-800 mb-6">
                  Membangun Budaya Kerja Bersih dan Melayani
                </h2>

                <p className="text-slate-600 leading-relaxed text-justify">
                  Proses pembangunan Zona Integritas merupakan tindak
                  lanjut pencanangan yang telah dilakukan oleh pimpinan
                  instansi pemerintah. Fokus pembangunan diarahkan pada
                  penerapan program Manajemen Perubahan, Penataan
                  Tatalaksana, Penataan Manajemen SDM, Penguatan
                  Pengawasan, Penguatan Akuntabilitas Kinerja, dan
                  Peningkatan Kualitas Pelayanan Publik yang bersifat
                  konkret serta berkelanjutan.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg">
                  <h1 className="text-4xl font-black mb-2">01</h1>
                  <p className="font-semibold">
                    Perubahan Budaya Kerja
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg">
                  <h1 className="text-4xl font-black mb-2">02</h1>
                  <p className="font-semibold">
                    Mekanisme Kerja Satuan
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-3xl p-6 text-white shadow-lg">
                  <h1 className="text-4xl font-black mb-2">03</h1>
                  <p className="font-semibold">
                    Penataan Sistem Manajemen SDM
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-blue-900 rounded-3xl p-6 text-white shadow-lg">
                  <h1 className="text-4xl font-black mb-2">04</h1>
                  <p className="font-semibold">
                    Penguatan Akuntabilitas Satuan
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sky-600 to-cyan-800 rounded-3xl p-6 text-white shadow-lg">
                  <h1 className="text-4xl font-black mb-2">05</h1>
                  <p className="font-semibold">
                    Penguatan Pengawasan
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-700 to-blue-900 rounded-3xl p-6 text-white shadow-lg">
                  <h1 className="text-4xl font-black mb-2">06</h1>
                  <p className="font-semibold">
                    Peningkatan Pelayanan Kualtias Prajurit dan atau Masyarakat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="mt-20">
            <div className="text-center mb-14">
              <div className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                Perjalanan Zona Integritas
              </div>

              <h1 className="text-4xl font-black text-slate-800">
                Konsisten, Berkelanjutan, Aktif
              </h1>

              <p className="text-slate-500 mt-4">
                Dokumentasi perjalanan pembangunan Zona Integritas
                Rumah Sakit Tk. II dr. Soepraoen
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl duration-500 border border-slate-200 hover:-translate-y-2"
                >
                  <div className="overflow-hidden">
                    <YouTube
                      videoId={video.id}
                      opts={opts}
                      className={"youtubeContainer"}
                    />
                  </div>

                  <div className="p-6">
                    <div className="inline-flex px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
                      Timeline
                    </div>

                    <h1 className="text-2xl font-black text-slate-800">
                      {video.year}
                    </h1>

                    <p className="text-slate-500 mt-2 text-sm">
                      Perjalanan pembangunan dan penguatan budaya
                      integritas rumah sakit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}