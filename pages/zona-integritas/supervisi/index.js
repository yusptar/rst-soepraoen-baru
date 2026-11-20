import React from "react";
import Link from "next/link";
import YouTube from "react-youtube";
import { asset } from "../../../helpers/asset";

export default function Supervisi() {
  const listKapuskesad = [
    { 
      image: asset("/assets/supervisi/kapuskesad/57.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/16.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/58.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/23.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/19.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/26.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/31.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/34.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/36.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/7.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/42.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/44.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/52.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/48.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/49.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/13.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/15.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/14.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/1.jpg"), 
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/2.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/3.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/67.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/68.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/65.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/6.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/61.jpg"),
    },
    { 
      image: asset("/assets/supervisi/kapuskesad/59.jpg"),
    },
  ];

  const listPangdamV = [
    { 
      image: asset("/assets/1-pangdam.jpeg"),
    },
    { 
      image: asset("/assets/2-pangdam.jpeg"),
    },
    { 
      image: asset("/assets/3-pangdam.jpeg"),
    },
  ];

  const listsupervisiKAPUSKESAD = [
    { 
      image: asset("/assets/1-kapuskesad.jpeg"),
    },
    { 
      image: asset("/assets/2-kapuskesad.jpeg"),
    },
    { 
      image: asset("/assets/3-kapuskesad.jpeg"),
    },
  ];

  const listItjenKemhan = [
    { 
      image: asset("/assets/supervisi/2.jpg"),
    },
    { 
      image: asset("/assets/supervisi/1.jpg"),
    },
    { 
      image: asset("/assets/supervisi/7.jpg"),
    },
    { 
      image: asset("/assets/supervisi/4.jpg"),
    },
    { 
      image: asset("/assets/supervisi/5.jpg"),
    },
    { 
      image: asset("/assets/supervisi/3.jpg"),
    },
  ];
  
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/zona-integritas/pembangunan-zi">
              <h1 className=" text-xs font-light">Bidang 4</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/zona-integritas/pembangunan-zi">
              <h1 className=" text-xs font-light">
                Supervisi
              </h1>
            </Link>
          </div>
          
          {/* PEMBATAS */}
          <div className="2xl:w-12/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-left my-2">
              Supervisi Pangdam V/Brawijaya
            </h1>
            <Link className="font-semibold text-base md:text-1xl text-black text-left hover:underline" href="https://id.wikipedia.org/wiki/Rafael_Granada_Baay" target="_blank">
              Mayor Jenderal TNI Rafael Granada Baay, S.E., M.M.
            </Link>
          </div>
          <div className="2xl:w-auto w-full mb-5 grid md:grid-cols-3 gap-2 justify-center mt-2">
            {listPangdamV.map((item, index) => (
              <div className="flex justify-center mt-5">
                <div key={index} className="w-full md:w-4/4 mr-2">
                  <img
                      src={item.image}
                      alt="image"
                      className=" w-full auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* PEMBATAS */}
          <div className="2xl:w-12/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-left my-2">
              Supervisi KAPUSKESAD
            </h1>
            <Link className="font-semibold text-base md:text-1xl text-black text-left hover:underline" href="https://id.wikipedia.org/wiki/Sukirman_(militer)" target="_blank">
              Mayor Jenderal TNI dr. Sukirman, Sp.KK., M.Kes., FINSDV., FAADV
            </Link>
          </div>
          <div className="2xl:w-auto w-full mb-5 grid md:grid-cols-3 gap-2 justify-center mt-2">
            {listsupervisiKAPUSKESAD.map((item, index) => (
              <div className="flex justify-center mt-5">
                <div key={index} className="w-full md:w-4/4 mr-2">
                  <img
                      src={item.image}
                      alt="image"
                      className=" w-full auto"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* PEMBATAS */}
          <div className="2xl:w-12/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-left my-2">
              Audit Kinerja TA 2024 oleh Itjen Kemhan RI
            </h1>
          </div>
          <div className="2xl:w-auto w-full mb-5 grid md:grid-cols-3 gap-2 justify-center mt-2">
            {listItjenKemhan.map((item, index) => (
              <div className="flex justify-center mt-5">
                <div key={index} className="w-full md:w-4/4 mr-2">
                  <img
                      src={item.image}
                      alt="image"
                      className=" w-full auto"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="2xl:w-11/12 w-full my-5 text-justify">
            <div className="flex justify-center mt-5">
              <div className="w-full md:w-4/4 mr-2">
                <img
                    src={asset("/assets/supervisi/6.jpg")}
                    alt="image"
                    className=" w-full auto"
                />
              </div>
              <div className="w-full md:w-244 ml-2">
                <img
                    src={asset("/assets/supervisi/8.jpg")}
                    alt="image"
                    className=" w-full auto"
                />
              </div>
            </div>
          </div>

          {/* PEMBATAS */}
          <div className="2xl:w-12/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-left my-2">
              Kunjungan Kerja KAPUSKESAD 
            </h1>
            <Link className="font-semibold text-base md:text-1xl text-black text-left hover:underline" href="https://id.wikipedia.org/wiki/Sugiarto_(dokter)" target="_blank">
              Mayor Jenderal TNI dr. Sugiarto, Sp.PD., K.R., M.A.R.S., FINASIM.
            </Link>
          </div>
          <div className="2xl:w-auto w-full mb-5 grid md:grid-cols-3 gap-2 justify-center mt-2">
            {listKapuskesad.map((item, index) => (
              <div className="flex justify-center mt-5">
                <div key={index} className="w-full md:w-4/4 mr-2">
                  <img
                      src={item.image}
                      alt="image"
                      className=" w-full auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
