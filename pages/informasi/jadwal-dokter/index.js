import React from "react";
import Image from "next/image";
import Link from "next/link";
import BannerRS from "../../../components/Banner/BannerRS";
import { listSpesialisGrouped } from "../../../components/List/listSpesialisGroup";

export default function JadwalDokter() {
  return (
    <>
      <BannerRS title="Jadwal Dokter" />

      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 px-5 md:px-0">
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5 mb-7">
            Jadwal Dokter Spesialis
          </h1>

          {listSpesialisGrouped.map((group, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-xl md:text-1xl font-bold text-blue-900 mb-4">
                {group.kategori}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.items.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="group flex flex-col justify-start items-center rounded-xl border border-transparent bg-white p-5 min-h-[150px] w-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      <Image
                        src={item.icon}
                        alt="icon spesialis"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <h4 className="text-center text-sm md:text-lg font-semibold mt-4 text-blue-900 group-hover:text-black transition-colors duration-500">
                      {item.nama}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
