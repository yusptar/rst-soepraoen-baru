import { React, useState } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import { listSurvei } from "../../../components/List/listSurveiSmile";

export default function IndexKepuasanMasyarakat() {
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
        },
      ],
      jenisPekerjaan: [
        {
          jenisPekerjaan: "",
          jumlah: "",
        },
      ],
      nilaiIndeks: "",
      nilaiKonversi: "",
      nilaiMutu: "",
    },
  ]);
  return (
    <>
      {/* image banner */}
      <BannerRS
        title="Hasil Survey SMILE Puskesad"
        url="/profil/denah-rumah-sakit"
      />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Hasil Survey SMILE Puskesad
          </h1>
          <div className="md:w-12/12 w-full">
            {listSurvei.map((item, index) => (
              <div key={index} className="w-full mb-10" htmlFor="my-modal">
                <div className="flex justify-center w-full ">
                  <h1 className="text-2xl font-semibold">{item.tahun}</h1>
                </div>
                {/* add image */}
                <div className="flex w-full flex-col md:flex-row gap-2">
                  <img
                    src={item.imageURL1}
                    alt="image"
                    className=" w-full md:w-1/2"
                  />
                  <img
                    src={item.imageURL2}
                    alt="image"
                    className=" w-full md:w-1/2"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-around w-full gap-2 my-5">
                  {item.listIKM1.map((item, index) => (
                    <div key={index} className="w-full cursor-pointer">
                      <div className="flex justify-between gap-2 ">
                        <div className="bg-gray-200 w-full rounded-lg text-center py-5 px-2 mb-2 flex flex-col justify-between">
                          <h1 className="text-sm md:text-base">
                            {item.dimensiKepuasanPasien}
                          </h1>
                          <h1 className="text-4xl font-semibold text-blue-900">
                            {item.ikm.nilaiKonversi}
                          </h1>
                          <hr />
                          <h1 className="text-sm md:text-base font-medium">
                            Nilai Mutu : {item.ikm.nilaiMutu}
                          </h1>
                          <label
                            className="btn w-full p-0 bg-blue-900 text-white"
                            htmlFor="modal-detail-index"
                            onClick={() => sethasilIndex(item.ikm)}
                          >
                            Detail
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row justify-around w-full gap-2 my-5">
                  {item.listIKM2.map((item, index) => (
                    <div key={index} className="w-full cursor-pointer">
                      <div className="flex justify-between gap-2 ">
                        <div className="bg-gray-200 w-full rounded-lg text-center py-5 px-2 mb-2 flex flex-col justify-between">
                          <h1 className="text-sm md:text-base">
                            {item.dimensiKepuasanPasien}
                          </h1>
                          <h1 className="text-4xl font-semibold text-blue-900">
                            {item.ikm.nilaiKonversi}
                          </h1>
                          <hr />
                          <h1 className="text-sm md:text-base font-medium">
                            Nilai Mutu : {item.ikm.nilaiMutu}
                          </h1>
                          <label
                            className="btn w-full p-0 bg-blue-900 text-white"
                            htmlFor="modal-detail-index"
                            onClick={() => sethasilIndex(item.ikm)}
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
        <label className="modal-box relative bg-white">
          <div className="flex justify-between p-2">
            <h1>Jumlah Pertanyaan : </h1>
            <h1>{hasilIndex.jumlahPertanyaan}</h1>
          </div>
          <hr />
          <div className="flex justify-between p-2">
            <h1>Waktu Survei :</h1>
            <h1>{hasilIndex.pelaksanaan}</h1>
          </div>
          <hr />
          <div className="flex justify-between p-2">
            <h1>Jumlah Responden : </h1>
            <h1>{hasilIndex.jumlahResponden}</h1>
          </div>

          <hr />
          <div className="flex justify-between p-2">
            <h1>Nilai Indeks : </h1>
            <h1>{hasilIndex.nilaiIndeks}</h1>
          </div>
          <hr />
          <div className="flex justify-between p-2">
            <h1>Nilai Konversi : </h1>
            <h1>{hasilIndex.nilaiKonversi}</h1>
          </div>
          <hr />
          <div className="flex justify-between p-2">
            <h1>Nilai Mutu :</h1>
            <h1>{hasilIndex.nilaiMutu}</h1>
          </div>
          <hr />
          <div className="flex justify-between p-2">
            <h1>Kesimpulan :</h1>
            <h1>{hasilIndex.kesimpulan}</h1>
          </div>
          <hr />
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
