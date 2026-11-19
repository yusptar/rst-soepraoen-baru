import React from "react";
import Link from "next/link";
import Image from "next/image";

const listGallery = [
  {
    image: "/assets/unit/gizi-1.jpg",
  },
  {
    image: "/assets/unit/gizi-2.jpg",
  },
  {
    image: "/assets/unit/gizi-3.jpg",
  },
];

export default function InstalasiGizi() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/penunjang-umum/instalasi-gizi">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/penunjang-umum/instalasi-gizi">
              <h1 className="text-xs font-light">Penunjang Umum</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/penunjang-umum/instalasi-gizi/">
              <h1 className="text-xs font-light">Instalasi Gizi</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unit/gizi-banner.png"}
                alt={"Unit Hemodialisa"}
                fill={true}
                sizes={"100%"}
                priority={true}
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-left">
            <p>
              Pelayanan gizi rumah sakit adalah serangkaian proses kegiatan
              pelayanan gizi yang berkesinambungan dimulai dari perencanaan diet
              hingga evaluasi rencana diet di ruang rawat inap. Ruang lingkup
              pelayanan Unit Gizi yakni : pelayanan gizi, rawat jalan, pelayanan
              gizi rawat inap, penyelenggaraan makanan. Unit gizi memberikan
              pelayanan kepada pasien rawat jalan atau rawat inap dengan
              membantu mencari solusi masalah gizinya melalui nasehat gizi
              mengenai :
            </p>
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>Jumlah asupan makanan yang sesuai</li>
              <li>Jenis diet yang tepat,</li>
              <li>Jadwal dan cara makan yang sesuai.</li>
            </ul>
          </div>
          <div className="md:w-11/12 w-full text-left">
            <h1 className="text-xl font-bold w-full mt-5">Galeri :</h1>
          </div>
          <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            {listGallery.map((item, index) => {
              return (
                <div
                  className="w-full aspect-[6/3] relative rounded-md cursor-pointer"
                  key={index}
                >
                  <Image
                    src={item.image}
                    alt={"Instalasi Gizi Rumah Sakit Tk.II dr. Soepraoen"}
                    fill={true}
                    sizes={"100%"}
                    priority={true}
                    className="object-cover rounded-md"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
