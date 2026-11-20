import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HTTP } from "../../../../services/NetworkServices";
import { asset } from "../../../../helpers/asset";

const listGallery = [
  {
    image: asset("/assets/unit/hemodialisa-1.jpg"),
  },
  {
    image: asset("/assets/unit/hemodialisa-2.jpg"),
  },
  {
    image: asset("/assets/unit/hemodialisa-3.jpg"),
  },
];

const listManfaat = [
  {
    title: "Mendiagnosis gangguan tulang, seperti tumor tulang dan fraktur",
  },
  {
    title: "Menentukan lokasi tumor, infeksi, atau gumpalan darah.",
  },
  {
    title:
      "Sebagai bagian dari prosedur, seperti operasi, biopsi, dan terapi radiasi.",
  },
  {
    title:
      "Mendeteksi dan memantau kondisi penyakit seperti kanker, penyakit jantung, nodul paru, dan massa hati.",
  },
  {
    title: "Mendeteksi cedera internal atau pendarahan internal.",
  },
];
export default function CTScan() {
  const [listDoctors, setListDoctors] = useState([]);

  useEffect(() => {
    const fetchSpesialis = async () => {
      const res = await HTTP.GET("/spesialis/Sp.Ra");
      setListDoctors(res.data.result);
    };

    fetchSpesialis();
  }, []);

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
              <h1 className="text-xs font-light">Laboratorium</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unggulan/laboratorium-banner.jpg")}
                alt={"Laboratorium"}
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
              Pemeriksaan laboratorium adalah jenis pemeriksaan kesehatan dengan
              menggunakan sampel darah, urine, atau jaringan tubuh. Dari hasil
              pengambilan sampel ini, dokter atau ahli medis akan menganalisis
              sampel uji untuk melihat apakah hasil pemeriksaan berada dalam
              kisaran normal. Pemeriksaan ini dilakukan untuk mengetahui kondisi
              kesehatan seseorang. Prosedur dan sampel yang dimbil tergantung
              pada jenis pemeriksaan yang dijalani. Biasanya, dokter akan
              membandingkan hasil sekarang dengan hasil dari tes sebelumnya.
              Pemeriksaan laboratorium sering menjadi bagian dari pemeriksaan
              rutin untuk mencari tahu kondisi kesehatan tubuh. Lewat hasil
              pemeriksaan laboratorium ini dokter akan mendiagnosis kondisi
              medis, merencanakan atau mengevaluasi perawatan, serta memantau
              penyakit.
            </p>
          </div>
          <div className="md:w-11/12 w-full text-left">
            {/* <h1 className="text-xl font-bold w-full mt-5">Galeri :</h1> */}
          </div>
          {/* <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            {listGallery.map((item, index) => (
              <div
                className="w-full aspect-[6/3] relative rounded-md cursor-pointer mt-5 md:mt-0"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={"Unit Hemodialisa Rumah Sakit Tk.II dr. Soepraoen"}
                  priority={true}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
