import { React, useEffect, useState } from "react";
import { HTTP } from "../../../services/NetworkServices";
import Link from "next/link";
import BannerRS from "../../../components/Banner/BannerRS";
import Head from "next/head";

export default function Contact() {
  const [listKamar, setListKamar] = useState([]);

  useEffect(() => {
    fetchKamar();
  }, []);

  const fetchKamar = async () => {
    const res = await HTTP.GET("/kamar/kelas");
    setListKamar(res.data.result);
  };
  return (
    <>
      <Head>
        <title>Ketersediaan Kamar</title>
      </Head>
      {/* image banner */}
      <BannerRS title="Ketersediaan Kamar" url="/profil/denah-rumah-sakit" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/">
              <h1 className="text-xs font-light">Dashboard</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/informasi/ketersediaan-kamar">
              <h1 className="text-xs font-light">Informasi</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/informasi/ketersediaan-kamar">
              <h1 className="text-xs font-light">Ketersediaan Kamar</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full my-5 grid md:grid-cols-4 grid-cols-1 gap-4 justify-center">
            {listKamar
              .sort((a, b) => {
                // SUPER VVIP selalu di atas
                if (a.kelas === "SUPER VVIP") return -1;
                if (b.kelas === "SUPER VVIP") return 1;
                return 0; // selain itu urut default (tetap sesuai data awal)
              })
              .map((kamar, index) => (
                <div
                  className="rounded-md bg-white shadow-lg flex flex-col p-3 border"
                  key={index}
                >
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-xl text-blue-900">
                      {kamar.kelas}
                    </h1>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-blue-900">Total : {kamar.jml_kamar}</h1>
                  </div>
                  <div className="w-full flex justify-center gap-2 mb-2">
                    <div className="bg-slate-200 w-full text-center rounded-md flex flex-col justify-between p-2">
                      <h1>Kamar Tersedia</h1>
                      <p className="text-2xl font-semibold">
                        {kamar.kamar_kosong}
                      </p>
                    </div>
                    <div className="bg-slate-200 w-full text-center rounded-md flex flex-col justify-between p-2">
                      <h1>Kamar Terisi</h1>
                      <p className="text-2xl font-semibold">{kamar.kamar_isi}</p>
                    </div>
                  </div>
                  <Link
                    className="w-full bg-blue-900 rounded-md text-white py-2 cursor-pointer border btn"
                    href={"ketersediaan-kamar/" + kamar.kelas}
                  >
                    Detail
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* content */}
    </>
  );
}
