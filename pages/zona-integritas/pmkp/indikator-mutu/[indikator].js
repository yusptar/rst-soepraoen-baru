import { useRouter } from "next/router";
import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarPMKP from "../../../../components/Navbar/NavbarPMKP";
import BannerRS from "../../../../components/Banner/BannerRS";

const content = {
  deskripsi:
    "Rumah Sakit TK.II dr. Soepraoen mempunyai 11 indikator mutu prioritas yang dilakukan pemantauan. Berikut adalah hasil pencapaian indikator mutu prioritas di Rumah Sakit Tk.II dr. Soepraoen TW III tahun 2022.",
  indikator: [
    {
      nama: "Kepatuhan Hand Hygiene",
      image: "/assets/pmkp/indikator/prioritas-hand-hygiene.png",
    },
    {
      nama: "Pemberian Label High Alert Untuk Obat Sitostatika",
      image:
        "/assets/pmkp/indikator/pemberian-label-high-alert-untuk-obat-sitostatika.png",
    },
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
      nama: "Kelengkapan Hand Over Pasien",
      image: "/assets/pmkp/indikator/kelengkapan-hand-over-pasien.png",
    },
    {
      nama: "Kepatuhan Pemberian Site Marking",
      image: "/assets/pmkp/indikator/kepatuhan-pemberian-site-marking.png",
    },
    {
      nama: "Risiko terjadinya Extravasasi",
      image: "/assets/pmkp/indikator/risiko-terjadinya-extravasasi.png",
    },
    {
      nama: "Kepatuhan Protokol Pelaksanaan Kemoterapi",
      image:
        "/assets/pmkp/indikator/kepatuhan-protokol-pelaksanaan-kemoterapi.png",
    },
    {
      nama: "Ketepatan Kalibrasi Alat Kesehatan",
      image: "/assets/pmkp/indikator/ketepatan-kalibrasi-alat-kesehatan.png",
    },
    {
      nama: "Ketepatan waktu penanganan kerusakan hardware & jaringan ≤ 1 jam",
      image:
        "/assets/pmkp/indikator/ketepatan-waktu-penanganan-kerusakan-hardware-jaringan.png",
    },
    {
      nama: " Ketepatan Pengembalian BRM Lengkap ≤2 x 24 jam",
      image: "/assets/pmkp/indikator/ketepatan-pengembalian-brm-lengkap.png",
    },
  ],
};

export default function Indikator() {
  const router = useRouter();
  const { indikator } = router.query;
  const [choosenIndikator, setChoosenIndikator] = useState({
    nama: "kepatuhan hand hygiene",
    image: "/assets/pmkp/indikator/prioritas-hand-hygiene.png",
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
            Indikator Mutu Prioritas
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
