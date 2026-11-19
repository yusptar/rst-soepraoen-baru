import React from "react";
import {
  LuTarget,
  LuHeartHandshake,
  LuGoal,
  LuBadgeCheck,
  LuShieldCheck,
  LuStethoscope,
} from "react-icons/lu";

import BannerRS from "../../../components/Banner/BannerRS";
import NavbarTentang from "../../../components/Navbar/NavbarTentang";

export default function VisiMisi() {
  return (
    <>
      {/* BANNER */}
      <BannerRS title="Visi dan Misi" />

      {/* NAVIGATION */}
      <NavbarTentang
        active="Visi & Misi"
        url="/profil/visi-misi"
      />

      {/* CONTENT */}
      <section className="flex justify-center px-4 md:px-6 py-8 md:py-12 bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen">
        <div className="w-full 2xl:w-4/5">

          {/* HEADER */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
              <LuShieldCheck className="text-lg" />
              Profil Rumah Sakit
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mt-6 leading-tight">
              Visi, Misi & Tujuan
            </h1>

            <p className="text-slate-500 max-w-3xl mx-auto mt-5 text-base md:text-lg leading-relaxed">
              Komitmen Rumah Sakit Tk. II dr. Soepraoen dalam menghadirkan
              pelayanan kesehatan berkualitas, profesional, dan terpercaya
              bagi masyarakat.
            </p>
          </div>

          {/* VISI & MISI */}
          <div className="grid lg:grid-cols-2 gap-8 mb-10">

            {/* VISI */}
            <div className="group relative overflow-hidden bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 p-6 md:p-8">

              {/* BACKGROUND EFFECT */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg mb-6">
                  <LuTarget className="text-white text-3xl" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                  VISI
                </h2>

                <p className="text-slate-600 leading-relaxed italic text-base md:text-lg">
                  "Rumah sakit tk II dr. Soepraoen adalah rumah sakit kebanggaan
                  bagi prajurit, PNS KEMHAN, keluarga dan masyarakat umum yang
                  berkualitas dalam pelayanan kesehatan, pendidikan dan penelitian
                  serta mampu bersaing di tingkat nasional"
                </p>
              </div>
            </div>

            {/* MISI */}
            <div className="group relative overflow-hidden bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 p-6 md:p-8">

              {/* BACKGROUND EFFECT */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-900/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg mb-6">
                  <LuHeartHandshake className="text-white text-3xl" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                  MISI
                </h2>

                <div className="space-y-4">

                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <LuBadgeCheck className="text-cyan-600 text-lg" />
                    </div>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      Menyelenggarakan pelayanan kesehatan yang berstandar
                      nasional dengan tata kelola yang baik, mengembangkan SDM,
                      sarana prasarana sesuai tuntutan IPTEK, peningkatan mutu,
                      dan daya saing yang berkelanjutan.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <LuBadgeCheck className="text-cyan-600 text-lg" />
                    </div>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      Mengembangkan ilmu kesehatan yang berguna bagi masyarakat
                      melalui kegiatan pelayanan kesehatan, pendidikan, dan
                      penelitian.
                    </p>
                  </div>

                  <div className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <LuBadgeCheck className="text-cyan-600 text-lg" />
                    </div>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      Mengembangkan kemitraan dengan rumah sakit atau fasilitas
                      kesehatan lainnya guna menunjang dan meningkatkan pelayanan
                      kesehatan, pendidikan, dan penelitian.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* TUJUAN */}
          <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm p-6 md:p-10 mb-10">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg">
                <LuGoal className="text-white text-3xl" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  TUJUAN
                </h2>

                <p className="text-slate-500 mt-1">
                  Sasaran dan arah pengembangan Rumah Sakit
                </p>
              </div>
            </div>

            <div className="grid gap-5">

              {[
                "Menghasilkan pelayanan kesehatan sesuai tuntuan masyarakat, pengembangan IPTEK yang bermutu dan mampu berkompetisi di tingkat nasional.",

                "Menyelenggarakan tata kelola yang baik termasuk tata kelola keuangan yang transparan dan akuntabel serta mendukung pelayanan kesehatan, pengembangan sarana prasarana secara efisien dan peningkatan SDM yang kompeten.",

                "Menyelenggarakan pendidikan dan penelitian yang berbasis sistem manajemen yang berkualitas.",

                "Menjalin kerjasama dengan institusi atau lembaga terkait, guna meningkatkan mutu pelayanan kesehatan, pendidikan dan penelitian",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-900 text-white flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* MOTTO */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* MOTTO CARD */}
            <div className="bg-white border border-slate-200 rounded-[2rem] shadow-sm p-6 md:p-8">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg">
                  <LuStethoscope className="text-white text-3xl" />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Motto Rumah Sakit
                  </h2>

                  <p className="text-slate-500 mt-1">
                    Nilai pelayanan Rumah Sakit
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">

                {[
                  { huruf: "R", arti: "Ramah" },
                  { huruf: "S", arti: "Santun" },
                  { huruf: "T", arti: "Terampil" },
                  { huruf: "D", arti: "Disiplin" },
                  { huruf: "S", arti: "Sembuh" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-br from-cyan-500 to-blue-900 bg-clip-text text-transparent">
                      {item.huruf}
                    </h1>

                    <p className="mt-2 text-sm md:text-base font-semibold text-slate-700">
                      {item.arti}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* TAGLINE */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-500 to-blue-900 shadow-2xl p-8 md:p-10 flex items-center">

              <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">

                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-sm font-medium mb-6">
                  <LuShieldCheck />
                  Tagline Rumah Sakit
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  Pilihan Tepat
                  <br />
                  Menuju Sehat
                </h2>

                <p className="text-slate-200 mt-5 leading-relaxed text-base md:text-lg">
                  Memberikan pelayanan kesehatan terbaik dengan profesionalisme,
                  keramahan, dan mutu layanan yang terpercaya.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}