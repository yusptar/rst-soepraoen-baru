import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ri24HoursLine } from "react-icons/ri";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarPPID from "../../../components/Navbar/NavbarPPID";
import KeteranganAlurPendaftaran from "../../../components/Table/KeteranganAlur";
import { asset } from "../../../helpers/asset";

export default function PengaduanPPID() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Pendaftaran Pasien" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <div className="flex justify-center overflow-y-auto ">
              <div className="2xl:w-4/5 w-full justify-center flex">
                <div className="relative z-10 md:w-11/12">
                  <div className="absolute z-0 inset-0 flex items-center">
                    <div className="w-full border-b border-gray-300"></div>
                  </div>
                  <div className="relative z-10 flex justify-center">
                    <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                      Pendaftaran Online
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex justify-center">
              <span className="bg-white md:px-4 text-1xl font-medium text-blue-900 text-center">
                  Daftar secara online melalui link dibawah ini
              </span>
            </div>
            <div className="flex justify-center items-start flex-col md:flex-row gap-10">
            {/* Mobile JKN */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <Image
                src={asset("/assets/qr-jkn.png")}
                alt={"epasien"}
                height={0}
                width={200}
              />
              <Link
                href="https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id&gl=US&pli=1"
                className="bg-blue-900 text-white px-5 py-2 rounded-xl mt-5 text-center"
              >
                Pendaftaran Online ( Pasien BPJS - Mobile JKN )
              </Link>
              <div className="relative z-10 flex justify-center">
                <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                  Video Tutorial Pendaftaran & Login Pengguna Aplikasi Mobile JKN
                </span>
              </div>
              <video
                src={asset("/assets/pendaftaran/mobile-jkn.mp4")}
                muted
                controls
                className="mt-4 w-full max-w-3xl rounded-xl shadow-lg"
             />
            </div>

            {/* Halo Soepraoen */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <Image
                src={asset("/assets/qr-halo-soepraoen.png")}
                alt={"epasien"}
                height={0}
                width={200}
              />

              <Link
                href="https://play.google.com/store/apps/details?id=com.rstds.halosoepraoen&pcampaignid=web_share"
                className="bg-blue-900 text-white px-5 py-2 rounded-xl mt-5 text-center"
              >
                Pendaftaran Online ( Pasien Swasta - Halo Soepraoen )
              </Link>

               <div className="relative z-10 flex justify-center">
                    <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                      Video Tutorial Login & Pengunaan Aplikasi Halo Soepraoen
                    </span>
                  </div>

              <video
                src={asset("/assets/pendaftaran/halo-soepraoen.mp4")}
                muted
                controls
                className="mt-4 w-full max-w-3xl rounded-xl shadow-lg"
              />
            </div>
          </div>
            <div className="flex justify-center overflow-y-auto " id="anjungan">
              <div className="2xl:w-4/5 w-full justify-center flex">
                <div className="relative z-10 md:w-11/12">
                  <div className="absolute z-0 inset-0 flex items-center">
                    <div className="w-full border-b border-gray-300"></div>
                  </div>
                  <div className="relative z-10 flex justify-center">
                    <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                      Pendaftaran Offline
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex justify-center">
              <span className="bg-white md:px-4 text-1xl font-medium text-blue-900 mb-5 text-center">
                  Daftar secara offline melalui alur dibawah ini
              </span>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="w-full flex gap-5 justify-center items-center bg-slate-100">
                <Image
                  src={asset("/assets/anjungan-terbaru.png")}
                  alt={"epasien"}
                  height={0}
                  width={1800}
                  className="w-full mb-5"
                />
              </div>
              <div className="w-full flex gap-5 justify-center items-center bg-slate-100">
                <Image
                  src={asset("/assets/alur-offline-update.png")}
                  alt={"epasien"}
                  height={0}
                  width={2000}
                  className="w-full mb-5"
                />
              </div>
              {/* <div className="w-full flex gap-5 justify-center items-center">
                <Image
                  src={asset("/assets/alur/rawat-jalan.jpg")}
                  alt={"epasien"}
                  height={0}
                  width={600}
                  className="w-1/3"
                />
                <div className="w-2/3 flex-row justify-center">
                  <KeteranganAlurPendaftaran />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
