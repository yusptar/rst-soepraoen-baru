import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "../../../../helpers/asset";

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
              <h1 className="text-xs font-light">Layanan Treadmill</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unggulan/treadmill-banner.jpg")}
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
              Layanan treadmill di rumah sakit adalah salah satu metode
              pengujian fungsional yang penting dalam bidang kardiologi. Dalam
              pengujian treadmill, pasien akan melakukan latihan fisik dengan
              berjalan atau berlari di atas treadmill yang dilengkapi dengan
              berbagai sensor untuk memantau fungsi jantung dan sistem
              kardiovaskular pasien. Proses pengujian dilakukan di bawah
              pengawasan tenaga medis yang berpengalaman, dengan pemantauan
              terus-menerus terhadap tekanan darah, detak jantung,
              elektrokardiogram (EKG), serta pengamatan klinis secara
              keseluruhan. Pengujian treadmill di rumah sakit umumnya digunakan
              untuk memeriksa kondisi pasien yang mengalami gejala atau risiko
              penyakit jantung, seperti nyeri dada, sesak napas, atau faktor
              risiko seperti hipertensi atau diabetes. Pengujian treadmill dapat
              memberikan informasi penting tentang kinerja jantung selama
              latihan fisik, termasuk kapasitas aerobik, detak jantung maksimal,
              dan tanda-tanda adanya iskemia atau ketidakcukupan aliran darah ke
              otot jantung. Hasil pengujian treadmill dapat membantu dokter
              dalam mendiagnosis penyakit jantung, mengevaluasi risiko pasien
              terhadap penyakit jantung, serta merencanakan program rehabilitasi
              atau pengelolaan penyakit jantung yang sesuai untuk pasien.
            </p>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
