"use client";

import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarPPID from "../../../../components/Navbar/NavbarPPID";
import Image from "next/image";
import {
  LuShieldCheck,
  LuUsers,
  LuBadgeCheck,
  LuBuilding2,
} from "react-icons/lu";
import { asset } from "../../../../helpers/asset";

const listPetugasPpid = [
  {
    nama: "dr. Handy Hernandy Yuliawan, Sp.M",
    pangkat: "Kolonel Ckm",
    nrp: "11930098810770",
    organik: "Karumkit Tk. II dr. Soepraoen",
    penugasan: "Penanggung Jawab PPID",
  },
  {
    nama: "dr. Dini Henriyanto, Sp.PD",
    pangkat: "Letkol Ckm",
    nrp: "11010010790674",
    organik: "Ketua Komite Medik Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Penasehat",
  },
  {
    nama: "dr. Teguh Ismanto, Sp.An",
    pangkat: "Letkol Ckm",
    nrp: "11020000391071",
    organik: "Plh. Waka Rumkit Tk. II dr. Soepraoen",
    penugasan: "Ketua PPID",
  },
  {
    nama: "dr. Tiwik Eriskawati, Sp.PK. M.Kes",
    pangkat: "Letkol Ckm (K)",
    nrp: "11040014070778",
    organik: "Kabagyanmed Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Wakil Ketua PPID",
  },
  {
    nama: "David Saiful Anwar",
    pangkat: "Mayor Ckm",
    nrp: "11090012530987",
    organik: "Kasub C Instalwatnap Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Sekretaris PPID",
  },
  {
    nama: "Pujianto, A.Md Ak., S.K.M",
    pangkat: "Letkol Ckm",
    nrp: "11970027180674",
    organik: "Ka Unit SIMRS/IT Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Bidang Pengelolaan Data dan Klasifikasi Informasi",
  },
  {
    nama: "Partono, S.AN",
    pangkat: "Mayor Ckm",
    nrp: "21960277891075",
    organik: "Kasituud Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
  {
    nama: "Rayandra Yala Pratama, S.Kom, M.MT",
    pangkat: "IX",
    nrp: "199407092025211034",
    organik: "Tim IT Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
  {
    nama: "Bayu Dilliano Saputra",
    pangkat: "V",
    nrp: "199506222025211026",
    organik: "Anggota Simak Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
  {
    nama: "Simpen Widayati, S.Kep Ners, M.Kes",
    pangkat: "Letkol Ckm (K)",
    nrp: "11950014800171",
    organik: "Kainstalwatlan Rumah Sakit Tk.II dr. Soepraoen",
    penugasan: "Bidang Pelayanan Informasi dan Dokumentasi",
  },
  {
    nama: "Heri Santoso",
    pangkat: "Kapten Ckm",
    nrp: "21970097781176",
    organik: "Ka Humas Pemasaran dan Pengaduan Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
  {
    nama: "Amaliah Gusfadilah",
    pangkat: "IX",
    nrp: "199711062025212023",
    organik: "Tim IT Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
  {
    nama: "Siska Kusumawati",
    pangkat: "PPPKPW",
    nrp: "199601312025212075",
    organik: "Tim IT Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
  {
    nama: "Anton Prasetyo H, S.Kep",
    pangkat: "Lettu Ckm",
    nrp: "21050206930384",
    organik: "Pauryanmed Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Bidang Fasilitas Sengketa Informasi",
  },
  {
    nama: "Afita Dwi Wahyuni, S.Kep., Ners",
    pangkat: "Penata Tk. I - III/d",
    nrp: "197307271996032004",
    organik:
      "Penata Yanmed-1 Dep. Gilut Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
  {
    nama: "Suwito, S.Kep., M.Kes",
    pangkat: "Penata Muda Tk. I - III/b",
    nrp: "197007071993031005",
    organik:
      "SFP pelaksana-106 Instalwatnap Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
  {
    nama: "Nanda Nobelin Arini, A.Md. RMIK",
    pangkat: "VII",
    nrp: "198912082025212034",
    organik: "Anggota Siyanmed Rumah Sakit Tk. II dr. Soepraoen",
    penugasan: "Anggota",
  },
];

const listDireksiPPID = [ 
  { nama: "Letkol Ckm Pujianto, A.Md Ak., S.K.M", jabatan: "Bidang Pengelolaan Data dan Klarifikasi Informasi", foto: asset("/assets/ppid/letkol-puji.png"), }, 
  { nama: "Letkol CKm (K) Simpen Widayati, S.Kep Ners, M.Kes", jabatan: "Bidang Pelayanan Informasi dan Dokumentasi", foto: asset("/assets/direksi/letkol-simpen.jpeg"), }, 
  { nama: "Lettu Ckm Anton Prasetyo H, S.Kep", jabatan: "Bidang Fasilitas Sengketa Informasi", foto: asset("/assets/ppid/kaur-anton.png"), }, 
];

export default function PetugasPPID() {
  return (
    <>
      <BannerRS title="Pejabat Pengelola Informasi dan Dokumentasi (PPID)" />

      <NavbarPPID
        active="Petugas PPID"
        url="/informasi/ppid/petugas-ppid"
      />

      <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 px-4">
        <div className="w-full 2xl:w-4/5 mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold">
              <LuShieldCheck />
              Struktur Organisasi PPID
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mt-6 leading-tight">
              Petugas PPID
              <span className="bg-gradient-to-r from-cyan-500 to-blue-900 bg-clip-text text-transparent">
                {" "}RS Tk. II dr. Soepraoen
              </span>
            </h1>

            <p className="text-slate-500 text-base md:text-lg leading-relaxed mt-5 max-w-3xl mx-auto">
              PPID bertugas dalam pengelolaan, penyimpanan, dokumentasi,
              penyediaan, dan pelayanan informasi publik secara transparan,
              cepat, dan akuntabel sesuai Undang-Undang Keterbukaan Informasi
              Publik.
            </p>
          </div>

          {/* CARD DIREKSI */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
              {listDireksiPPID.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">

                    {/* FOTO */}
                    <div className="relative w-full flex justify-center items-center p-4 md:p-15 overflow-hidden">
                      <Image
                        src={item.foto}
                        alt={item.nama}
                        width={500}W
                        height={670}
                        sizes="(max-width:568px) 100vw, 33vw"
                        className="w-full h-auto max-h-[520px] object-contain group-hover:scale-105 transition-all duration-500"
                        priority
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="bg-white/95 backdrop-blur-xl border border-white rounded-[1.5rem] shadow-2xl p-5 md:p-6">

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br from-cyan-500 to-blue-900 text-white text-sm font-medium mb-4 shadow-md">
                          <LuBadgeCheck className="text-lg" />
                          Pengurus PPID
                        </div>

                        {/* NAMA */}
                        <h2 className="text-slate-800 text-lg md:text-2xl font-bold leading-snug">
                          {item.nama}
                        </h2>

                        {/* JABATAN */}
                        <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
                          {item.jabatan}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* DESKRIPSI */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-sm mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center text-white text-2xl shadow-lg">
                <LuUsers />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Tentang PPID
                </h2>

                <p className="text-slate-500">
                  Pejabat Pengelola Informasi dan Dokumentasi
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              PPID adalah kepanjangan dari Pejabat Pengelola Informasi dan
              Dokumentasi, dimana PPID berfungsi sebagai pengelola dan
              penyampai dokumen yang dimiliki oleh badan publik sesuai amanat
              UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
            </p>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg mt-5">
              Dengan keberadaan PPID, masyarakat dapat menyampaikan permohonan
              informasi secara lebih mudah, cepat, dan terintegrasi melalui
              pelayanan satu pintu yang profesional dan transparan.
            </p>
          </div>

          {/* STRUKTUR */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-10 shadow-sm mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center text-white text-2xl shadow-lg">
                <LuBuilding2 />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Struktur Organisasi PPID
                </h2>

                <p className="text-slate-500">
                  Struktur pengelolaan informasi publik
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={asset("/assets/struktur-ppid-new.png")}
                alt="struktur ppid"
                width={1200}
                height={1000}
                className="w-full max-w-5xl h-auto rounded-2xl border border-slate-200 shadow-md"
                priority
              />
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-4 md:p-8 shadow-sm overflow-hidden">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Daftar Petugas PPID
              </h2>

              <p className="text-slate-500 mt-2">
                Data personel dan penugasan PPID Rumah Sakit Tk. II dr.
                Soepraoen
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white">
                  <tr>
                    <th className="px-5 py-4 text-left font-semibold">
                      Nama
                    </th>

                    <th className="px-5 py-4 text-left font-semibold">
                      Pangkat / NRP
                    </th>

                    <th className="px-5 py-4 text-left font-semibold">
                      Jabatan Organik
                    </th>

                    <th className="px-5 py-4 text-left font-semibold">
                      Jabatan Penugasan
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {listPetugasPpid.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 hover:bg-slate-50 transition-all"
                    >
                      <td className="px-5 py-4 font-medium text-slate-800">
                        {item.nama}
                      </td>

                      <td className="px-5 py-4 text-slate-600">
                        <p>{item.pangkat}</p>
                        <p className="text-sm text-slate-400 mt-1">
                          {item.nrp}
                        </p>
                      </td>

                      <td className="px-5 py-4 text-slate-600">
                        {item.organik}
                      </td>

                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-cyan-50 text-cyan-700 px-4 py-2 text-sm font-medium">
                          {item.penugasan}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}