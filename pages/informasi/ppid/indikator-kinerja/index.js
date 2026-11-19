"use client";

import React, { useEffect, useState } from "react";
import BannerRS from "../../../../components/Banner/BannerRS";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { HTTP } from "../../../../services/NetworkServices";

export default function IndikatorKinerja() {
  const [dataPenyakit, setDataPenyakit] = useState([]);
  const [loading, setLoading] = useState(true);
  const [indikator, setIndikator] = useState({
    bor: 0,
    los: 0,
    toi: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPenyakit = await HTTP.GET("/penyakit");
        const formatted = resPenyakit.data.data.map((item) => ({
          nama: item.nm_penyakit,
          jumlah: item.jml,
        }));
        setDataPenyakit(formatted);

        const resIndikator = await HTTP.GET("/index");

        setIndikator({
          bor: resIndikator.data?.result?.bor ?? 0,
          los: resIndikator.data?.result?.los ?? 0,
          toi: resIndikator.data?.result?.toi ?? 0,
        });

      } catch (error) {
        console.error("Gagal ambil data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BannerRS title="Indikator Kinerja" />

      <div className="flex justify-center my-8">
        <div className="w-full 2xl:w-4/5 px-5">

          {/* CARD */}
          <div className="bg-gray-100 rounded-xl shadow-sm p-6 border-l-4 mb-5 border-blue-800 text-center font-bold">DATA PERHITUNGAN HARIAN</div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-100 rounded-xl shadow-sm p-6 border-l-4 border-blue-800">
              <p className="text-sm text-cyan-600 font-semibold">BOR (%)</p>
              <h2 className="text-3xl font-bold text-gray-700">
                {loading ? "..." : indikator.bor}
              </h2>
            </div>

            <div className="bg-gray-100 rounded-xl shadow-sm p-6 border-l-4 border-blue-800">
              <p className="text-sm text-orange-500 font-semibold">ALOS</p>
              <h2 className="text-3xl font-bold text-gray-700">
                {loading ? "..." : indikator.los}
              </h2>
            </div>

            <div className="bg-gray-100 rounded-xl shadow-sm p-6 border-l-4 border-blue-800">
              <p className="text-sm text-yellow-600 font-semibold">TOI</p>
              <h2 className="text-3xl font-bold text-gray-700">
                {loading ? "..." : indikator.toi}
              </h2>
            </div>

          </div>
          {/* GRAFIK */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">
              10 Penyakit Terbanyak
            </h2>

            {loading ? (
              <p className="text-center">Loading data...</p>
            ) : (
              <div className="w-full h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dataPenyakit}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 120, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    
                    <XAxis type="number" />
                    
                    <YAxis 
                      type="category"
                      dataKey="nama"
                      width={250}   // penting supaya teks panjang muat
                    />
                    
                    <Tooltip />
                    <Bar dataKey="jumlah" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}