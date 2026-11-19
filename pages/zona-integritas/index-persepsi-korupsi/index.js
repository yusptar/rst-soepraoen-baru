import { React, useState, useEffect } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import { listSurvei } from "../../../components/List/listSurveiKorupsi";
import { formatDate } from "../../../helpers/DateTimeFormatters";
import Head from 'next/head';
import BarChart from '../../../components/Chart/KomponenHasil';
import Image from "next/image";

export default function IndexPersepsiKorupsi() {
  const [hasilIndex, sethasilIndex] = useState([
    listSurvei[0] || {
      jumlahPertanyaan: "",
      jumlahSaran: "",
      pelaksanaan: "",
      jumlahResponden: "",
      jenisKelamin: [
        {
          jenisKelamin: "",
          jumlah: "",
        },
      ],
      jenjangPendidikan: [
        {
          jenjangPendidikan: "",
          jumlah: "",
        }
      ],
      jenisPekerjaan: [
        {
          jenisPekerjaan: "",
          jumlah: "",
        },
      ],
      indikator: [],
      nilaiIndeks: "",
      nilaiKonversi: "",
      nilaiMutu: "",
    },
  ]);
      
  const [grafik, setGrafik] = useState(
    listSurvei[0] || {
      labels: [],
      datasets: [],
  });

  useEffect(() => {
    setGrafik(listSurvei[0]);
  }, []);

  // Siapkan data untuk BarChart
  return (
    <>
      {/* image banner */}
      <BannerRS
        title="Index Persepsi Anti Korupsi"
        url="/profil/denah-rumah-sakit"
      />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Index Persepsi Anti Korupsi
          </h1> */}
          <br></br>
          <div className="md:w-11/12 w-full">
            {listSurvei.map((item, index) => (
              <div key={index} className="w-full mb-10" htmlFor="my-modal">
                {/* add image */}
                <h1 className="w-full text-center text-xl font-bold">
                  <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">{item.tahun}</h1>
                </h1>
                <div className="flex w-full flex-col">
                    <main>
                        <BarChart data={{labels: item.labels, datasets: item.datasets}} />
                    </main>
                </div>
                {/* add image */}
                {/* 
                {item.chart_ipak && (
                  <div className="flex w-full flex-col md:flex-row gap-2">
                    <img
                      src={item.chart_ipak}
                      alt="image"
                      className=" w-full md:w-1/2"
                    />
                    <img
                      src={item.chart_ipak_converted}
                      alt="image"
                      className=" w-full md:w-1/2"
                    />
                  </div>
                )} */}
                <div className="flex flex-col md:flex-row justify-around w-full gap-2 my-5">
                  {item.listSemesterIpak.map((item, index) => (
                    <div key={index} className="w-full cursor-pointer">
                      <h1 className="text-xl font-normal text-center mb-2">
                         {item.semester === "I-II" ? "Semester 1" :
                          item.semester === "III-IV" ? "Semester 2" :
                          item.semester === "I" ? "Triwulan I" :
                          item.semester === "II" ? "Triwulan II" :
                          item.semester === "III" ? "Triwulan III" :
                          item.semester === "IV" ? "Triwulan IV" :
                          "-"} 
                      </h1>
                      <div className="flex justify-between gap-2 ">
                        <div className="bg-gray-200 w-full rounded-lg text-center py-5 px-2 mb-2 flex flex-col justify-between">
                          <h1 className="text-sm md:text-base">
                            Indeks Persepsi Anti Korupsi(IPAK)
                          </h1>
                          <h1 className="text-4xl font-semibold text-blue-900">
                            {item.ipak.nilaiIndeks}
                          </h1>
                          <hr />
                          <h1 className="text-sm md:text-base font-medium">
                            Nilai Mutu : {item.ipak.nilaiMutu}
                          </h1>
                          <label
                            className="btn w-full p-0 bg-blue-900 text-white"
                            htmlFor="modal-detail-index"
                            onClick={() => sethasilIndex(item.ipak)}
                          >
                            Detail
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* content */}

      {/* Modal Prestasi */}
      <input type="checkbox" id="modal-detail-index" className="modal-toggle" />
      <label
        htmlFor="modal-detail-index"
        className="modal cursor-pointer mt-20"
      >
        <label className="modal-box relative bg-white max-w-2xl">
          {/* <div className="flex justify-between p-2">
            <h1>Jumlah Pertanyaan : </h1>
            <h1>{hasilIndex.jumlahPertanyaan}</h1>
          </div> */}
          <hr />
          <div className="flex justify-between p-2">
            <h1>Waktu Survei :</h1>
            <h1>{hasilIndex.pelaksanaan}</h1>
          </div>
          <hr />
          {/* <div className="flex justify-between p-2">
            <h1>Jumlah Responden : </h1>
            <h1>{hasilIndex.jumlahResponden}</h1>
          </div>

          <hr />
          <div className="p-2">
            <h1>Data Responden : </h1>
            <h2 className="pl-2">Jenis Kelamin:</h2>
            <ul className="pl-4">
              {hasilIndex.jenisKelamin?.map((item, index) => (
                <li className="flex justify-between " key={index}>
                  <h3>{item.jenisKelamin} :</h3>
                  <h3>{item.jumlah}</h3>
                </li>
              ))}
            </ul>
            <h2 className="pl-2">Jenjang Pendidikan:</h2>
            <ul className="pl-4">
              {hasilIndex.jenjangPendidikan?.map((item, index) => (
                <li className="flex justify-between " key={index}>
                  <h3>{item.jenjangPendidikan} :</h3>
                  <h3>{item.jumlah}</h3>
                </li>
              ))}
            </ul>
            <h2 className="pl-2">Jenis Pekerjaan:</h2>
            <ul className="pl-4">
              {hasilIndex.jenisPekerjaan?.map((item, index) => (
                <li className="flex justify-between " key={index}>
                  <h3>{item.jenisPekerjaan} :</h3>
                  <h3>{item.jumlah}</h3>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          {hasilIndex.indikator && (
            <>
              <div className="p-2">
                <h1>Indikator Penilaian : </h1>
                <ul className="pl-2">
                  {hasilIndex.indikator?.map((item, index) => (
                    <li className="flex justify-between " key={index}>
                      <h3>{item.namaIndikator} :</h3>
                      <h3>{`${item.rerataIndikator}`}</h3>
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
            </>
          )} */}
          {/* <div className="flex justify-between p-2">
            <h1>Nilai Indeks : </h1>
            <h1>{hasilIndex.nilaiIndeks}</h1>
          </div>
          <hr /> */}
          {/* <div className="flex justify-between p-2">
            <h1>Nilai Konversi : </h1>
            <h1>{hasilIndex.nilaiKonversi}</h1>
          </div>
          <hr /> */}
          {/* <div className="flex justify-between p-2">
            <h1>Nilai Mutu :</h1>
            <h1>{hasilIndex.nilaiMutu}</h1>
          </div>
          <hr /> */}
          {hasilIndex.image ? (
            <div className="flex justify-center">
              <Image
                src={hasilIndex.image}
                alt="Denah Rumah Sakit"
                width={1000}
                height={1200}
                priority={true}
              />
              <hr />
            </div>
          ) : null}
          <label
            className="btn w-full p-0 bg-blue-900 text-white mt-5"
            htmlFor="modal-detail-index"
          >
            Tutup
          </label>
        </label>
      </label>
      {/* Modal Prestasi */}
    </>
  );
}
