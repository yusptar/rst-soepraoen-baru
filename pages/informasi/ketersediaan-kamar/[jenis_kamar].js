import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import { HTTP } from "../../../services/NetworkServices";
import Link from "next/link";
import { rupiah } from "../../../helpers/CurrencyFormatter";

export default function Spesialis() {
  const router = useRouter();
  const { jenis_kamar } = router.query;

  const [listKamar, setlistKamar] = useState([]);

  useEffect(() => {
    const fetchSpesialis = async () => {
      const res = await HTTP.GET("/kamar/kelas/" + jenis_kamar);
      setlistKamar(res.data.result);
    };
    if (jenis_kamar) {
      fetchSpesialis();
    }
  }, [jenis_kamar]);

  return (
    <>
      {/* image banner */}
      <BannerRS
        title={
          // capitalize first letter for each word
          "Kelas Kamar " + jenis_kamar
        }
      />
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
            <span className="text-xs font-light mx-2">/</span>
            <Link href={"/informasi/ketersediaan-kamar/" + jenis_kamar}>
              <h1 className="text-xs font-light">Kamar {jenis_kamar}</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full my-5 grid md:grid-cols-4 grid-cols-1 gap-4 justify-center">
            {listKamar.map((kamar, index) => (
              <div
                className="rounded-md bg-white shadow-lg flex flex-col p-3 border justify-between"
                key={index}
              >
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-semibold text-xl text-blue-900 text-center">
                    {kamar.nm_bangsal}
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-blue-900">Total : {kamar.jml_kamar}</h1>
                  </div>
                  <div className="w-full flex justify-center gap-2 mb-2">
                    <div className="bg-slate-200 w-full text-center rounded-md">
                      <h1>Kamar Tersedia</h1>
                      <p className="text-2xl font-semibold">
                        {kamar.kamar_kosong}
                      </p>
                    </div>
                    <div className="bg-slate-200 w-full text-center rounded-md">
                      <h1>Kamar Terisi</h1>
                      <p className="text-2xl font-semibold">
                        {kamar.kamar_isi}
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between gap-2">
                    <h1>Tarif Kamar</h1>
                    <h1 className="text-blue-900 font-semibold">
                      {rupiah(kamar.trf_kamar)} / Hari
                    </h1>
                  </div>
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
