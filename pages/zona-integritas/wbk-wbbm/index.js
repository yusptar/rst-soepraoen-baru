import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = {
  title:
    "Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi dan Bersih Melayani (WBBM)",
  deskripsi:
    "Proses pembangunan Zona Integritas merupakan tindak lanjut pencanangan yang telah dilakukan oleh pimpinan instansi pemerintah. Proses pembangunan Zona Integritas difokuskan pada penerapan program Manajemen Perubahan, Penataan Tatalaksana, Penataan Manajemen SDM, Penguatan Pengawasan, Penguatan Akuntabilitas Kinerja, dan Peningkatan Kualitas Pelayanan Publik yang bersifat konkrit. Dalam membangun Zona Integritas, pimpinan instansi pemerintah menetapkan satu atau beberapa unit kerja yang diusulkan sebagai WBK/WBBM. Pemilihan unit kerja yang diusulkan sebagai WBK/WBBM memperhatikan beberapa syarat yang telah ditetapkan, diantaranya: Dianggap sebagai unit yang penting/strategis dalam melakukan pelayanan publik;Mengelola sumber daya yang cukup besar, sertaMemiliki tingkat keberhasilan Reformasi Birokrasi yang cukup tinggi di unit tersebut. Proses pemilihan unit kerja yang berpotensi sebagai Zona Integritas dilakukan dengan membentuk kelompok kerja/tim untuk melakukan identifikasi terhadap unit kerja yang berpotensi sebagai unit kerja berpredikat menuju WBK/WBBM oleh pimpinan instansi. Setelah melakukan identifikasi, kelompok kerja/tim mengusulkan unit kerja kepada pimpinan instansi untuk ditetapkan sebagai calon unit kerja berpredikat Zona Integritas menuju WBK/WBBM. Selanjutnya dilakukan penilaian mandiri (self assessment) oleh TPI (Tim Penilai Internal) Tingkat Mabesad dan Mabes TNI. Setelah melakukan penilaian, TPI melaporkan kepada Pimpinan instansi tentang unit yang akan diusulkan ke Kementerian sebagai unit kerja berpredikat Menuju WBK/WBBM. Apabila unit kerja yang diusulkan memenuhi syarat sebagai Zona Integritas Menuju WBK/WBBM, maka langkah selanjutnya adalah penetapan. Setelah unit kerja yang diusulkan sebagai Zona Integritas menuju WBK/WBBM ditetapkan, maka hal yang selanjutnya dilakukan adalah menentukan komponen-komponen yang harus dibangun.Terdapat dua jenis komponen yang harus dibangun dalam unit kerja terpilih, yaitu komponen pengungkit dan komponen hasil. Di bawah ini adalah gambar yang menunjukkan hubungan masing-masing komponen dan indikator pembangun komponen.   Melalui model tersebut dapat diuraikan bahwa program Manajemen Perubahan, Penataan Tatalaksana, Penataan Manajemen SDM, Penguatan Akuntabilitas Kinerja, Penguatan Pengawasan, dan Peningkatan Kualitas Pelayanan Publik merupakan komponen pengungkit yang diharapkan dapat menghasilkan sasaran pemerintahan yang bersih dan bebas KKN serta komponen hasil yang berdampak pada peningkatan kualitas pelayanan publik. Penilaian terhadap setiap program dalam komponen pengungkit dan komponen hasil diukur melalui indikator-indikator yang dipandang mewakili program tersebut. Sehingga dengan menilai indikator tersebut diharapkan dapat memberikan gambaran pencapaian upaya yang berdampak pada pencapaian sasaran.",
  image: "/assets/wbk-wbbm.png",
  komponen: [
    {
      jenis: "Komponen Pengungkit",
      deskripsi:
        "Komponen pengungkit merupakan komponen yang menjadi faktor penentu pencapaian sasaran hasil pembangunan Zona Integritas menuju WBK/WBBM. Terdapat enam komponen pengungkit, yaitu Manajemen Perubahan, Penataan Tatalaksana, Penataan Manajemen SDM, Penguatan Akuntabilitas Kinerja, Penguatan Pengawasan, dan Peningkatan Kualitas Pelayanan Publik. Di bawah ini adalah tabel rincian bobot komponen pengungkit penilaian unit kerja Berpredikat Menuju WBK/Menuju WBBM.",
      listKomponen: [
        {
          nama: "Manajemen Perubahan",
          bobot: "5%",
        },
        {
          nama: "Penataan Tatalaksana",
          bobot: "5%",
        },
        {
          nama: "Penataan Manajemen SDM",
          bobot: "15%",
        },
        {
          nama: "Penguatan Akuntabilitas Kinerja",
          bobot: "15%",
        },
        {
          nama: "Penguatan Pengawasan",
          bobot: "15%",
        },
        {
          nama: "Peningkatan Kualitas Pelayanan Publik",
          bobot: "10%",
        },
      ],
    },
    {
      jenis: "Komponen Penilaian",
      deskripsi:
        "Rincian Bobot Indikator Hasil Unit Kerja Berpredikat Menuju WBK/Menuju WBBM",
      listKomponen: [
        {
          nama: "Terwujudnya Pemerintahan yang Bersih dan Bebas KKN",
          bobot: "20%",
        },
        {
          nama: "Terwujudnya Peningkatan Kualitas Pelayanan Publik Kepada Masyarakat",
          bobot: "20%",
        },
      ],
    },
  ],
  hasil:
    "Dalam pembangunan Zona Integritas Menuju Wilayah Bebas dari Korupsi dan WBBM, fokus pelaksanaan reformasi birokrasi tertuju pada dua sasaran utama, yaitu: Terwujudnya Pemerintahan yang Bersih dan Bebas KKN Sasaran terwujudnya pemerintahan yang bersih dan bebas KKN diukur dengan menggunakan ukuran: * Nilai persepsi korupsi (survei eksternal); dan * Presentase penyelesaian TLHP. Terwujudnya Peningkatan Kualitas Pelayanan Publik kepada Masyarakat Sasaran Terwujudnya peningkatan kualitas pelayanan publik kepada masyarakat diukur melalui nilai persepsi kualitas pelayanan (survei eksternal). Dalam pembangunan Zona Integritas pada unit kerja, hal-hal yang perlu dilakukan dan menjadi perhatian adalah: Membangun komitmen antara Pimpinan dan pegawai dalam pembangunan Zona Integritas; Memperhatikan dan melengkapi unsur-unsur pembangunan Zona Integritas seperti dijelaskan pada unsur pengungkit; Melaksanakan survei mandiri terkait pelayanan publik dan persepsi anti korupsi pada unit kerja yang diusulkan; Membuat berbagai inovasi dalam upaya perbaikan pelayanan publik dan pencegahan korupsi; Melaksanakan program atau kegiatan yang sifatnya bersinggungan langsung dengan masyarakat atau stakeholder; Membuat strategi komunikasi dalam rangka menginformasikan semua perubahan yang dilakukan oleh unit kerja ke masyarakat; Melakukan monitoring dan evaluasi secara berkala atas kemajuan yang dilakukan oleh unit kerja yang diusulkan.",
  catatan:
    "Untuk mempercepat pembangunan Zona Integritas pada unit kerja diperlukan kontribusi TPI atau unit/instansi lain yang mempunyai kewenangan terkait komponen Proses dan Hasil. Oleh karena itu, TPI dalam proses pembangunan juga mempunyai peran untuk: Menjadi tempat konsultasi bagi unit kerja yang sedang membangun Zona Integritas; Menjadi fasilitator dalam pemberian asistensi dan pendampingan dalam rangka pembangunan Zona Integritas di unit kerja sehingga unit kerja mempunyai pemahaman dan persepsi yang sama terkait komponen-komponen pembangunan Zona Integritas; Berkonsultansi kepada TPN terkait proses pembangunan Zona Integritas pada unit kerja;",
};

export default function WBKWBBM() {
  return (
    <>
      {/* image banner */}
      {/* <BannerRS title="WBK - WBBM" url="/profil/denah-rumah-sakit" /> */}
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/informasi/berita">
              <h1 className=" text-xs font-light">Zona Integritas</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/informasi/berita">
              <h1 className=" text-xs font-light">WBK-WBBM</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <div className="2xl:w-11/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-left my-0">
              Wilayah Bebas dari Korupsi (WBK) dan
            </h1>
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-left my-0">
              Wilayah Birokrasi dan Bersih Melayani (WBBM)
            </h1>
          </div>
          <div className="2xl:w-11/12 w-full flex justify-left"></div>
          <div className="2xl:w-11/12 w-full my-5 text-justify">
            <div className="md:w-3/4 w-full">
              {/* <p className=" text-sm">{data.deskripsi} </p> */}
              <p className="text-sm">
                Proses pembangunan Zona Integritas merupakan tindak lanjut
                pencanangan yang telah dilakukan oleh pimpinan instansi
                pemerintah. Proses pembangunan Zona Integritas difokuskan pada
                penerapan program Manajemen Perubahan, Penataan Tatalaksana,
                Penataan Manajemen SDM, Penguatan Pengawasan, Penguatan
                Akuntabilitas Kinerja, dan Peningkatan Kualitas Pelayanan Publik
                yang bersifat konkrit.
              </p>
              <br />
              <p className="text-sm">
                Dalam membangun Zona Integritas, pimpinan instansi pemerintah
                menetapkan satu atau beberapa unit kerja yang diusulkan sebagai
                WBK/WBBM. Pemilihan unit kerja yang diusulkan sebagai WBK/WBBM
                memperhatikan beberapa syarat yang telah ditetapkan,
                diantaranya:
              </p>

              <ul className="list-disc list-inside mt-5">
                <li className="text-sm text-left italic ">
                  Dianggap sebagai unit yang penting / strategis dalam melakukan
                  pelayanan publik
                </li>
                <li className="text-sm text-left italic ">
                  Mengelola sumber daya yang cukup besar, serta
                </li>
                <li className="text-sm text-left italic ">
                  Memiliki tingkat keberhasilan Reformasi Birokrasi yang cukup
                  tinggi di unit tersebut.
                </li>
              </ul>
              <br />

              <p className="text-sm">
                Proses pemilihan unit kerja yang berpotensi sebagai Zona
                Integritas dilakukan dengan membentuk kelompok kerja/tim untuk
                melakukan identifikasi terhadap unit kerja yang berpotensi
                sebagai unit kerja berpredikat menuju WBK/WBBM oleh pimpinan
                instansi. Setelah melakukan identifikasi, kelompok kerja/tim
                mengusulkan unit kerja kepada pimpinan instansi untuk ditetapkan
                sebagai calon unit kerja berpredikat Zona Integritas menuju
                WBK/WBBM. Selanjutnya dilakukan penilaian mandiri (self
                assessment) oleh TPI (Tim Penilai Internal) Tingkat Mabesad dan
                Mabes TNI. Setelah melakukan penilaian, TPI melaporkan kepada
                Pimpinan instansi tentang unit yang akan diusulkan ke
                Kementerian sebagai unit kerja berpredikat Menuju WBK/WBBM.
                Apabila unit kerja yang diusulkan memenuhi syarat sebagai Zona
                Integritas Menuju WBK/WBBM, maka langkah selanjutnya adalah
                penetapan.
              </p>
              <br />
              <p className="text-sm">
                Setelah unit kerja yang diusulkan sebagai Zona Integritas menuju
                WBK/WBBM ditetapkan, maka hal yang selanjutnya dilakukan adalah
                menentukan komponen-komponen yang harus dibangun.
              </p>
              <br />
              <p className="text-sm">
                Terdapat dua jenis komponen yang harus dibangun dalam unit kerja
                terpilih, yaitu komponen pengungkit dan komponen hasil. Di bawah
                ini adalah gambar yang menunjukkan hubungan masing-masing
                komponen dan indikator pembangun komponen.
              </p>
              <div className="w-full aspect-[1172/721] relative cursor-pointer mt-5">
                <Image
                  src={"/assets/wbk-wbbm.png"}
                  alt={"WBK WBBM"}
                  fill={true}
                  sizes={"100%"}
                  priority={true}
                  className="object-cover"
                />
              </div>
              <br />
              <p className="text-sm">
                Melalui model tersebut dapat diuraikan bahwa program Manajemen
                Perubahan, Penataan Tatalaksana, Penataan Manajemen SDM,
                Penguatan Akuntabilitas Kinerja, Penguatan Pengawasan, dan
                Peningkatan Kualitas Pelayanan Publik merupakan komponen
                pengungkit yang diharapkan dapat menghasilkan sasaran
                pemerintahan yang bersih dan bebas KKN serta komponen hasil yang
                berdampak pada peningkatan kualitas pelayanan publik.
              </p>
              <br />
              <p className="text-sm">
                Penilaian terhadap setiap program dalam komponen pengungkit dan
                komponen hasil diukur melalui indikator-indikator yang dipandang
                mewakili program tersebut. Sehingga dengan menilai indikator
                tersebut diharapkan dapat memberikan gambaran pencapaian upaya
                yang berdampak pada pencapaian sasaran.
              </p>
              {data.komponen.map((item, index) => (
                <div key={index} className="my-5">
                  <h1 className="font-semibold text-base md:text-2xl text-blue-900 my-0">
                    {item.jenis}
                  </h1>
                  <p className="text-sm">{item.deskripsi}</p>
                  <table className="w-full my-5">
                    <thead>
                      <tr>
                        <th className="border border-black text-left p-1 text-sm w-4/4">
                          {item.jenis}
                        </th>
                        <th className="border border-black text-left p-1 text-sm w-1/5">
                          Bobot
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.listKomponen.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-black text-left p-1 text-sm">
                            {item.nama}
                          </td>
                          <td className="border border-black text-left p-1 text-sm">
                            {item.bobot}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              <h2 className="font-semibold text-base md:text-2xl text-blue-900">
                Hasil
              </h2>
              {/* <p className="text-sm">{data.hasil}</p> */}
              <p className="text-sm">
                Dalam pembangunan Zona Integritas Menuju Wilayah Bebas dari
                Korupsi dan WBBM, fokus pelaksanaan reformasi birokrasi tertuju
                pada dua sasaran utama, yaitu:
              </p>
              <br />

              <ul className="list-disc list-inside  text-sm">
                <li>
                  Terwujudnya Pemerintahan yang Bersih dan Bebas KKN Sasaran
                  terwujudnya pemerintahan yang bersih dan bebas KKN diukur
                  dengan menggunakan ukuran Nilai persepsi korupsi (survei
                  eksternal) dan Presentase penyelesaian TLHP.
                </li>
                <li>
                  Terwujudnya Peningkatan Kualitas Pelayanan Publik kepada
                  Masyarakat
                </li>
              </ul>
              <br />
              <p className=" text-sm">
                Sasaran Terwujudnya peningkatan kualitas pelayanan publik kepada
                masyarakat diukur melalui nilai persepsi kualitas pelayanan
                (survei eksternal). Dalam pembangunan Zona Integritas pada unit
                kerja, hal-hal yang perlu dilakukan dan menjadi perhatian adalah
              </p>
              <br />
              <ul className="list-disc list-inside  text-sm">
                <li>
                  Membangun komitmen antara Pimpinan dan pegawai dalam
                  pembangunan Zona Integritas;
                </li>
                <li>
                  Memperhatikan dan melengkapi unsur-unsur pembangunan Zona
                  Integritas seperti dijelaskan pada unsur pengungkit;
                </li>
                <li>
                  Melaksanakan survei mandiri terkait pelayanan publik dan
                  persepsi anti korupsi pada unit kerja yang diusulkan
                </li>
                <li>
                  Membuat berbagai inovasi dalam upaya perbaikan pelayanan
                  publik dan pencegahan korupsi;
                </li>
                <li>
                  Melaksanakan program atau kegiatan yang sifatnya bersinggungan
                  langsung dengan masyarakat atau stakeholder;
                </li>
                <li>
                  Membuat strategi komunikasi dalam rangka menginformasikan
                  semua perubahan yang dilakukan oleh unit kerja ke masyarakat;
                </li>
                <li>
                  Melakukan monitoring dan evaluasi secara berkala atas kemajuan
                  yang dilakukan oleh unit kerja yang diusulkan.
                </li>
              </ul>
              <br />
              <h2 className="font-semibold text-base md:text-2xl text-blue-900">
                Catatan
              </h2>
              <p className=" text-sm">{data.catatan}</p>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
