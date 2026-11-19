import { React } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OnkologiHematologi() {
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
              <h1 className="text-xs font-light">Onkologi Hematologi</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unggulan/onkologi-hematologi-banner.jpg"}
                alt={"Onkologi Hematologi"}
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
              Ahli onkologi hematologi adalah dokter yang berspesialisasi dalam
              mengobati kanker darah. Mereka memiliki pelatihan ekstra dalam
              sistem darah, sistem limfatik, sumsum tulang, dan kanker. Istilah
              “ahli hematologi onkologi” berasal dari dua jenis dokter yang
              berbeda. Ahli hematologi mengkhususkan diri dalam mendiagnosis dan
              mengobati penyakit darah. Ahli onkologi mengkhususkan diri dalam
              mendiagnosis dan mengobati kanker. Ahli onkologi hematologi
              berspesialisasi dalam keduanya. Seseorang mungkin menemui ahli
              onkologi hematologi jika memiliki dugaan atau mengidap kanker
              darah.
            </p>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
