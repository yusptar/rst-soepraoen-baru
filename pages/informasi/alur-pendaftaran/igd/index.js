import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarAlurPendaftaran from "../../../../components/Navbar/NavbarAlurPendaftaran";
import Image from "next/image";
import KeteranganAlurPendaftaran from "../../../../components/Table/KeteranganAlur";
import { asset } from "../../../../helpers/asset";

export default function IGD() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Informasi Alur Pendaftaran" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarAlurPendaftaran
        active="IGD"
        url="/informasi/alur-pendaftaran/igd"
      />
      {/* Navigation Tab */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 ">
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Alur Pendaftaran Pasien Instalasi Gawat Darurat
          </h1>
          <div className="w-full md:flex justify-center items-center">
            <div className="w-full md:w-3/4 lg:w-1/3 flex justify-center">
              <Image
                src={asset("/assets/alur/igd.jpg")}
                alt="Denah Rumah Sakit"
                width={3309}
                height={4678}
                className="w-11/12 md:w-4/5"
                priority={true}
              />
            </div>
            <div className="w-full md:w-3/4 lg:w-1/3 flex-row justify-center">
              <KeteranganAlurPendaftaran />
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
