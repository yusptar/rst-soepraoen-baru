import React from "react";
import Link from "next/link";
import BannerRS from "../../components/Banner/BannerRS";
import MapWidget from "../../components/Map/Map";
import { listContact } from "../../components/List/ListContact";
import { FaLocationArrow, FaMapMarkedAlt, FaSearchLocation } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Hubungi Kami" url="/profil/denah-rumah-sakit" />
      {/* image banner */}

      {/* content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kontak & Alamat */}
          <div className="space-y-6">
            {/* Kontak Cards */}
            {listContact.map((contact, index) => (
              <Link
                key={index}
                href={contact.link}
                className={`block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border ${contact.color}`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox={contact.viewBox || "0 0 24 24"}
                      className="w-10 h-10"
                    >
                      {contact.icon}
                    </svg>
                  </div>
                  <div className="text-white">
                    <h3 className="text-lg font-semibold">{contact.title}</h3>
                    <p className="text-sm">{contact.content}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="space-y-6">
               {/* Alamat */}
            <div className="bg-white shadow-md hover:shadow-lg transition p-6 rounded-xl border">
              <Link
                href="https://goo.gl/maps/J7HFRPjREchDrxae7"
                className="block hover:opacity-90 transition"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-blue-900 p-3 rounded-full">
                    <FaMapMarkedAlt
                      className="text-white flex justify-center items-center"
                      size={25}
                    />
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg> */}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Alamat</h2>
                    <p className="text-gray-600 text-sm">
                      Jl. S. Supriadi No.22, Sukun, Kec. Sukun, Kota Malang, Jawa Timur 65112
                    </p>
                  </div>
                </div>
              </Link>
            </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-md border h-[388px]">
            <MapWidget className="w-full h-full" />
          </div>

          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
