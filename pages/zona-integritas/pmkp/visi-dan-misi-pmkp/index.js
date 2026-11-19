import React from "react";
import Link from "next/link";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarPMKP from "../../../../components/Navbar/NavbarPMKP";

const nilaiDasar = [
  {
    abbr: "P",
    meaning: "Proaktif dalam pencegahan",
  },
  {
    abbr: "M",
    meaning: "Melibatkan seluruh staf dalam pelaksanaan",
  },
  {
    abbr: "K",
    meaning: "Keterbukaan untuk melaporkan",
  },
  {
    abbr: "P",
    meaning: "Progresive dalam pencapaian",
  },
  {
    abbr: "R",
    meaning: "Responsif terhadap perubahan",
  },
  {
    abbr: "S",
    meaning: "Selaras dengan Visi, Misi dan tujuan",
  },
  {
    abbr: "T",
    meaning: "Terukur dalam pemantauan",
  },
  {
    abbr: "D",
    meaning: "Dapat dipertanggungjawabkan",
  },
  {
    abbr: "S",
    meaning: "Selalu berorientasi pada pengabdian",
  },
];

export default function VisiMisiPMKP() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Visi dan Misi PMKP" url="/profil/denah-rumah-sakit" />
      {/* image banner */}

      <NavbarPMKP
        active="Visi dan Misi PMKP"
        url="/zona-integritas/pmkp/visi-dan-misi-pmkp"
      />

      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/zona-integritas/pmkp/visi-dan-misi-pmkp">
              <h1 className=" text-xs font-light">Zona Integritas</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/visi-dan-misi-pmkp">
              <h1 className=" text-xs font-light">PMKP</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/visi-dan-misi-pmkp">
              <h1 className=" text-xs font-light">Visi dan Misi PMKP</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Visi dan Misi PMKP
          </h1>
          <div className="md:w-11/12 md:flex bg-gray-100 p-5">
            <div className="md:w-1/2 w-full md:mr-2 text-center rounded-lg bg-white shadow-lg border-l-8 border-blue-900 py-3 mb-2 md:mb-0">
              <h2 className="text-2xl font-semibold">VISI</h2>
              <p className="text-center px-2 italic text-xs md:text-sm">
                "Menjadikan keselamatan pasien dan Keselamatan pasien sebagai
                budaya organisasi dalam rangka mewujudkan pelayanan yang
                berkualitas serta aman, terstandar, manusiawi serta memenuhi
                harapan seluruh pelanggan"
              </p>
            </div>
            <div className="md:w-1/2 w-full md:ml-2 text-center rounded-lg bg-white shadow-lg border-l-8 border-blue-900 py-3">
              <h2 className="text-2xl font-semibold">MISI</h2>
              <ol className="text-xs md:text-sm">
                <li className="text-left px-2 py-1">
                  1. Menyelengarakan pelayanan rumah sakit sesuai standar mutu
                  pelayanan rumah sakit.
                </li>
                <li className="text-left px-2 py-1">
                  2. Membudayakan mutu dan keselamatan melalui upaya-upaya
                  pendidikan dan pengembangan yang berkelanjutan kepada seluruh
                  staf pelayanan.
                </li>
                <li className="text-left px-2 py-1">
                  3. Mengintegrasikan kegiatan pendidikan dan penelitian kedalam
                  kegiatan keselamatan pasien dan Keselamatan pasien.
                </li>
                <li className="text-left px-2 py-1">
                  4. Merancang dan melaksanakan sistem pemantauan indikator,
                  menganalisa serta merancang ulang proses pelayanan secara
                  berkelanjutan.
                </li>
                <li className="text-left px-2 py-1">
                  5. Menjadikan pasien sebagai fokus utama seluruh upaya
                  keselamatan pasien dan keselamatan dengan tidak mengabaikan
                  regulasi serta kepentikan institusi
                </li>
              </ol>
            </div>
          </div>
          <div className="md:w-11/12 md:flex md:flex-col justify-center bg-gray-100 px-5 py-5">
            <div className="w-full md:mr-2 text-center my-2 rounded-lg bg-white shadow-lg p-2">
              <h2 className="text-2xl font-semibold">TUJUAN</h2>
              <ol className="text-xs md:text-sm">
                <li className="text-left px-2 py-1">
                  1. Menghasilkan pelayanan kesehatan sesuai tuntuan masyarakat,
                  pengembangan IPTEK yang bermutu dan mampu berkompetisi di
                  tingkat nasional.
                </li>
                <li className="text-left px-2 py-1">
                  2. Menyelenggarakan tata kelola yang baik termasuk tata kelola
                  keuangan yang transparan dan akuntabel serta mendukung
                  pelayanan kesehatan, pengembangan sarana prasarana secara
                  efisien dan peningkatan SDM yang kompeten.
                </li>
                <li className="text-left px-2 py-1">
                  3. Menyelenggarakan pendidikan dan penelitian yang berbasis
                  sistem manajemen yang berkualitas.
                </li>
                <li className="text-left px-2 py-1">
                  4. Menjalin kerjasama dengan institusi atau lembaga terkait,
                  guna meningkatkan mutu pelayanan kesehatan, pendidikan dan
                  penelitian
                </li>
              </ol>
            </div>
            <div className="w-full md:mr-2 text-center my-2 rounded-lg bg-white shadow-lg p-2">
              <h2 className="text-2xl font-semibold">NILAI DASAR</h2>
              <p className="text-xs md:text-sm">
                Komite Peningkatan Mutu dan Keselamatan Pasien Rumah Sakit
                menetapkan motto kerja kedalam kedalam nilai-nilai berikut:
              </p>
              <div className="w-full mt-2">
                {nilaiDasar.map((item, index) => (
                  <div
                    className="w-full flex-col grow bg-white mr-1 p-1"
                    key={index}
                  >
                    <h1 className="text-center font-semibold text-blue-900 text-4xl">
                      {item.abbr}
                    </h1>
                    <div className="flex flex-col justify-end items-baseline w-full">
                      <p className="text-sm md:text-lg  w-full text-center font-medium">
                        {item.meaning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
