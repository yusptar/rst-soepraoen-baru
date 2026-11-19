import { HiOutlineUserGroup } from "react-icons/hi";
import { FaMotorcycle, FaMosque } from "react-icons/fa";
import { MdFoodBank, MdLocalAtm } from "react-icons/md";
import { TbBuildingStore } from "react-icons/tb";
import { RiBuilding4Fill } from "react-icons/ri";

export const listFasilitasUmum = [
  {
    id: 1,
    title: "Parkir Kendaraan Bermotor yang Luas dengan CCTV",
    image: "/assets/fasilitas-umum/parkir-motor.png",
    icon: <FaMotorcycle className="text-2xl text-gray-500" size={35} />,
  },
  {
    id: 2,
    title: "Ruang tunggu yang luas tanpa berdesakan",
    image: "/assets/fasilitas-umum/ruang-tunggu.png",
    icon: <HiOutlineUserGroup className="text-2xl text-gray-500" size={35} />,
  },
  {
    id: 3,
    title: "Pujasera & Kantin yang bersih dan nyaman",
    image: "/assets/fasilitas-umum/kantin.png",
    icon: <MdFoodBank className="text-2xl text-gray-500" size={35} />,
  },
  {
    id: 4,
    title: "Gedung Serbaguna",
    image: "/assets/fasilitas-umum/atm-center.png",
    icon: <RiBuilding4Fill className="text-2xl text-gray-500" size={35} />,
  },
  {
    id: 5,
    title: "Supermarket & Layanan FotoCopy",
    image: "/assets/fasilitas-umum/atm-center.png",
    icon: <TbBuildingStore className="text-2xl text-gray-500" size={35} />,
  },
  {
    id: 6,
    title: "Masjid",
    image: "/assets/fasilitas-umum/masjid.png",
    icon: <FaMosque className="text-2xl text-gray-500" size={35} />,
  },
];
