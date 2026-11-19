import React from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import Image from "next/image";
import { listKarir } from "../../../components/List/listKarir";
import Link from "next/link";

export default function Karir() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Karir" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center mb-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center md:px-0 ">
          <div className="w-full flex justify-center items-center ">
            <div className="w-full lg:w-11/12 grid grid-cols-2 content-center justify-center">
              <div className="w-full md:p-5 p-2 flex justify-center items-center cursor-pointer bg-blue-900 text-white">
                Lihat Lowongan
              </div>
              <div
                className="w-full md:p-5 p-2 flex justify-center items-center cursor-pointer text-blue-900 hover:bg-blue-900 hover:text-white"
                onClick={() =>
                  window.open("https://forms.gle/WU2H1z5i4JfF7LHa7")
                }
              >
                Tautan Google Form
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full lg:w-11/12 content-center justify-center">
              {listKarir.length === 0 ? (
                <div className="w-full flex justify-center items-center text-center text-xl font-semibold p-5 text-blue-900">
                  -Belum Ada Lowongan Tersedia-
                </div>
              ) : (
                <div className="w-full grid grid-cols-3 place-items-center bg-slate-300 p-5 gap-2">
                  {listKarir.map((item, index) => (
                    <div
                      className="w-full md:p-5 p-2 flex flex-col justify-center items-center cursor-pointer bg-blue-900"
                      onClick={() => window.open(item.link)}
                    >
                      <h1 className="text-white font-semibold text-xl">
                        {item.nama}
                      </h1>
                      <Link href={item.link} className="text-white">
                        Lihat Lowongan
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
