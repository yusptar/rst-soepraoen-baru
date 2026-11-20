import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiArchiveLine,
  RiSplitCellsHorizontal,
  RiArrowLeftDownLine,
  RiInboxArchiveLine,
} from "react-icons/ri";

import { GiWashingMachine } from "react-icons/gi";
import {
  MdDryCleaning,
  MdOutlineIron,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import { asset } from "../../../../helpers/asset";
const listLayanan = [
  {
    nama: "Pengumpulan linen",
    icon: <RiArchiveLine className="text-2xl text-gray-500" />,
  },
  {
    nama: "Pemilahan linen infeksius dan non-infeksius",
    icon: <RiSplitCellsHorizontal className="text-2xl text-gray-500" />,
  },
  {
    nama: "Penerimaan",
    icon: <RiArrowLeftDownLine className="text-2xl text-gray-500" />,
  },
  {
    nama: "Pencucian linen",
    icon: <GiWashingMachine className="text-2xl text-gray-500" />,
  },
  {
    nama: "Pengeringan linen",
    icon: <MdDryCleaning className="text-2xl text-gray-500" />,
  },
  {
    nama: "Penyetrikaan",
    icon: <MdOutlineIron className="text-2xl text-gray-500" />,
  },
  {
    nama: "Penyimpanan",
    icon: <RiInboxArchiveLine className="text-2xl text-gray-500" />,
  },
  {
    nama: "Pendistribusian",
    icon: <MdOutlineDeliveryDining className="text-2xl text-gray-500" />,
  },
];

const listGallery = [
  {
    image: asset("/assets/unit/laundry-1.jpg"),
  },
  {
    image: asset("/assets/unit/laundry-2.jpg"),
  },
  {
    image: asset("/assets/unit/laundry-3.jpg"),
  },
];

export default function UnitLaundry() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/penunjang-umum/unit-laundry">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/penunjang-umum/unit-laundry">
              <h1 className="text-xs font-light">Penunjang Umum</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/penunjang-umum/unit-laundry/">
              <h1 className="text-xs font-light">Unit Laundry</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unit/laundry-banner.png")}
                alt={"Unit Laundry"}
                fill={true}
                sizes={"100%"}
                priority={true}
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-left">
            <p>
              Pelayanan laundry di Rumah Sakit Tk.II dr.Soepraoen dilengkapi
              dengan sarana penunjang yaitu mesin cuci 28 kg dan 20 kg, mesin
              mengering, dan mesin setrika roll laundry. Pelayanan laundry :
            </p>
          </div>
          <div className="md:w-11/12 w-full grid grid-cols-2 md:grid-cols-4 gap-2">
            {listLayanan.map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center gap-2 my-2 h-full bg-white border shadow-md p-2"
              >
                <div className="w-1/4">{item.icon}</div>
                <p className="text-xs font-light w-3/4">{item.nama}</p>
              </div>
            ))}
          </div>
          <div className="md:w-11/12 w-full text-left">
            <h1 className="text-xl font-bold w-full mt-5">Galeri :</h1>
          </div>
          <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            {listGallery.map((item, index) => (
              <div
                className="w-full aspect-[6/3] relative rounded-md cursor-pointer"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={"Unit Laundry"}
                  fill={true}
                  sizes={"100%"}
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
