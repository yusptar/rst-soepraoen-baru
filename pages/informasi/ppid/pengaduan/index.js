import { React } from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarPPID from "../../../../components/Navbar/NavbarPPID";
import Image from "next/image";
import Link from "next/link";
import { Ri24HoursLine } from "react-icons/ri";
import { asset } from "../../../../helpers/asset";

export default function PengaduanPPID() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Pejabat Pengelola Informasi dan Dokumentasi (PPID)" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarPPID active="Pengaduan" url="/informasi/ppid/pengaduan" />
      {/* Navigation Tab */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
              Pengaduan
            </h1>
            <div className="flex justify-center items-center ">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <Image
                  src={asset("/assets/pengaduan.png")}
                  alt={"epasien"}
                  height={0}
                  width={200}
                />
                <Link
                  href="/zona-integritas/pengaduan-masyarakat"
                  className="bg-blue-900 text-white px-5 py-2 rounded-md mt-5"
                >
                  Pengaduan
                </Link>
              </div>
            </div>
            <div className="w-full flex -100 justify-between mt-10 bg-blue-200 p-5">
              <div className="flex justify-between items-center ">
                <Ri24HoursLine className="text-2xl text-black mr-1" size={35} />
                <Link
                  className="flex flex-col justify-center items-start"
                  href={"tel:08113277300"}
                >
                  <h5 className="text-md font-bold text-blue-900">
                    Layanan Gawat Darurat
                  </h5>
                  <h5 className="md:text-base 2xl:text-xl font-bold text-blue-900">
                    0811-3277-300
                  </h5>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-10 h-10 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                <Link
                  className="flex flex-col justify-center items-start"
                  href={"tel:08113494390"}
                >
                  <h5 className="text-md font-bold text-blue-900">
                    Pusat Informasi
                  </h5>
                  <h5 className="md:text-base 2xl:text-xl font-bold text-blue-900">
                    0811-3229-9222
                  </h5>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-10 h-10 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                <Link
                  className="flex flex-col justify-center items-start"
                  href={"tel:08113494390"}
                >
                  <h5 className="text-md font-bold text-blue-900">
                    Pengaduan Layanan
                  </h5>
                  <h5 className="md:text-base 2xl:text-xl font-bold text-blue-900">
                    0811-3494-390
                  </h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
