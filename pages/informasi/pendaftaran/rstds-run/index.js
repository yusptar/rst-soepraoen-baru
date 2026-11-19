import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ri24HoursLine } from "react-icons/ri";
import BannerRS from "../../../../components/Banner/BannerRS";
import NavbarPPID from "../../../../components/Navbar/NavbarPPID";
import KeteranganAlurPendaftaran from "../../../../components/Table/KeteranganAlur";
import { HTTP } from "../../../../services/NetworkServices";
import PhoneInput from "react-phone-number-input/input";
import ModalNotificationPengaduan from "../../../../components/Modal/NotificationPengaduan";

export default function RSTDSRun() {
    const [phone1, setPhone1] = useState("");
    const [phone2, setPhone2] = useState("");
    const [rstdsRUN, setRSTDSRUN] = useState({
        nama: "",
        jenis_kelamin: "",
        usia: "",
        alamat: "",
        whatsapp_prib: "",
        whatsapp_kel: "",
        size_outfit: "",
        tinggi_badan: "",
        berat_badan: "",
        kondisi: "",
    });
    const [responseStatus, setResponseStatus] = useState({
        status: false,
        message: "",
    });

    const handleChange = (e) => {
        setRSTDSRUN({
        ...rstdsRUN,
        [e.target.name]: e.target.value,
        });
    };
    
    const submitReview = async (event) => {
        event.preventDefault();
        const payloadRSTDSRUN = {
          ...rstdsRUN,
          whatsapp_prib: phone1,
          whatsapp_kel: phone2,
        };
        try {
          const res = await HTTP.POST("/daftar-online", payloadRSTDSRUN);
          if (res.status === 200) {
              setResponseStatus({
              status: true,
              message: res.data.result,
              });
              cleanForm();
              document.getElementById("modal-input-notification").checked = true;
          }
        } catch (error) {
        setResponseStatus({
            status: false,
            message: error.response.data.result,
        });
        document.getElementById("modal-input-notification").checked = true;
        }
    };

    const cleanForm = () => {
        setRSTDSRUN({
          nama: "",
          jenis_kelamin: "",
          usia: "",
          alamat: "",
          size_outfit: "",
          tinggi_badan: "",
          berat_badan: "",
          kondisi: "",
        });
        setPhone1("");
        setPhone2("");
        document.getElementById("nama").value = "";
        document.getElementById("jenis_kelamin").value = "";
        document.getElementById("usia").value = "";
        document.getElementById("alamat").value = "";
        document.getElementById("size_outfit").value = "";
        document.getElementById("tinggi_badan").value = "";
        document.getElementById("berat_badan").value = "";
        document.getElementById("kondisi").value = "";
    };
  return (
    <>
      {/* image banner */}
      <BannerRS title="Pendaftaran RSTDS Run" />
      {/* image banner */}

      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 w-full">
            <div className="mb-5 w-full flex justify-center p-5">
              <div className="md:w-1/2 w-full bg-blue-900 p-2 rounded-md">
                <h2 className="font-semibold text-white text-lg text-center">
                  FORM PENDAFTARAN
                </h2>
                {/* add textfield */}
                <input
                  type="text"
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  placeholder="Nama Lengkap"
                  id="nama"
                  name="nama"
                  onChange={handleChange}
                />
                <select
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  onChange={handleChange}
                  name="jenis_kelamin"
                  id="jenis_kelamin"
                >
                  <option value="" selected disabled>
                    Pilih Jenis Kelamin Anda
                  </option>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <input
                  type="text"
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  placeholder="Usia"
                  id="usia"
                  name="usia"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  placeholder="Kondisi Kesehatan *Contoh Pengisian Sehat/Sakit"
                  id="kondisi"
                  name="kondisi"
                  onChange={handleChange}
                />
                  <input
                  type="text"
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  placeholder="Berat Badan/KG *Contoh Pengisian: 50"
                  id="tinggi_badan"
                  name="tinggi_badan"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  placeholder="Tinggi Badan/M *Contoh Pengisian: 150"
                  id="berat_badan"
                  name="berat_badan"
                  onChange={handleChange}
                />
                <PhoneInput
                  country="ID"
                  value={phone1}
                  onChange={setPhone1}
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  placeholder="No. Whatsapp Yang Bersangkutan"
                />
                 <PhoneInput
                  country="ID"
                  value={phone2}
                  onChange={setPhone2}
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  placeholder="No. Whatsapp Keluarga Yang Bersangkutan"
                />
                <select
                  className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                  onChange={handleChange}
                  name="size_outfit"
                  id="size_outfit"
                >
                  <option value="" selected  disabled>
                    Pilih Ukuran T-Shirt
                  </option>
                    <option value="XXL">XXL</option>
                    <option value="XL">XL</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                </select>
                <button
                  className="w-full bg-white text-blue-900 p-2 rounded-md mt-5 font-semibold mb-2"
                  onClick={submitReview}
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}

      {/* Modal Notification */}
      <ModalNotificationPengaduan responseStatus={responseStatus} />
      {/* Modal Notification */}
    </>
  );
}
