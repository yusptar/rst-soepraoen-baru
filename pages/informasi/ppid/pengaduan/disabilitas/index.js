"use client";
import React, { useState } from "react";

export default function PengaduanPage() {
    const [formData, setFormData] = useState({
        nama: "",
        jenisDisabilitas: "",
        kontak: "",
        isi: "",
        lampiran: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Terima kasih, pengaduan Anda telah dikirim!");
        console.log(formData);
    };

    // Fitur Text-to-Speech
    const speakText = () => {
        const text = `
      Nama: ${formData.nama || "Belum diisi"},
      Jenis Disabilitas: ${formData.jenisDisabilitas || "Belum dipilih"},
      Kontak: ${formData.kontak || "Belum diisi"},
      Isi Pengaduan: ${formData.isi || "Belum diisi"}
    `;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "id-ID";
        speechSynthesis.speak(utterance);
    };

    // Fitur Speech-to-Text (untuk isi pengaduan)
    const startDictation = () => {
        if ("webkitSpeechRecognition" in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.lang = "id-ID";
            recognition.start();
            recognition.onresult = function (event) {
                setFormData((prev) => ({
                    ...prev,
                    isi: event.results[0][0].transcript,
                }));
            };
        } else {
            alert("Browser Anda belum mendukung input suara.");
        }
    };

    return (
        <div
            className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6"
            aria-label="Form Pengaduan Masyarakat Rumah Sakit Inklusif"
        >
            <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
                <h1 className="text-2xl font-bold text-center text-teal-700 mb-4">
                    Form Pengaduan Masyarakat
                </h1>
                <p className="text-center text-gray-600 mb-6">
                    Rumah Sakit Ramah Disabilitas – Kami Mendengar Semua Suara 💙
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="nama" className="font-semibold block mt-3">
                        Nama Lengkap
                    </label>
                    <input
                        id="nama"
                        name="nama"
                        type="text"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md mt-1"
                        placeholder="Masukkan nama Anda"
                    />

                    <label htmlFor="jenisDisabilitas" className="font-semibold block mt-3">
                        Jenis Disabilitas
                    </label>
                    <select
                        id="jenisDisabilitas"
                        name="jenisDisabilitas"
                        value={formData.jenisDisabilitas}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md mt-1"
                    >
                        <option value="">-- Pilih --</option>
                        <option>Tidak ada</option>
                        <option>Tuna Netra</option>
                        <option>Tuna Rungu</option>
                        <option>Tuna Wicara</option>
                        <option>Tuna Daksa</option>
                        <option>Tuna Grahita</option>
                        <option>Lainnya</option>
                    </select>

                    <label htmlFor="kontak" className="font-semibold block mt-3">
                        Kontak (HP / Email)
                    </label>
                    <input
                        id="kontak"
                        name="kontak"
                        type="text"
                        value={formData.kontak}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md mt-1"
                        placeholder="Nomor HP atau email aktif"
                    />

                    <label htmlFor="isi" className="font-semibold block mt-3">
                        Isi Pengaduan
                    </label>
                    <textarea
                        id="isi"
                        name="isi"
                        rows="5"
                        value={formData.isi}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md mt-1"
                        placeholder="Tuliskan pengaduan Anda di sini"
                    ></textarea>

                    <label htmlFor="lampiran" className="font-semibold block mt-3">
                        Lampiran (opsional)
                    </label>
                    <input
                        id="lampiran"
                        name="lampiran"
                        type="file"
                        accept="image/*,application/pdf,audio/*,video/*"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md mt-1"
                    />

                    <button
                        type="submit"
                        className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-md mt-6 font-semibold"
                    >
                        Kirim Pengaduan
                    </button>
                </form>

                <div
                    className="accessible-tools bg-gray-100 p-4 mt-6 rounded-md"
                    aria-label="Fitur aksesibilitas tambahan"
                >
                    <h4 className="font-semibold text-gray-700 mb-2">
                        🔊 Fitur Aksesibilitas
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <button
                            onClick={speakText}
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md w-full sm:w-auto"
                        >
                            🔈 Bacakan Isi Form
                        </button>
                        <button
                            onClick={startDictation}
                            type="button"
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md w-full sm:w-auto"
                        >
                            🎙️ Isi dengan Suara
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        *Pastikan browser Anda mendukung Speech API (misalnya Google Chrome)
                    </p>
                </div>
            </div>
        </div>
    );
}
