import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarPMKP from "../../../../components/Navbar/NavbarPMKP";
import { listIndikator } from "../../../../components/List/listIndikatorMutu";
import Link from "next/link";

export default function IndikatorMutu() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Indikator Mutu" url="/profil/denah-rumah-sakit" />
      {/* image banner */}

      <NavbarPMKP
        active="Indikator Mutu"
        url="/zona-integritas/pmkp/indikator-mutu"
      />

      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className=" text-xs font-light">Zona Integritas</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className=" text-xs font-light">PMKP</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className=" text-xs font-light">Indikator Mutu</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Indikator Mutu
          </h1>
          <div className="md:w-11/12 w-full my-5 flex justify-center">
            <div className="w-full ">
              {listIndikator.map((item, index) => (
                <div key={index} className="text-center my-10">
                  <h1 className="text-3xl font-bold mb-5">{item.tahun}</h1>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-2 justify-center">
                    {item.jenis.map((jenisItem, jenisIndex) => (
                      <div key={jenisIndex} className="flex justify-center items-center">
                        <Link href={jenisItem.link} className="rounded-lg overflow-hidden shadow-md w-full">
                          <div className="bg-blue-900 hover:bg-black text-white p-4 text-center">
                            <h2 className="text-xl font-semibold mb-2">{jenisItem.nama}</h2>
                            <p className="text-sm">{jenisItem.keterangan}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  {index !== listIndikator.length - 1 && <hr className="my-10" />}
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
