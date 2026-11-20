import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "dayjs/locale/id";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("id");
import { HTTP } from "../../../../services/NetworkServices";
import JadwalDokter from "../../../../components/Schedule/JadwalDokter";
import { asset } from "../../../../helpers/asset";

const listGallery = [
  {
    image: asset("/assets/unit/hemodialisa-1.jpg"),
  },
  {
    image: asset("/assets/unit/hemodialisa-2.jpg"),
  },
  {
    image: asset("/assets/unit/hemodialisa-3.jpg"),
  },
];

export default function UnitHemodialisa() {
  const [listDoctors, setListDoctors] = useState([]);

  useEffect(() => {
    const fetchSpesialis = async () => {
      const res = await HTTP.GET("/spesialis/Sp.Ra");
      setListDoctors(res.data.result);
    };

    fetchSpesialis();
  }, []);

  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/layanan-unggulan">
              <h1 className="text-xs font-light">Layanan Unggulan</h1>
            </Link>
            <span className="text-xs font-light mx-2">/</span>
            <Link href="/fasilitas-layanan/layanan-unggulan/">
              <h1 className="text-xs font-light">Unit Hemodialisa</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unit/radioterapi-banner.jpg")}
                alt={"Radioterapi"}
                // fill={true}
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-justify">
            <p>
              Radioterapi merupakan terapi yang menggunakan radiasi yang
              bersumber dari energi radioaktif. Terapi ini bertujuan untuk
              penghancuran jaringan kanker atau mengurangi ukurannya atau
              menghilangkan gejala dan gangguan yang menyertai. Lalu apakah
              radioterapi aman? Jawabannya adalah iya. Teknik radioterapi saat
              ini telah berkembang ke level yang lebih baik dibandingkan saat
              pertama kali dimanfaatkan untuk keperluan medis. Dari sisi alat
              radiasi dan tempat tindakan dilakukan, persyaratan dan peraturan
              yang cukup ketat harus dipenuhi sampai suatu layanan radioterapi
              dapat beroperasi, dan salah satu syarat adalah keamanan radiasi
              disekitar ruang tindakan yang didesain khusus untuk tujuan
              tersebut. Evaluasi kualitas alat dan keamanan dari bahaya radiasi
              rutin dilakukan sesuai keharusan perundang-undangan badan pengatur
              tenaga nuklir. Petugas kesehatan yang membantu pelayanan juga
              terlatih, profesional, dan berkualifikasi. Dari sisi pasien,
              teknik radioterapi saat ini terfokus dan terukur, dapat secara
              presisi mengenai jaringan kanker dan secara bersamaan meminimalkan
              kerusakan akibat radiasi pada jaringan tubuh sehat disekitarnya.
              Hal ini dimungkinkan karena pemetaan target terapi dan jaringan
              sehat secara tiga dimensi, penggunaan komputerisasi dalam
              perhitungan dosis radiasi, dan kemampuan alat radiasi terkini.
              Diseluruh dunia, jutaan pasien sudah menjalani radioterapi setiap
              tahunnya secara aman untuk mengobati berbagai jenis kanker.
            </p>
            {/* <div className="grid grid-cols-3 gap-2 mt-5">
              {listMesin.map((item) => (
                <div
                  className="flex flex-col justify-center items-center border rounded-lg py-2 px-2 text-center shadow-md"
                  key={item.id}
                >
                  <h1 className="text-2xl font-bold">{item.jumlah}</h1>
                  <p className="text-xs font-light">{item.nama}</p>
                </div>
              ))}
            </div> */}
          </div>
          <div className="md:w-11/12 w-full text-left">
            {/* <h1 className="text-xl font-bold w-full mt-5">Galeri :</h1> */}
          </div>
          {/* <div className="md:w-11/12 w-full my-5 md:flex gap-2">
            {listGallery.map((item, index) => (
              <div
                className="w-full aspect-[6/3] relative rounded-md cursor-pointer mt-5 md:mt-0"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={"Unit Hemodialisa Rumah Sakit Tk.II dr. Soepraoen"}
                  priority={true}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </div> */}

          {/* <div className="md:w-11/12 grid grid-cols-3 gap-2"></div> */}
          <div className="md:w-11/12 w-full">
            <h1 className="text-xl font-bold w-full my-5">Jadwal dokter :</h1>
            {listDoctors.dokter?.slice(0, 2).map((doctor, index) => (
              <JadwalDokter key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
