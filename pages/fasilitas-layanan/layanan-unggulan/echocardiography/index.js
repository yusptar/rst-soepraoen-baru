import { React } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Echocardiography() {
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
              <h1 className="text-xs font-light">Echocardiography</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unggulan/echocardiography-banner.jpg"}
                alt={"Cath Lab"}
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
            <p className="text-justify">
              Echokardiografi, atau yang dikenal juga sebagai echo jantung,
              adalah suatu metode diagnostik yang menggunakan gelombang suara
              (ultrasonik) untuk membuat gambaran visual tentang bagaimana
              jantung bekerja. Pada echo jantung, seorang teknisi medis akan
              menggunakan transduser yang diletakkan di atas dada pasien untuk
              mengirimkan gelombang suara ke dalam tubuh. Gelombang suara ini
              akan memantul kembali (echo) saat mencapai jantung, dan transduser
              akan menerima kembali gelombang suara yang dipantulkan tersebut.
              Data ini kemudian diterjemahkan menjadi gambaran yang dapat
              dianalisis oleh dokter ahli jantung. Echokardiografi memiliki
              peran yang penting dalam mendiagnosis berbagai kondisi jantung,
              seperti penyakit katup jantung, penyakit arteri koroner, gagal
              jantung, dan kelainan struktural jantung lainnya. Dengan echo
              jantung, dokter dapat mengevaluasi ukuran, bentuk, dan fungsi
              jantung secara komprehensif, termasuk gerakan katup jantung,
              aliran darah di dalam jantung, dan ketebalan dinding jantung. Echo
              jantung juga dapat membantu memantau respons terhadap pengobatan
              dan mengikuti perkembangan penyakit jantung seiring waktu. Metode
              non-invasif ini memberikan informasi yang sangat berharga dalam
              pengelolaan pasien dengan penyakit kardiovaskular, serta dapat
              membantu dokter dalam merencanakan pengobatan yang tepat untuk
              pasien dengan masalah jantung. Dengan kemampuannya yang aman dan
              tidak berisiko, echo jantung telah menjadi salah satu alat
              diagnostik utama dalam bidang kardiologi modern.
            </p>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
