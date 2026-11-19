import React from "react";
import Image from "next/image";
import {
  LuShield,
  LuBookOpen,
  LuFlag,
  LuHeartHandshake,
  LuClock3,
} from "react-icons/lu";

import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarTentang from "../../../../components/Navbar/NavbarTentang";

function SejarahDrSoepraoen() {
  return (
    <>
      {/* BANNER */}
      <BannerRS title="Mayor dr.Soepraoen" />

      {/* NAVBAR */}
      <NavbarTentang
        active="Biografi dr.Soepraoen"
        url="/profil/sejarah/dr-soepraoen"
      />

      {/* CONTENT */}
      <section className="flex justify-center px-4 md:px-6 py-8 md:py-12 bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <div className="w-full 2xl:w-4/5">
          <div className="w-full xl:w-11/12 mx-auto">

            {/* HERO */}
            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-200 bg-white mb-14">

              {/* BACKGROUND EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 via-transparent to-blue-100/30"></div>

              <div className="relative grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10">

                {/* IMAGE */}
                <div className="relative flex justify-center">
                  <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-200 shadow-xl w-full max-w-[420px]">
                    <Image
                      src={"/assets/new-dr-soepraoen.jpg"}
                      alt={"Mayor dr.Soepraoen"}
                      width={600}
                      height={850}
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="w-full h-auto object-contain hover:scale-105 transition-all duration-700"
                      priority
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* BADGE */}
                  <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
                    <LuShield className="text-lg" />
                    Tokoh Perjuangan Kesehatan
                  </div>

                  {/* TITLE */}
                  <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mt-6 leading-tight">
                    Mayor
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-900 bg-clip-text text-transparent">
                      {" "}dr.Soepraoen
                    </span>
                  </h1>

                  {/* SUBTITLE */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-6">
                    Sosok dokter pejuang yang mengabdikan hidupnya demi
                    perjuangan bangsa dan pelayanan kesehatan pada masa
                    perjuangan kemerdekaan Indonesia.
                  </p>

                  {/* INFO CARD */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-8">

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                        <LuBookOpen className="text-cyan-600 text-xl" />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-800">
                          Dokter Pejuang
                        </h3>

                        <p className="text-sm text-slate-500 mt-1">
                          Mengabdi pada masa perjuangan kemerdekaan.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-900/10 flex items-center justify-center">
                        <LuFlag className="text-blue-900 text-xl" />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-800">
                          Pahlawan Medis
                        </h3>

                        <p className="text-sm text-slate-500 mt-1">
                          Gugur saat menjalankan tugas kemanusiaan.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* BIODATA */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 md:p-10 mb-10">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg">
                  <LuHeartHandshake className="text-white text-2xl" />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Biodata
                  </h2>

                  <p className="text-slate-500 mt-1">
                    Riwayat singkat kehidupan Mayor dr.Soepraoen
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
                Mayor dr Soepraoen adalah seorang dokter pejuang pada masa
                kedudukan Belanda, Jepang dan Sekutu (1942 s.d 1946).
                dr Soepraoen lahir di Srondol Semarang pada tanggal 27 Februari
                1918 dari pasangan Budiarto yang bekerja sebagai Pegawai
                perbekalan di Semarang dan Sukemi (Yu’kem) yang bekerja sebagai
                Tukang jahit diperusahaan milik Belanda. Sejak lahir hingga umur
                beliau 7 tahun ,tinggal bersama kedua orangtuanya di Srondol
                Semarang Jawa Tengah dan pada saat menginjak umur 8 tahun beliau
                ikut kakak dari ibunya yang tinggal di Tawangmangu Karanganyar
                Jawa Tengah yaitu Suyoto (Staf Kawedanan Karanganyar Jawa tengah)
                dan Marni. Hingga usia 18 tahun beliau tinggal bersama Pamannya
                untuk mengenyam pendidikan hingga HBS ( Hoogere Burger School)
                setingkat SLTA di Tawangmangu, Karanganyar,Jawa Tengah. Setelah
                lulus HBS beliau melanjutkan kuliah di NIAS ( Nederlandsch
                Indische Artsen School ), sekarang menjadi UNAIR (Universitas
                Airlangga) Surabaya dan lulus tahun 1942.
              </p>
            </div>

            {/* PERJUANGAN */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 md:p-10">

              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-900 flex items-center justify-center shadow-lg">
                  <LuClock3 className="text-white text-2xl" />
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Perjuangan
                  </h2>

                  <p className="text-slate-500 mt-1">
                    Jejak pengabdian Mayor dr.Soepraoen untuk bangsa
                  </p>
                </div>
              </div>

              <div className="space-y-6">

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <p className="text-slate-600 leading-relaxed text-justify">
                    Pada massa akhir pendudukan Belanda (1942) beliau sebagai
                    dokter belanda di rumah sakit milik belanda di Surabaya.
                    Pada massa awal sampai akhir pendudukan Jepang (1942-1945)
                    beliau sebagai dokter di pangkalan tentara Jepang di wilayah
                    Surabaya.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <p className="text-slate-600 leading-relaxed text-justify">
                    Pada massa awal kemerdekaan (1945) beliau bergabung dengan
                    Pasukan BKR yang dipimpin oleh Kolonel Sungkono pada saat itu
                    dan menjabat sebagai Kepala Dinas Kesehatan Rumah Sakit
                    Militer Jawa Timur yang berada di Rumah Sakit Darmo. Dan
                    pada saat itu Kepala Kesehatannya dipimpin oleh Letkol I P
                    Rajimin. Pada saat perang Surabaya beliau aktif dalam memberi
                    dukungan dan pertolongan kesehatan kepada para pejuang.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <p className="text-slate-600 leading-relaxed text-justify">
                    Pada tanggal 03 Januari 1946 beliau mendapat perintah untuk
                    memberi pertolongan di garis pertempuran melawan Sekutu di
                    wilayah Gresik bagian selatan (Balong Panggang,Wringin
                    Anom,Krian dam Mojokerto),karena pada saat itu para pejuang
                    banyak yang luka akibat pertempuran dari Surabaya. Pada saat
                    perjalanan pukul 09.30 WIB beliau tidak sengaja menginjak
                    Ranjau darat yang ditanam Sekutu sehingga beliau meninggal
                    bersama 2 (dua) orang Anggotanya yang membawa tandu. Agar
                    tidak diketahui Sekutu jasad beliau dan 2 (dua) orang
                    anggotanya yang tidak utuh lagi itu dikumpulkan oleh para
                    pejuang pada kelompok beliau. Sehingga jasad beliau sementara
                    dimakamkan di dusun legundi desa Krikilan Kecamatan Driyorejo
                    Kabupaten Gresik Jawa Timur.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-500 to-blue-900 rounded-[2rem] p-6 md:p-8 text-white shadow-xl">
                  <p className="leading-relaxed text-justify text-base md:text-lg">
                    Pada tahun 1950 atas perintah/instruksi Presiden Soekarno
                    agar para pejuang yang gugur agar dipindahkan ke TMP Gajah
                    Mada Kota Mojokerto. Untuk mengenang jasa-jasa dan perjuangan
                    beliau diabadikan sebagai nama Rumah Sakit TK II dr
                    Soepraoen Jl S.Supriyadi No.22 Sukun Malang Jawa Timur.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default SejarahDrSoepraoen;