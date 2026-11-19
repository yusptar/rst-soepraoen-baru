import React from "react";
import Link from "next/link";
import Image from "next/image";
import { listFasilitasUmum } from "../../../components/List/listFasilitasUmum";

export default function FasilitasUmum() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/layanan-umum">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/layanan-umum">
              <h1 className="text-xs font-light">Fasilitas Umum</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[8/4] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unit/fasum.png"}
                alt={"Fasilitas Umum"}
                width="1000"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-center">
            <p>
              Demi menunjang pelayanan kesehatan yang lebih baik, Rumah Sakit
              Tk.II dr. Soepraoen menyediakan berbagai fasilitas umum guna
              meningkatkan kualitas pelayanan serta meningkatkan kepuasan
              pengunjung. Fasilitas umum yang disediakan antara lain:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-5">
              {listFasilitasUmum.map((item, index) => (
                <div
                  className="flex flex-col justify-evenly items-center border rounded-lg py-2 px-2 text-center shadow-md"
                  key={index}
                >
                  {item.icon}
                  <h1 className="md:text-base text-xs font-bold">
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
