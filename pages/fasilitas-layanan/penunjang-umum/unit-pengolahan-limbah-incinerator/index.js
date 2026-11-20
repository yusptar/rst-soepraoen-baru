import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "../../../../helpers/asset";

const listSpesifikasi = [
  {
    fitur: "Kapasitas",
    deskripsi: "300 kg/jam",
  },
  {
    fitur: "TWA Waste",
    deskripsi: "1800-G300A",
  },
  {
    fitur: "Dimensi",
    deskripsi: "4500 x 5500 mm",
  },
];

function downloadImage(path) {
  window.open(asset(path), "_blank");
}

const listGallery = [
  {
    image: asset("/assets/unit/incinerator-1.jpg"),
  },
  {
    image: asset("/assets/unit/incinerator-2.jpeg"),
  },
  {
    image: asset("/assets/unit/incinerator-3.jpeg"),
  },
];

const lisDokumen = [
  {
    nama: "Uji Emisi",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
        />
      </svg>
    ),
    link: "/assets/unit/uji-emisi.png",
  },
  {
    nama: "Ijin",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-20 h-20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
        />
      </svg>
    ),
    link: "/assets/unit/ijin-incinerator.png",
  },
];
export default function UnitPengolahanLimbah() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Penunjang Umum</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/layanan-unggulan/">
              <h1 className="text-xs font-light">
                Unit Pengolahan Limbah Incinerator
              </h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unit/incinerator.png")}
                alt={"Unit Hemodialisa"}
                fill={true}
                priority={true}
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-center">
            <p>
              Mesin penghancur limbah medis menggunakan pembakaran yang memiliki
              2 ruang pembakaran yaitu Primary chamber untuk pembakaran limbah
              padat/B3/domestik dan Secondary chamber untuk emisi gas buang
              sebelum ke cerobong. Pengujian mesin dilakukan secara rutin sesuai
              dengan baku mutu emisi udara peraturan menteri lingkungan hidup
              dan kehutanan Republik Indonesia nomor P.56.MENLHK-SETJEN/2015
              (LAMP.V tabel 2).
            </p>
            <div className="grid grid-cols-3 gap-2 mt-5">
              {listSpesifikasi.map((item, index) => (
                <div
                  className="flex flex-col justify-center items-center border rounded-lg py-2 px-2 text-center shadow-md"
                  key={index}
                >
                  <h1 className="md:text-2xl text-xs font-bold">
                    {item.deskripsi}
                  </h1>
                  <p className="text-xs font-light"> {item.fitur}</p>
                </div>
              ))}
            </div>
            <h1 className="text-xl font-bold w-full mt-5 text-left">Ijin :</h1>
          </div>

          <div className="md:w-11/12 w-full my-5 md:flex gap-3">
            {lisDokumen.map((item, index) => (
              <div
                className="w-full aspect-[6/3] relative cursor-pointer mt-5 md:mt-0 border rounded-lg flex text-center justify-center items-center h-full bg-white shadow-lg"
                key={index}
                // onClick download image
                onClick={() => downloadImage(item.link)}
              >
                {item.icon}
                <h1 className="text-xl font-bold">{item.nama}</h1>
              </div>
            ))}
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
