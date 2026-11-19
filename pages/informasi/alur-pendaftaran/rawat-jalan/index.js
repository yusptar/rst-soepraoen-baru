import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarAlurPendaftaran from "../../../../components/Navbar/NavbarAlurPendaftaran";
import Image from "next/image";
import KeteranganAlurPendaftaran from "../../../../components/Table/KeteranganAlur";

export default function RawatJalan() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Informasi Alur Pendaftaran" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarAlurPendaftaran
        active="Rawat Jalan"
        url="/informasi/alur-pendaftaran/rawat-jalan"
      />
      {/* Navigation Tab */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 ">
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Alur Pendaftaran Pasien Rawat Jalan
          </h1>
          <div className="w-full md:flex justify-center items-center">
            <div className="w-full md:w-3/4 lg:w-1/3 flex justify-center">
              <Image
                src="/assets/alur/rawat-jalan.jpg"
                alt="Alur Pendaftaran Pasien Rawat Jalan"
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
