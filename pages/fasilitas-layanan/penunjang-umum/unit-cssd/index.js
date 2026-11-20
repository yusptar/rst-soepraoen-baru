import { React, useEffect, useState } from "react";
import { WEBSERVICE } from "../../../../services/NetworkServices";
import PhoneInput from "react-phone-number-input/input";
import ModalNotificationPengaduan from "../../../../components/Modal/NotificationPengaduan";
import Link from "next/link";
import Image from "next/image";
import { asset } from "../../../../helpers/asset";

export default function untiCSSD() {

  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/penunjang-umum/kamar-jenazah">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/penunjang-umum/kamar-jenazah">
              <h1 className="text-xs font-light">Penunjang Umum</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/penunjang-umum/kamar-jenazah/">
              <h1 className="text-xs font-light">Unit CSSD</h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <div className="2xl:w-11/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-center my-0">
              CSSD
            </h1>
          </div>
          <h1 className="text-base md:text-2l text-blue-900 text-center my-0">
              Central Sterile Supply Department
          </h1>

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/cssd2.jpg")}
                alt={"CSSD"}
                fill={true}
                sizes={"100%"}
                priority={true}
                className="object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-left">
            <p>
              CSSD merupakan singkatan dari Central Sterile Supply Department. 
              Ini adalah unit penting dalam sebuah fasilitas layanan kesehatan seperti rumah sakit, 
              yang bertanggung jawab untuk sterilisasi dan distribusi peralatan dan bahan medis yang steril. 
              CSSD memainkan peran kritikal dalam mengontrol infeksi di lingkungan kesehatan, 
              memastikan bahwa semua instrumen yang digunakan dalam prosedur medis dan operasi bersih dan steril, 
              sehingga meminimalisir risiko infeksi bagi pasien.
            </p>
          </div>
            {/* content */}
        {/* <div className="flex justify-center my-5">
            <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
            <div className="md:w-11/12 w-full">
                <div className="mb-5 w-full flex justify-center p-5">
                <div className="md:w-3/5 w-full bg-blue-900 p-5 rounded-md">
                    <h2 className="font-semibold text-center text-white text-lg">
                    Pesan Sekarang
                    </h2>
                    <p className="text-center text-white text-sm">
                    Silahkan isi form dibawah ini
                    </p>
                    <br></br>
                    <label htmlFor="nama" className="text-sm font-medium text-white mt-1">Identitas Pemesan</label>
                    <input
                    type="text"
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Nama Pemesan"
                    id="nama"
                    name="nama"
                    onChange={handleChange}
                    />
                    <PhoneInput
                    country="ID"
                    value={phone}
                    onChange={setPhone}
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="No. Whatsapp"
                    />
                    <input
                    type="text"
                    className="w-full bg-white p-2 rounded-md mt-5 mb-5 text-lg"
                    placeholder="Alamat"
                    id="alamat"
                    name="alamat"
                    onChange={handleChange}
                    />
                    <br></br>
                    <label htmlFor="nama" className="text-sm font-medium text-white mt-5">Identitas Pasien</label>
                    <input
                    type="text"
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Nama Pasien"
                    id="nama_psn"
                    name="nama_psn"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Usia"
                    id="usia"
                    name="usia"
                    onChange={handleChange}
                    />
                    <select
                        className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                        onChange={handleChange}
                        name="jenis_kelamin"
                        id="jenis_kelamin"
                    >
                        <option value="" disabled selected>Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                    <textarea
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Jelaskan Keluhan Pasien"
                    id="keluhan_pasien"
                    name="keluhan_pasien"
                    onChange={handleChange}
                    rows="5"
                    />
                    <button
                    className="w-full bg-white text-blue-900 p-2 rounded-md mt-5 font-semibold mb-2"
                    onClick={submitReview}
                    >
                    Kirim Pemesanan
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div> */}
        {/* content */}

        {/* Modal Notification */}
        {/* <ModalNotificationPengaduan responseStatus={responseStatus} /> */}
        {/* Modal Notification */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
