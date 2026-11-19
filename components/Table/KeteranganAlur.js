import React from "react";

const singkatan = [
  {
    singkatan: "TPPRI",
    keterangan: "Tempat Pendaftaran Pasien Rawat Inap",
  },
  {
    singkatan: "TPPGD",
    keterangan: "Tempat Pendaftaran Pasien Gawat Darurat",
  },
  {
    singkatan: "TPPRJ",
    keterangan: "Tempat Pendaftaran Pasien Rawat Jalan",
  },
  {
    singkatan: "IGD",
    keterangan: "Instalasi Gawat Darurat",
  },
  {
    singkatan: "No RM",
    keterangan: "Nomor Rekam Medik (terdapat di kartu berobat RS)",
  },
  {
    singkatan: "Adm. Kes",
    keterangan: "Administrasi Kesehatan",
  },
];

const keteranganPasien = [
  {
    pasien: "Untuk Pasien Baru BPJS",
    keterangan:
      "Menyerahkan Foto Copy Kartu BPJS dan Foto Copy KTP masing-masing 4 lembar untuk mendapatkan kartu berobat RS. Soeparoen",
  },
  {
    pasien: "Untuk Pasien Baru Swasta",
    keterangan:
      "Menyerahkan Foto Copy KTP masing-masing 4 lembar untuk mendapatkan kartu berobat RS. Soeparoen",
  },
];
export default function KeteranganAlurPendaftaran() {
  return (
    <>
      <table className="table-auto border-collapse border border-slate-500 my-3 w-full">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="font-semibold py-1 px-2 border border-black">
              Singkatan
            </th>
            <th className="font-semibold py-1 px-2 border border-black text-left">
              Keterangan
            </th>
          </tr>
        </thead>
        <tbody>
          {singkatan.map((item, index) => (
            <tr key={index}>
              <td className="font-semibold text-blue-900 border border-slate-600 py-1 px-2">
                {item.singkatan}
              </td>
              <td className="font-medium text-blue-900 border border-slate-600 py-1 px-2">
                {item.keterangan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
      {keteranganPasien.map((item, index) => (
        <div key={index}>
          <h1 className="font-semibold text-blue-900 text-left my-2">
            {item.pasien}
          </h1>
          <p className="font-normal text-blue-900 text-left my-2">
            {item.keterangan}
          </p>
        </div>
      ))}
    </>
  );
}
