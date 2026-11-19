import React from "react";
import Link from "next/link";
import YouTube from "react-youtube";

const opts = {
  playerVars: {
    autoplay: 1,
  },
};

export default function PencanganKomitmen() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/zona-integritas/pembangunan-zi">
              <h1 className=" text-xs font-light">Zona Integritas</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pembangunan-zi">
              <h1 className=" text-xs font-light">
                Pencanangan Penguatan Komitmen
              </h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <div className="2xl:w-11/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-left my-0">
                Pencanangan Penguatan Komitmen
            </h1>
          </div>
          <div className="flex w-full justify-center mt-2">
                  <img
                    src="/assets/dampak-pencanangan.jpeg"
                    alt="image"
                    className=" w-full md:w-2/4"
                  />
          </div>
          <div className="flex w-full justify-center mt-2">
                  <img
                    src="/assets/wbbm/pencanangan-komitmen-1.jpeg"
                    alt="image"
                    className=" w-full md:w-3/4"
                  />
          </div>
            <div className="flex w-full justify-center mt-2">
                  <img
                    src="/assets/wbbm/pencanangan-komitmen.jpeg"
                    alt="image"
                    className=" w-full md:w-3/4"
                  />
          </div>
          {/* <div className="2xl:w-11/12 w-full my-5 text-justify ">
            <div className="flex justify-center mt-5">
              <div className="w-full md:w-2/4 mr-2 border border-gray-800 p-4">
                <p className="text-center font-bold">Kualitas pelayanan Publik Meningkat</p>
                <br></br>
                <div className="w-full md:w-4/4 mt-2">
                    <p className="text-left ">• Pelayanan dokter spesialis tepat waktu</p> 
                </div>
                <div className="w-full md:w-4/4 mt-2">
                    <p className="text-left ">• Waktu tunggu obat 30 menit – 1 jam</p>
                </div>
                <div className="w-full md:w-4/4 mt-2">
                    <p className="text-left ">• Jumlah pengaduan menurun, kepuasan publik meningkat</p>
                </div>
                <div className="w-full md:w-4/4 mt-2">
                    <p className="text-left ">• Pelayanan keperawatan lebih berkualitas</p>
                </div>
                <div className="w-full md:w-4/4 mt-2">
                    <p className="text-left ">• Jumlah kunjungan watnap & watlan meningkat</p>
                </div>
                <div className="w-full md:w-4/4 mt-2">
                    <p className="text-left ">• Tranparansi pembiayaan, mencegah korupsi dan ketersediaaan akses pelayanan</p>
                </div>
              </div>
              <div className="w-full md:w-2/4 ml-2 border border-gray-800 p-4 justify-center items-center">
                <p className="text-center font-bold">Meningkatkan kinerja dan disiplin personel, kinerja keuangan,  kinerja pelayanan</p>
              </div>
              <div className="w-full md:w-2/4 ml-2 border border-gray-800 p-4 justify-center items-center">
                <p className="text-center font-bold">Meningkatkan inisiatif dan daya kreatifitas inovasi pelayanan</p>
              </div>
              <div className="w-full md:w-2/4 ml-2 border border-gray-800 p-4 justify-center items-center">
                <p className="text-center font-bold">Meningkatkan kepercayaan diri dan soliditas anggota untuk melaksanakan tugas pokok secara optimal</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
