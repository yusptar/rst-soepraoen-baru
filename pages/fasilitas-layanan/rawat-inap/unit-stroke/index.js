import React from "react";
import Link from "next/link";
import Image from "next/image";

const listGallery = [
  {
    image: "/assets/unit/stroke-1.jpg",
  },
  {
    image: "/assets/unit/stroke-2.jpg",
  },
  {
    image: "/assets/unit/stroke-3.jpg",
  },
];

export default function UnitStroke() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/rawat-inap/unit-stroke">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/rawat-inap/unit-stroke">
              <h1 className="text-xs font-light">Rawat Inap</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/rawat-inap/unit-stroke/">
              <h1 className="text-xs font-light">Unit Penanganan Stroke</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unit/stroke-banner.png"}
                alt={"Unit Stroke"}
                fill={true}
                sizes={"100%"}
                priority={true}
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-left">
            <p>
              Ruang Unit Stroke adalah ruang khusus penanganan stroke akut dan
              rehabilitasi dini diruang perawatan khusus. Dilayani oleh Dokter
              Spesialis Profesional dan perawat yang dibekali kemampuan
              perawatan stroke.
            </p>
          </div>
          <div className="md:w-11/12 w-full text-left">
            <h1 className="text-xl font-bold w-full mt-5">Galeri :</h1>
          </div>
          <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            {listGallery.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full aspect-[6/3] relative rounded-md cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={
                      "Unit Penanganan Stroke Rumah Sakit Tk.II dr. Soepraoen"
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
