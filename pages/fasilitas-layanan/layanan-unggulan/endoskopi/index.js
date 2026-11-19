import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const listJenisEndoskopi = [
  {
    id: 1,
    title: "Gastroskopi",
    description:
      "Jenis endoskopi ini bertujuan untuk memeriksa kerongkongan, lambung, atau bagian atas usus kecil.",
  },
  {
    id: 2,
    title: "Kolonoskopi ",
    description: "untuk melihat bagian dalam dari usus besar.",
  },
  {
    id: 3,
    title: "Bronkoskopi ",
    description:
      "digunakan untuk melihat saluran pernapasan. Hal ini dilakukan ketika seseorang mengalami batuk yang tidak kunjung membaik atau batuk darah.",
  },
  {
    id: 4,
    title: "Histeroskopi",
    description:
      "adalah jenis endoskopi untuk ke dalam rahim (uterus) jika seorang wanita mengalami masalah seperti menstruasi yang tidak teratur atau mengalami  keguguran lebih dari satu kali.",
  },
  {
    id: 5,
    title: "Cystoscopy ",
    description:
      "digunakan untuk melihat ke dalam kandung kemih jika seseorang mengalami masalah seperti inkontinensia urine atau kencing darah.",
  },
  {
    id: 6,
    title: "Sigmoidoskopi ",
    description:
      "fleksibel merupakan endoskopi untuk melihat usus bagian bawah.",
  },
  {
    id: 7,
    title: "USG endoskopi",
    description:
      "dilakukan untuk mengambil gambar organ dalam, seperti pankreas, dan mengambil sampel jaringan (biopsi).",
  },
  {
    id: 8,
    title: "Laparoskopi",
    description: "untuk melihat kondisi di dalam perut.",
  },
  {
    id: 9,
    title: "Artroskopi ",
    description:
      "sering dilakukan untuk membantu operasi untuk memperbaiki kerusakan di dalam sendi.",
  },
];

export default function Endoskopi() {
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
              <h1 className="text-xs font-light">Endoskopi</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unggulan/endoskopi-banner.jpg"}
                alt={"Endoskopi"}
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
              Istilah 'endoskopi' sebenarnya adalah payung besar bagi beragam
              pemeriksaan yang dilakukan dengan memasukkan alat khusus ke dalam
              tubuh pasien. Prosedur ini dilakukan untuk melihat kondisi organ
              tubuh tertentu. Prosedur ini dapat digunakan untuk mendiagnosis
              berbagai macam penyakit. Selain itu, endoskopi juga menjadi
              pemeriksaan penunjang beberapa tindakan medis, seperti pengambilan
              sampel jaringan untuk biopsi dan operasi. Endoskopi bukan prosedur
              pembedahan. Prosesnya dilakukan dengan memasukkan sebuah tabung
              fleksibel yang dilengkapi dengan kamera dan lampu. Prosedur
              umumnya membuat pasien merasa tidak nyaman, namun dokter bisa
              menggunakan obat bius sebelum melakukannya. Melalui endoskopi,
              dokter dapat melihat kondisi organ yang diperiksa supaya lebih
              jelas.
            </p>
            <p className="text-justify mb-5">
              Endoskopi dibagi atas beberapa jenis berdasarkan organ tubuh yang
              mengalami masalah kesehatan. Jenis endoskopi ini digunakan untuk
              menyelidiki gejala di organ tubuh tertentu, yaitu: 
            </p>
            <ul className="list-disc list-inside text-justify mb-5">
              {listJenisEndoskopi.map((item) => {
                return (
                  <li className="mb-1" key={item.id}>
                    <b>{item.title}</b> {item.description}
                  </li>
                );
              })}
            </ul>
            <h5 className="text-justify mb-5 text-lg font-semibold">
              Pelaksanaan Prosedur Endoskopi
            </h5>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
