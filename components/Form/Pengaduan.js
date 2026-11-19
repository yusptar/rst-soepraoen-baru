import { React, useEffect, useState } from "react";
import { WEBSERVICE } from "../../services/NetworkServices";
import PhoneInput from "react-phone-number-input/input";
import ModalNotificationPengaduan from "../Modal/NotificationPengaduan";

export default function Pengaduan() {
  const [jenisLaporan, setJenisLaporan] = useState([]);
  const [phone, setPhone] = useState("");
  const [pengaduan, setPengaduan] = useState({
    jenis_laporan_id: "2",
    nama: "",
    tanggal_kejadian: "",
    lokasi_kejadian: "",
    pengaduan: "",
    whatsapp: "",
  });
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    fetchJenisLaporan();
  }, []);

  const fetchJenisLaporan = async () => {
    const res = await WEBSERVICE.GET("/jenis-laporan-pengaduan");
    setJenisLaporan(res.data.result);
  };

  const handleChange = (e) => {
    setPengaduan({
      ...pengaduan,
      [e.target.name]: e.target.value,
    });
  };
  const submitReview = async (event) => {
    event.preventDefault();
    const payloadPengaduan = {
      ...pengaduan,
      whatsapp: phone,
    };
    try {
      const res = await WEBSERVICE.POST("/pengaduan", payloadPengaduan);
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
    setPengaduan({
      jenis_laporan_id: "2",
      nama: "",
      tanggal_kejadian: "",
      lokasi_kejadian: "",
      pengaduan: "",
    });
    setPhone("");
    document.getElementById("jenis_laporan_id").value = 2;
    document.getElementById("nama").value = "";
    document.getElementById("tanggal_kejadian").value = "";
    document.getElementById("lokasi_kejadian").value = "";
    document.getElementById("pengaduan").value = "";
  };

  return (
    <>
      {/* content */}
      <div className="md:w-1/2 w-full bg-blue-900 p-2 rounded-md">
        <h2 className="font-semibold text-white text-lg">
          Sampaikan Laporan Anda
        </h2>
        {/* add select */}
        <select
          className="w-full bg-white p-2 rounded-md mt-5 text-lg"
          onChange={handleChange}
          name="jenis_laporan_id"
          id="jenis_laporan_id"
        >
          <option value="0" disabled>
            Pilih Kategori
          </option>
          {jenisLaporan.map((item) => (
            <option value={item.id} key={item.id}>
              {item.jenis_laporan}
            </option>
          ))}
        </select>
        {/* add textfield */}
        <input
          type="text"
          className="w-full bg-white p-2 rounded-md mt-5 text-lg"
          placeholder="Nama"
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

        {/* date input */}
        <input
          type="date"
          className="w-full bg-white p-2 rounded-md mt-5 text-lg"
          placeholder="Tanggal Kejadian"
          id="tanggal_kejadian"
          name="tanggal_kejadian"
          onChange={handleChange}
        />

        <input
          type="text"
          className="w-full bg-white p-2 rounded-md mt-5 text-lg"
          placeholder="Lokasi kejadian"
          id="lokasi_kejadian"
          name="lokasi_kejadian"
          onChange={handleChange}
        />

        <textarea
          className="w-full bg-white p-2 rounded-md mt-5 text-lg"
          placeholder="Isi pengaduan"
          id="pengaduan"
          name="pengaduan"
          onChange={handleChange}
          rows="5"
        />

        <button
          className="w-full bg-white text-blue-900 p-2 rounded-md mt-5 font-semibold mb-2"
          onClick={submitReview}
        >
          Kirim Pengaduan
        </button>
      </div>
      {/* content */}

      {/* Modal Notification */}
      <ModalNotificationPengaduan responseStatus={responseStatus} />
      {/* Modal Notification */}
    </>
  );
}
