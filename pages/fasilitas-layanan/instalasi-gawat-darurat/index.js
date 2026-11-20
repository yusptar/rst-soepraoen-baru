import React from "react";
import Link from "next/link";
import Image from "next/image";
import { asset } from "../../../helpers/asset";

const listGallery = [
  {
    image: asset("/assets/unit/igd-1.jpg"),
  },
  {
    image: asset("/assets/unit/igd-2.jpg"),
  },
  {
    image: asset("/assets/unit/igd-3.jpg"),
  },
];

export default function IGD() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/rawat-inap/instalasi-gawat-darurat">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/rawat-inap/instalasi-gawat-darurat">
              <h1 className="text-xs font-light">Rawat Inap</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/rawat-inap/instalasi-gawat-darurat/">
              <h1 className="text-xs font-light">Instalasi Gawat Darurat</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unit/igd.png")}
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
              Instalasi gawat darurat di rumah sakit Tk.II dr. Soepraoen
              melayani segala bentuk tindakan yang masuk dalam kategori gawat
              darurat yang membutuhkan penanganan yang cepat dan akurat
              Instalasi gawat darurat merupakan layanan yang disediakan untuk
              kebutuhan pasien yang dalam kondisi gawat darurat dan harus segera
              dibawa ke rumah sakit untuk mendapatkan penanganan darurat yang
              cepat. Sistem pelayanan yang diberikan menggunakan sistem triage,
              dimana pelayanan diutamakan bagi pasien dalam keadaan darurat
              bukan berdasarkan antrian.
            </p>
          </div>
          <div className="md:w-11/12 w-full text-left">
            <h1 className="text-xl font-bold w-full mt-5">Galeri :</h1>
          </div>
          <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            {listGallery.map((item, index) => {
              return (
                <div
                  className="w-full aspect-[6/3] relative rounded-md cursor-pointer mt-5 md:mt-0"
                  key={index}
                >
                  <Image
                    src={item.image}
                    alt={
                      "Instalasi Gawat Darurat Rumah Sakit Tk.II dr. Soepraoen"
                    }
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
