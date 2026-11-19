import React, { useState } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarTentang from "../../../components/Navbar/NavbarTentang";
import Image from "next/image";
import { listDireksi } from "../../../components/List/listDireksi";
import Link from "next/link";
import {
  FaUserMd,
  FaHospital,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

// Urutan seksi mengikuti Struktur Orgas BLU (Rev. November 2026)
const sections = [
  { kategori: "KOMITE", title: "Komite & Unsur Pengawas" },
  { kategori: "KABAG", title: "Kepala Bagian & UKPBJ" },
  { kategori: "PEMBANTU", title: "Unsur Pembantu Pimpinan" },
  { kategori: "DEPARTEMEN", title: "Departemen Pelayanan Medis" },
  { kategori: "INSTALASI", title: "Instalasi & Unit Pelayanan" },
  { kategori: "PELAKSANA", title: "Unsur Pelaksana" },
];

export default function JajaranDireksi() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDireksi, setSelectedDireksi] = useState(null);

  const CardDireksi = ({ item, buttonType = "modal", index }) => (
    <div className="group w-[15rem] bg-white/90 backdrop-blur-sm border border-slate-200 rounded-[1.8rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <div className="w-full aspect-[3/4] relative bg-slate-100">
          <Image
            src={item.foto || "/assets/logo/logo-rs-baru.jpg"}
            alt={item.nama || item.jabatan}
            fill
            className={`transition-all duration-700 group-hover:scale-105 ${
              !item.foto
                ? "object-contain p-3"
                : "object-cover"
            }`}
          />
        </div>

        <div className="absolute top-3 left-3">
          <div className="bg-blue-900/90 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-md shadow">
            Direksi
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center">
        <div className="flex justify-center mb-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
            <FaUserMd />
          </div>
        </div>

        <h3 className="text-sm font-bold text-slate-800 leading-snug min-h-[40px]">
          {item.nama || "-"}
        </h3>

        <p className="text-xs text-slate-500 mt-2 leading-relaxed min-h-[36px]">
          {item.jabatan}
        </p>

        {item.status === 1 && buttonType === "modal" && (
          <button
            onClick={() => {
              setSelectedDireksi(item);
              setOpenModal(true);
            }}
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-blue-800 hover:text-cyan-600 transition-all"
          >
            Lihat Selengkapnya
            <FaArrowRight className="text-[10px]" />
          </button>
        )}

        {item.status === 1 && buttonType === "link" && (
          <Link
            href={`/profil/jajaran-direksi/${index}`}
            className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-blue-800 hover:text-cyan-600 transition-all"
          >
            Lihat Selengkapnya
            <FaArrowRight className="text-[10px]" />
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Banner */}
      <BannerRS title="Jajaran Direksi" />

      {/* Navbar */}
      <NavbarTentang
        active="Jajaran Direksi"
        url="/profil/jajaran-direksi"
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
                <HiOutlineOfficeBuilding />
                Struktur Organisasi Rumah Sakit
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
                Jajaran Direksi
              </h1>

              <p className="text-slate-500 mt-5 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                Struktur kepemimpinan Rumah Sakit Tk. II dr. Soepraoen
                yang mendukung pelayanan kesehatan profesional,
                modern, dan berorientasi pada mutu pelayanan.
              </p>
            </div>

            {/* PIMPINAN */}
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-8">
                {listDireksi
                  .filter((item) => item.kategori === "PIMPINAN")
                  .map((item, index) => (
                    <div key={index}>
                      <CardDireksi item={item} />
                    </div>
                  ))}
              </div>
            </div>

            {sections.map((section, sIndex) => (
              <React.Fragment key={section.kategori}>
                {/* Divider */}
                <div className="flex justify-center my-16">
                  <div className="w-[2px] h-20 bg-gradient-to-b from-cyan-400 to-blue-900 rounded-full"></div>
                </div>

                {/* SEKSI */}
                <div className={sIndex === sections.length - 1 ? "mb-10" : "mb-20"}>
                  <div className="flex justify-center mb-10">
                    <div className="bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm">
                      <h2 className="font-semibold text-blue-900 text-sm md:text-base">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-8">
                    {listDireksi
                      .filter((item) => item.kategori === section.kategori)
                      .map((item, index) => (
                        <CardDireksi
                          key={index}
                          item={item}
                          buttonType="modal"
                        />
                      ))}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openModal && selectedDireksi && (
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4"
        onClick={() => setOpenModal(false)}
      >

        {/* MODAL BOX */}
        <div
          className="relative bg-white rounded-[1.8rem] w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl animate-[fadeIn_.3s_ease]"
          onClick={(e) => e.stopPropagation()}
        >

          {/* HEADER */}
          <div className="sticky top-0 z-20 bg-white border-b border-slate-200 px-5 md:px-6 py-4 flex items-center justify-between">
            
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-blue-900">
                {selectedDireksi.jabatan}
              </h2>

              <p className="text-slate-500 text-xs md:text-sm mt-1">
                Struktur jajaran terkait
              </p>
            </div>

            <button
              onClick={() => setOpenModal(false)}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-red-100 text-slate-500 hover:text-red-500 transition-all duration-300 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* CONTENT */}
          <div className="overflow-y-auto max-h-[70vh] p-5 md:p-8">

            <div className="flex flex-wrap justify-center gap-6">
              {listDireksi
                .filter(
                  (item) =>
                    item.parent === selectedDireksi.level
                )
                .map((item, index) => (
                  <CardDireksi
                    key={index}
                    item={item}
                  />
                ))}
            </div>

          </div>
        </div>
      </div>
    )}
    </>
  );
}