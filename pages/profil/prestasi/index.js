import { React, useState } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarTentang from "../../../components/Navbar/NavbarTentang";
import Image from "next/image";
import Link from "next/link";

import {
  LuAward,
  LuCalendarDays,
  LuShieldCheck,
  LuExternalLink,
  LuBadgeCheck,
} from "react-icons/lu";

const listPrestasi = [
  {
    tahun: "2026",
    listPenghargaan: [
       {
        tahun: "2026",
        judul: "Piagam Penghargaan Satker Berkinerja Terbaik Kategori BLU Periode Triwulan II",
        oleh: "KPPN Malang", 
        gambar: "/assets/prestasi/satker-tw-2-2026.jpeg",
        deskripsi:"Rumah Sakit Tk. II dr. Soepraoen sebagai Satker Berkinerja Terbaik Kategori BLU Periode Triwulan II",
      },
      {
        tahun: "2026",
        judul: "Piagam Penghargaan Satker Berkinerja Terbaik Kategori BLU Periode Triwulan I",
        oleh: "KPPN Malang", 
        gambar: "/assets/prestasi/satker-tw-1-26.jpeg",
        gambar2: "/assets/prestasi/satker-tw-1-2026-gath.jpeg",
        deskripsi:"Rumah Sakit Tk. II dr. Soepraoen sebagai Satker Berkinerja Terbaik Kategori BLU Periode Triwulan I",
      },
      {
        tahun: "2026",
        judul: "Piagam Penghargaan KARS (Pemantauan dan Evaluasi Akreditasi Rumah Sakit)",
        oleh: "KARS (Komisi Akreditasi Rumah Sakit)", 
        gambar: "/assets/prestasi/piagam-kars-2026.jpeg",
        deskripsi:"Rumah Sakit Tk. II dr. Soepraoen mendapatkan Piagam Penghargaan KARS (Pemantauan dan Evaluasi Akreditasi Rumah Sakit)",
      },
    ],
  },
  {
    tahun: "2025",
    listPenghargaan: [
      {
        tahun: "2025",
        judul: "Implementasi Standar Layanan Teknologi Informasi dan Keamanan Informasi",
        oleh: "BPJS Kesehatan",
        gambar: "/assets/prestasi/sert-trustmark-bpjs.jpg",
        deskripsi:"Rumah Sakit Tk. II dr. Soepraoen mendapatkan Bintang 3 dalam BPJS Kesehatan Trustmark untuk Implementasi Standar Layanan Teknologi Informasi dan Keamanan Informasi",
      },
      {
        tahun: "2025",
        judul: "Piagam Penghargaan Satker Berkinerja Terbaik Kategori BLU Periode Triwulan IV",
        oleh: "KPPN Malang",
        gambar: "/assets/prestasi/satker-I-tw-4.jpeg",
        gambar2: "/assets/prestasi/satker-I-tw-4-full.jpeg",
        deskripsi:"Rumah Sakit Tk. II dr. Soepraoen sebagai Satker Berkinerja Terbaik Kategori BLU Periode Triwulan III",
      },
      {
        tahun: "2025",
        judul: "Piagam Penghargaan Wilayah Bebas Korupsi (WBK)",
        oleh: "PANGLIMA TNI INDONESIA",
        gambar: "/assets/prestasi/rst-wbk.jpeg",
        deskripsi:"Rumah Sakit Tk.II dr. Soepraoen Satuan Kerja Berpredikat Maju Menuju Wilayah Bebas Korupsi (WBK)",
      },
      {
        tahun: "2025",
        judul: "Piagam Penghargaan FKRTL Tipe B Berkomitmen",
        oleh: "BPJS (Badan Penyelenggara Jaminan Sosial)",
        gambar: "/assets/prestasi/bpjs-fkrtl-2-new.jpg",
        deskripsi:"Penilaian Fasilitas Kesehatan Berkomitmen Tingkat Kantor Cabang Utama Malang",
      },
      {
        tahun: "2025",
        judul: "Piagam Penghargaan Satker Berkinerja Terbaik Kategori BLU Periode Triwulan III",
        oleh: "KPPN Malang",
        gambar: "/assets/prestasi/satker-tw-3-2025.jpg",
        gambar2: "/assets/prestasi/dr-arief-tw-3.jpg",
        deskripsi:"RS TK II DR SOEPRAOEN meraih Peringkat I sebagai Satker Berkinerja Terbaik Kategori BLU Periode Triwulan III",
      },
    ],
  },
  {
    tahun: "2024",
    listPenghargaan: [
      {
        tahun: "2024",
        judul: "Peringkat III IKPA",
        oleh: "KPPN Malang",
        gambar: "/assets/prestasi/2024.jpeg",
        deskripsi:"",
        link: "",
      },
      {
        tahun: "2024",
        judul: "Satker Terbaik IKPA (Indikator Kerja Pelaksanaan Anggaran) TW. I Ta. 2024",
        oleh: "KPPN Malang",
        gambar: "/assets/prestasi/satker-II-2024.jpeg",
        gambar2: "/assets/prestasi/kasituud-prestasi-2024.jpeg",
        deskripsi:"IPKA sendiri adalah merupakan indikator yang ditetapkan oleh Kementrian Keuangan selaku Bendahara Umum Negara (BUN) guna mengukur kualitas kinerja pelaksanaan anggaran belanja Lembaga.Penilaian mengacu pada empat aspek pengukuran yaitu; Kesesuaian terhadap perencanaan dengan pelaksanaan anggaran efektivitas, pelaksanaan anggaran, efisiensi penggunaan anggaran, dan kepatuhan terhadap regulasi pelaksanaan anggaran.",
        link: "https://rri.co.id/keuangan/706245/kppn-malang-beri-penghargaan-27-satker-terbaik-pengelola-anggaran",
      },
      {
        tahun: "2024",
        judul: "Satker Terbaik IKPA (Indikator Kerja Pelaksanaan Anggaran) TW. II Ta. 2024",
        oleh: "KPPN Malang",
        gambar: "/assets/prestasi/satker-II-2024-tw2.jpeg",
        gambar2: "/assets/prestasi/satker-II-tw-2-bg.jpeg",
        deskripsi:"IPKA sendiri adalah merupakan indikator yang ditetapkan oleh Kementrian Keuangan selaku Bendahara Umum Negara (BUN) guna mengukur kualitas kinerja pelaksanaan anggaran belanja Lembaga.Penilaian mengacu pada empat aspek pengukuran yaitu; Kesesuaian terhadap perencanaan dengan pelaksanaan anggaran efektivitas, pelaksanaan anggaran, efisiensi penggunaan anggaran, dan kepatuhan terhadap regulasi pelaksanaan anggaran.",
      },
      {
        tahun: "2024",
        judul: "Piagam Penghargaan Mitra Kerja Dukungan dan Kerjasama dalam Pelayanan Kesehatan WBP",
        oleh: "Kementerian Hukum dan HAM Jawa Timur",
        gambar: "/assets/prestasi/2024-lapas.jpeg",
        deskripsi:"Rumah Sakit Tk. II dr. Soepraoen sebagai Mitra Kerja atas Dukungan dan Kerjasama dalam Pelayanan Kesehatan WBP pada Lapas Perempuan Kelas IIA Malang",
      },
      {
        tahun: "2024",
        judul: "Piagam Penghargaan Satker Berkinerja Terbaik Kategori BLU Periode Triwulan III",
        oleh: "KPPN Malang",
        gambar: "/assets/prestasi/satker-2024-baru-pol.jpeg",
        deskripsi:"Rumah Sakit Tk. II dr. Soepraoen sebagai Satker Berkinerja Terbaik Kategori BLU Periode Triwulan III",
      },
    ],
  },
  {
    tahun: "2023",
    listPenghargaan: [
      {
        tahun: "2023",
        judul: "Peringkat 2 IKPA",
        oleh: "KPPN Malang",
        gambar: "/assets/penghargaan2023.jpg",
        deskripsi:"",
        link: "",
      },
      {
        tahun: "2023",
        judul: "Piagam Penghargaan Penanggulangan TB",
        oleh: "Kepala Dinas Kesehatan Kota Malang",
        gambar: "/assets/prestasi/2023.jpeg",
        deskripsi:"",
        link: "",
      },
      {
        tahun: "2023",
        judul: "Satker Terbaik IKPA",
        oleh: "KPPN Malang",
        gambar: "/assets/new-2023.jpeg",
        deskripsi:"",
        link: "",
      },
      {
        tahun: "2023",
        judul: "Pengesahan TTE Rumkit Tk.II dr.Soepraoen ",
        oleh: "Balai Sertifikasi Elektronik (BSrE)",
        gambar: "/assets/prestasi/2023-tte.jpeg",
        deskripsi:"",
        link: "",
      },
    ],
  },
  {
    tahun: "2022",
    listPenghargaan: [
      {
        tahun: "2022",
        judul: "Akreditasi : Paripurna",
        oleh: "Komisi Akreditasi Rumah Sakit (KARS)",
        gambar: "/assets/akred2022.png",
        deskripsi:"",
        link: "",
      },
      {
        tahun: "2022",
        judul:
          "Peringkat II : Satuan Kerja Berkinerja Terbaik Kategori Badan Layanan Umum",
        oleh: "KPPN Malang",
        gambar: "/assets/prestasi/piagam-penghargaan.png",
        deskripsi:"",
        link: "",
      },
    ],
  },
  {
    tahun: "2021",
    listPenghargaan: [
      {
        tahun: "2021",
        judul:
          "Rumah Sakit Rujukan Kelas B dengan Predikat Terbaik dalam Penanganan Pandemi Covid-19",
        oleh: "Gubernur Jawa Timur",
        gambar: "/assets/prestasi/piagam-predikat.png",
        deskripsi:"",
        link: "",
      },
      {
        tahun: "2021",
        judul: "Rumah Sakit Rujukan Covid-19 Kota Malang",
        oleh: "Walikota Malang",
        gambar: "/assets/prestasi/piagam-rujukan.png",
        deskripsi:"",
        link: "",
      },
    ],
  },
  {
    tahun: "2019",
    listPenghargaan: [
      {
        tahun: "2019",
        judul: "Akreditasi : Paripurna",
        oleh: "Komisi Akreditasi Rumah Sakit (KARS)",
        gambar: "/assets/akred2019.png",
        deskripsi:"",
        link: "",
      },
      {
        tahun: "2019",
        judul: "Sertifikat Keanggotann",
        oleh: "Perhimpunan Rumah Sakit Seluruh Indonesia (PERSI)",
        gambar: "/assets/2022.png",
        deskripsi:"",
        link: "",
      },
    ],
  },
];

export default function Prestasi() {
  const [prestasi, setPrestasi] = useState({
    gambar: "/assets/2.jpg",
    judul: "Prestasi",
  });

  return (
    <>
      {/* BANNER */}
      <BannerRS title="Prestasi" />

      {/* NAVBAR */}
      <NavbarTentang active="Prestasi" url="/profil/prestasi" />

      {/* CONTENT */}
      <section className="w-full flex justify-center py-8 md:py-14 bg-gradient-to-b from-slate-50 to-white">
        <div className="w-full 2xl:w-4/5 px-4 md:px-8">

          {/* HEADER */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-900 font-medium text-sm mb-5">
              <LuAward className="text-lg" />
              Prestasi & Penghargaan
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
              Prestasi Rumah Sakit
            </h1>

            <p className="text-slate-500 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Berbagai penghargaan dan pencapaian Rumah Sakit Tk. II dr.
              Soepraoen sebagai bentuk komitmen dalam pelayanan kesehatan,
              tata kelola, mutu pelayanan, dan inovasi berkelanjutan.
            </p>
          </div>

          {/* LIST TAHUN */}
          <div className="space-y-16">
            {listPrestasi.map((item, index) => (
              <div key={index} className="relative">

                {/* TAHUN */}
                <div className="flex items-center justify-center mb-10">
                  <div className="h-[1px] flex-1 bg-slate-200"></div>

                  <div className="mx-5 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-900 shadow-xl text-white font-bold text-xl md:text-2xl flex items-center gap-2">
                    <LuCalendarDays />
                    {item.tahun}
                  </div>

                  <div className="h-[1px] flex-1 bg-slate-200"></div>
                </div>

                {/* GRID PRESTASI */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 justify-center">

                  {item.listPenghargaan.map((item, index) => (
                    <label
                      key={index}
                      htmlFor="modal-prestasi"
                      onClick={() => setPrestasi(item)}
                      className="group cursor-pointer bg-white rounded-[1.7rem] overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >

                      {/* IMAGE */}
                      <div className="relative h-[210px] md:h-[230px] overflow-hidden">
                        <Image
                          src={item.gambar}
                          alt={item.judul}
                          fill
                          className="object-cover group-hover:scale-105 transition-all duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                        <div className="absolute top-3 left-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                            <LuBadgeCheck />
                            {item.tahun}
                          </div>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-4">

                        <div className="flex items-center gap-2 text-cyan-600 text-xs font-semibold mb-2">
                          <LuShieldCheck />
                          {item.oleh}
                        </div>

                        <h2 className="text-sm md:text-base font-bold text-slate-800 leading-snug min-h-[60px] line-clamp-3">
                          {item.judul}
                        </h2>

                        {item.deskripsi ? (
                          <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-3 line-clamp-3">
                            {item.deskripsi}
                          </p>
                        ) : (
                          <p className="text-slate-400 text-xs mt-3 italic">
                            Dokumentasi penghargaan Rumah Sakit.
                          </p>
                        )}

                        <div className="mt-5 flex items-center justify-between">

                          <div className="text-xs md:text-sm font-semibold text-blue-900 flex items-center gap-2">
                            Lihat Detail
                            <span className="group-hover:translate-x-1 transition-all duration-300">
                              →
                            </span>
                          </div>

                          {item.link ? (
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                              <LuExternalLink className="text-sm" />
                            </div>
                          ) : null}

                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <input type="checkbox" id="modal-prestasi" className="modal-toggle" />

      <label htmlFor="modal-prestasi" className="modal cursor-pointer px-3">

        <label
          className="modal-box relative bg-white max-w-6xl rounded-[2rem] border border-slate-200 shadow-2xl p-0 overflow-hidden"
          htmlFor=""
        >

          {/* HEADER */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-900 p-6 md:p-8 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm mb-5">
              <LuAward />
              Prestasi Rumah Sakit
            </div>
            <h3 className="text-2xl md:text-4xl font-bold leading-snug">
              {prestasi.judul}
            </h3>
            <p className="mt-4 text-slate-200 text-sm md:text-base">
              {prestasi.oleh}
            </p>
          </div>

          {/* BODY */}
          <div className="p-4 md:p-8 overflow-y-auto max-h-[80vh]">

            {/* IMAGE */}
            <div
              className={`grid gap-5 items-center ${
                prestasi.gambar2
                  ? "md:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >

              <div
                className={`relative overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-lg bg-slate-50 flex justify-center items-center p-3 ${
                  prestasi.gambar2
                    ? "max-h-[55vh]"
                    : "max-h-[50vh] md:max-h-[60vh]"
                }`}
              >

                <Image
                  src={prestasi.gambar}
                  alt={prestasi.judul}
                  width={1200}
                  height={1600}
                  sizes="100vw"
                  className={`w-auto h-auto object-contain rounded-xl ${
                    prestasi.gambar2
                      ? "max-h-[50vh]"
                      : "max-h-[45vh] md:max-h-[55vh]"
                  }`}
                />
              </div>

              {prestasi.gambar2 ? (
                <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-lg bg-slate-50 flex justify-center items-center p-3 max-h-[55vh]">

                  <Image
                    src={prestasi.gambar2}
                    alt={prestasi.judul}
                    width={1200}
                    height={1600}
                    sizes="100vw"
                    className="w-auto h-auto max-h-[50vh] object-contain rounded-xl"
                  />
                </div>
              ) : null}

            </div>

            {/* DESKRIPSI */}
            {/* {prestasi.deskripsi ? (
              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-[1.5rem] p-6">
                <h4 className="font-bold text-slate-800 text-lg mb-3">
                  Deskripsi Penghargaan
                </h4>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {prestasi.deskripsi}
                </p>
              </div>
            ) : null} */}

          </div>
        </label>
      </label>
    </>
  );
}