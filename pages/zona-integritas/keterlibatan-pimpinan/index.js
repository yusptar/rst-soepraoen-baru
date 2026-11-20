import React from "react";
import Link from "next/link";
import YouTube from "react-youtube";
import { asset } from "../../../helpers/asset";

export default function Bidang1() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/zona-integritas/pembangunan-zi">
              <h1 className=" text-xs font-light">Bidang 4</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pembangunan-zi">
              <h1 className=" text-xs font-light">
                Keterlibatan Pimpinan
              </h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <div className="2xl:w-11/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-left my-0">
              Keterlibatan Pimpinan
            </h1>
          </div>
          <div className="2xl:w-11/12 w-full my-5 text-justify">
            <div className="md:w-3/4 w-full">
              {/* <p className=" text-sm">{data.deskripsi} </p> */}
              <p className="text-sm">
                Dalam merencanakan kegiatan utama satuan, Karumkit selalu terlibat dalam proses perencanaan, kebijakan internal, monitoring dan evaluasi internal guna perbaikan kinerja satuan
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <div className="w-full md:w-2/4 mr-2">
                <img
                    src={asset("/assets/1-bidang4.jpeg")}
                    alt="image"
                    className=" w-full auto"
                />
                <hr className="my-2" />
                <p className="text-center font-semibold">Rapat Evaluasi dengan Komite Medik</p>
              </div>
              <div className="w-full md:w-2/4 ml-2">
                <img
                    src={asset("/assets/2-bidang4.jpeg")}
                    alt="image"
                    className=" w-full auto"
                />
                <hr className="my-2" />
                <p className="text-center font-semibold">Rapat Evaluasi Anggaran</p>
              </div>
              <div className="w-full md:w-2/4 ml-2">
                <img
                    src={asset("/assets/3-bidang4.jpeg")}
                    alt="image"
                    className=" w-full auto"
                />
                <hr className="my-2" />
                <p className="text-center font-semibold">Rapat Evaluasi dengan Dewan Pengawas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
