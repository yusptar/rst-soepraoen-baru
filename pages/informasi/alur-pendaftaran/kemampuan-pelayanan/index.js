import React from "react";
import Image from "next/image";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarAlurPendaftaran from "../../../../components/Navbar/NavbarAlurPendaftaran";

export default function ProfilRs() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Kemampuan Pelayanan" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarAlurPendaftaran
        active="Kemampuan Pelayanan"
        url="/informasi/alur-pendaftaran/kemampuan-pelayanan"
      />
      {/* Navigation Tab */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 w-full">
            <Image
              src="/assets/kemampuan-layanan-1.jpg"
              width={1991}
              height={997}
              alt="Kemampuan Pelayanan Rumah Sakit"
              className="cursor-pointer"
            />
          </div>
          <div className="md:w-11/12 w-full mt-2">
            <Image
              src="/assets/kemampuan-layanan-2.jpg"
              width={1991}
              height={997}
              alt="Kemampuan Pelayanan Rumah Sakit"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
