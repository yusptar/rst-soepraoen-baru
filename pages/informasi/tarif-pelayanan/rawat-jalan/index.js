import { React } from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarTarifPelayanan from "../../../../components/Navbar/NavbarTarifPelayanan";
import Link from "next/link";
import Image from "next/image";

const poliklinikList = [
  {
    name: "Poliklinik Penyakit Dalam",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-penyakit-dalam?kd_poli=INT",
    banner:"/assets/poli/poli-peny-dalam-new.png"
  },
  {
    name: "Poliklinik Jantung",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-jantung?kd_poli=JAN",
    banner:"/assets/poli/poli-jantung-new.png"
  },
  {
    name: "Poliklinik Bedah",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-bedah?kd_poli=BED",
    banner:"/assets/poli/poli-bedah-new.jpeg"
  },
  {
    name: "Poliklinik Syaraf",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-syaraf?kd_poli=SAR",
    banner:"/assets/poli/poli-saraf-new.png"
  },
  {
    name: "Poliklinik THT",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-tht?kd_poli=THT",
    banner:"/assets/poli/poli-tht-new.png"
  },
  {
    name: "Poliklinik Anak",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-anak?kd_poli=ANA",
    banner:"/assets/poli/poli-anak-new.png"
  },
  {
    name: "Poliklinik Penyakit Mata",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-anak?kd_poli=MAT",
    banner:"/assets/poli/poli-mata-new.png"
  },
  {
    name: "Poliklinik Gigi dan Mulut",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-gigi-dan-mulut?kd_poli=PTD",
    banner:"/assets/poli/poli-gigi-new.png"
  },
  {
    name: "Poliklinik Paru",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-paru?kd_poli=PAR",
    banner:"/assets/poli/poli-paru-new.png"
  },
  {
    name: "Poliklinik Kandungan",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-kandungan?kd_poli=OBG",
    banner:"/assets/poli/kandungan-cover.png"
  },
  {
    name: "Poliklinik Jiwa",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-jiwa?kd_poli=JIW",
    banner:"/assets/poli/poli-jiwa-new.jpeg"
  },
  {
    name: "Poliklinik Kulit dan Kelamin",
    link: "/fasilitas-layanan/rawat-jalan/poliklinik-kulit-dan-kelamin?kd_poli=KLT",
    banner:"/assets/poli/poli-kulkel-new.png"
  },
  {
    name: "Poliklinik Komplementer",
    link: "/fasilitas-layanan/komplementer",
    banner:"/assets/banner-komplementer.png"
  },
  {
    name: "Instalasi Rehab Medik",
    link: "/fasilitas-layanan/rawat-jalan/instalasi-rehab-medik?kd_poli=IRM",
    banner:"/assets/poli/fisio-new.png"
  },
];

export default function TindakanRawatJalan() {
  return (
    <>
      {/* Image Banner */}
      <BannerRS title="Informasi Tarif Pelayanan" />
      {/* Image Banner */}

      {/* Navigation Tab */}
      <NavbarTarifPelayanan
        active="Tindakan Rawat Jalan"
        url="/informasi/tarif-pelayanan/rawat-jalan"
      />
      {/* Navigation Tab */}

      {/* Content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <h1 className="font-semibold text-4xl text-blue-900 text-center my-5 mb-10">
                Daftar Tindakan Rawat Jalan
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {poliklinikList.map((item, index) => (
                <div
                  key={index}
                  className="shadow-md rounded-md flex flex-col items-center border-l-zinc-900 mb-7"
                >
                  <Image
                    src={item.banner}
                    alt={item.name}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-full object-cover rounded-lg mb-2"
                    priority={true}
                  />
                  <h1 className="font-semibold text-2xl text-blue-900 text-center">
                    <Link href={item.link}>
                      <button className="text-blue-900 py-2 px-4 rounded hover:text-black transition">
                        {item.name}
                      </button>
                    </Link>
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
    </>
  );
}
