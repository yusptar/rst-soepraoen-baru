import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HTTP } from "../../../../services/NetworkServices";

export default function OnkologiGinekologi() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Layanan Unggulan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/layanan-unggulan/">
              <h1 className="text-xs font-light">Onkologi Ginekologi</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unggulan/onkologi-ginekologi-banner.jpg"}
                alt={"Onkologi Ginekologi"}
                // fill={true}
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-center">
            <p className="text-justify mb-5">
              Dokter kandungan subspesialis onkologi adalah dokter yang memiliki
              keahlian khusus dalam menangani tumor dan kanker pada organ
              reproduksi wanita. Hal ini meliputi tumor dan kanker yang
              menyerang rahim, indung telur (ovarium), leher rahim (serviks),
              vagina, dan vulva. Dokter kandungan subspesialis onkologi adalah
              dokter yang mendalami ilmu ginekologi onkologi. Onkologi adalah
              cabang ilmu kedokteran yang fokus pada penyakit kanker dan
              pengobatannya, sedangkan ginekologi merupakan cabang ilmu
              kedokteran yang berfokus pada kesehatan organ reproduksi wanita.
              Dokter kandungan subspesialis onkologi memiliki gelar Spesialis
              Obstetri-Ginekologi Konsultan Ginekologi Onkologi atau disingkat
              Sp.OG (K)Onk. Untuk mendapat gelar tersebut, seorang dokter umum
              harus menyelesaikan program studi dokter spesialis obstetri dan
              ginekologi terlebih dahulu, lalu menempuh pendidikan
              subspesialisasi onkologi selama beberapa tahun.
            </p>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
