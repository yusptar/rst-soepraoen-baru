import { useState } from "react";
import Image from "next/image";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarTentang from "../../../components/Navbar/NavbarTentang";

const listKatalogLayanan = [
  { nama: "SIMRS", 
    deskripsi: "Sistem Informasi Pengelolaan Layanan Rumah Sakit", 
    pengguna: "Semua Unit",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS ",
    jaminan_layanan: "",
  },
  { nama: "SICAPIT", 
    deskripsi: "Sistem Pencatatan Pengaduan Layanan IT", 
    pengguna: "Semua Unit",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "ANTROL (Antrian Online)", 
    deskripsi: "Akses Lokal sambil menunggu pengembangan selanjutnya", 
    pengguna: "Unit Pelayanan",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "SILENA", 
    deskripsi: "Sistem Pencatatan Absensi Pegawai Rumah Sakit Tk.II dr.Soepraoen", 
    pengguna: "Semua Unit",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "SIJANGTERI", 
    deskripsi: "Sistem Penunjang Terintegrasi Lab dan Radiologi", 
    pengguna: "Unit Lab, Unit Radiologi",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "SIPANTAU", 
    deskripsi: "Dashboard Manajemen Pimpinan Berbasis Web", 
    pengguna: "Karumkit & Unit SPI",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "SIPANTOP", 
    deskripsi: "Sistem Pemantauan Layanan Tindakan Operasi", 
    pengguna: "OK Sentral, OK Gyn",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""

  },
  { nama: "MPI", 
    deskripsi: "Sistem Monitoring Pelayanan Pasien IGD", 
    pengguna: "Unit IGD",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "TTE", 
    deskripsi: "Sistem Tanda Tangan Elektronik Berkas Berbasis Web", 
    pengguna: "Unit Pelayanan",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "E-SUKON", 
    deskripsi: "Sistem Elektronik Pengiriman Surat Kontrol", 
    pengguna: "Unit Pelayanan",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "E-BILLING", 
    deskripsi: "Sistem Pembayaran Pajak Elektronik", 
    pengguna: "Kasir",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "E-FILING", 
    deskripsi: "Monitoring Pengambilan Berkas Rekam Medis", 
    pengguna: "Assembling",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "ABSEN DOKTER", 
    deskripsi: "Sistem Pencatatan Absensi Dokter Menggunakan Face Recognition", 
    pengguna: "Dokter Rumah Sakit Tk.II dr.Soepraoen",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "HALO SOEPRAOEN", 
    deskripsi: "Sistem Pencatatan Booking Kunjungan Berbasis Mobile", 
    pengguna: "Pasien, Semua Unit",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "MEPO", 
    deskripsi: "Sistem Monitoring Elektronik Peracikan Obat Berbasis Web", 
    pengguna: "Unit Farmasi Depo III",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "WEBSITE RST", 
    deskripsi: "Sistem Informasi Rumah Sakit Tk.II dr. Soepraoen", 
    pengguna: "Umum",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "OBAT LAPAR", 
    deskripsi: "Sistem Menu Makanan & Minuman Berbasis Web", 
    pengguna: "Umum",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "BERKAS DIGITAL", 
    deskripsi: "Sistem Penyimpanan Berkas ERM", 
    pengguna: "Unit Pelayanan",
    jam_ops: "24 jam",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "ANJUNGAN PASIEN MANDIRI", 
    deskripsi: "Dialihkan ke Anjungan SEP Mandiri", 
    pengguna: "Unit Pelayanan",
    jam_ops: "Tidak Aktif",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "KHANZALITE", 
    deskripsi: "Dashboard Antrian Poliklinik Berbasis Web", 
    pengguna: "Unit Pelayanan",
    jam_ops: "Tidak Aktif",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "SIDOKAR", 
    deskripsi: "Sistem Akreditasi Rumah Sakit", 
    pengguna: "Semua Unit",
    jam_ops: "Tidak Aktif",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
  { nama: "GOBAT", 
    deskripsi: "Sistem Ketersediaan Pengiriman Obat", 
    pengguna: "Unit Farmasi",
    jam_ops: "Tidak Aktif",
    kontak: "Unit SIMRS",
    jaminan_layanan: ""
  },
];


function KatalogLayanan() {
  const [showDetails, setShowDetails] = useState(false);

  const handleReadMoreClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      {/* image banner */}
      <BannerRS title="Service Catalogue" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
                Daftar Katalog Layanan IT
            </h1>
            {/* <p className="text-justify text-sm mt-3">
              Dikarenakan pada saat itu Rumah Sakit Tentara di Sukun masih dimiliki oleh Zending, maka Depkes, 

            </p> */}
          </div>
            {/* <div className="flex justify-center mt-5">
              <button
                className="text-black font-bold hover:underline"
                onClick={handleReadMoreClick}
              >
                Baca Selengkapnya
              </button>
            </div> */}
            {/* {showDetails && ( */}
              <div className="mt-10 text-sm">
                {/* <h2 className="font-semibold text-xl text-blue-900 text-center">
                  Daftar Katalog Layanan IT
                </h2> */}
                <table className="w-full text-center border md:w-12/12 text-xs md:text-base">
                  <thead>
                    <tr>
                      <th className="border border-gray-300">No</th>
                      <th className="border border-gray-300">Nama Layanan</th>
                      <th className="border border-gray-300">Deskripsi</th>
                      <th className="border border-gray-300">Pengguna</th>
                      <th className="border border-gray-300">Jam Operasional</th>
                      <th className="border border-gray-300">Pelayanan Dukungan</th>
                       {/* <th className="border border-gray-300">Jaminan Layanan</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {listKatalogLayanan.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 w-1/12">
                          <p>{index+1}</p>
                        </td>
                        <td className="border border-gray-300">
                          <p>{item.nama}</p>
                        </td>
                        <td className="border border-gray-300">
                          <p>{item.deskripsi}</p>
                        </td>
                        <td className="border border-gray-300">
                          <p>{item.pengguna}</p>
                        </td>
                        <td className="border border-gray-300">
                          <p>{item.jam_ops}</p>
                        </td>
                        <td className="border border-gray-300">
                          <p>{item.kontak}</p>
                        </td>
                        {/* <td className="border border-gray-300">
                          <p>{item.jaminan_layanan}</p>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            {/* )} */}
        </div>
      </div>
      {/* content */}
    </>
  );
}

export default KatalogLayanan;
