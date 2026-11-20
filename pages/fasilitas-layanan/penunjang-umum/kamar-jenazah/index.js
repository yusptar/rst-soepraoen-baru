import React from "react";
import Link from "next/link";
import Image from "next/image";
import { asset } from "../../../../helpers/asset";

export default function KamarJenazah() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/penunjang-umum/kamar-jenazah">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/penunjang-umum/kamar-jenazah">
              <h1 className="text-xs font-light">Penunjang Umum</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/penunjang-umum/kamar-jenazah/">
              <h1 className="text-xs font-light">Kamar Jenazah</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unit/jenazah-banner.png")}
                alt={"Kamar Jenazah"}
                fill={true}
                sizes={"100%"}
                priority={true}
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-left">
            <p>
              Pemulasaraan jenazah adalah upaya untuk perawatan pasien setelah
              dinyatakan meninggal oleh dokter. Maksud diadakannya pelayanan ini
              untuk memuliakan manusia sebagai makhluk Tuhan yang terbaik dalam
              penciptaannya. Fasilitas kamar jenazah didukung dengan sarana yang
              memadai serta memudahkan akses keluar masuk Rumah Sakit Tk.II dr.
              Soepraoen sehingga memudahkan dalam tata laksana perawatan
              jenazah.
            </p>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
