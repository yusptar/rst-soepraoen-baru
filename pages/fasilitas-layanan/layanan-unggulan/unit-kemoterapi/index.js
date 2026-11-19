import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import "dayjs/locale/id";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("id");

const listGallery = [
  {
    image: "/assets/unit/kemoterapi-1.jpg",
  },
  {
    image: "/assets/unit/kemoterapi-2.jpg",
  },
  {
    image: "/assets/unit/kemoterapi-3.jpg",
  },
];

export default function UnitKemoterapi() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-1">/</span>

            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Layanan Unggulan</h1>
            </Link>
            <span className="text-xs font-light mx-1">/</span>
            <Link href="/fasilitas-layanan/layanan-unggulan/">
              <h1 className="text-xs font-light">Unit Kemoterapi</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unit/KEMOTERAPI.jpeg"}
                alt={"Unit Kemoterapi"}
                fill={true}
                priority={true}
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div className="md:w-11/12 w-full text-justify">
            <p>
              Unit Kemoterapi Rumah Sakit Tk.II dr. Soepraoen memberikan
              pelayanan untuk pasien BPJS, asuransi, dan pasien swasta, Ruang
              kemoterapi terletak di lantai 1 dilengkapi dengan 10 tempat tidur
              dengan ruang ber-AC yang nyaman. Pelayanan diberikan oleh tenaga
              medis yang berpengalaman serta perawat yang terlatih dibawah
              pengawasan dokter spesialis yang profesional, pencampuran obat
              kemoterapi menggunakan biosafety cavinet dan dilakukan oleh
              apoteker terlatih.
            </p>
          </div>
          <div className="md:w-11/12 w-full text-left">
            <h1 className="text-xl font-bold w-full mt-5">Galeri :</h1>
          </div>
          <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            {listGallery.map((item, index) => {
              return (
                <div
                  className="w-full aspect-[6/3] relative rounded-md cursor-pointer mt-5 md:mt-0"
                  key={index}
                >
                  <Image
                    src={item.image}
                    alt={"Unit Kemoterapi RS Tk.II dr. Soepraoen"}
                    fill={true}
                    sizes={"50%"}
                    priority={true}
                    className="object-cover rounded-md"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
