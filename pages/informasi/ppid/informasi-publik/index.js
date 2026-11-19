import { React } from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarPPID from "../../../../components/Navbar/NavbarPPID";
import Link from "next/link";

export default function InformasiPublik() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Pejabat Pengelola Informasi dan Dokumentasi (PPID)" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarPPID
        active="Informasi Publik"
        url="/informasi/ppid/informasi-publik"
      />
      {/* Navigation Tab */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
              Informasi Publik
            </h1>
            <h1 className="font-semibold text-lg text-blue-900 text-center my-5 bg-slate-200">
              Informasi yang dipublikasikan secara berkala meliputi informasi
              terkait :
            </h1>
            <div className="flex flex-col justify-center items-center">
              <ol className="list-decimal px-5">
                <li className="pl-4">Profil satuan</li>
                <li className="pl-4">
                  Ringkasan informasi tentang program dan/atau kegiatan yang
                  sedang dijalankan dalam lingkungan satuan.
                </li>
                <li className="pl-4">
                  Kinerja dalam lingkup satuan berupa narasi realisasi program
                  dan kegiatan yang telah maupun sedang dijalankan
                </li>
                <li className="pl-4">Ringkasan akses Informasi Publik</li>
                <li className="pl-4">
                  Ringkasan tentang peraturan, keputusan, dan/atau kebijakan
                  yang mengikat dan/atau berdampak bagi publik yang dikeluarkan
                  oleh satuan
                </li>
                <li className="pl-4">
                  Hak dan tata cara memperoleh Informasi Publik, serta tata cara
                  pengajuan keberatan serta proses penyelesaian sengketa
                  Informasi Publik berikut pihak-pihak yang bertanggungjawab
                  yang dapat dihubungi
                </li>
                <li className="pl-4">
                  Tata cara pengaduan penyalahgunaan wewenang atau pelanggaran
                  yang dilakukan baik oleh pejabat satuan maupun pihak yang
                  mendapatkan izin atau perjanjian kerja dari satuan yang
                  bersangkutan
                </li>
                <li className="pl-4">
                  Pengumuman pengadaan barang dan jasa sesuai dengan peraturan
                  perundang-undangan terkait
                </li>
                <li className="pl-4">
                  Prosedur peringatan dini dan prosedur evakuasi keadaan darurat
                  di setiap kantor satuan.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
