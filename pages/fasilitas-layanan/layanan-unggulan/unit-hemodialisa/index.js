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
import { asset } from "../../../../helpers/asset";

const listMesin = [
  {
    id: 1,
    nama: "Mesin untuk reguler",
    jumlah: 28,
  },
  {
    id: 2,
    nama: "Mesin untuk HBSag",
    jumlah: 2,
  },
  {
    id: 3,
    nama: "Mesin untuk isolasi",
    jumlah: 2,
  },
];

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

export default function UnitHemodialisa() {
  const [listDoctors, setListDoctors] = useState([]);

  useEffect(() => {
    const fetchSpesialis = async () => {
      const res = await HTTP.GET("/spesialis/Sp.PD");
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
              <h1 className="text-xs font-light">Unit Hemodialisa</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unit/hemodialisa.png")}
                alt={"Unit Hemodialisa"}
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
            <p>
              Rumah Sakit Tk.II dr. Soepraoen melayani pasien cuci darah
              (hemodialisis) dengan fasilitas ruangan yang cukup luas, bersih,
              dan nyaman. Serta rumah sakit telah memiliki mesin HD sejumlah 32
              unit dengan rincian :
            </p>
            <div className="grid grid-cols-3 gap-2 mt-5">
              {listMesin.map((item) => (
                <div
                  className="flex flex-col justify-center items-center border rounded-lg py-2 px-2 text-center shadow-md"
                  key={item.id}
                >
                  <h1 className="text-2xl font-bold">{item.jumlah}</h1>
                  <p className="text-xs font-light">{item.nama}</p>
                </div>
              ))}
            </div>
            <h1 className="text-xl font-bold w-full mt-5">Fasilitas :</h1>
          </div>
          <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer mt-5 md:mt-0">
              <Image
                src={asset("/assets/unit/ruang-tunggu-hemodialisa.png")}
                alt={"Unit Hemodialisa"}
                // fill={true}
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer mt-5 md:mt-0">
              <Image
                src={asset("/assets/unit/mesin-ro-hemodialisa.png")}
                alt={"Unit Hemodialisa"}
                // fill={true}
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
          <div className="w-full px-4 md:px-6 lg:px-8 flex justify-center">
            <div className="w-full max-w-7xl">
              
              {/* Title */}
              <div className="w-full text-left">
                <h1 className="text-xl font-bold mt-5">Galeri :</h1>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
                {listGallery.map((item, index) => (
                  <div
                    key={index}
                    className="w-full aspect-[6/3] relative rounded-lg overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt="Unit Hemodialisa Rumah Sakit Tk.II dr. Soepraoen"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover rounded-lg hover:scale-105 transition duration-300"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
          {/* <div className="md:w-11/12 grid grid-cols-3 gap-2"></div> */}
          <div className="md:w-11/12 w-full">
            <h1 className="text-xl font-bold w-full my-5">Jadwal dokter :</h1>
            {listDoctors.dokter?.slice(0, 2).map((doctor, index) => (
              <JadwalDokter key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
