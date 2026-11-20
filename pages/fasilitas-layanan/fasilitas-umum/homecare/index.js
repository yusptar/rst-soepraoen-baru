import { React, useEffect, useState } from "react";
import { WEBSERVICE } from "../../../../services/NetworkServices";
import Image from "next/image";
import PhoneInput from "react-phone-number-input/input";
import ModalNotificationPengaduan from "../../../../components/Modal/NotificationPengaduan";
import Link from "next/link";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import {
  FcCollaboration,
  FcOnlineSupport,
  FcReadingEbook,
  FcSportsMode,
  FcSupport,
  FcBiotech,
} from "react-icons/fc";
import { asset } from "../../../../helpers/asset";

// Kategori layanan Homecare — sesuaikan nomor WhatsApp jika ada perubahan kontak person
const HOMECARE_CATEGORIES = [
  {
    id: "fisioterapi",
    title: "Tindakan Fisioterapi",
    description:
      "Terapi nyeri, gangguan gerak, pemulihan pasca operasi/stroke, dan terapi lainnya oleh fisioterapis berpengalaman.",
    phone: "628562838249",
    contactLabel: "0856-2838-249",
    Icon: FcSportsMode,
  },
  {
    id: "perawatan",
    title: "Tindakan Perawatan",
    description:
      "Perawatan luka, pemasangan selang, injeksi, nebulizer, perawatan pasca operasi, dan tindakan keperawatan lainnya di rumah Anda.",
    phone: "628123390756",
    contactLabel: "0812-3390-756",
    Icon: FcSupport,
  },
  {
    id: "sampel-darah",
    title: "Pengambilan Sampel Darah",
    description:
      "Pengambilan sampel darah untuk pemeriksaan laboratorium dengan prosedur aman dan higienis.",
    phone: "628113277304",
    contactLabel: "0811-3277-304",
    Icon: FcBiotech,
  },
];

export default function HomeCare() {
  const [jenisLaporan, setJenisLaporan] = useState([]);
  const [phone, setPhone] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pengaduan, setPengaduan] = useState({
    nama: "",
    alamat: "",
    nama_psn: "", // Nama pasien
    usia: "", // Usia pasien
    jenis_kelamin: "", // Jenis kelamin pasien
    keluhan_pasien: "", // Keluhan pasien
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

  const activeCategory = HOMECARE_CATEGORIES.find(
    (kategori) => kategori.id === selectedCategory
  );

  const prepareMessage = (kategori) => {
    const { nama, alamat, nama_psn, usia, jenis_kelamin, keluhan_pasien } =
      pengaduan;

    const message = `Halo, saya ingin memesan layanan Homecare - ${kategori.title} dengan detail sebagai berikut:
        Nama Pemesan: ${nama}
        No. Whatsapp: ${phone}
        Alamat: ${alamat}
        Nama Pasien: ${nama_psn}
        Usia: ${usia}
        Jenis Kelamin: ${jenis_kelamin}
        Keluhan Pasien: ${keluhan_pasien}`;

    return encodeURIComponent(message);
  };

  const submitReview = async (event) => {
    event.preventDefault();

    if (!activeCategory) {
      setResponseStatus({
        status: false,
        message: "Silahkan pilih kategori layanan Homecare terlebih dahulu.",
      });
      document.getElementById("modal-input-notification").checked = true;
      return;
    }

    const message = prepareMessage(activeCategory);
    const whatsappUrl = `https://wa.me/${activeCategory.phone}?text=${message}`;

    try {
      window.open(whatsappUrl, "_blank");
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
      nama: "",
      alamat: "",
      nama_psn: "",
      usia: "",
      jenis_kelamin: "",
      keluhan_pasien: "",
    });
    setPhone("");
    setSelectedCategory("");
  };

  return (
    <>
      <div className="flex justify-center my-2 bg-slate-50">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/">
              <h1 className="text-xs font-light">Fasilitas Umum</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/fasilitas-umum/homecare">
              <h1 className="text-xs font-light">Homecare</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          {/* hero */}
          <div className="w-full md:w-11/12 2xl:w-11/12 my-6 rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 px-6 py-10 md:py-14 text-center shadow-lg">
            <p className="uppercase tracking-widest text-emerald-300 text-xs font-semibold mb-2">
              Layanan Rumah Sakit
            </p>
            <h1 className="font-bold text-3xl md:text-5xl text-white">
              Homecare
            </h1>
            <p className="text-blue-100 text-sm md:text-base mt-3 max-w-2xl mx-auto">
              Perawatan kesehatan profesional, langsung di rumah Anda.
              Pilih kategori layanan yang sesuai kebutuhan pasien.
            </p>
          </div>
          {/* hero */}

          <div className="justify-center">
            <Image
              src={asset("/assets/homecare-banner.png")}
              alt="homecare"
              width={400}
              height={500}
              priority={true}
              className="flex justify-center rounded-2xl shadow-sm"
            />
          </div>

          {/* Kategori layanan */}

          <div className="md:w-11/12 w-full my-5 flex justify-center">
            <div className="w-full flex justify-center">
              <div className="grid md:grid-cols-2 grid-cols-1 w-full mt-4 gap-3">
                <div>
                  <h5 className="text-black text-lg font-bold">
                    HomeCare RSTDS
                  </h5>
                  <div className="flex justify-center">
                    <Image
                      src={asset("/assets/logo-homecare.png")}
                      alt="homecare"
                      width={300}
                      height={500}
                      priority={true}
                      className="flex justify-center text-center"
                    />
                  </div>
                  <p className="text-medium px-3 py-5 bg-white rounded-xl">
                    <span className="font-bold">Homecare</span> adalah layanan
                    kesehatan yang diberikan langsung di rumah pasien. Layanan
                    ini biasanya ditujukan untuk orang-orang yang membutuhkan
                    perawatan kesehatan berkelanjutan, perawatan pasca-operasi,
                    terapi, atau bantuan dengan kebutuhan medis karena kondisi
                    kronis, cacat, penyakit, atau usia lanjut. Homecare menjadi
                    pilihan bagi mereka yang ingin tetap berada di lingkungan
                    rumah mereka sendiri sambil menerima perawatan yang
                    diperlukan.
                  </p>
                </div>
                <div>
                  <h5 className="text-black text-lg font-bold">
                    Layanan HomeCare
                  </h5>
                  <div className="text-medium px-1 py-5 bg-white rounded-xl">
                    <p>
                      Homecare kami menyediakan berbagai layanan untuk
                      mendukung kesehatan dan kesejahteraan pasien di rumah
                    </p>
                    <div className="flex items-center">
                      <FcCollaboration className="text-black mr-5" size={150} />
                      <div>
                        <h6 className="font-bold">
                          Perawatan Kesehatan Profesional
                        </h6>
                        <p className="text-medium">
                          Kami menyediakan kunjungan dari perawat, dokter, atau
                          terapis untuk melakukan tindakan medis, pengecekan
                          kesehatan, pengobatan, dan manajemen kondisi
                          kesehatan pasien.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FcOnlineSupport className="text-black mr-5" size={150} />
                      <div>
                        <h6 className="font-bold">
                          Layanan Perawatan Personal
                        </h6>
                        <p className="text-medium">
                          Tim kami membantu dalam aktivitas sehari-hari
                          seperti mandi, berpakaian, makan, dan mobilitas
                          untuk memastikan kenyamanan dan kemandirian pasien.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FcReadingEbook className="text-black mr-5" size={150} />
                      <div>
                        <h6 className="font-bold">
                          Pemantauan Kesehatan Terus-menerus
                        </h6>
                        <p className="text-medium">
                          Layanan kami dilengkapi dengan pemantauan kesehatan
                          jarak jauh atau kunjungan berkala untuk memantau
                          tanda-tanda vital dan kondisi kesehatan secara umum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kategori layanan */}
          <div className="md:w-11/12 w-full my-8">
            <h2 className="font-bold text-xl md:text-2xl text-blue-900 text-center mb-2">
              Pilih Kategori Layanan Homecare
            </h2>
            <p className="text-center text-slate-500 text-sm mb-6">
              Pesan Anda akan langsung diteruskan ke tim yang menangani kategori terkait
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {HOMECARE_CATEGORIES.map((kategori) => {
                const isActive = selectedCategory === kategori.id;
                return (
                  <button
                    type="button"
                    key={kategori.id}
                    onClick={() => setSelectedCategory(kategori.id)}
                    className={`relative text-left rounded-2xl p-5 border-2 bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                      isActive
                        ? "border-emerald-500 shadow-lg ring-2 ring-emerald-200"
                        : "border-slate-200 shadow-sm"
                    }`}
                  >
                    {isActive && (
                      <FaCheckCircle className="absolute top-4 right-4 text-emerald-500 text-xl" />
                    )}
                    <kategori.Icon size={56} />
                    <h3 className="font-bold text-blue-900 text-base mt-3">
                      {kategori.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                      {kategori.description}
                    </p>
                    {/* <div className="flex items-center gap-2 mt-4 text-emerald-600 text-xs font-semibold">
                      <FaWhatsapp />
                      <span>{kategori.contactLabel}</span>
                    </div> */}
                  </button>
                );
              })}
            </div>
          </div>
        
          {/* content: form pemesanan */}
          <div className="flex justify-center my-5">
            <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
              <div className="md:w-11/12 w-full">
                <div className="mb-5 w-full flex justify-center p-5">
                  <div className="md:w-3/5 w-full bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100">
                    <h2 className="font-bold text-center text-blue-900 text-xl">
                      Pesan Sekarang
                    </h2>
                    <p className="text-center text-slate-500 text-sm mt-1">
                      Silahkan isi form dibawah ini
                    </p>

                    {activeCategory ? (
                      <div className="mt-4 flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                        <activeCategory.Icon size={36} />
                        <div>
                          <p className="text-xs text-emerald-700 font-semibold">
                            Kategori dipilih
                          </p>
                          <p className="text-sm font-bold text-blue-900">
                            {activeCategory.title}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                        <p className="text-sm text-amber-700">
                          Pilih kategori layanan di atas terlebih dahulu
                        </p>
                      </div>
                    )}

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mt-6 mb-2">
                      Identitas Pemesan
                    </p>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none p-3 rounded-xl text-base transition"
                      placeholder="Nama Pemesan"
                      id="nama"
                      name="nama"
                      value={pengaduan.nama}
                      onChange={handleChange}
                    />
                    <PhoneInput
                      country="ID"
                      value={phone}
                      onChange={setPhone}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none p-3 rounded-xl mt-3 text-base transition"
                      placeholder="No. Whatsapp"
                    />
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none p-3 rounded-xl mt-3 text-base transition"
                      placeholder="Alamat"
                      id="alamat"
                      name="alamat"
                      value={pengaduan.alamat}
                      onChange={handleChange}
                    />

                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mt-6 mb-2">
                      Identitas Pasien
                    </p>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none p-3 rounded-xl text-base transition"
                      placeholder="Nama Pasien"
                      id="nama_psn"
                      name="nama_psn"
                      value={pengaduan.nama_psn}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none p-3 rounded-xl mt-3 text-base transition"
                      placeholder="Usia"
                      id="usia"
                      name="usia"
                      value={pengaduan.usia}
                      onChange={handleChange}
                    />
                    <select
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none p-3 rounded-xl mt-3 text-base transition"
                      onChange={handleChange}
                      name="jenis_kelamin"
                      id="jenis_kelamin"
                      value={pengaduan.jenis_kelamin}
                    >
                      <option value="" disabled>
                        Pilih Jenis Kelamin
                      </option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                    <textarea
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none p-3 rounded-xl mt-3 text-base transition"
                      placeholder="Jelaskan Keluhan Pasien"
                      id="keluhan_pasien"
                      name="keluhan_pasien"
                      value={pengaduan.keluhan_pasien}
                      onChange={handleChange}
                      rows="4"
                    />

                    <button
                      className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-xl mt-5 font-semibold transition-colors"
                      onClick={submitReview}
                    >
                      <FaWhatsapp size={20} />
                      Kirim Pemesanan
                      {activeCategory ? ` · ${activeCategory.title}` : ""}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content: form pemesanan */}

          {/* Modal Notification */}
          <ModalNotificationPengaduan responseStatus={responseStatus} />
          {/* Modal Notification */}
        </div>
      </div>
    </>
  );
}