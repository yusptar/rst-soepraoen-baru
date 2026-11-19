import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerRS from "../../../../components/Banner/BannerRS";

const listLayananOnkologi = [
  {
    id: 3,
    image: "/assets/unggulan/onkologi-ginekologi-banner.jpg",
    description: "Onkologi Ginekologi",
    alt: "Onkologi Ginekologi",
    link: "/fasilitas-layanan/layanan-unggulan/onkologi-ginekologi",
  },
  {
    id: 4,
    image: "/assets/unggulan/onkologi-hematologi-banner.jpg",
    description: "Onkologi Hematologi",
    alt: "Onkologi Hematologi",
    link: "/fasilitas-layanan/layanan-unggulan/onkologi-hematologi",
  },
  {
    id: 5,
    image: "/assets/unggulan/onkologi-paru-banner.jpg",
    description: "Onkologi Paru",
    alt: "Onkologi Paru",
    link: "/fasilitas-layanan/layanan-unggulan/onkologi-paru",
  },
];

export default function BedahOnkologi() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Layanan Bedah Onkologi" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0 ">
          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unggulan/bedah-onkologi-banner.jpg"}
                alt={"Bedah Onkologi"}
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
            Layanan Bedah Onkologi
          </h1>
          <p className="mb-5">
            Klik gambar untuk informasi jenis layanan terperinci
          </p>
          <div className="mb-5 md:flex justify-center">
            <div className="flex items-center justify-center w-full ">
              <div className="grid grid-cols-3 gap-3 items-center justify-around px-4 md:w-full">
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
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
