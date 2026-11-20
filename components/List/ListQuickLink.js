import { RiStethoscopeLine, RiServiceLine } from "react-icons/ri";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { AiOutlineMobile, AiFillMedicineBox } from "react-icons/ai";
import { FaHospitalUser } from "react-icons/fa";
import { TbZoomMoney } from "react-icons/tb";
import { IoMdBed } from "react-icons/io";
import { MdBookOnline } from "react-icons/md";
import Image from "next/image";
import { asset } from "../../helpers/asset";

export const listQuickLinks = [
  {
    id: 1,
    name: "Pendaftaran Online (BPJS)",
    link: "https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id&gl=US&pli=1",
    icon: (
      <div className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full">
        <AiOutlineMobile className="text-2xl text-white" size={35} />
      </div>
    ),
    description: "Pendaftaran Online Melalui Mobile JKN",
  },
  {
    id: 2,
    name: "Pendaftaran Online",
    link: "/informasi/pendaftaran",
    icon: (
      <div className="flex items-center justify-center w-16 h-16 text-white bg-green-900 rounded-full">
        <MdBookOnline className="text-2xl text-white" size={35} />
      </div>
    ),
    description: "Pendaftaran Pasien Online Umum & Asuransi Lain",
  },
  {
    id: 3,
    name: "Pendaftaran Offline",
    link: "/informasi/pendaftaran#anjungan",
    icon: (
      <div className="flex items-center justify-center w-16 h-16 text-white bg-yellow-900 rounded-full">
        <FaHospitalUser className="text-2xl text-white" size={35} />
      </div>
    ),
    description: "Pendaftaran Langsung Datang di Rumah Sakit",
  },
  {
    id: 4,
    name: "Tarif Layanan",
    link: "/informasi/tarif-pelayanan/rawat-jalan",
    icon: (
      <div className="flex items-center justify-center w-16 h-16 text-white bg-black rounded-full">
        <TbZoomMoney className="text-2xl text-white" size={35} />
      </div>
    ),
    description: "Informasi Tarif Layanan Rumah Sakit",
  },
  {
    id: 5,
    name: "Ketersediaan Kamar",
    link: "/informasi/ketersediaan-kamar",
    icon: (
      <div className="flex items-center justify-center w-16 h-16 text-white bg-red-900 rounded-full">
        <IoMdBed className="text-2xl text-white" size={35} />
      </div>
    ),
    description: "Informasi Ketersediaan Kamar",
  },
  {
    id: 6,
    name: "Jadwal Dokter",
    link: "/informasi/jadwal-dokter",
    icon: (
      <div className="flex items-center justify-center w-16 h-16 text-white bg-purple-900 rounded-full">
        <RiStethoscopeLine className="text-2xl text-white" size={35} />
      </div>
    ),
    description: "Informasi Jadwal Dokter",
  },
  {
    id: 7,
    name: "Standar Pelayanan",
    link: "/informasi/standar-pelayanan",
    icon: (
      <div className="flex items-center justify-center w-16 h-16 text-white bg-indigo-500 rounded-full">
        <RiServiceLine className="text-2xl text-white" size={35} />
      </div>
    ),
    description: "Informasi Standar Pelayanan",
  },
  {
    id: 8,
    name: "Layanan Unggulan",
    link: "/fasilitas-layanan/layanan-unggulan",
    icon: (
      <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full">
        <AiFillMedicineBox className="text-2xl text-white" size={35} />
      </div>
    ),
    description: "Informasi Layanan Pada Rumah Sakit",
  },
  {
    id: 9,
    name: "HomeCare",
    link: "/fasilitas-layanan/fasilitas-umum/homecare",
    icon: (
      <div className="flex items-center justify-center w-20 h-20 text-white  rounded-full">
         <Image
            src={asset("/assets/logo-homecare.png")}
            alt="homecare"
            width={400}
            height={500}
            priority={true}
            className="flex justify-center"
          />      
      </div>
    ),
    description: "Perawatan Kesehatan di Rumah",
  },
  {
    id: 10,
    name: "Konsultasi Online",
    link: "https://play.google.com/store/apps/details?id=com.rstds.halosoepraoen&pcampaignid=web_share",
    icon: (
      <div className="flex items-center justify-center w-20 h-20 text-white  rounded-full">
         <Image
            src={asset("/assets/logo-konsultasi-online.png")}
            alt="homecare"
            width={400}
            height={500}
            priority={true}
            className="flex justify-center"
          />      
      </div>
    ),
    description: "Konsultasi dengan dokter secara online",
  },
];
