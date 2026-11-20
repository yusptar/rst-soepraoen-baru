import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerRS from "../../../../components/Banner/BannerRS";
import { asset } from "../../../../helpers/asset";

const listLayananJantungTerpadu = [
  {
    id: 1,
    image: asset("/assets/unggulan/cath-lab.jpg"),
    description: "Cathlab",
    alt: "Cathlab",
    link: "/fasilitas-layanan/layanan-unggulan/cathlab",
  },
  {
    id: 2,
    image: asset("/assets/unggulan/echocardiography-banner.jpg"),
    description: "Echocardiography",
    alt: "Echocardiography",
    link: "/fasilitas-layanan/layanan-unggulan/echocardiography",
  },
  {
    id: 3,
    image: asset("/assets/unggulan/treadmill-banner.jpg"),
    description: "Layanan Treadmill",
    alt: "Layanan Treadmill",
    link: "/fasilitas-layanan/layanan-unggulan/layanan-treadmill",
  },
];

export default function JantungTerpadu() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Layanan Jantung Terpadu" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0 ">
          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unggulan/cath-lab.jpg")}
                alt={"Test Kesehatan Jiwa & Psikotest"}
                // fill={true}
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Layanan Jantung Terpadu
          </h1>
          <p className="mb-5">
            Klik gambar untuk informasi jenis layanan terperinci
          </p>
          <div className="mb-5 md:flex justify-center">
            <div className="flex items-center justify-center w-full ">
              <div className="md:grid md:grid-cols-3 md:gap-3 items-center justify-around md:px-4 w-full flex flex-col gap-2">
                {listLayananJantungTerpadu.map((information, index) => (
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
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
