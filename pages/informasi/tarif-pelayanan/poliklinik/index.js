import React from "react";
import { listPoliklinik } from "../../../../components/List/listPoliklinik";
import Image from "next/image";
import BannerRS from "../../../../components/Banner/BannerRS";
import Link from "next/link";

export default function Mitra() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Tarif Pelayanan Poliklinik" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0 ">
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Tarif Pelayanan Poliklinik
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-full lg:w-11/12  grid md:grid-cols-4 grid-cols-2 gap-2">
              {listPoliklinik.map((item, index) => {
                return (
                  <Link
                    className="w-full bg-blue-900 md:p-5 p-2 rounded-lg shadow-lg mx-1 flex justify-center items-center cursor-pointer md:min-h-[10em] min-h-[8em] text-white font-bold"
                    key={index}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
