import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import Link from "next/link";
import { HTTP, WEBSERVICE, IMAGE_URL } from "../../services/NetworkServices";
import JadwalDokter from "../../components/Schedule/JadwalDokter";

export default function Spesialis() {
  const router = useRouter();
  const { kd_dokter } = router.query;
  const [dokter, setDokter] = useState({});
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [spokenText, setSpokenText] = useState("");

  useEffect(() => {
    const fetchSpesialis = async () => {
      const res = await HTTP.GET("/dokter/" + kd_dokter);
      try {
        const resDetailDokter = await WEBSERVICE.GET("/dokter/" + kd_dokter);
        setDokter({ ...res.data.result, ...resDetailDokter.data.result });
      } catch (error) {
        setDokter(res.data.result);
      }
    };

    if (kd_dokter === "20230019") {
      router.replace("/");
    } else {
      fetchSpesialis();
    }
  }, [kd_dokter]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleRouteChange = () => {
      window.speechSynthesis.cancel();
      setSpokenText("");
    };

    router.events.on("routeChangeStart", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router]);



  // 🔊 --- TTS ---
  const speakText = (text) => {
    if (!("speechSynthesis" in window)) return alert("Browser tidak mendukung TTS");

    // stop dulu biar tidak tumpang tindih
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID";
    utterance.rate = 1;
    utterance.pitch = 1;

    // ✅ tampilkan teks yang sedang dibacakan
    setSpokenText(text);

    // jika sudah selesai dibaca
    utterance.onend = () => setSpokenText("");

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeech = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpokenText(""); // ✅ sembunyikan subtitle
    }
  };

  const angkaKeTeks = (angka) => {
    const map = {
      0: "nol", 1: "satu", 2: "dua", 3: "tiga", 4: "empat",
      5: "lima", 6: "enam", 7: "tujuh", 8: "delapan", 9: "sembilan",
      10: "sepuluh", 11: "sebelas", 12: "dua belas", 13: "satu",
      14: "dua", 15: "tiga", 16: "empat",
      17: "lima", 18: "enam", 19: "tujuh",
      20: "delapan", 21: "sembilan", 22: "sepuluh",
      23: "sebelas", 24: "nol",
    };
    return map[angka] || angka;
  };

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
    return `${jamTeks} ${menitTeks} ${waktu}`;
  };

  const bersihkanNamaDokter = (nama) => {
    if (!nama) return "";
    let hasil = nama
      .split(/,|\bSp\.|\bSubsp\.|\bM\.|\bS\./i)[0]
      .replace(/^((\s*(dr|Dr|DR)\.?\s*){1,3})/, "")
      .trim();
    hasil = hasil.replace(/\s{2,}/g, " ");
    return `dokter ${hasil}`;
  };

  const getDoctorScheduleText = (doctor) => {
    let namaBersih = bersihkanNamaDokter(doctor.nm_dokter);

    let text = `${namaBersih}. `;
    if (!doctor.jadwal || doctor.jadwal.length === 0)
      return (text += "Belum ada jadwal praktek yang tersedia. ");

    if (doctor.kd_sps === "Sp.An")
      return (text += "Praktek dua puluh empat jam setiap hari selama seminggu penuh.");

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
    <div
      className={`flex justify-center min-h-screen transition-all duration-300 ${highContrast ? "bg-black text-yellow-300" : "bg-gray-50 text-black"
        }`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <div className="w-full 2xl:w-4/5 flex flex-col items-center px-5 md:px-0 mt-5">
        <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
          <Link href="/fasilitas-layanan/layanan-umum">
            <h1 className={`text-xs font-light transition-all ${highContrast ? "text-yellow-300" : "text-blue-900"
              }`}>Dokter</h1>
          </Link>
          <span className="text-xs font-light mx-2">/</span>
          <h1 className={`text-xs font-light transition-all ${highContrast ? "text-yellow-300" : "text-blue-900"
            }`}>{dokter.nm_dokter}</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full md:w-11/12 my-4">
          {/* Grup 1: Audio Controls */}
          <div className="flex flex-wrap justify-start gap-3">
            <button
              onClick={() => speakText(getDoctorScheduleText(dokter))}
              className={`px-5 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                ? "bg-yellow-300 text-black hover:bg-yellow-400 focus:ring-yellow-500"
                : "bg-green-600 hover:bg-green-700 text-white focus:ring-green-400"
                }`}
              aria-label="Dengarkan jadwal dokter"
            >
              🔊 Dengarkan Jadwal
            </button>

            <button
              onClick={stopSpeech}
              className={`px-5 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${highContrast
                ? "bg-red-400 text-black hover:bg-red-500 focus:ring-red-500"
                : "bg-red-600 hover:bg-red-700 text-white focus:ring-red-400"
                }`}
              aria-label="Berhenti mendengarkan"
            >
              🔇 Berhenti
            </button>
          </div>

          <div className="flex flex-wrap justify-start md:justify-end gap-3">
            <button
              onClick={() => setFontSize((f) => f + 2)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow-md w-full sm:w-auto"
              aria-label="Perbesar teks"
            >
              🔍+
            </button>

            <button
              onClick={() => setFontSize((f) => Math.max(14, f - 2))}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow-md w-full sm:w-auto"
              aria-label="Perkecil teks"
            >
              🔍-
            </button>

            <button
              onClick={() => setHighContrast((h) => !h)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-2 rounded-lg shadow-md w-full sm:w-auto"
              aria-label="Aktifkan mode kontras tinggi"
            >
              🌓 Kontras
            </button>
          </div>
        </div>

        {/* --- Subtitle visual untuk TTS --- */}
        {spokenText && (
          <div
            className={`p-3 my-3 rounded-lg shadow-md text-justify w-full md:w-11/12 ${highContrast ? "bg-yellow-900 text-yellow-300" : "bg-blue-100 text-blue-900"
              }`}
          >
            <p className="italic text-sm">
              <span className="font-semibold">TEKS YANG DIBACAKAN: </span> {spokenText}
            </p>
          </div>
        )}

        {/* Jadwal Dokter */}
        <div className="md:w-11/12 w-full mt-3">
          <JadwalDokter doctor={dokter} fontSize={fontSize} highContrast={highContrast} />
        </div>

        {/* Profil */}
        <div className="md:w-11/12 w-full mt-6">
          <h1
            className={`font-semibold md:text-3xl text-xl ${highContrast ? "text-yellow-300" : "text-blue-900"
              }`}
          >
            Profil {dokter.nm_dokter}
          </h1>
          <p className="text-sm mt-2 text-justify">
            Profil lengkap {dokter.nm_dokter}, riwayat pendidikan, prestasi, dan
            jadwal praktek. Informasi ini dilengkapi dengan dukungan alt text
            dan pembacaan otomatis untuk pengguna disabilitas visual.
          </p>
        </div>
      </div>
    </div>
  );
}
