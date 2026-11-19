"use client";

import { useState } from "react";
import Image from "next/image";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarTentang from "../../../components/Navbar/NavbarTentang";
import Link from "next/link";

import {
  LuClock3,
  LuBuilding2,
  LuBookOpen,
  LuChevronDown,
  LuChevronUp,
  LuShieldCheck,
  LuUsers,
  LuAward,
} from "react-icons/lu";

const listSejarahJabatan = [
  { nama: "dr. Soesman Soemosoesastro", pangkat: "Kolonel CDM/1709", tahun: "1950 - 1957" },
  { nama: "dr. Sabijono", pangkat: "Kolonel CDM/14200", tahun: "1957 - 1959" },
  { nama: "dr. Ibnoe Mahoen", pangkat: "Kolonel CDM/17099", tahun: "1960 - 1963" },
  { nama: "dr. Piet Mamahit", pangkat: "Brigjen TNI", tahun: "1964 - 1971" },
  { nama: "dr. Sjamsoel Maarif", pangkat: "Letkol CDM/18412", tahun: "1971 – 1973" },
  { nama: "dr. Soejatmo R. Tagore", pangkat: "Kolonel CDM/19609", tahun: "1973 - 1978" },
  { nama: "dr. Soemedhi", pangkat: "Kolonel CDM/233830", tahun: "1978 - 1980" },
  { nama: "dr. Poernomo Kasidi", pangkat: "Kolonel CDM/19579", tahun: "1982 - 1984" },
  { nama: "dr. Soeparno", pangkat: "Kolonel CKM/20106", tahun: "1984 - 1990" },
  { nama: "drg. Ertono Soekardjo, MSc.", pangkat: "Kolonel CKM/20163", tahun: "1990 - 1991" },
  { nama: "dr. H. Sumadi Abdullah", pangkat: "Kolonel CKM/20096", tahun: "1991 – 1995" },
  { nama: "dr. Suharyoto", pangkat: "Kolonel CKM/30181", tahun: "1995 – 1995" },
  { nama: "dr. H. Budiharto", pangkat: "Kolonel CKM/29022", tahun: "1995 – 1999" },
  { nama: "dr. C. Karnanda", pangkat: "Kolonel CKM/29408", tahun: "1999 – 2002" },
  { nama: "dr. Zulkarnain P.", pangkat: "Kolonel CKM/30705", tahun: "2002 – 2005" },
  { nama: "dr. Murthado Sani, Sp.JP.", pangkat: "Kolonel CKM/30322", tahun: "2005 – 2006" },
  { nama: "drg. Pangestu", pangkat: "Kolonel CKM/29641", tahun: "2006 – 2008" },
  { nama: "dr. Bambang Budi W, Sp.THT", pangkat: "Kolonel CKM/32004", tahun: "2008 – 2010" },
  { nama: "dr. I. Putu Gde Santika, M.Si", pangkat: "Kolonel CKM/31887", tahun: "2010 – 2013" },
  { nama: "dr. Sofyan Solichin, M.M.", pangkat: "Kolonel CKM/31411", tahun: "2013 – 2014" },
  { nama: "dr. Paskah Saragih", pangkat: "Kolonel CKM/1910000330460", tahun: "2014 – 2015" },
  { nama: "dr. Supriyanto, M.A.R.S.", pangkat: "Kolonel CKM/31430", tahun: "2015 – 2016" },
  { nama: "dr. Sebastian A.B.", pangkat: "Kolonel CKM/34131", tahun: "2016 - 2018" },
  { nama: "dr. Trio Tangkas W.M, Sp.PD.", pangkat: "Kolonel CKM/33010", tahun: "2018 – 2021" },
  { nama: "dr. Muh Hafid Akbar, Sp.JP(K)", pangkat: "Kolonel Ckm/32555", tahun: "2021 – 2023" },
  { nama: "dr. Zainal Alim, Sp.OG", pangkat: "Kolonel CKM/11930096830469", tahun: "2023 - 2026" },
  { nama: "dr. Handy Hernandy Yuliawan, Sp.M", pangkat: "Kolonel Ckm/11930098810770", tahun: "2026 - sekarang" },
];

function Sejarah() {
  const [showDetails, setShowDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      {/* BANNER */}
      <BannerRS title="Profil" />

      {/* NAVBAR */}
      <NavbarTentang active="Sejarah" url="/profil/sejarah" />

      {/* CONTENT */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10 px-4 md:px-6">
        <div className="w-full 2xl:w-4/5 mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
              <LuBookOpen />
              Sejarah Rumah Sakit
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mt-5 leading-tight">
              Sejarah Rumah Sakit Tk. II dr. Soepraoen
            </h1>

            <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto mt-5 leading-relaxed">
              Perjalanan panjang Rumah Sakit Tk. II dr. Soepraoen dalam memberikan
              pelayanan kesehatan dan pengabdian kepada masyarakat serta institusi TNI.
            </p>
          </div>

          {/* HERO IMAGE */}
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-200 mb-16">
            <div className="relative h-[420px] sm:h-[500px] md:h-[650px] lg:h-[920px] w-full">
              <Image
                src={"/assets/bg-rssoepraoen-senja.png"}
                alt={"Rumah Sakit dr Soepraoen"}
                fill
                priority
                className="object-cover object-center scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 md:left-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 max-w-xl">
                  <h2 className="text-white text-xl md:text-3xl font-bold">
                    Rumah Sakit Tk. II dr. Soepraoen
                  </h2>

                  <p className="text-slate-200 mt-2 text-sm md:text-base">
                    Institusi kesehatan TNI yang memiliki sejarah panjang dan nilai pengabdian.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-5">
                <LuClock3 className="text-cyan-600 text-2xl" />
              </div>

              <h3 className="font-bold text-slate-800 text-xl mb-2">
                Berdiri Sejak 1950
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Memiliki perjalanan panjang dalam mendukung pelayanan kesehatan militer dan masyarakat umum.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-900/10 flex items-center justify-center mb-5">
                <LuBuilding2 className="text-blue-900 text-2xl" />
              </div>

              <h3 className="font-bold text-slate-800 text-xl mb-2">
                Rumah Sakit TNI
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Berada di bawah Kesehatan Daerah Militer V/Brawijaya dengan pelayanan modern dan profesional.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5">
                <LuShieldCheck className="text-emerald-600 text-2xl" />
              </div>

              <h3 className="font-bold text-slate-800 text-xl mb-2">
                Pelayanan Berkualitas
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Mengedepankan pelayanan kesehatan yang humanis, profesional, dan terpercaya.
              </p>
            </div>

          </div>

          {/* SECTION 1 */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 md:p-10 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <LuBookOpen className="text-cyan-600 text-2xl" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Awal Berdirinya Rumah Sakit
                </h2>

                <p className="text-slate-500 text-sm md:text-base">
                  Perjalanan sejarah awal Rumah Sakit Tk. II dr. Soepraoen
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
              Rumah Sakit Tk. II dr.Soepraoen dahulunya adalah Rumah Sakit Kristen milik Zending. 
              Sedangkan Rumah Sakit Tentara sewaktu penjajahan Jepang adalah Rumah Sakit Celaket (saat ini adalah RSUD dr.Saiful Anwar). 
              Pada waktu Belanda menduduki Kota Malang, Rumah Sakit Kristen/Zending di jadikan oleh Belanda sebagai Rumah Sakit Tentara. 
              Setelah penyerahan kedaulatan Indonesia, pada bulan Mei tahun 1950 Rumah Sakit Kristen/Zending di Sukun secara bertahap 
              pengelolaannya diserahkan kepada Pemerintah RI dengan nama Rumah Sakit Tentara Dam VIII/Brawijaya. 
              Pimpinan Hankam pada saat itu melalui Jenderal TNI Gatot Soebroto pada tahun 1960 meninjau RST Sukun 
              (Rumah Sakit Tentara Dam VIII/Brawijaya) dan mengusulkan agar RST Sukun tetap di pakai oleh TNI. 
              Rumah Sakit Celaket tetap dipakai RSUD Malang dan Zending diberi ganti rugi yang layak agar dapat 
              membangun Rumah Sakit yang baru sebagai ganti Rumah Sakit Kristen/Zending di Sukun.
            </p>
          </div>

          {/* DR SOEPRAOEN */}
          <Link href="/profil/sejarah/dr-soepraoen">
            <div className="group bg-gradient-to-br from-white to-black rounded-[2rem] overflow-hidden shadow-2xl mb-12 cursor-pointer hover:scale-[1.01] transition-all duration-500">

              <div className="grid lg:grid-cols-2 items-center">

                <div className="relative flex justify-center items-center h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] bg-white/5 p-6 md:p-10 overflow-hidden">
                  <Image
                    src={"/assets/dr-soepraoen.jpg"}
                    alt={"dr.Soepraoen"}
                    width={420}
                    height={600}
                    priority
                    className="w-auto h-full max-h-[420px] md:max-h-[500px] object-contain group-hover:scale-105 transition-all duration-700 drop-shadow-2xl"
                  />
                </div>

                <div className="p-8 md:p-12 text-white">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm mb-5">
                    <LuAward />
                    Tokoh Inspiratif
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    dr. Soepraoen
                  </h2>

                  <p className="text-slate-200 mt-6 leading-relaxed text-base md:text-lg">
                    Sosok dokter pejuang yang namanya diabadikan menjadi identitas
                    Rumah Sakit Tk. II dr. Soepraoen sebagai bentuk penghormatan
                    atas jasa dan pengabdiannya.
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold">
                    Baca Selengkapnya →
                  </div>
                </div>

              </div>
            </div>
          </Link>

          {/* SECTION 2 */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 md:p-10 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-900/10 flex items-center justify-center">
                <LuUsers className="text-blue-900 text-2xl" />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Perkembangan Rumah Sakit
                </h2>

                <p className="text-slate-500 text-sm md:text-base">
                  Transformasi dan perubahan nama Rumah Sakit
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
              Dikarenakan pada saat itu Rumah Sakit Tentara di Sukun masih dimiliki oleh Zending, maka Depkes, 
              TNI dan Zending mengadakan musyawarah dan mencapai kesepakatan sebagai berikut: 
              TNI tetap menggunakan RS Kristen/Zending di Sukun dan RST Celaket dipakai RSUD dr.Saiful Anwar 
              (dengan memberikan ganti rugi kepada TNI). Serah terima tukar menukar antara RSUD dr. Saiful Anwar 
              dengan Rumah Sakit Tentara di laksanakan pada tahun 1984, pelaksanaan serah terima tersebut dilakukan 
              oleh Kepala Rumah Sakit Tentara yang dijabat oleh Kolonel Ckm dr.Soeparno dan disaksikan oleh Gubernur Jatim: 
              Wahono serta Pangdam V/Brawijaya Mayjen TNI Syaiful Sulun. Pada tahun 1969 RST Dam VIII/Brawijaya diganti 
              namanya menjadi Rumah Sakit Soepraoen Dam VIII/Brawijaya sesuai dengan usulan Kakesdam VIII/Brawijaya (Brigjen TNI dr. Moehardono), 
              hal itu untuk mengabadikan nama Almarhum Mayor dr.Soepraoen, seorang Perwira Kesehatan yang gugur sebagai korban pertama Kesad 
              dalam perang Kemerdekaan di daerah Jawa Timur. Sejak saat itu RST Celaket berganti nama menjadi Rumah Sakit Tk. II dr. Soepraoen 
              yang berada di bawah Kesehatan Daerah Militer V/Brawijaya dengan ijin operasional sesuai dengan 
              Keputusan Menteri Kesehatan RI Nomor: YM.02.04.3.1.3469 tanggal 01 Agustus 2006. Rumah Sakit Tk. II dr. Soepraoen berdiri di atas lahan seluas 735 Ha.
            </p>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center">
            <button
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-900 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              onClick={handleReadMoreClick}
            >
              {showDetails ? "Sembunyikan Daftar" : "Baca Selengkapnya"}

              {showDetails ? (
                <LuChevronUp className="text-lg group-hover:-translate-y-1 transition-all" />
              ) : (
                <LuChevronDown className="text-lg group-hover:translate-y-1 transition-all" />
              )}
            </button>
          </div>

          {/* TABLE */}
          {showDetails && (
            <div className="mt-12 bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">

              <div className="p-6 md:p-8 border-b border-slate-200">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Daftar Kepala Rumah Sakit
                </h2>

                <p className="text-slate-500 mt-2">
                  Riwayat kepemimpinan Rumah Sakit Tk. II dr. Soepraoen
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-sm md:text-base">
                  <thead className="bg-gradient-to-r from-cyan-500 to-blue-900 text-white">
                    <tr>
                      <th className="px-5 py-4 text-left">No</th>
                      <th className="px-5 py-4 text-left">Nama</th>
                      <th className="px-5 py-4 text-left">Pangkat</th>
                      <th className="px-5 py-4 text-left">Periode</th>
                    </tr>
                  </thead>

                  <tbody>
                    {listSejarahJabatan.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-100 hover:bg-slate-50 transition-all"
                      >
                        <td className="px-5 py-4 font-semibold text-slate-700">
                          {index + 1}
                        </td>

                        <td className="px-5 py-4 font-medium text-slate-800">
                          {item.nama}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {item.pangkat}
                        </td>

                        <td className="px-5 py-4 text-slate-600">
                          {item.tahun}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default Sejarah;