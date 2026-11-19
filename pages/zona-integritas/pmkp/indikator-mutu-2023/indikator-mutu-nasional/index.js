import { useRouter } from "next/router";
import { React, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarPMKP from "../../../../../components/Navbar/NavbarPMKP";
import BannerRS from "../../../../../components/Banner/BannerRS";

const content = [
    {
        deskripsi:
            "Semester 1",
            indikator: [
                {
                nama: "Indikator Mutu Nasional 2023 - Semester I",
                image: "/assets/pmkp/indikator/IMN-SMT-I.png",
                grafik: "/assets/pmkp/indikator/GRAFIK-IMN-SMT-1.png",
                },
            ],
    },
    {
        deskripsi:
            "Semester II",
            indikator: [
                {
                nama: "Indikator Mutu Nasional 2023 - Semester II",
                image: "/assets/pmkp/indikator/IMN-SMT-II.png",
                grafik: "/assets/pmkp/indikator/GRAFIK-IMN-SMT-2.png",
                },
                
            ],
    },
];



export default function Indikator() {
    const [choosenIndikator, setChoosenIndikator] = useState({
        nama: "kepatuhan hand hygiene",
        image: "/assets/pmkp/indikator/prioritas-hand-hygiene.png",
    });

    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);
  
    const handleReadMoreClick1 = () => {
      setShowDetails1(!showDetails1);
      setShowDetails2(false); // close the other details if open
    };
  
    const handleReadMoreClick2 = () => {
      setShowDetails2(!showDetails2);
      setShowDetails1(false); // close the other details if open
    };


  return (
    <>
      {/* image banner */}
      <BannerRS title="Indikator Mutu" url="/profil/denah-rumah-sakit" />
      {/* image banner */}

      <NavbarPMKP
        active="Indikator Mutu Nasional 2023"
        url="/zona-integritas/pmkp/indikator-mutu-2023/indikator-mutu-nasional"
      />

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className="text-xs font-light">Zona Integritas</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className="text-xs font-light">PMKP</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pmkp/indikator-mutu">
              <h1 className="text-xs font-light">Indikator Mutu</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Indikator Mutu Nasional
            <br></br>
            2023
          </h1>
          {content.map((item, index) => (
          <div className="md:w-11/12 w-full my-5 flex-col justify-center text-center"  key={index}>
            <p className="font-bold text-lg">- {item.deskripsi} -</p>
            <div className="w-full grid md:grid-cols-2 xl:grid-cols-1 grid-cols-1">
              {item.indikator.map((item, index) => (
                <label
                htmlFor="modal-indikator"
                className="w-full flex flex-col items-center mt-5 cursor-pointer"
                key={index}
                onClick={() => setChoosenIndikator(item)}
                >
                  <div className="w-full  cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.nama}
                      width="1000"
                      height="0"
                      sizes="100vw"
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <h1 className="font-bold text-center ">
                    {item.nama}
                  </h1>
                </label>
              ))}
            </div>
            <div className="flex justify-center mt-5">
              <button
                className="text-blue-800 font-bold hover:underline"
                onClick={handleReadMoreClick2}
              >
                Detail Grafik 
              </button>
            </div>
            {showDetails2 && (               
              <div className="mt-10 text-sm">
                {item.indikator.map((item, index) => (
                  <div className="w-full cursor-pointer" key={index}>
                    <Image
                      src={item.grafik}
                      alt={item.nama}
                      width="1000"
                      height="0"
                      sizes="100vw"
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}
            {/* <div className="w-full grid grid-cols-2 gap-2 my-5">
              <div className="flex justify-center mt-5">
                <button
                  className="text-blue-800 font-bold hover:underline"
                  onClick={handleReadMoreClick2}
                >
                  Detail Grafik
                </button>
              </div>
              <div className="mt-5 text-lg">
                  {item.indikator.map((item, index) => (
                    <Link href={item.pdf} className="" key={index}>
                      <h2 className="text-blue-800 font-bold hover:underline">Laporan</h2>
                    </Link>
                  ))}
              </div>
              {showDetails2 && (
                <div className="mt-10 text-sm">
                  {item.indikator.map((item, index) => (
                    <label
                      htmlFor="modal-indikator"
                      className="w-full flex flex-col items-center mt-5 cursor-pointer"
                      key={index}
                      onClick={() => setChoosenIndikator(item)}
                      >
                      <div className="w-full cursor-pointer">
                        <Image
                          src={item.grafik}
                          alt={item.nama}
                          width="1000"
                          height="0"
                          sizes="100vw"
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div> */}
          </div>
          ))}
        </div>
      </div>
      {/* content */}

      {/* Modal indikator */}
      <input type="checkbox" id="modal-indikator" className="modal-toggle" />
      <label htmlFor="modal-indikator" className="modal cursor-pointer">
        <label
          className="modal-box relative bg-white max-w-4xl w-1/2"
          htmlFor=""
        >
           <div className="flex justify-center">
              <Image
                src={choosenIndikator.image}
                alt={choosenIndikator.nama}
                width="1000"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
          </div>
          <h3 className="text-base font-semibold text-center">
            {choosenIndikator.nama}
          </h3>
        </label>
      </label>
      {/* Modal indikator */}
    </>
  );
}
