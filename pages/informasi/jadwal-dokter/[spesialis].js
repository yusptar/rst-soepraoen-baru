import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import { HTTP, WEBSERVICE } from "../../../services/NetworkServices";
import JadwalDokter from "../../../components/Schedule/JadwalDokter";

export default function Spesialis() {
  const router = useRouter();
  const { spesialis, kd_sps } = router.query;
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [listDoctors, setListDoctors] = useState([]);
  const [spokenText, setSpokenText] = useState("");
  const [activeDoctor, setActiveDoctor] = useState(null);


  // 📦 Ambil data dokter
  useEffect(() => {
    const fetchSpesialis = async () => {
      const res = await HTTP.GET("/spesialis/" + kd_sps);
      const detailDokter = await WEBSERVICE.GET("/spesialis/" + kd_sps);
      const response = await Promise.all([res, detailDokter]);
      let dataList = response[0]?.data?.result.dokter || [];
      const dataDetail = response[1]?.data?.result.dokter || [];

      dataDetail?.map((value) => {
        const idx = dataList.findIndex((dt) => dt.kd_dokter === value.kd_dokter);
        if (idx > -1) dataList[idx].imagepath = value.imagepath;
      });

      res.data.result.dokter = dataList;
      setListDoctors(res.data.result);
    };

    if (kd_sps) fetchSpesialis();
  }, [kd_sps]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleRouteChange = () => {
      window.speechSynthesis.cancel();
      setSpokenText("");
      setActiveDoctor(null);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router]);


  // 🔊 TTS
  const speakText = (text, doctorId) => {
    if (!("speechSynthesis" in window)) return alert("Browser tidak mendukung TTS");

    window.speechSynthesis.cancel(); // hentikan jika sedang membaca lain

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 1;
    utterance.pitch = 1;

    setActiveDoctor(doctorId);
    setSpokenText(text);

    utterance.onend = () => {
      setSpokenText("");
      setActiveDoctor(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpokenText("");
      setActiveDoctor(null);
    }
  };

  const angkaKeTeks = (angka) => {
    const angkaMap = {
      0: "nol", 1: "satu", 2: "dua", 3: "tiga", 4: "empat",
      5: "lima", 6: "enam", 7: "tujuh", 8: "delapan", 9: "sembilan",
      10: "sepuluh", 11: "sebelas", 12: "dua belas", 13: "satu",
      14: "dua", 15: "tiga", 16: "empat",
      17: "lima", 18: "enam", 19: "tujuh",
      20: "delapan", 21: "sembilan", 22: "sepuluh",
      23: "sebelas", 24: "nol",
    };
    return angkaMap[angka] || angka;
  };

  // 🕐 Jam ke teks
  const ubahJamKeTeks = (jamString) => {
    if (!jamString || !jamString.includes(":")) return jamString;

    const [jam, menit] = jamString.split(":").map((n) => parseInt(n, 10));
    let waktu = "";
    if (jam >= 0 && jam < 11) waktu = "pagi";
    else if (jam >= 11 && jam < 15) waktu = "siang";
    else if (jam >= 15 && jam < 19) waktu = "sore";
    else waktu = "malam";

    const jamTeks = angkaKeTeks(jam);
    const menitTeks = menit === 0 ? "" : angkaKeTeks(menit);
    return `${jamTeks} ${menitTeks} ${waktu}`.trim();
  };

  // ✂️ Hapus gelar dokter
  const bersihkanNamaDokter = (nama) => {
    if (!nama) return "";
    let hasil = nama.split(/,|\bSp\.|\bSubsp\.|\bM\.|\bS\./i)[0];
    hasil = hasil.replace(/^((\s*(dr|Dr|DR)\.?\s*){1,3})/, "");
    hasil = "dokter " + hasil.trim();
    hasil = hasil.replace(/[\,\.\(\)]+$/g, "").trim();
    hasil = hasil.replace(/\s{2,}/g, " ");
    return hasil;
  };

  // 📅 Jadwal semua dokter
  const getAllSchedulesText = () => {
    if (!listDoctors?.dokter) return "Belum ada jadwal dokter yang tersedia.";
    let text = `Jadwal ${listDoctors.nm_sps}. `;
    listDoctors.dokter.forEach((doctor) => {
      text += getDoctorScheduleText(doctor);
    });
    return text;
  };

  // 📅 Jadwal per dokter
  const getDoctorScheduleText = (doctor) => {
    let namaBersih = bersihkanNamaDokter(doctor.nm_dokter);
    let text = `${namaBersih}. `;

    if (!doctor.jadwal || doctor.jadwal.length === 0)
      return text + "Belum ada jadwal tersedia. ";

    if (doctor.kd_sps === "Sp.An")
      return text + "Praktek dua puluh empat jam setiap hari selama seminggu penuh.";

    doctor.jadwal.forEach((j) => {
      const mulai = ubahJamKeTeks(j.jam_mulai);
      const selesai = ubahJamKeTeks(j.jam_selesai);

      if (j.jam_mulai == "01:31:00") {
        text +=  `Hari ${j.hari_kerja}, Praktek siap siaga on call.`;
        return text;
      } else {
        text += `Hari ${j.hari_kerja}, pukul ${mulai} sampai pukul ${selesai}. `;
      };
    });

    return text;
  };

  return (
    <>
      <BannerRS title="Jadwal Dokter Spesialis" />

      <div
        className={`flex justify-center min-h-screen transition-all duration-300 ${highContrast ? "bg-black text-yellow-300" : "bg-gray-50 text-black"
          }`}
        style={{ fontSize: `${fontSize}px` }}
      >
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <h1
            className={`font-semibold md:text-4xl text-lg text-center my-5 transition-all ${highContrast ? "text-yellow-300" : "text-blue-900"
              }`}
          >
            Jadwal {listDoctors.nm_sps}
          </h1>

          {/* 🔘 Tombol Aksesibilitas */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-5 w-11/12">
            <div className="flex justify-start gap-3 flex-wrap">
              {/* <button
                onClick={() => speakText(getAllSchedulesText())}
                className={`px-5 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                  ? "bg-yellow-300 text-black hover:bg-yellow-400 focus:ring-yellow-500"
                  : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400"
                  }`}
                aria-label="Dengarkan semua jadwal dokter"
              >
                🔊 Dengarkan Semua
              </button>

              <button
                onClick={stopSpeech}
                className={`px-5 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                  ? "bg-red-400 text-black hover:bg-red-500 focus:ring-red-500"
                  : "bg-red-600 hover:bg-red-700 text-white focus:ring-red-400"
                  }`}
                aria-label="Berhenti membacakan jadwal"
              >
                🔇 Berhenti
              </button> */}
            </div>

            <div className="flex justify-end gap-3 flex-wrap">
              <button
                onClick={() => setFontSize((f) => f + 2)}
                className={`px-3 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                  ? "bg-yellow-300 text-black hover:bg-yellow-400 focus:ring-yellow-500"
                  : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400"
                  }`}
                aria-label="Perbesar teks"
              >
                🔍+
              </button>

              <button
                onClick={() => setFontSize((f) => Math.max(14, f - 2))}
                className={`px-3 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                  ? "bg-yellow-300 text-black hover:bg-yellow-400 focus:ring-yellow-500"
                  : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400"
                  }`}
                aria-label="Perkecil teks"
              >
                🔍-
              </button>

              <button
                onClick={() => setHighContrast((h) => !h)}
                className={`px-3 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                  ? "bg-yellow-300 text-black hover:bg-yellow-400 focus:ring-yellow-500"
                  : "bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-400"
                  }`}
                aria-label="Aktifkan mode kontras tinggi"
              >
                🌓 Kontras
              </button>
            </div>
          </div>

          {/* 🩺 Daftar Dokter */}
          <div className="md:w-11/12 w-full">
            {listDoctors.dokter?.map((doctor, index) => (
              <div
                key={index}
                className={`mb-10 p-4 rounded-xl border shadow-sm hover:shadow-md transition ${highContrast
                  ? "bg-black border-yellow-400 text-yellow-300"
                  : "bg-white border-gray-200 text-gray-800"
                  }`}
              >
                <div className="flex justify-between items-center flex-wrap mb-3">
                  {/* <h2
                    className={`text-lg font-semibold ${highContrast ? "text-yellow-300" : "text-gray-800"
                      }`}
                  >
                    {doctor.nm_dokter}
                  </h2> */}

                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={() =>
                        speakText(getDoctorScheduleText(doctor), doctor.kd_dokter)
                      }
                      className={`px-4 py-1.5 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                        ? "bg-yellow-300 text-black hover:bg-yellow-400 focus:ring-yellow-500"
                        : "bg-green-600 hover:bg-green-700 text-white focus:ring-green-400"
                        }`}
                      aria-label={`Dengarkan jadwal ${bersihkanNamaDokter(
                        doctor.nm_dokter
                      )}`}
                    >
                      🔊 Dengarkan Jadwal
                    </button>

                    <button
                      onClick={stopSpeech}
                      className={`px-4 py-1.5 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                        ? "bg-red-400 text-black hover:bg-red-500 focus:ring-red-500"
                        : "bg-red-600 hover:bg-red-700 text-white focus:ring-red-400"
                        }`}
                      aria-label="Berhenti membacakan jadwal"
                    >
                      🔇 Berhenti
                    </button>
                  </div>
                </div>

                {/* --- Subtitle visual untuk TTS (khusus dokter aktif) --- */}
                {activeDoctor === doctor.kd_dokter && spokenText && (
                  <div
                    className={`p-3 my-3 rounded-lg shadow-md text-justify w-full md:w-12/12 ${highContrast
                      ? "bg-yellow-900 text-yellow-300"
                      : "bg-blue-100 text-blue-900"
                      }`}
                  >
                    <p className="text-lg">
                      <span className="font-bold">TEKS YANG DIBACAKAN: </span>
                      {spokenText}
                    </p>
                  </div>
                )}

                {/* Komponen Jadwal Dokter */}
                <JadwalDokter
                  doctor={doctor}
                  namaSpesialis={listDoctors.nm_sps}
                  highContrast={highContrast}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
