import React from "react";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";

const listMenu = [
  {
    id: 1,
    title: "E-Recruitment",
    icon: <FaUserTie className="text-white" size={28} />, 
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdyckvgGyI9VfkpF7O8_M2-RkD_2v1ZS3EX3WhJsBkCMFumDw/viewform",
    color: "bg-gradient-to-br from-yellow-500 via-orange-500 to-amber-700",
    content:
      "Wujud transparansi dan akuntabilitas dalam proses rekrutmen tenaga kerja yang terbuka dan bebas dari KKN, sehingga mendukung terciptanya sistem manajemen SDM yang profesional dan berbasis merit."
  }
];

export default function Bidang3() {
  return (
    <div className="flex justify-center my-4">
      <div className="w-11/12 2xl:w-4/5">
        {/* Breadcrumb */}
        <div className="flex text-sm text-gray-500 mt-5 gap-1">
          <Link href="/zona-integritas/all-bidang">
            <span className="hover:underline">ZI</span>
          </Link>
          <span>/</span>
          <Link href="/zona-integritas/bidang-2">
            <span className="hover:underline">Penataan Sistem Manajemen SDM</span>
          </Link>
        </div>

        {/* Title */}
        <div className="my-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Penataan Sistem Manajemen SDM
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Transparansi dan struktur kerja dalam pelayanan publik
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
          {listMenu.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 transition-duration-300 p-5 pb-10 flex flex-col items-center text-center ${item.color}`}
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

