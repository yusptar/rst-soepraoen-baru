import React from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import standpel from "../../../components/Slider/standpelgrid";
import Image from "next/image";
import Link from "next/link"; 

export default function StandarPelayanan() {
  return (
    <>
      <BannerRS title="Standar Pelayanan" url="/profil/denah-rumah-sakit" />

      <div className="flex justify-center my-5">
        <div className="w-11/12 2xl:w-4/5">
          <h1 className="font-bold text-4xl text-blue-900 text-center mt-5">
            Standar Pelayanan
          </h1>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-3 mb-8">
            Informasi standar pelayanan pada setiap poliklinik dan unit pelayanan
            di Rumah Sakit Tk. II dr. Soepraoen yang dapat diakses dalam format PDF.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {standpel.map((item) => (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className="group"
              >
                <div className="h-full bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  
                  <div className="flex justify-between items-start mb-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={52}
                      height={52}
                      className="rounded-lg"
                    />

                    <span className="text-xs font-semibold px-2 py-1 bg-red-50 text-red-600 rounded-full">
                      PDF
                    </span>
                  </div>

                  <h3 className="font-bold text-blue-900 text-lg leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                    <span className="text-sm font-medium text-blue-700">
                      Lihat Dokumen
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-700 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}