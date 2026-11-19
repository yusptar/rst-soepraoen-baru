import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HTTP } from "../../../../services/NetworkServices";

const listGallery = [
  {
    image: "/assets/unit/hemodialisa-1.jpg",
  },
  {
    image: "/assets/unit/hemodialisa-2.jpg",
  },
  {
    image: "/assets/unit/hemodialisa-3.jpg",
  },
];

const listManfaat = [
  {
    title: "Mendiagnosis gangguan tulang, seperti tumor tulang dan fraktur",
  },
  {
    title: "Menentukan lokasi tumor, infeksi, atau gumpalan darah.",
  },
  {
    title:
      "Sebagai bagian dari prosedur, seperti operasi, biopsi, dan terapi radiasi.",
  },
  {
    title:
      "Mendeteksi dan memantau kondisi penyakit seperti kanker, penyakit jantung, nodul paru, dan massa hati.",
  },
  {
    title: "Mendeteksi cedera internal atau pendarahan internal.",
  },
];
export default function CTScan() {
  const [listDoctors, setListDoctors] = useState([]);

  useEffect(() => {
    const fetchSpesialis = async () => {
      const res = await HTTP.GET("/spesialis/Sp.Ra");
      setListDoctors(res.data.result);
    };

    fetchSpesialis();
  }, []);

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
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Layanan Unggulan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/layanan-unggulan/">
              <h1 className="text-xs font-light">Urologi Terpadu</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={"/assets/unggulan/eswl-banner.jpg"}
                alt={"Urologi Terpadu"}
                // fill={true}
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-center">
            <p className="text-justify mb-5">
              Extracorporeal shock wave lithotripsy (ESWL) adalah tindakan untuk
              menangani penyakit batu ginjal. Prosedurnya akan memecah batu yang
              ditembakkan dari luar tubuh dengan menggunakan gelombang kejut,
              yang dapat memecah batu menjadi pecahan yang halus. Dengan begitu,
              pecahan tersebut dapat keluar bersama dengan air seni. Melalui
              ESWL ini, batu ginjal atau kumpulan senyawa mineral dan garam yang
              menumpuk di dalam ginjal bisa dibuang tanpa pembedahan
              (noninvasif). Tindakan ESWL ini menggunakan alat yang dapat
              memancarkan gelombang kejut. Gelombang kejut ini akan
              dikonsentrasikan di sekitar ginjal. Tujuannya untuk menghancurkan
              batu ginjal menjadi pecahan-pecahan yang lebih kecil. Prosedur ini
              terbilang cukup efektif dalam menghancurkan batu ginjal, dengan
              diameter kurang dari dua sentimeter. Pembuangan endapan
              kristal-kristal yang berdiameter lebih dari dua sentimeter akan
              disarankan melalui prosedur penanganan batu ginjal lainnya.
            </p>
          </div>
          <div className="md:w-11/12 w-full text-left">
            {/* <h1 className="text-xl font-bold w-full mt-5">Galeri :</h1> */}
          </div>
          {/* <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            {listGallery.map((item, index) => (
              <div
                className="w-full aspect-[6/3] relative rounded-md cursor-pointer mt-5 md:mt-0"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={"Unit Hemodialisa Rumah Sakit Tk.II dr. Soepraoen"}
                  priority={true}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
