import { React, useEffect, useState } from "react";
import { WEBSERVICE } from "../../../services/NetworkServices";
import Image from "next/image";
import PhoneInput from "react-phone-number-input/input";
import ModalNotificationPengaduan from "../../../components/Modal/NotificationPengaduan";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FcCollaboration, FcOnlineSupport, FcReadingEbook } from "react-icons/fc";
import { asset } from "../../../helpers/asset";


export default function Komplementer() {
  return (
    <>
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/">
              <h1 className=" text-xs font-light">Rawat Jalan</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/komplementer">
              <h1 className=" text-xs font-light">
                Poliklinik Komplementer
              </h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <div className="2xl:w-11/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-center my-0">
              Poliklinik Komplementer
            </h1>
          </div>
          <h1 className="text-base md:text-2l text-blue-900 text-center my-0">
            Pelayanan Kesehatan Tradisional Komplementer
          </h1>
          <div className="justify-center mt-2">
          <Image
            src={asset("/assets/banner-komplementer.png")}
            alt="komplementer"
            width={1400}
            height={500}
            priority={true}
            className="flex justify-center"
          />      
          </div>
          <div className="md:w-11/12 w-full my-5 flex justify-center">
            <div className="w-full flex justify-center">
                <div className="grid md:grid-cols-1 grid-cols-1 w-full mt-4 gap-3">
                    <div>
                    <h5 className="text-black text-lg font-bold">
                        Pelayanan Kesehatan Tradisional Komplementer
                    </h5>
                    <p className="text-medium px-3 py-5 bg-white">    
                        <span className="font-bold">Pelayanan Kesehatan tradisional komplementer </span> 
                        adalah penerapan kesehatan tradisional yang memanfaatkan ilmu biomedis dan biokultural 
                        dalam penjelasannya serta manfaat dan keamanannya terbukti secara ilmiah. 
                        Pelayanan kesehatan tradisional integrasi suatu bentuk pelayanan kesehatan yang mengombinasikan 
                        pelayanan kesehatan konvensional dengan pelayanan kesehatan tradisional komplementer, baik bersifat 
                        sebagai pelengkap maupun pengganti dalam keadaan tertentu
                    </p>
                    </div>
                <div>
                <h5 className="text-black text-lg font-bold">Ruang Lingkup Pelayanan</h5>
                    <div className="text-medium px-1 py-5 bg-white">
                        {/* <p>Homecare kami menyediakan berbagai layanan untuk mendukung kesehatan dan kesejahteraan pasien di rumah</p> */}
                        {/* <div className="flex items-center">
                            <FcCollaboration className="text-black mr-5" size={150} />
                            <div> */}
                            <h6 className="font-bold mb-2">1. Administrasi</h6>
                            {/* <p className="text-medium mb-4">Kami menyediakan kunjungan dari perawat, dokter, atau terapis untuk melakukan tindakan medis, pengecekan kesehatan, pengobatan, dan manajemen kondisi kesehatan pasien.</p> */}
                            {/* </div>
                        </div> */}
                        {/* <div className="flex items-center">
                            <FcOnlineSupport className="text-black mr-5" size={150} />
                            <div> */}
                            <h6 className="font-bold">2. Pelayanan Akupuntur</h6>
                            <p className="text-medium px-4">• Akupuntur, akupresure, psikopunktur</p>
                            <p className="text-medium px-4">• Pelayanan moksibusi/moksa</p>
                            <p className="text-medium px-4">• Pelayanan cupping (bekam)</p>
                            <p className="text-medium mb-2 px-4">• Relaksasi musik (free saat tindakan terapi)</p>
                            {/* </div>
                        </div> */}
                        {/* <div className="flex items-center">
                            <FcReadingEbook className="text-black mr-5" size={150} />
                            <div> */}
                            <h6 className="font-bold">3. Pelayanan Pijat Tradisional</h6>
                            <p className="text-medium px-4">• Pijat refleksiologi</p>
                            <p className="text-medium px-4">• Pijat Relaksasi</p>
                            <p className="text-medium mb-2 px-4">• Pijat Bayi</p>
                            {/* </div>
                        </div> */}
                        {/* <div className="flex items-center">
                            <FcReadingEbook className="text-black mr-5" size={150} />
                            <div> */}
                            <h6 className="font-bold">4. Herbal</h6>
                            <p className="text-medium px-4">• Aromaterapi (free saat tindakan)</p>
                            <p className="text-medium px-4">• Minuman Herbal (welcome drink dan paket jual)</p>
                            <p className="text-medium px-4">• Sabun herbal</p>
                            <p className="text-medium px-4">• Jamu</p>
                            <p className="text-medium mb-2 px-4">• Balur Onkology Herbal</p>
                            {/* </div>
                        </div> */}
                    </div>
                </div>
                
                {/* <div className="">
                  <h5 className=" text-black text-lg font-bold">
                    HomeCare Rumah Sakit Tk.II dr.Soepraoen
                  </h5>
                  <p className="text-medium px-3 py-5 bg-white">
                    Whistle Blowing System adalah Aplikasi yang disediakan oleh
                    Rumah Sakit Tk.II dr. Soepraoen bagi Anda yang memiliki
                    informasi dan ingin melaporkan suatu perbuatan berindikasi
                    pelanggaran atau tindakan penyimpangan yang terjadi di
                    lingkungan Rumah Sakit Tk.II dr. Soepraoen.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        {/* content */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
