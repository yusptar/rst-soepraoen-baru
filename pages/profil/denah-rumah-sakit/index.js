import React from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarTentang from "../../../components/Navbar/NavbarTentang";
import Image from "next/image";
import {
  FaMapMarkedAlt,
  FaHospital,
  FaRoute,
  FaParking,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { asset } from "../../../helpers/asset";

export default function Denah() {
  return (
    <>
      {/* Banner */}
      <BannerRS
        title="Denah Rumah Sakit"
        url="/profil/denah-rumah-sakit"
      />

      {/* Navigation */}
      <NavbarTentang active="Denah Rumah Sakit" />

      {/* CONTENT */}
      <section className="relative overflow-hidden py-10 md:py-16">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-cyan-50"></div>

        <div className="relative flex justify-center px-4">
          <div className="w-full 2xl:w-4/5">

            {/* HEADER */}
            <div className="text-center mb-14">

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-semibold mb-5">
                <FaMapMarkedAlt />
                Informasi Lokasi & Akses
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
                Denah Rumah Sakit
              </h1>

              <p className="text-slate-500 mt-5 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                Denah Rumah Sakit Tk. II dr. Soepraoen disediakan untuk membantu
                pasien, keluarga pasien, dan pengunjung dalam menemukan lokasi
                gedung, unit pelayanan, fasilitas umum, area parkir,
                dan akses pelayanan secara lebih mudah dan efisien.
              </p>
            </div>

            {/* HERO CARD */}
            <div className="mb-16 flex justify-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-900 rounded-[2rem] overflow-hidden shadow-2xl w-full">

                <div className="grid lg:grid-cols-1 items-center">

                  {/* CONTENT */}
                  <div className="p-8 md:p-14 text-white flex flex-col items-center text-center">

                    {/* BADGE */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm mb-6">
                      <MdLocationOn className="text-lg" />
                      Navigasi Rumah Sakit
                    </div>

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                      Akses Lebih Mudah
                      <br />
                      dan Terarah
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-slate-200 mt-6 leading-relaxed text-sm md:text-base max-w-3xl">
                      Informasi denah membantu pengunjung memahami tata letak
                      gedung rumah sakit, jalur pelayanan, fasilitas umum,
                      area parkir, dan lokasi unit kesehatan secara cepat
                      dan akurat.
                    </p>

                    {/* INFO GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full max-w-5xl">

                      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
                        <FaHospital className="text-2xl mb-3" />
                        <h3 className="font-semibold text-sm md:text-base">
                          Gedung Pelayanan
                        </h3>
                      </div>

                      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
                        <FaRoute className="text-2xl mb-3" />
                        <h3 className="font-semibold text-sm md:text-base">
                          Jalur Navigasi
                        </h3>
                      </div>

                      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
                        <FaParking className="text-2xl mb-3" />
                        <h3 className="font-semibold text-sm md:text-base">
                          Area Parkir
                        </h3>
                      </div>

                      <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md flex flex-col items-center text-center hover:scale-105 transition-all duration-300">
                        <FaMapMarkedAlt className="text-2xl mb-3" />
                        <h3 className="font-semibold text-sm md:text-base">
                          Fasilitas Umum
                        </h3>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DENAH RS */}
            <div className="mb-20">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-700">
                  <FaHospital />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Denah Rumah Sakit
                  </h2>

                  <p className="text-slate-500 text-sm md:text-base">
                    Informasi lokasi gedung dan unit pelayanan rumah sakit
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-[2rem] p-3 md:p-5 shadow-xl overflow-hidden">

                <div className="relative w-full overflow-hidden rounded-[1.5rem]">

                  <Image
                    src={asset("/assets/denah-rumkit-baru.png")}
                    alt="Denah Rumah Sakit"
                    width={1999}
                    height={1333}
                    priority
                    className="w-full h-auto object-cover hover:scale-[1.01] transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* DENAH FASUM */}
            <div className="mb-10">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-800">
                  <FaMapMarkedAlt />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Denah Fasilitas Umum
                  </h2>

                  <p className="text-slate-500 text-sm md:text-base">
                    Area fasilitas umum untuk kenyamanan pengunjung rumah sakit
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-[2rem] p-3 md:p-5 shadow-xl overflow-hidden">

                <div className="relative w-full overflow-hidden rounded-[1.5rem]">

                  <Image
                    src={asset("/assets/denah-fasum-baru.png")}
                    alt="Denah Fasilitas Umum"
                    width={1999}
                    height={1333}
                    priority
                    className="w-full h-auto object-cover hover:scale-[1.01] transition-all duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}