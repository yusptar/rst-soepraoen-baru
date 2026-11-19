import { React, useState } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import ModalNotificationPengaduan from "../../../components/Modal/NotificationPengaduan";
import { HTTP, WEBSERVICE } from "../../../services/NetworkServices";

export default function WhistleBlowingSystem() {
  const [pengaduan, setPengaduan] = useState({
    lingkup: "0",
    nama: "",
    pangkat: "",
    nrp: "",
    unit_dilaporkan: "",
    personel_dilaporkan: "",
    laporan: "",
    surat_permohonan: "",
  });
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    message: "",
  });

  const listLingkup = [
    {
      id: 1,
      name: "Penyimpangan peraturan dan perundang-undangan yang berlaku",
    },
    {
      id: 2,
      name: "Penyalahgunaan jabatan untuk kepentingan lain di luar TNI AD",
    },
    {
      id: 3,
      name: "Pemerasan",
    },
    {
      id: 4,
      name: "Perbuatan curang",
    },
    {
      id: 5,
      name: "Benturan kepentingan",
    },
    {
      id: 6,
      name: "Penggunaan dana dan aset TNI AD untuk kepentingan pribadi",
    },
  ];

  const handleChange = (e) => {
    setPengaduan({
      ...pengaduan,
      [e.target.name]: e.target.value,
    });
  };


  const submitReview = async (event) => {
    event.preventDefault();
    try {
        const res = await WEBSERVICE.POST("/laporan-spi", pengaduan);
        console.log("ress",res)
        if (res.status === 200) {
            setResponseStatus({
                status: true,
                message: res.data.result,
            });
            cleanForm();
            document.getElementById("modal-input-notification").checked = true;
        }

        // const whatsapp = await WEBSERVICE.POST("/wbs");
        // console.log("wangsap", whatsapp)
        // if (whatsapp.status === 200) {
        //   setResponseStatus({
        //       status: true,
        //       message: whatsapp.data.result.response.response.status
        //   });
        //   document.getElementById("modal-input-notification").checked = true;
        // }

    } catch (error) {
      console.log(error)
        setResponseStatus({
            status: false,
            message: error.response.data.result,
        });
        document.getElementById("modal-input-notification").checked = true;
    }
  };

  const cleanForm = () => {
    setPengaduan({
      lingkup: "0",
      nama: "",
      pangkat: "",
      nrp: "",
      unit_dilaporkan: "",
      personel_dilaporkan: "",
      laporan: "",
      surat_permohonan: "",
    });
    document.getElementById("lingkup").value = 0;
    document.getElementById("nama").value = "";
    document.getElementById("pangkat").value = "";
    document.getElementById("nrp").value = "";
    document.getElementById("unit_dilaporkan").value = "";
    document.getElementById("personel_dilaporkan").value = "";
    document.getElementById("laporan").value = "";
    document.getElementById("surat_permohonan").value = "";
  };

  return (
    <>
      {/* image banner */}
      <BannerRS title="Whistle Blowing System" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 w-full">
            <div className="mb-5 w-full flex-col justify-center p-5">
              <div className="w-full bg-blue-900 p-2 rounded-md">
                <h2 className="font-semibold text-white text-lg">
                  Whistle Blowing System
                </h2>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 w-full mt-4 gap-3">
                <div>
                  <h5 className="bg-blue-900 px-3 py-1 text-white font-medium">
                    Apa itu Whistle Blowing System?
                  </h5>
                  <p className="text-sm px-3 py-1 bg-white">
                    Whistle Blowing System adalah Aplikasi yang disediakan oleh
                    Rumah Sakit Tk.II dr. Soepraoen bagi Anda yang memiliki
                    informasi dan ingin melaporkan suatu perbuatan berindikasi
                    pelanggaran atau tindakan penyimpangan yang terjadi di
                    lingkungan Rumah Sakit Tk.II dr. Soepraoen.
                  </p>
                </div>
                <div className="border border-solid">
                  <h5 className="bg-blue-900 px-3 py-1 text-white font-medium">
                    Grafik Pengaduan
                  </h5>
                  <div className=""></div>
                </div>
                <div className="md:col-span-2 bg-black px-1 py-2">
                  <p className="text-white text-sm">
                    Identitas diri tidak akan terungkap karena Rumah Sakit Tk.II
                    dr. Soepraoen akan{" "}
                    <span className="text-red-500 font-medium">
                      MENJAGA KERAHASIAAN IDENTITAS DIRI ANDA{" "}
                    </span>
                    sebagai whistleblower Rumah Sakit Tk.II dr. Soepraoen
                    menghargai informasi yang anda laporkan. Kami fokus pada
                    informasi yang anda laporkan.
                  </p>
                </div>
                <div className="border">
                  <h5 className="bg-blue-900 px-3 py-1 text-white font-medium">
                    Unsur Pengaduan
                  </h5>
                  <p className="text-sm bg-white px-3 py-1">
                    Pengaduan Anda akan mudah ditindaklanjuti apabila memenuhi
                    unsur sebagai berikut :
                  </p>
                  <ul className="list-disc list-inside text-sm bg-white px-3 py-1">
                    <li>
                      SI : Siapa yang bertanggung jawab atas pelanggaran,
                      termasuk pihak yang diuntungkan atau dirugikan atas
                      pelanggaran tersebut.
                    </li>
                    <li>
                      A : Apa masalah yang dilaporkan atau jenis pelanggaran
                      yang terjadi
                    </li>
                    <li>
                      BI : Bilamana / periode pelanggaran
                      (hari/minggu/bulan/tahun/tanggal) pelanggaran terjadi
                    </li>
                    <li>DI : Dimana lokasi pelanggaran tersebut</li>
                    <li>
                      BA : Bagaimana terjadinya pelanggaran tersebut dan apakah
                      terdapat bukti pendukung telah terjadi pelanggaran.
                    </li>
                  </ul>
                </div>
                <div className="border">
                  <h5 className="bg-blue-900 px-3 py-1 text-white font-medium">
                    Kerahasiaan
                  </h5>
                  <p className="text-sm bg-white px-3 py-1">
                    Rumah Sakit Tk.II dr. Soepraoen akan merahasiakan identitas
                    pribadi Anda sebagai whistleblower karena Rumah Sakit Tk.II
                    dr. Soepraoen hanya fokus pada informasi yang Anda laporkan.
                  </p>
                </div>
              </div>
              <div className="bg-slate-100 flex justify-center w-full p-5 mt-2">
                <div className="w-full md:w-1/2 bg-blue-900 p-2 rounded-md">
                  <h5 className="text-white font-semibold text-lg">
                    Form Pengaduan
                  </h5>
                  <select
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    onChange={handleChange}
                    name="lingkup"
                    id="lingkup"
                  >
                    <option value="0">Pilih Kategori</option>
                    {listLingkup.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Nama"
                    id="nama"
                    name="nama"
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Pangkat"
                    id="pangkat"
                    name="pangkat"
                    onChange={handleChange}
                  />

                  <input
                    type="number"
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="NRP"
                    id="nrp"
                    name="nrp"
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Unit yang dilaporkan"
                    id="unit_dilaporkan"
                    name="unit_dilaporkan"
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Personel yang dilaporkan"
                    id="personel_dilaporkan"
                    name="personel_dilaporkan"
                    onChange={handleChange}
                  />

                  <textarea
                    className="w-full bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Isi laporan"
                    id="laporan"
                    name="laporan"
                    onChange={handleChange}
                    rows="5"
                  />
                  <textarea
                    className="w-full hidden bg-white p-2 rounded-md mt-5 text-lg"
                    placeholder="Saran/Permohonan kepada Ankum"
                    id="surat_permohonan"
                    name="surat_permohonan"
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
