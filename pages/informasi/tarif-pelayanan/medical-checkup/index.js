import { React, useState } from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarTarifPelayanan from "../../../../components/Navbar/NavbarTarifPelayanan";
import { listPaket } from "../../../../components/List/listPaket";
import ModalDetailMCU from "../../../../components/Modal/DetailMCU";
import { rupiah } from "../../../../helpers/CurrencyFormatter";
import BannerPoli from "../../../../components/Banner/BannerPoli";
import Link from "next/link";
import Image from "next/image";
import { asset } from "../../../../helpers/asset";

const listLayananOnkologi = [
  {
    id: 1,
    image: asset("/assets/unggulan/radiologi.jpg"),
    description: "Radiologi",
    alt: "Radiologi",
    link: "/fasilitas-layanan/layanan-unggulan/radiologi",
  },
  {
    id: 2,
    image: asset("/assets/unggulan/laboratorium.jpg"),
    description: "Laboratorium",
    alt: "Laboratorium",
    link: "/fasilitas-layanan/layanan-unggulan/laboratorium",
  },
];

export default function MedicalCheckup() {
  const [paket, setPaket] = useState(
    listPaket[0] || {
      nama: "",
      keterangan: "",
      biaya: 0,
      listLayanan: [],
      pemeriksaanLab: [],
    }
  );
  return (
    <>
      {/* image banner */}
      <BannerRS title="Informasi Tarif Pelayanan" />
      {/* image banner */}

      {/* Navigation Tab */}
      <NavbarTarifPelayanan
        active="Medical Checkup"
        url="/informasi/tarif-pelayanan/medical-checkup"
      />
      {/* Navigation Tab */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <BannerPoli
              banner={asset("/assets/unggulan/mcu.jpg")}
              nama_poli="Medical Checkup"
            />
            <p className="text-justify mt-4">
              Rumah Sakit Tk.II dr. Soepraoen telah berpengalaman dalam
              pelayanan kesehatan dan senantiasa mendukung upaya pencegahan
              serta deteksi dini penyakit melalui pemeriksaan Medical Check Up.
              Medical Check Up Rumah Sakit Tk.II dr. Soepraoen menyediakan
              beragam paket pemeriksaan kesehatan yang dikemas sesuai dengan
              pilihan Anda. Didukung oleh tenaga ahli dan berpengalaman di
              bidangnya masing-masing, serta teknologi terkini, sehingga mampu
              memberikan gambaran kondisi kesehatan anda.
            </p>
            <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
              Tarif Medical Checkup
            </h1>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
              {listPaket.map((paket, index) => (
                <div
                  className="rounded-md bg-white shadow-lg flex flex-col p-2"
                  key={index}
                >
                  <h3 className="text-lg">{paket.nama}</h3>
                  <h4 className="text-xs"> {paket.keterangan}</h4>
                  <h4 className="text-base font-semibold my-3">
                    {paket.biaya == "-" ? "-" : rupiah(paket.biaya)}
                  </h4>
                  <div className="w-full bg-blue-100 mb-3 rounded-md p-2">
                    <p className="text-xs">
                      {paket.listLayanan.length > 0
                        ? `${paket.listLayanan.length} Parameter Pemeriksaan`
                        : `${paket.jenisLayanan.length} Pilihan Jenis Layanan`}
                    </p>
                    <p className="text-xs">
                      {paket.pemeriksaanLab.length > 0
                        ? `${paket.pemeriksaanLab.length} Parameter Pemeriksaan Lab`
                        : "-"}
                    </p>
                  </div>
                  <label
                    className="btn bg-blue-900 text-white"
                    htmlFor="modal-medical-checkup"
                    onClick={() => setPaket(paket)}
                  >
                    Detail
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 md:flex justify-center w-full md:w-11/12">
            <div className="flex items-center justify-center w-full">
              <div className="grid grid-cols-2 gap-3 items-center justify-around w-full ">
                {listLayananOnkologi.map((information, index) => (
                  <Link
                    href={information.link}
                    className="
              w-full
              rounded-md
              overflow-hidden 
              shadow-lg 
              bg-white 
              hover:bg-blue-900 
              hover:text-white 
              text-blue-900 
              hover:shadow-2xl 
              md:cursor-pointer 
              md:h-[20rem]"
                    key={index}
                  >
                    <div className="w-full aspect-[4/3] relative rounded-md cursor-pointer h-3/4">
                      <Image
                        src={information.image}
                        alt={information.alt}
                        fill={true}
                        priority={true}
                        className="object-cover rounded-t-md"
                        sizes={"100%"}
                      />
                    </div>

                    <div className="px-6 py-2 text-center h-1/4 flex flex-col justify-center">
                      <div className="font-medium xl:text-xl lg:text-base text-sm mb-2 ">
                        {information.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}

      {/* Modal Detail Paket MCU */}
      <ModalDetailMCU paket={paket} rupiah={rupiah} />
      {/* Modal Detail Paket MCU */}
    </>
  );
}
