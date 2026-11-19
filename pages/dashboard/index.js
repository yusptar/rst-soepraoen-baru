import React from "react";
import CariDokter from "../../components/CariDokter/CariDokter";
import Tentang from "../../components/Slider/Tentang";
import Informasi from "../../components/Slider/Informasi";
import Slider from "../../components/Slider/Slider";
import Artikel from "../../components/Grid/Artikel";
import JamPelayanan from "../../components/Grid/JamPelayanan";

const Dashboard = () => {
  return (
    <>
      {/* carousel banner promo  */}
      <div className="flex justify-center mt-3 z-10 ">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center">
          <Slider />
        </div>
      </div>
      {/* carousel banner promo  */}

      {/* cari dokter  */}
      <CariDokter />
      {/* cari dokter  */}

      <div className="flex justify-center overflow-y-auto ">
        <div className="2xl:w-4/5 w-full justify-center flex">
          <div className="relative z-10 md:w-11/12">
            <div className="absolute z-0 inset-0 flex items-center">
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="relative z-10 flex justify-center">
              <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                WAKTU PELAYANAN
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <JamPelayanan />
      </div>

      <div className="flex justify-center overflow-y-auto ">
        <div className="2xl:w-4/5 w-full justify-center flex ">
          <div className="relative z-10 md:w-11/12">
            <div className="absolute z-0 inset-0 flex items-center">
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="relative z-10 flex justify-center">
              <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                INFORMASI TERKAIT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Informasi Terkait  */}
      <Informasi />
      {/* Informasi Terkait  */}

      {/* carousel artikel */}
      <div className="my-5">
        <div className="flex flex-col items-center justify-center px-4 md:py-10 py-5 mx-auto space-y-4 rounded-sm md:w-full 2xl:w-4/5 bg-slate-300">
          <div className="w-5/6">
            <div className="tex-center md:mb-10 mb-5">
              <h1 className="text-xl md:text-3xl text-center font-medium">
                TENTANG RST
              </h1>
            </div>
            <Tentang />
          </div>
        </div>
      </div>
      {/* carousel artikel */}

      <div className="flex justify-center overflow-y-auto ">
        <div className="2xl:w-4/5 w-full justify-center flex ">
          <div className="relative z-10 md:w-11/12">
            <div className="absolute z-0 inset-0 flex items-center">
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="relative z-10 flex justify-center">
              <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                ARTIKEL KESEHATAN
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Artikel Kesehatan */}
      <div className="my-2 md:my-5">
        <Artikel />
      </div>
      {/* Artikel Kesehatan */}
    </>
  );
};

export default Dashboard;
