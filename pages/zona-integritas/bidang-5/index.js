import React from "react";
import Link from "next/link";
import { FaComments, FaExclamationTriangle, FaBalanceScale } from "react-icons/fa";

const listMenu = [
  {
    id: 1,
    title: "Pengaduan Masyarakat",
    icon: <FaComments className="text-white" size={28} />, 
    link: "/zona-integritas/pengaduan-masyarakat",
    color: "bg-gradient-to-br from-pink-500 via-red-500 to-rose-600",
    content:
      "Memberikan akses bagi masyarakat untuk menyampaikan keluhan, saran, dan aspirasi sebagai bentuk pengawasan eksternal terhadap kinerja satuan."
  },
  {
    id: 2,
    title: "Whistle Blowing System",
    icon: <FaExclamationTriangle className="text-white" size={28} />, 
    link: "/zona-integritas/whistle-blowing-system",
    color: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600",
    content:
      "Mekanisme pelaporan pelanggaran yang menjamin kerahasiaan dan perlindungan pelapor untuk mendorong keberanian dalam melaporkan tindakan tidak etis atau ilegal."
  },
  {
    id: 3,
    title: "Penanganan Benturan Kepentingan",
    icon: <FaBalanceScale className="text-white" size={28} />, 
    link: "/zona-integritas/benturan-kepentingan",
    color: "bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500",
    content:
      "Prosedur untuk mengidentifikasi dan mengatasi situasi yang dapat mempengaruhi objektivitas pengambilan keputusan demi menjaga integritas organisasi."
  },
];

export default function Bidang5() {
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
            <span className="hover:underline">Penguatan Pengawasan</span>
          </Link>
        </div>

        {/* Title */}
        <div className="my-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Penguatan Pengawasan
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Upaya meningkatkan efektivitas pengendalian intern untuk mencegah penyimpangan
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
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
