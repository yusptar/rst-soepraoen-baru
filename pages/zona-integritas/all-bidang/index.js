import React from "react";
import Link from "next/link";
import { listZonaIntegritas } from "../../../components/List/ListZonaIntegritas";

export default function AllBidang() {
  return (
    <>
      <div className="flex justify-center my-8">
        <div className="w-11/12 2xl:w-4/5 flex flex-col items-center">

          {/* Breadcrumb */}
          <div className="w-full text-sm text-gray-500 flex items-center space-x-2 mt-2 mb-4">
            <Link href="/zona-integritas/pembangunan-zi" className="hover:underline">
              Zona Integritas
            </Link>
            <span>/</span>
            <span className="text-gray-600">All Bidang</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
            Zona Integritas
          </h1>

          {/* Grid List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {listZonaIntegritas.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl ${item.color}`}
              >
                <div className="flex flex-col items-center text-white">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-center mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-center">{item.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
