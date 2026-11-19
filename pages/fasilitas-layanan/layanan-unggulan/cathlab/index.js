import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "dayjs/locale/id";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("id");
import { HTTP } from "../../../../services/NetworkServices";
import JadwalDokter from "../../../../components/Schedule/JadwalDokter";

const listGallery = [
  {
    image: "/assets/unit/hemodialisa-1.jpg",
  },
  {
    image: "/assets/unit/hemodialisa-2.jpg",
  },
  {
    image: "/assets/unit/hemodialisa-3.jpg",
  },
];

export default function Cathlab() {
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
              <h1 className="text-xs font-light">Jantung Terpadu</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unit/cathlab.jpg"}
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
              Catheterization Laboratory (Cath Lab) atau disebut juga
              kateterisasi jantung dan angiografi merupakan tindakan atau
              prosedur medis kardiologi diagnostic invasive. Prosedur ini
              dilakukan dengan menggunakan sinar-X untuk membantu menampilkan
              gambaran pembuluh darah di berbagai organ tubuh. Catheterization
              Laboratory sudah dilengkapi dengan banyak peralatan canggih dan
              modern. Alat-alat tersebut akan membantu dokter lebih mudah
              melakukan prosedur diagnostik dan intervensi dengan invasi
              minimal. Melalui prosedur ini, dapat diketahui jenis tindakan yang
              sesuai bagi pasien. Sehingga dokter dapat merekomendasikan tindak
              lanjut pengobatan yang mana tergantung dari hasil angiografi.
              Tindakan termasuk pasang ring jantung, intervensi dengan balon,
              atau tindakan operasi bypass. Kateter jantung di Rumah Sakit Tk.II
              dr. Soepraoen dilakukan dan dukungan fasilitas yang moderen dan
              dokter spesialis jantung yang berpengalaman. Artinya deteksi
              jantung koroner dapat dilakukan dengan tingkat keakuratan yang
              tinggi.
            </p>
            {/* <div className="grid grid-cols-3 gap-2 mt-5">
              {listMesin.map((item) => (
                <div
                  className="flex flex-col justify-center items-center border rounded-lg py-2 px-2 text-center shadow-md"
                  key={item.id}
                >
                  <h1 className="text-2xl font-bold">{item.jumlah}</h1>
                  <p className="text-xs font-light">{item.nama}</p>
                </div>
              ))}
            </div> */}
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

          {/* <div className="md:w-11/12 grid grid-cols-3 gap-2"></div> */}
          {/* <div className="md:w-11/12 w-full">
            <h1 className="text-xl font-bold w-full my-5">Jadwal dokter :</h1>
            {listDoctors.dokter?.slice(0, 2).map((doctor, index) => (
              <JadwalDokter key={index} doctor={doctor} />
            ))}
          </div> */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
