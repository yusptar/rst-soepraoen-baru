import React from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import { listPelayananPublik } from "../../../components/List/listDokumenPelayananPublik";
import Image from "next/image";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaFilePdf,
  FaPlayCircle,
} from "react-icons/fa";

export default function PelayananPublik() {
  return (
    <>
      {/* HERO */}
      <BannerRS title="Pelayanan Publik Rumah Sakit" />

      {/* CONTENT */}
      <div className="flex justify-center bg-gradient-to-b from-slate-50 to-white py-10">
        <div className="w-11/12 2xl:w-4/5">

          {/* HEADER */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-900 font-semibold text-sm mb-5">
              Pelayanan Publik
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4 leading-tight">
              Pelayanan Publik <br />
              Rumah Sakit Tk.II dr. Soepraoen
            </h1>

            <p className="text-gray-600 md:text-lg max-w-3xl mx-auto leading-relaxed">
              Informasi layanan, panduan aplikasi, dan dokumen pelayanan
              publik yang dapat diakses secara digital untuk meningkatkan
              transparansi dan kemudahan pelayanan masyarakat.
            </p>
          </div>

          {/* GRID CARD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {listPelayananPublik.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
                >

                  {/* TOP */}
                  <div className="relative p-6 flex justify-center items-center bg-gradient-to-br from-blue-50 to-slate-50 min-h-[220px]">

                    <div className="absolute top-4 right-4">
                      <div className="bg-blue-900 text-white text-xs px-3 py-1 rounded-full shadow">
                        Inovasi Layanan
                      </div>
                    </div>

                    <Image
                      src={item.logo}
                      alt={item.nama}
                      width={500}
                      height={500}
                      className="w-3/4 object-contain group-hover:scale-105 transition duration-300 rounded-xl"
                    />
                  </div>

                  {/* BODY */}
                  <div className="p-5 flex flex-col justify-between min-h-[220px]">

                    <div>
                      <h1 className="text-lg font-bold text-slate-800 text-center leading-snug mb-3">
                        {item.nama}
                      </h1>

                      <div className="w-16 h-1 bg-blue-900 rounded-full mx-auto mb-4"></div>

                      <p className="text-sm text-gray-500 text-center leading-relaxed">
                        Akses dokumen panduan dan aplikasi pelayanan publik
                        secara online dengan mudah dan cepat.
                      </p>
                    </div>

                    {/* BUTTON */}
                    <div className="mt-6 flex flex-col gap-3">

                      {/* PANDUAN */}
                      {item.link && (
                        <Link
                          href={item.link}
                          target="_blank"
                          className="w-full bg-blue-900 hover:bg-black text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-medium transition duration-300 shadow-lg"
                        >
                          <FaFilePdf />
                          Panduan
                        </Link>
                      )}

                      {/* APLIKASI */}
                      {item.link_aplikasi && (
                        <div className="grid grid-cols-5 gap-2">

                          <Link
                            href={item.link_aplikasi}
                            target="_blank"
                            className="col-span-4 bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-medium transition duration-300"
                          >
                            <FaExternalLinkAlt className="text-sm" />
                            Link Aplikasi
                          </Link>

                          {item.video && (
                            <Link
                              href={item.video}
                              target="_blank"
                              className="bg-red-600 hover:bg-red-700 text-white rounded-xl flex items-center justify-center transition duration-300 shadow-lg"
                            >
                              <FaPlayCircle className="text-xl" />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FOOTER INFO */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-cyan-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Transformasi Pelayanan Publik Digital
            </h1>

            <p className="max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Rumah Sakit Tk.II dr. Soepraoen terus berkomitmen menghadirkan
              pelayanan publik yang transparan, cepat, modern, dan mudah
              diakses oleh masyarakat melalui pengembangan layanan digital.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}