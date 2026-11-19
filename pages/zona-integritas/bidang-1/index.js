import React from "react";
import Link from "next/link";
import { FaBullhorn, FaHandshake } from "react-icons/fa";

const listMenu = [
  {
    id: 1,
    title: "Pencanangan Zona Integritas secara digital",
    icon: <FaHandshake className="text-white" size={28} />, 
    link: "https://rssoepraoen.com/pakta-integritas/",
    color: "bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-400",
    content:
      "Dokumen pencanangan dan penandatanganan pakta integritas secara digital merupakan simbol awal komitmen bersama seluruh jajaran untuk mewujudkan wilayah bebas dari korupsi dan wilayah birokrasi bersih melayani."
  },
  {
    id: 2,
    title: "Pencanangan Penguatan Komitmen",
    icon: <FaBullhorn className="text-white" size={28} />, 
    link: "/zona-integritas/pencanangan-komitmen",
    color: "bg-gradient-to-br from-blue-400 via-indigo-600 to-purple-700",
    content:
      "Bentuk penguatan integritas dan sinergi antar unit kerja dalam rangka menyamakan visi dan misi untuk membangun budaya kerja yang profesional, akuntabel, dan bebas dari KKN."
  },
];

export default function Bidang1() {
  return (
    <div className="flex justify-center my-4">
      <div className="w-11/12 2xl:w-4/5">
        {/* Breadcrumb */}
        <div className="flex text-sm text-gray-500 mt-5 gap-1">
          <Link href="/zona-integritas/all-bidang">
            <span className="hover:underline">ZI</span>
          </Link>
          <span>/</span>
          <Link href="/zona-integritas/bidang-1">
            <span className="hover:underline">Perubahan Budaya Kerja</span>
          </Link>
        </div>

        {/* Title */}
        <div className="my-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Perubahan Budaya Kerja
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Komitmen dan langkah nyata dalam membangun budaya kerja integritas
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-8">
          {listMenu.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-100 p-5 pb-10 flex flex-col items-center text-center ${item.color}`}
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-sm text-white mt-2">
                {item.content}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}