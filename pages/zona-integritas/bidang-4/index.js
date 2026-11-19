import React from "react";
import Link from "next/link";
import { FaAward, FaUserShield, FaUserCheck } from "react-icons/fa";

const listMenu = [
  {
    id: 1,
    title: "Penghargaan",
    icon: <FaAward className="text-white" size={28} />, 
    link: "/profil/prestasi",
    color: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500",
    content:
      "Penghargaan yang diperoleh mencerminkan keberhasilan dalam penerapan prinsip akuntabilitas serta pengakuan atas kontribusi positif satuan dalam tata kelola yang bersih dan transparan."
  },
  {
    id: 2,
    title: "Keterlibatan Pimpinan",
    icon: <FaUserShield className="text-white" size={28} />, 
    link: "/zona-integritas/keterlibatan-pimpinan",
    color: "bg-gradient-to-br from-indigo-500 via-blue-500 to-sky-500",
    content:
      "Peran aktif dan keteladanan pimpinan menjadi pilar utama dalam mewujudkan budaya akuntabilitas serta integritas di seluruh jajaran organisasi."
  },
  {
    id: 3,
    title: "Supervisi",
    icon: <FaUserCheck className="text-white" size={28} />, 
    link: "/zona-integritas/supervisi",
    color: "bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500",
    content:
      "Proses pengawasan internal yang berkelanjutan guna memastikan bahwa semua kegiatan satuan berjalan sesuai dengan prinsip transparansi, efektivitas, dan akuntabilitas."
  },
];

export default function Bidang4() {
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
            <span className="hover:underline">Penguatan Akuntabilitas Satuan</span>
          </Link>
        </div>

        {/* Title */}
        <div className="my-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Penguatan Akuntabilitas Satuan
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Transparansi dan tanggung jawab sebagai fondasi integritas kelembagaan
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
