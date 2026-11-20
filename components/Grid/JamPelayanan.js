import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedInView from "../../components/TransitionEffect/AnimatedInView";
import {
  IoIosPartlySunny,
  IoMdCloudyNight,
  IoMdCalendar,
  IoMdTime,
} from "react-icons/io";
import { asset } from "../../helpers/asset";

const servicesx = [
  {
    name: "Pelayanan Poliklinik",
    jadwal: [
      {
        hari: "Senin - Jumat",
        waktu: "08.00 - 14.00 WIB",
      },
      {
        hari: "Sabtu - Minggu",
        waktu: "Libur",
      },
    ],
    link: "/",
  },
  {
    name: "Dokter Spesialis",
    jadwal: [
      {
        hari: "Senin - Jumat",
        waktu: "08.00 - 14.00 WIB",
      },
      {
        hari: "Sabtu - Minggu",
        waktu: "Melalui IGD",
      },
    ],
    link: "/informasi/jadwal-dokter",
  },
  {
    name: "Instalasi Gawat Darurat",
    jadwal: [
      {
        hari: "Setiap Hari",
        waktu: "24 Jam",
      },
    ],
    link: "/fasilitas-layanan/instalasi-gawat-darurat",
  },
  {
    name: "Layanan Lain",
    jadwal: [
      {
        hari: "Hemodialisa",
        waktu: "Senin - Sabtu",
      },
      {
        hari: "Kemoterapi",
        waktu: "Senin - Jumat",
      },
      {
        hari: "Pelayanan Penunjang",
        waktu: "Setiap Hari",
      },
    ],
    link: "/",
  },
];

const services = [
  {
    name: "Pelayanan Poliklinik Spesialisasi",
    jadwal: [
      {
        iconkiri: (
          <IoIosPartlySunny className="text-2xl text-white" size={25} />
        ),
        icontengah: <IoMdCalendar className="text-2xl text-white" size={25} />,
        iconkanan: <IoMdTime className="text-2xl text-white" size={25} />,
        jenis: "Poli Pagi",
        hari: "Senin - Jum'at",
        waktu: "08.00 - 14.00 WIB",
      },
      {
        iconkiri: <IoMdCloudyNight className="text-2xl text-white" size={25} />,
        icontengah: <IoMdCalendar className="text-2xl text-white" size={25} />,
        iconkanan: <IoMdTime className="text-2xl text-white" size={25} />,
        jenis: "Poli Spesialis",
        hari: "Senin - Jum'at",
        waktu: "14.00 - 20.00 WIB",
      },
    ],
    link: "/",
  },
  {
    name: "Layanan Gawat Darurat",
    jadwal: [
      {
        iconkiri: "",
        icontengah: <IoMdTime className="text-2xl text-white" size={25} />,
        iconkanan: "",
        hari: "24 JAM",
        waktu: "",
      },
    ],
    link: "/",
  },
  {
    name: "Layanan Lain & Layanan Unggulan",
    jadwal: [
      {
        iconkiri: "",
        icontengah: <IoMdCalendar className="text-2xl text-white" size={25} />,
        iconkanan: "",
        hari: "Buka Setiap Hari",
        waktu: "",
      },
    ],
    link: "/",
  },
];

export default function JamPelayanan() {
  return (
    <div className="2xl:w-4/5 w-full md:grid grid-cols-2 gap-2 flex flex-col justify-center ">
      <AnimatedInView variant="fade-left" delay={0.20}>
        <div className="container md:grid grid-cols-1 gap-2 mx-auto md:w-11/12 w-full">
          <div className="flex justify-center mt-3">
            <div className="w-full md:flex md:flex-col md:justify-center md:items-center">
              <div className="w-full h-90 aspect-[8/4.5] relative">
                <Image
                  src={asset("/assets/waktu-pelayanan-2026.png")}
                  alt={"Rumah Sakit dr Soepraoen"}
                  fill={true}
                  className="object-cover"
                  priority={true}
                  sizes={"100%"}
                  blurDataURL={asset("/assets/banner.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedInView>
      <AnimatedInView variant="fade-up" delay={0.20}>
        <div className="container grid grid-cols-1 gap-2 mx-auto md:w-11/12 w-full p-2 md:p-0">
          {services.map((service, index) => (
            <div
              className="md:w-12/12 w-full grid grid-cols-1 justify-center gap-1"
              key={index}
            >
              <Link
                href={service.link}
                className="bg-amber-500 w-full p-4 rounded-md text-white cursor-pointer"
                key={index}
              >
                <h6 className="font-semibold text-xl mb-2">{service.name}</h6>
                <div className="gap-2 flex flex-col">
                  {service.jadwal.map((jadwal, index) => (
                    <div
                      key={index}
                      className="flex md:flex-row flex-col w-full justify-center"
                    >
                      <div className="flex md:w-1/3 w-full">
                        <div className="w-1/6">{jadwal.iconkiri}</div>
                        <div className="w-5/6">
                          <p className="text-lg">{jadwal.jenis}</p>
                        </div>
                      </div>
                      <div className="flex md:w-1/3 w-full">
                        <div className="w-1/6">{jadwal.icontengah}</div>
                        <div className="w-5/6">
                          <p className="text-lg">{jadwal.hari}</p>
                        </div>
                      </div>
                      <div className="flex md:w-1/3 w-full">
                        <div className="w-1/6">{jadwal.iconkanan}</div>
                        <div className="w-5/6">
                          <p className="text-lg">{jadwal.waktu}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </AnimatedInView>
    </div>
  );
}
