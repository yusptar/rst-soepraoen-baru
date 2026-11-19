import { useRouter } from "next/router";
import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarPMKP from "../../../../../components/Navbar/NavbarPMKP";
import BannerRS from "../../../../../components/Banner/BannerRS";

const content = {
    deskripsi:
      "Rumah Sakit Tk.II dr. Soepraoen memiliki 13 Indikator Mutu Nasional yang dilakukan pemantauan. Berikut adalah hasil pencapaian indikator mutu nasional TW III tahun 2022.",
    indikator: [
      {
        nama: "Kepatuhan Identifikasi Pasien",
        image: "/assets/pmkp/indikator/kepatuhan-identifikasi-pasien.png",
      },
      {
        nama: "Kepatuhan Upaya Pencegahan Risiko Cedera Akibat Pasien Jatuh pada Pasien Rawat Inap",
        image:
          "/assets/pmkp/indikator/kepatuhan-upaya-pencegahan-risiko-cedera-akibat-pasien-jatuh-pada-pasien-rawat-inap.png",
      },
      {
        nama: "Kepuasan Pasien dan Keluarga",
        image: "/assets/pmkp/indikator/kepuasan-pasien-dan-keluarga.png",
      },
      {
        nama: "Kepatuhan Penggunaan APD",
        image: "/assets/pmkp/indikator/kepatuhan-penggunaan-apd.png",
      },
      {
        nama: "Kepatuhan Cuci Tangan",
        image: "/assets/pmkp/indikator/kepatuhan-cuci-tangan.png",
      },
      {
        nama: "Waktu Tunggu di Rawat Jalan ≤ 180 Menit",
        image: "/assets/pmkp/indikator/waktu-tunggu-di-rawat-jalan.png",
      },
      {
        nama: "Penundaan Operasi Elektif",
        image: "/assets/pmkp/indikator/penundaan-operasi-elektif.png",
      },
      {
        nama: "Waktu Laporan Hasil Nilai Kritis Laboratorium < 30 Menit",
        image:
          "/assets/pmkp/indikator/waktu-laporan-hasil-nilai-kritis-laboratorium.png",
      },
      {
        nama: "Kepatuhan Penggunaan Formularium Nasional (FORNAS)",
        image:
          "/assets/pmkp/indikator/kepatuhan-penggunaan-formularium-nasional-fornas.png",
      },
      {
        nama: "Kepatuhan Terhadap Clinical Pathway",
        image:
          "/assets/pmkp/indikator/kepatuhan-terhadap-clinical-pathway.png",
      },
      {
        nama: "Kecepatan Respon Terhadap Komplain",
        image:
          "/assets/pmkp/indikator/kecepatan-respon-terhadap-komplain.png",
      },
  ],
};

export default function Indikator() {
  const router = useRouter();
  const { indikator } = router.query;
  const [choosenIndikator, setChoosenIndikator] = useState({
    nama: "kepatuhan identifikasi pasien",
    image: "/assets/pmkp/indikator/kepatuhan-identifikasi-pasien.png",
  });

  return (
    <>
      {/* image banner */}
      <BannerRS title="Indikator Mutu" url="/profil/denah-rumah-sakit" />
      {/* image banner */}

      <NavbarPMKP
        active="Indikator Mutu"
        url="/zona-integritas/pmkp/indikator-mutu"
      />

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className="text-xs font-light">Zona Integritas</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className="text-xs font-light">PMKP</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className="text-xs font-light">Indikator Mutu</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Indikator Mutu Nasional
            <br></br>
            2022
          </h1>
          <div className="md:w-11/12 w-full my-5 flex-col justify-center">
            <p>{content.deskripsi}</p>
            <div className="w-full grid md:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-2">
              {content.indikator.map((item, index) => (
                <label
                  htmlFor="modal-indikator"
                  className="w-full flex flex-col items-center mt-5 cursor-pointer"
                  key={index}
                  onClick={() => setChoosenIndikator(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.nama}
                    width={500}
                    height={500}
                    className="w-full h-80 object-cover"
                  />
                  <br/>
                  <h1 className="font-bold text-center ">
                    {item.nama}
                  </h1>
                  <br/>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* content */}

      {/* Modal indikator */}
      <input type="checkbox" id="modal-indikator" className="modal-toggle" />
      <label htmlFor="modal-indikator" className="modal cursor-pointer">
        <label
          className="modal-box relative bg-white **max-w-none w-full**"
          htmlFor=""
        >
          <div className="flex justify-center">
            <Image
              src={choosenIndikator.image}
              alt={choosenIndikator.nama}
              width={600}
              height={600}
              className="w-full"
            />
          </div>
          <h3 className="text-base font-semibold text-center">
            {choosenIndikator.nama}
          </h3>
        </label>
      </label>
      {/* Modal indikator */}
    </>
  );
}
