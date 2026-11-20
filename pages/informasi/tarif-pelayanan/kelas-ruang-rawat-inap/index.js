import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarTarifPelayanan from "../../../../components/Navbar/NavbarTarifPelayanan";
import Image from "next/image";
import { rupiah } from "../../../../helpers/CurrencyFormatter";
import { asset } from "../../../../helpers/asset";

const listKamar = [
  {
    nama: "Ruang SUPER VVIP",
    biaya: "2500000",
    bed: "2",
    image: asset("/assets/super_vvip.jpg"),
    fasilitas: [
      "1 kamar 1 tempat tidur",
      // "Tempat tidur multifungsi",
      "Bed penunggu pasien",
      "Sofa penunggu pasien",
      "Kulkas",
      "AC",
      "TV Digital",
      // "Wastafel",
      "Almari pakaian",
      "Kamar mandi dalam shower air panas",
      "Meja makan",
      "Meja kursi tamu",
      "Dispenser",
      "Pantry",
      "Wifi",
      // "Makan 3x",
      // "Ekstra lauk 3x",
      // "Buah premium 2x",
      // "Snack 2x",
      // "Teh manis 1x",
      // "Air mineral 2x",
    ],
  },
  {
    nama: "Ruang VVIP",
    biaya: "1200000",
    bed: "1",
    image: asset("/assets/kamar/new-vvip.jpg"),
    fasilitas: [
      "1 kamar 1 tempat tidur",
      // "Tempat tidur multifungsi",
      // "Teras tunggu pasien",
      "Sofa penunggu pasien",
      "Kulkas",
      "AC",
      "TV Digital",
      // "Wastafel",
      "Almari pakaian 2 pintu",
      // "Meja makan mobile",
      "Kamar mandi dalam shower air panas",
      "Meja kursi tamu",
      "Dispenser",
      "Pantry",
      "Wifi",
      // "Makan 3x",
      // "Ekstra lauk 3x",
      // "Buah premium 2x",
      // "Snack 2x",
      // "Teh manis 1x",
      // "Air mineral 2x",
    ],
  },
  {
    nama: "Ruang VIP",
    biaya: "900000",
    bed: "1",
    image: asset("/assets/kamar/new-vip.jpg"),
    fasilitas: [
      "1 kamar 1 tempat tidur",
      // "Tempat tidur multifungsi",
      // "Teras tunggu pasien",
      "Sofa penunggu pasien",
      "Kulkas",
      "AC",
      "TV Digital",
      // "Wastafel",
      "Almari pakaian 2 pintu",
      // "Meja makan mobile",
      "Kamar mandi dalam shower air panas",
      "Wifi",
      // "Kursi tamu",
      // "Makan 3x",
      // "Ekstra lauk 3x",
      // "Buah premium 2x",
      // "Snack 2x",
      // "Teh manis 1x",
      // "Air mineral 2x",
    ],
  },
  {
    nama: "Ruang Kelas I",
    biaya: "480000",
    bed: "1 - 2",
    image: asset("/assets/kamar/new-kelas-1.jpg"),
    fasilitas: [
      "1 kamar 1-2 tempat tidur",
      // "Tempat tidur multi fungsi",
      "Sofa penunggu pasien",
      "AC",
      "TV Digital",
      // "Almari pakaian",
      "Meja makan mobile",
      "Kamar mandi dalam shower air panas",
      // "Teras tunggu pasien",
      // "Wifi",
      // "Makan 3x",
      // "Ekstra lauk 3x",
      // "Buah premium 2x",
      // "Snack 2x",
      // "Air mineral 2x",
    ],
  },
  {
    nama: "Ruang Kelas II",
    biaya: "400000",
    bed: "3 - 4",
    image: asset("/assets/kamar/new-kelas-2.jpg"),
    fasilitas: [
      "1 kamar 3-4 tempat tidur",
      // "Tempat tidur pasien",
      "Kursi penunggu pasien",
      "Kipas angin",
      "TV Digital",
      // "Almari pakaian",
      "Kamar mandi dalam",
      // "Wifi",
      // "Makan 3x",
      // "Snack 2x",
      // "Buah premium 1x",
      // "Buah pisang 1x",
      // "Air mineral 2x",
    ],
  },
  {
    nama: "Ruang Kelas III",
    biaya: "250000",
    bed: "6 - 8",
    image: asset("/assets/kamar/new-kelas-3.jpeg"),
    fasilitas: [
      "Zaal 6 s/d 8 TT",
      "Tempat tidur pasien",
      // "Kursi penunggu pasien",
      "Kipas angin",
      "TV Digital",
      // "Almari pakaian",
      "Kamar mandi dalam",
      // "Wifi",
      // "Makan 3x",
      // "Snack 1x",
      // "Buah pisang 2x",
      // "Air mineral 2x",
    ],
  },
  // {
  //   nama: "Ruang Intensif",
  //   biaya: "693000",
  //   bed: "1",
  //   image: "/assets/kamar/ruang-intensif.png",
  //   fasilitas: [],
  // },
];

const listTarif = [
  {
    nama: "Akomodasi Kelas Dewasa (Kamar dan Makan)",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "-",
      },
      {
        kelas: "Kelas III",
        tarif: "250000",
      },
      {
        kelas: "Kelas II",
        tarif: "400000",
      },
      {
        kelas: "Kelas I",
        tarif: "480000",
      },
      {
        kelas: "VIP",
        tarif: "900000",
      },
      {
        kelas: "VVIP",
        tarif: "1200000",
      },
    ],
  },
  {
    nama: "Akomodasi Kelas Anak & Kebidanan (Kamar dan Makan)",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "-",
      },
      {
        kelas: "Kelas III",
        tarif: "250000",
      },
      {
        kelas: "Kelas II",
        tarif: "400000",
      },
      {
        kelas: "Kelas I",
        tarif: "480000",
      },
      {
        kelas: "VIP",
        tarif: "800000",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
  {
    nama: "Akomodasi Khusus Pasien Jiwa (Blok Sel)",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "581000",
      },
      {
        kelas: "Kelas III",
        tarif: "-",
      },
      {
        kelas: "Kelas II",
        tarif: "-",
      },
      {
        kelas: "Kelas I",
        tarif: "-",
      },
      {
        kelas: "VIP",
        tarif: "-",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
  {
    nama: "Intensive Care Unit (ICU) - Reguler & Isolasi",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "900000",
      },
      {
        kelas: "Kelas III",
        tarif: "-",
      },
      {
        kelas: "Kelas II",
        tarif: "-",
      },
      {
        kelas: "Kelas I",
        tarif: "-",
      },
      {
        kelas: "VIP",
        tarif: "-",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
  {
    nama: "Intermediate Care Unit (IMCU)/HCU - Reguler & Isolasi",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "700000",
      },
      {
        kelas: "Kelas III",
        tarif: "-",
      },
      {
        kelas: "Kelas II",
        tarif: "-",
      },
      {
        kelas: "Kelas I",
        tarif: "-",
      },
      {
        kelas: "VIP",
        tarif: "-",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
  {
    nama: "Ruang Isolasi",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "-",
      },
      {
        kelas: "Kelas III",
        tarif: "250000",
      },
      {
        kelas: "Kelas II",
        tarif: "400000",
      },
      {
        kelas: "Kelas I",
        tarif: "480000",
      },
      {
        kelas: "VIP",
        tarif: "-",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
  {
    nama: "Neonatal Intensive Care Unit (NICU)",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "900000",
      },
      {
        kelas: "Kelas III",
        tarif: "-",
      },
      {
        kelas: "Kelas II",
        tarif: "-",
      },
      {
        kelas: "Kelas I",
        tarif: "-",
      },
      {
        kelas: "VIP",
        tarif: "-",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
  {
    nama: "Neonatal Intermediate Care Unit (NIMCU)/HCU",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "700000",
      },
      {
        kelas: "Kelas III",
        tarif: "-",
      },
      {
        kelas: "Kelas II",
        tarif: "-",
      },
      {
        kelas: "Kelas I",
        tarif: "-",
      },
      {
        kelas: "VIP",
        tarif: "-",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
  {
    nama: "Ruang Bayi non NICU",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "75000",
      },
      {
        kelas: "Kelas III",
        tarif: "-",
      },
      {
        kelas: "Kelas II",
        tarif: "-",
      },
      {
        kelas: "Kelas I",
        tarif: "-",
      },
      {
        kelas: "VIP",
        tarif: "-",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
  {
    nama: "Inkubator non NICU",
    biaya: [
      {
        kelas: "Intensif & Khusus",
        tarif: "80000",
      },
      {
        kelas: "Kelas III",
        tarif: "-",
      },
      {
        kelas: "Kelas II",
        tarif: "-",
      },
      {
        kelas: "Kelas I",
        tarif: "-",
      },
      {
        kelas: "VIP",
        tarif: "-",
      },
      {
        kelas: "VVIP",
        tarif: "-",
      },
    ],
  },
];

export default function KelasRuangRawatInap() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Informasi Tarif Pelayanan" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarTarifPelayanan
        active="Kelas Ruang Rawat Inap"
        url="/informasi/tarif-pelayanan/kelas-ruang-rawat-inap"
      />
      {/* Navigation Tab */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
              Tarif Kelas Ruang Rawat Inap
            </h1>
            {listKamar.map((kamar, index) => (
              <div
                key={index}
                className="flex flex-row md:justify-start md:items-start my-2 border rounded-lg shadow-md"
              >
                <div className="md:w-1/4 aspect-[4/4] w-2/5 relative p-2 m-2 rounded-lg ">
                  <Image
                    src={kamar.image}
                    alt={kamar.nama}
                    // fill={true}
                    // className="object-cover rounded-lg"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-full object-cover rounded-lg"
                    priority={true}
                  />
                </div>
                <div className="flex flex-col md:justify-start md:items-start py-1  w-3/5 md:w-3/4 h-full">
                  <h1 className="font-bold md:text-2xl text-base text-blue-900">
                    {kamar.nama}
                  </h1>
                  <h1 className="font-semibold md:text-lg text-sm text-blue-900">
                    {rupiah(kamar.biaya)} / hari
                  </h1>
                  <p>Fasilitas : </p>
                  <ul className="list-disc list-inside hidden md:grid md:grid-cols-2 w-full">
                    {kamar.fasilitas.map((fasilitas, index) => (
                      <li key={index} className="">
                        {fasilitas}
                      </li>
                    ))}
                  </ul>
                  <p className="md:hidden truncate ... text-xs w-11/12">
                    {kamar.fasilitas.join(", ")}
                  </p>
                  {/* <button className="btn btn-success text-xs mr-2">
                    Cek ketersediaan kamar
                  </button> */}
                </div>
              </div>
            ))}
            <div className="overflow-x-auto mt-5">
              <table className="table w-full table-compact border-b-2">
                <thead>
                  <tr>
                    <th className="bg-blue-900 text-white">Rawat Inap</th>
                    <th className="bg-blue-900 text-white">
                      Intensif & Khusus
                    </th>
                    <th className="bg-blue-900 text-white">Kelas III</th>
                    <th className="bg-blue-900 text-white">Kelas II</th>
                    <th className="bg-blue-900 text-white">Kelas I</th>
                    <th className="bg-blue-900 text-white">VIP</th>
                    <th className="bg-blue-900 text-white">VVIP</th>
                  </tr>
                </thead>
                <tbody>
                  {listTarif.map((tarif, index) => (
                    <tr  key={index}>
                      <td className="bg-white">{tarif.nama}</td>
                      {tarif.biaya.map((biaya, index) => (
                        <td className="bg-white" key={index}>
                          {biaya.tarif == "-" ? "-" : rupiah(biaya.tarif)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
