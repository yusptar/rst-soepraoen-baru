import { React } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OnkologiParu() {
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
              <h1 className="text-xs font-light">Onkologi Paru</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unggulan/onkologi-paru-banner.jpg"}
                alt={"Onkologi Paru"}
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
              Penanganan kanker paru-paru sangat tergantung kondisi kesehatan
              pasien, jenis kanker, tahap perkembangan kanker, dan preferensi
              pasien. Dokter atau pasien mungkin dapat memutuskan untuk tidak
              menjalani pengobatan kanker paru-paru apa pun, terutama jika
              merasa potensi manfaatnya tidak sebanding dengan risiko efek
              sampingnya. Dalam kasus seperti itu, dokter mungkin akan
              menganjurkan penanganan yang bertujuan mengurangi gejala kanker
              paru-paru.
            </p>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
