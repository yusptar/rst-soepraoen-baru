import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HTTP } from "../../../../services/NetworkServices";
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

const listManfaat = [
  {
    title: "Mendiagnosis gangguan tulang, seperti tumor tulang dan fraktur",
  },
  {
    title: "Menentukan lokasi tumor, infeksi, atau gumpalan darah.",
  },
  {
    title:
      "Sebagai bagian dari prosedur, seperti operasi, biopsi, dan terapi radiasi.",
  },
  {
    title:
      "Mendeteksi dan memantau kondisi penyakit seperti kanker, penyakit jantung, nodul paru, dan massa hati.",
  },
  {
    title: "Mendeteksi cedera internal atau pendarahan internal.",
  },
];
export default function CTScan() {
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
              <h1 className="text-xs font-light">CT Scan</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <div className="md:w-11/12 w-full my-5">
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                src={asset("/assets/unggulan/ct-scan-banner.jpg")}
                alt={"CT Scan"}
                // fill={true}
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full text-center">
            <p className="text-justify mb-5">
              CT scan adalah prosedur diagnosis yang menggunakan komputer dan
              mesin sinar-X yang berputar untuk membuat gambar penampang tubuh.
              Gambar-gambar ini memberikan informasi yang lebih rinci daripada
              gambar sinar-X biasa. Mereka dapat menunjukkan jaringan lunak,
              pembuluh darah, dan tulang di berbagai bagian tubuh. CT scan juga
              dapat membantu dokter lebih cepat menentukan tingkat keparahan
              luka dalam atau perdarahan yang terjadi. Keberadaan CT scan juga
              penting dalam diagnosis, pengobatan, dan penelitian kanker. Dokter
              mungkin akan merekomendasikan untuk melakukan CT scan untuk tujuan
              berikut :
            </p>
            {listManfaat.map((item) => (
              <li className="text-justify" key={item.title}>
                {" "}
                {item.title}
              </li>
            ))}
            {/* <ol className="list-disc">
              <li>
                Mendiagnosis gangguan tulang, seperti tumor tulang dan fraktur
              </li>
              <li>Menentukan lokasi tumor, infeksi, atau gumpalan darah.</li>
              <li>
                Sebagai bagian dari prosedur, seperti operasi, biopsi, dan
                terapi radiasi.
              </li>
              <li>
                Mendeteksi dan memantau kondisi penyakit seperti kanker,
                penyakit jantung, nodul paru, dan massa hati.
              </li>
              <li>Mendeteksi cedera internal atau pendarahan internal.</li>
            </ol> */}
            <p className="text-justify mt-5">
              Walau memiliki risiko dan efek samping, pemeriksaan CT scan
              memberikan manfaat yang lebih besar. Dokter akan menggunakan dosis
              radiasi serendah mungkin untuk mendapatkan informasi medis yang
              dibutuhkan. Selain itu, mesin dan teknik yang lebih baru
              membutuhkan lebih sedikit radiasi daripada yang digunakan
              sebelumnya.
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
        </div>
      </div>
      {/* content */}
    </>
  );
}
