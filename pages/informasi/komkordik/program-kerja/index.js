import React from "react";
import Image from "next/image";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarTentang from "../../../../components/Navbar/NavbarKomkordik";

export default function ProfilRs() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Data Dasar" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarTentang active="Program Kerja" url="/informasi/komkordik/program-kerja" />
      {/* Navigation Tab */}

      <section className="flex items-center h-full p-1">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-blue-900">
                    <span className="sr-only">Error</span>Maaf
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">
                    Halaman masih dalam proses pengembangan
                </p>
                </div>
            </div>
        </section>

      {/* content */}
      {/* <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 w-full">
            <Image
              src="/assets/banner-profile.jpeg"
              width={1991}
              height={997}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div> */}
      {/* content */}
    </>
  );
}
