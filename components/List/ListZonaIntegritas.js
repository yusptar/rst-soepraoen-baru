import {
  FaHandshake,
  FaProjectDiagram,
  FaUsersCog,
  FaChartLine,
  FaShieldAlt,
  FaStar
} from "react-icons/fa";

export const listZonaIntegritas = [
  {
    id: 1,
    title: "Perubahan Budaya Kerja",
    link: "/zona-integritas/bidang-1",
    icon: <FaHandshake className="text-white" size={25} />,
    color: "bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500",
    content:
      "Mewujudkan budaya kerja yang berintegritas, profesional, dan berorientasi pelayanan publik.",
  },
  {
    id: 2,
    title: "Mekanisme Kerja Satuan",
    link: "/zona-integritas/bidang-2",
    icon: <FaProjectDiagram className="text-white" size={25} />,
    color: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500",
    content:
      "Peningkatan efisiensi dan efektivitas pelaksanaan tugas melalui penataan sistem dan prosedur kerja.",
  },
  {
    id: 3,
    title: "Penataan Sistem Manajemen SDM",
    link: "/zona-integritas/bidang-3",
    icon: <FaUsersCog className="text-white" size={25} />,
    color: "bg-gradient-to-br from-yellow-400 via-orange-300 to-amber-500",
    content:
      "Mewujudkan SDM yang profesional melalui pengembangan kompetensi dan sistem merit.",
  },
  {
    id: 4,
    title: "Penguatan Akuntabilitas Satuan",
    link: "/zona-integritas/bidang-4",
    icon: <FaChartLine className="text-white" size={25} />,
    color: "bg-gradient-to-br from-orange-400 via-rose-400 to-red-500",
    content:
      "Meningkatkan kinerja satuan yang terukur dan akuntabel melalui perencanaan dan pelaporan kinerja yang baik.",
  },
  {
    id: 5,
    title: "Penguatan Pengawasan",
    link: "/zona-integritas/bidang-5",
    icon: <FaShieldAlt className="text-white" size={25} />,
    color: "bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500",
    content:
      "Mewujudkan satuan yang bersih dan bebas dari KKN melalui sistem pengawasan internal yang efektif.",
  },
  {
    id: 6,
    title: "Peningkatan Pelayanan Kualitas Prajurit dan atau Masyarakat",
    link: "/zona-integritas/bidang-6",
    icon: <FaStar className="text-white" size={25} />,
    color: "bg-gradient-to-br from-red-500 via-pink-500 to-yellow-400",
    content:
      "Meningkatkan kualitas pelayanan publik kepada prajurit dan masyarakat secara prima dan transparan.",
  },
];
