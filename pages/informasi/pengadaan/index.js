import React from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import { listPlatform } from "../../../components/List/listPlatform";
import Image from "next/image";

export default function Mitra() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Pengadaan Rumah Sakit" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0 ">
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Pengadaan Rumah Sakit
          </h1>
          <p>Pengadaan dapat dilakukan melalui aplikasi berikut</p>
          <div className="w-full flex justify-center items-center">
            <div className="w-full lg:w-11/12  grid md:grid-cols-4 grid-cols-2 gap-2">
              {listPlatform.map((item, index) => {
                return (
                  <div
                    className="w-full bg-white md:p-5 p-2 rounded-lg shadow-lg mx-1 flex justify-center items-center cursor-pointer md:min-h-[15em] min-h-[8em]"
                    key={index}
                    onClick={() => window.open(item.link)}
                  >
                    <div className="w-full flex justify-center">
                      <Image
                        src={item.logo}
                        alt={item.nama}
                        width={500}
                        height={500}
                        className="w-11/12 md:w-4/5"
                      />
                    </div>
                  </div>
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
