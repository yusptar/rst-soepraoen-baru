import React from "react";
import Link from "next/link";
import BannerRS from "../../../../components/Banner/BannerRS";
import Image from "next/image";
import NavbarPMKP from "../../../../components/Navbar/NavbarPMKP";

export default function StrukturOrganisasiPMKP() {
  return (
    <>
      {/* image banner */}
      <BannerRS
        title="Struktur Organisasi PMKP"
        url="/profil/denah-rumah-sakit"
      />
      {/* image banner */}

      {/* NavbarPMKP */}
      <NavbarPMKP
        active="Struktur Organisasi PMKP"
        url="/zona-integritas/pmkp/struktur-organisasi-pmkp"
      />
      {/* NavbarPMKP */}

      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/zona-integritas/pmkp/struktur-organisasi-pmkp">
              <h1 className=" text-xs font-light">Zona Integritas</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/struktur-organisasi-pmkp">
              <h1 className=" text-xs font-light">PMKP</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/struktur-organisasi-pmkp">
              <h1 className=" text-xs font-light">Struktur Organisasi PMKP</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Struktur Organisasi PMKP
          </h1>
          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[8/4] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/pmkp/struktur-komite-mutu.png"}
                alt={"Struktur Komite Mutu"}
                width="1000"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
