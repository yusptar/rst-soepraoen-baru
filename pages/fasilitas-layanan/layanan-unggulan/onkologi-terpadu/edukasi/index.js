import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerRS from "../../../../../components/Banner/BannerRS";
import { asset } from "../../../../../helpers/asset";

const listLayananOnkologi = [
  {
    id: 1,
    image: asset("/assets/kemoterapi.jpg"),
    description: "Unit Kemoterapi",
    alt: "Unit Kemoterapi",
    link: "/fasilitas-layanan/layanan-unggulan/unit-kemoterapi",
  },
  {
    id: 2,
    image: asset("/assets/unggulan/radioterapi.jpeg"),
    description: "Radioterapi",
    alt: "Radioterapi",
    link: "/fasilitas-layanan/layanan-unggulan/radioterapi",
  },
  {
    id: 3,
    image: asset("/assets/unggulan/bedah-onkologi-banner.jpg"),
    description: "Bedah Onkologi",
    alt: "Bedah Onkologi",
    link: "/fasilitas-layanan/layanan-unggulan/bedah-onkologi",
  },
  // {
  //   id: 4,
  //   image: "/assets/unggulan/onkologi-hematologi-banner.jpg",
  //   description: "Onkologi Hematologi",
  //   alt: "Onkologi Hematologi",
  //   link: "/fasilitas-layanan/layanan-unggulan/onkologi-hematologi",
  // },
  // {
  //   id: 5,
  //   image: "/assets/unggulan/onkologi-paru-banner.jpg",
  //   description: "Onkologi Paru",
  //   alt: "Onkologi Paru",
  //   link: "/fasilitas-layanan/layanan-unggulan/onkologi-paru",
  // },
];

export default function EdukasOnkoter() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Edukasi Onkologi Terpadu" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full md:w-11/12 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0 ">
          {/* <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unggulan/onkologi-terpadu-banner.jpg")}
                alt={"Test Kesehatan Jiwa & Psikotest"}
                // fill={true}
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div> */}
          <h1 className="font-semibold md:text-4xl text-blue-900 text-center my-5 text-lg">
            INFORMASI
          </h1>
          <p className="mb-1">
            HALAMAN MASIH DALAM PROSES PENGEMBANGAN
          </p>
          {/* <div className="flex justify-center my-5">
            <Link
              href="https://bit.ly/SurveiKepuasaanMasyarakatPoliklinikOnkologiTerpaduRSSoepraoen"
              className="btn mt-1 w-80 mb-5 p-1 bg-blue-900 text-white hover:text-blue-900 hover:shadow-lg hover:bg-blue-50 border"
              target="_blank"
              >
                EDUKASI ONKOLOGI TERPADU
            </Link>
            <Link
              href="https://bit.ly/SurveiKepuasaanMasyarakatPoliklinikOnkologiTerpaduRSSoepraoen"
              className="btn mt-1 w-80 mb-5 p-0 bg-blue-900 text-white hover:text-blue-900 hover:shadow-lg hover:bg-blue-50 border"
              target="_blank"
              >
                ALUR ONKOLOGI TERPADU
            </Link>
          </div>
          <div className="mb-5 md:flex justify-center">
            <div className="flex items-center justify-center w-full ">
              <div className="md:grid md:grid-cols-3 md:gap-3 items-center justify-around md:px-4 w-full flex flex-col gap-2">
                {listLayananOnkologi.map((information, index) => (
                  <Link
                    href={information.link}
                    className="
              w-full
              rounded-md 
              mx-2 
              overflow-hidden 
              shadow-lg 
              bg-white 
              hover:bg-blue-900 
              hover:text-white 
              text-blue-900 
              hover:shadow-2xl 
              md:cursor-pointer 
              md:h-[20rem]"
                    key={index}
                  >
                    <div className="w-full aspect-[4/3] relative rounded-md cursor-pointer h-3/4">
                      <Image
                        src={information.image}
                        alt={information.alt}
                        fill={true}
                        priority={true}
                        className="object-cover rounded-t-md"
                        sizes={"100%"}
                      />
                    </div>

                    <div className="px-6 py-2 text-center h-1/4 flex flex-col justify-center">
                      <div className="font-medium xl:text-xl lg:text-base text-sm mb-2 ">
                        {information.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
