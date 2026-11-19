import React from "react";
import Link from "next/link";
import { FaHandsHelping } from "react-icons/fa";

const listMenu = [
  {
    id: 1,
    title: "Pelayanan Publik",
    icon: <FaHandsHelping className="text-white" size={28} />, 
    link: "/zona-integritas/pelayanan-publik",
    color: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
    content:
      "Peningkatan kualitas pelayanan kepada prajurit dan masyarakat melalui sistem yang cepat, transparan, dan mudah diakses guna menciptakan kepuasan dan kepercayaan publik."
  },
];

export default function Bidang6() {
  return (
    <div className="flex justify-center my-4">
      <div className="w-11/12 2xl:w-4/5">
        {/* Breadcrumb */}
        <div className="flex text-sm text-gray-500 mt-5 gap-1">
          <Link href="/zona-integritas/all-bidang">
            <span className="hover:underline">ZI</span>
          </Link>
          <span>/</span>
          <Link href="/zona-integritas/bidang-4">
            <span className="hover:underline">Peningkatan Pelayanan</span>
          </Link>
        </div>

        {/* Title */}
        <div className="my-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Peningkatan Kualitas Pelayanan Prajurit dan/atau Masyarakat
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Transformasi layanan publik menuju profesionalisme, akuntabilitas, dan kecepatan
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
          {listMenu.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300 p-5 pb-10 flex flex-col items-center text-center ${item.color}`}
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
