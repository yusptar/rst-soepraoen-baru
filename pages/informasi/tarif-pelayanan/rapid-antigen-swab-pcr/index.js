import React from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarTarifPelayanan from "../../../../components/Navbar/NavbarTarifPelayanan";
import { rupiah } from "../../../../helpers/CurrencyFormatter";

const listSWABPCR = [
  {
    nama: "SWAB Antigen",
    tarif: "90000",
    jadwal: [
      {
        hari: "Senin - Jumat",
        jam: "08.00 - 12.00 WIB",
      },
      {
        hari: "Sabtu",
        jam: "09.00 - 12.00 WIB",
      },
      {
        hari: "Minggu/Hari Libur",
        jam: "Tutup",
      },
    ],
    hasil: "1 Jam",
  },
  {
    nama: "SWAB Antibodi",
    tarif: "80000",
    jadwal: [
      {
        hari: "Senin - Jumat",
        jam: "08.00 - 12.00 WIB",
      },
      {
        hari: "Sabtu",
        jam: "09.00 - 12.00 WIB",
      },
      {
        hari: "Minggu/Hari Libur",
        jam: "Tutup",
      },
    ],
    hasil: "1 Jam",
  },
  {
    nama: "SWAB RT PCR",
    tarif: "275000",
    jadwal: [
      {
        hari: "Senin - Jumat",
        jam: "08.00 - 10.00 WIB",
      },
      {
        hari: "Sabtu",
        jam: "09.00 - 10.00 WIB",
      },
      {
        hari: "Minggu/Hari Libur",
        jam: "Tutup",
      },
    ],
    hasil: "Pagi SWAB, sore keluar / di atas jam 10.00 WIB, keluar H+1",
  },
];

const ketentuan = [
  "Sudah terkoneksi dengan NAR & aplikasi Peduli Lindungi",
  "Hasil bisa dikirim melalui Whatsapp dengan format PDF (Piket Lab Patologi Klinik : 0811 327 7304)",
  "Pendaftaran dan pembayaran dilakukan di bagian administrasi pasien rawat jalan RST dr. Soepraoen",
  "Membawa Fotokopi KTP 2 lembar",
];

export default function RapidAntigenSWABPCR() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Informasi Tarif Pelayanan" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarTarifPelayanan
        active="RAPID Antigen & SWAB PCR"
        url="/informasi/tarif-pelayanan/rapid-antigen-swab-pcr"
      />
      {/* Navigation Tab */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
              Tarif RAPID Antigen & SWAB PCR
            </h1>

            <div className="grid xl:grid-cols-3 grid-cols-1 gap-2">
              {listSWABPCR.map((item, index) => (
                <div
                  key={index}
                  className="shadow-md rounded-md flex flex-col items-center border  pt-5 mb-5"
                >
                  <h1 className="font-semibold text-2xl text-blue-900 text-center">
                    {item.nama}
                  </h1>
                  <h1 className="font-semibold text-2xl text-blue-900 text-center">
                    {rupiah(item.tarif)}
                  </h1>
                  <div className="flex flex-col justify-center items-center w-full p-5">
                    {item.jadwal.map((jadwal, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center w-full"
                      >
                        <h1 className="font-light text-lg text-blue-900 text-center">
                          {jadwal.hari}
                        </h1>
                        <h1 className="font-light text-lg text-blue-900 text-center">
                          {jadwal.jam}
                        </h1>
                      </div>
                    ))}
                    <hr className="w-full border-1 border-blue-900 my-2" />
                    <h1 className="font-semibold text-lg text-blue-900 text-center">
                      Hasil{" "}
                    </h1>
                    <h1 className="font-normal text-lg text-blue-900 text-center">
                      {item.hasil}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full">
              <h1 className="font-semibold text-xl text-blue-900 text-left my-5">
                Keterangan
              </h1>

              <ul className="list-disc ml-5">
                {ketentuan.map((item, index) => (
                  <li
                    key={index}
                    className="font-light text-sm text-blue-900 text-left"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <hr className="my-5" />
              <p className="text-justify text-sm text-gray-400">
                *PCR atau polymerase chain reaction adalah pemeriksaan
                laboratorium untuk mendeteksi keberadaan material genetik dari
                sel, bakteri, atau virus. Saat ini, PCR juga digunakan untuk
                memastikan apakah seseorang terinfeksi penyakit COVID-19 atau
                tidak. Material genetik yang ada di dalam setiap sel mahkluk
                hidup, termasuk di dalam bakteri atau virus, bisa berupa DNA
                (deoxyribonucleic acid) atau RNA (ribonucleic acid). Kedua jenis
                materi genetik ini dibedakan dari jumlah rantai yang ada di
                dalamnya.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
