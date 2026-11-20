import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_URL } from "../../services/NetworkServices";
import { asset } from "../../helpers/asset";

const listHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

function formatJam(jam) {
  return jam.split(":").slice(0, 2).join(":");
}

function JadwalDokter({ doctor, namaSpesialis, namaPoli, highContrast = false }) {
  // 🖼️ State untuk modal foto
  const [showModal, setShowModal] = useState(false);

  const fotoDokter = doctor.imagepath
    ? IMAGE_URL + doctor.imagepath
    : asset("/assets/doctor.png");

  const altText = doctor.nm_dokter
    ? `Foto ${doctor.nm_dokter}${doctor.spesialis?.nm_sps ? `, ${doctor.spesialis.nm_sps}` : ""}`
    : "Foto dokter RS dr. Soepraoen";

  const spesialisMap = {
    "20250039": "Dokter Spesialis Anak Konsultan Jantung",
    "20250050": "Dokter Spesialis Anak Subsp.ETIA",
    "20250041": "Dokter Spesialis Penyakit Dalam Konsultan Hemato Onkologi",
    "20230016": "Dokter Spesialis Obstetri & Ginekologi Subsp Onkologi Ginekologi",
    "20230017": "Dokter Spesialis Obstetri & Ginekologi Sub Fetomaternal",
    "20230015": "Dokter Spesialis Obstetri & Ginekologi Subsp Onkologi Ginekologi",
    "201706004": "Dokter Spesialis Penyakit Dalam Konsultan Ginjal Hipertensi",
    "11000008171172": "Dokter Spesialis Bedah Orthopedi Konsultan Hand",
    "1910056850268" : "Dokter Spesialis Bedah Onkologi Konsultan Onkologi (Bedah Kanker)",
    "197106042006042001" : "Dokter Spesialis Pulmonologi Konsultan Pernafasan (Paru-Paru)",
    "20230020" : "Dokter Spesialis Pulmonologi Konsultan Onkologi Torak",
    "11070048530182" : "Dokter Spesialis Jantung dan Pembuluh Darah Konsultan Kardiologi Intervensi",
    "202007009" : "Dokter Spesialis Jantung dan Pembuluh Darah Konsultan Kardiologi Intervensi",
    "20240027" : "Dokter Spesialis Jantung dan Pembuluh Darah Konsultan Kardiologi Intervensi",
    "20240026" : "Dokter Spesialis Jantung dan Pembuluh Darah Konsultan Kardiologi Intervensi",
    "11040003420477" : "Dokter Spesialis Radiologi Konsultan Radiologi Intervensi",
    "20240028" : "Dokter Gigi Spesialis Periodonsia",
  };

  return (
    <div
      className={`mb-10 transition-all duration-300 ${highContrast ? "bg-black text-yellow-300" : "bg-gray-50 text-black"
        }`}
    >
      {/* === Foto dan Nama Dokter === */}
      <div className="flex items-start">
        <div
          className="aspect-[1/1] relative p-0 m-0 md:w-1/12 w-1/3 cursor-pointer"
          onClick={() => setShowModal(true)}
          role="button"
          tabIndex={0}
          aria-label={`Lihat foto ${doctor.nm_dokter}`}
          onKeyDown={(e) => e.key === "Enter" && setShowModal(true)}
        >
          <Image
            src={fotoDokter}
            fill
            sizes="100%"
            className="object-cover rounded-lg hover:opacity-90"
            alt={altText}
            unoptimized
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes(asset("/assets/doctor.png"))) {
                target.src = asset("/assets/doctor.png");
                console.warn(`Gagal memuat foto dokter: ${doctor.nm_dokter} (${doctor.kd_dokter})`);
              }
            }}
          />
        </div>

        <div className="flex flex-col justify-start ml-5">
          <h1
            className={`font-semibold md:text-2xl text-sm ${highContrast ? "text-yellow-300" : "text-blue-900"
              }`}
          >
            {doctor.nm_dokter}
          </h1>
          <h1 className="font-light md:text-sm text-xs mt-2">
            {spesialisMap[doctor.kd_dokter] ?? namaSpesialis ?? doctor.spesialis?.nm_sps}
          </h1>
          <Link
            href={`/dokter/${doctor.kd_dokter}`}
            className={`md:text-sm text-xs underline mt-2 ${highContrast ? "text-yellow-400" : "text-blue-700"
              }`}
          >
            Lihat profil
          </Link>
        </div>
      </div>

      {/* === Modal Foto Dokter === */}
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-80`}
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto besar ${doctor.nm_dokter}`}
        >
          <div
            className="relative w-11/12 md:w-2/5"
            onClick={(e) => e.stopPropagation()} // supaya klik dalam modal tidak menutup
          >
            <Image
              src={fotoDokter}
              alt={altText}
              width={800}
              height={800}
              className="object-contain rounded-xl w-full h-auto"
              unoptimized
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex justify-center items-center font-bold"
              aria-label="Tutup foto"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* === Jadwal Dokter === */}
      {/* {doctor?.jadwal?.length > 0 ? (
        doctor.jadwal.map((poli, index) => (
          <div
            key={index}
            className={`${highContrast
                ? "bg-black border-yellow-500"
                : "bg-slate-100 border-gray-200"
              } mt-5 flex flex-col border`}
          >
            <div className="w-full p-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={highContrast ? "yellow" : "orange"}
                className="w-6 h-6 flex-shrink-0"
              >
                <path d="M12.75 12.75a.75.75 0 11-1.5 0..." />
              </svg>
              <Link
                className={`mx-2 cursor-pointer font-semibold text-sm ${
                  highContrast ? "text-yellow-300" : "text-gray-600"
                }`}
                href={`/fasilitas-layanan/rawat-jalan/poliklinik-penyakit-dalam?kd_poli=${poli.kd_poli}`}
              >
                Rawat Jalan {poli.nm_poli}
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-center min-w-[700px] border-collapse">
                <thead>
                  <tr
                    className={
                      highContrast
                        ? "bg-yellow-700 text-black"
                        : "bg-blue-900 text-white"
                    }
                  >
                    {listHari.map((hari, index) => (
                      <th
                        key={index}
                        className="py-2 px-3 font-medium text-left whitespace-nowrap"
                      >
                        {hari}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {doctor?.kd_sps === "Sp.An" ? (
                    <tr
                      className={`${
                        highContrast
                          ? "bg-black text-yellow-300"
                          : "bg-white text-black"
                      } border`}
                    >
                      <td className="border border-gray-300" colSpan="7">
                        <div className="flex justify-center font-semibold">24 JAM</div>
                      </td>
                    </tr>
                  ) : (
                    <tr
                      className={`${
                        highContrast ? "bg-black" : "bg-white"
                      } border`}
                    >
                      {listHari.map((hari, index) => (
                        <td key={index} className="border border-gray-300 px-2">
                          {doctor.jadwal?.map((jadwal, jIndex) => (
                            <div key={jIndex}>
                              {jadwal.hari_kerja.toLowerCase() === hari.toLowerCase() &&
                              poli.kd_poli === jadwal.kd_poli ? (
                                <div className="flex justify-start font-light">
                                  {jadwal.jam_mulai === "01:31:00"
                                    ? "On Call"
                                    : `${formatJam(jadwal.jam_mulai)}-${formatJam(
                                        jadwal.jam_selesai
                                      )}`}
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </td>
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))
      ) : (
        <div
          className={`mt-5 p-4 border text-center ${
            highContrast
              ? "bg-black text-yellow-300 border-yellow-500"
              : "bg-slate-100 text-black border-gray-300"
          }`}
        >
          Tidak ada jadwal
        </div>
      )} */}
      {doctor?.jadwal?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-center min-w-[700px] border-collapse">
            <thead>
              <tr className={highContrast ? "bg-yellow-700 text-black" : "bg-blue-900 text-white"}>
                {listHari.map((hari, index) => (
                  <th
                    key={index}
                    className="py-2 px-3 font-medium text-left whitespace-nowrap"
                  >
                    {hari}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {doctor?.kd_sps === "Sp.An"  &&
                doctor?.kd_dokter !== "20260001" ?(
                <tr
                  className={`${
                  highContrast
                  ? "bg-black text-yellow-300"
                  : "bg-white text-black"
                  } border`}
                >
                  <td className="border border-gray-300" colSpan="7">
                    <div className="flex justify-center font-semibold">24 JAM</div>
                  </td>
                </tr>
              ) : (
                <tr
                  className={`${
                  highContrast ? "bg-black" : "bg-white"
                  } border`}
                >
              {listHari.map((hari, index) => (
                  <td key={index} className="border border-gray-300 px-2">
                    {doctor.jadwal?.map((jadwal, jIndex) => (
                      <div key={jIndex}>
                        {jadwal.hari_kerja.toLowerCase() === hari.toLowerCase() ? (
                          <div className="flex justify-start font-light">
                            {jadwal.jam_mulai === "01:31:00"
                              ? "On Call"
                              : `${formatJam(jadwal.jam_mulai)}-${formatJam(
                                jadwal.jam_selesai
                              )}`}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </td>
              ))}
              </tr>
            )}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className={`mt-5 p-4 border text-center ${
            highContrast
              ? "bg-black text-yellow-300 border-yellow-500"
              : "bg-slate-100 text-black border-gray-300"
          }`}
        >
          Tidak ada jadwal
        </div>
      )}

    </div>
  );
}

JadwalDokter.propTypes = {
  doctor: PropTypes.object.isRequired,
  namaSpesialis: PropTypes.string,
  namaPoli: PropTypes.string,
  highContrast: PropTypes.bool,
};

export default JadwalDokter;
