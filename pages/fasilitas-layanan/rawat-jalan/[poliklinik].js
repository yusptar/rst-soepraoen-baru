import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import Link from "next/link";
import BannerPoli from "../../../components/Banner/BannerPoli";
import { HTTP, WEBSERVICE, IMAGE_URL } from "../../../services/NetworkServices";
import CardLayanan from "../../../components/Card/CardLayanan";
import JadwalDokter from "../../../components/Schedule/JadwalDokter";
import { listPoliklinik } from "../../../components/List/listPoliklinik";
import { asset } from "../../../helpers/asset";

const listProsedur = [
  {
    id: 1,
    title: "Mengambil nomor antrian",
  },
  {
    id: 2,
    title: "Melakukan pendaftaran",
  },
  {
    id: 3,
    title: "Melakukan pembayaran",
  },
  {
    id: 4,
    title: "Penerbitan SEP dan Casemix",
  },
  {
    id: 5,
    title: "Pasien menuju poliklinik",
  },
];

const listPersyaratan = [
  {
    id: 1,
    title: "Kartu Pendaftaran",
  },
  {
    id: 2,
    title: "Kartu BPJS (bagi peserta JKN-KIS)",
  },
  {
    id: 3,
    title: "Surat Rujukan",
  },
];
export default function Poliklinik() {
  const router = useRouter();
  const { poliklinik, kd_poli } = router.query;
  const [listJadwalPoli, setListJadwalPoli] = useState([]);
  const [showAllLayanan, setShowAllLayanan] = useState(false);
  const [dataPoliklinik, setDataPoliklinik] = useState({
    nm_poli: "",
    keterangan: "",
    banner: "",
  });
  useEffect(() => {
    const fetchSpesialis = async () => {
      if (kd_poli == "PTD") {
        const res = await HTTP.GET("/poliklinik/" + kd_poli);
        const resBdm = await HTTP.GET("/poliklinik/BDM");

        const data = res.data.result;
        let dokterList = [...res.data.result.dokter, ...resBdm.data.result.dokter];
        const kd_sps = dokterList.length > 0 ? dokterList[0].kd_sps : null;

        if (kd_sps) {
          const detailDokter = await WEBSERVICE.GET("/spesialis/" + kd_sps);
          const dataDetail = detailDokter?.data?.result?.dokter || [];

          dataDetail.forEach((detail) => {
            const idx = dokterList.findIndex(
              (dt) => dt.kd_dokter === detail.kd_dokter
            );
            if (idx > -1) {
              dokterList[idx].imagepath = detail.imagepath;
            }
          });
        }

        data.dokter = dokterList;
        setListJadwalPoli(data);
      } else {
        const res = await HTTP.GET("/poliklinik/" + kd_poli);
        
        const dataPoli = res.data.result;
        const dokterList = dataPoli.dokter || [];
        const kd_sps = dokterList.length > 0 ? dokterList[0].kd_sps : null;

        if (kd_sps) {
          const detailDokter = await WEBSERVICE.GET("/spesialis/" + kd_sps);
          const dataDetail = detailDokter?.data?.result?.dokter || [];

          dataDetail.forEach((detail) => {
            const idx = dokterList.findIndex(
              (dt) => dt.kd_dokter === detail.kd_dokter
            );
            if (idx > -1) {
              dokterList[idx].imagepath = detail.imagepath;
            }
          });
        }
        
        dataPoli.dokter = dokterList;

       
        setListJadwalPoli(dataPoli);
      }
    };
    const fetchPoliklinik = async () => {
      const res = await WEBSERVICE.GET("/poliklinik/" + kd_poli);
      setDataPoliklinik(res.data.result);
    };
    if (kd_poli) {
      fetchSpesialis();
      fetchPoliklinik();
    }
  }, [kd_poli]);

  const handleChange = (e) => {
    e.preventDefault();
    router.push(e.target.value);
  };

  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/fasilitas-layanan/rawat-jalan/">
              <h1 className=" text-xs font-light">Fasilitas Layanan</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>

            <Link href="/fasilitas-layanan/rawat-jalan/">
              <h1 className=" text-xs font-light">Rawat Jalan</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href={"/fasilitas-layanan/rawat-jalan/" + poliklinik}>
              <h1 className=" text-xs font-light">{listJadwalPoli?.nm_poli}</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          {/* mobile */}
          <div className="w-full md:hidden flex justify-center mt-3">
            <select
              className="w-full bg-white text-blue-900 py-3 border border-gray-300 rounded-md"
              // value={props.url}
              onChange={(e) => handleChange(e)}
            >
              {listPoliklinik.map((poliklinik, index) => (
                <option
                  key={index}
                  value={poliklinik.link}
                  className="text-blue-900"
                >
                  {poliklinik.name}
                </option>
              ))}
            </select>
          </div>
          {/* mobile */}

          {/* banner poli */}
          <div className="md:w-11/12 w-full my-5">
            <BannerPoli
              banner={
                dataPoliklinik.banner
                  ? IMAGE_URL + dataPoliklinik.banner
                  : asset("/assets/poli/penyakit-dalam-cover.png")
              }
              nama_poli={dataPoliklinik.nm_poli}
            />
          </div>
          {/* banner poli */}

          {/* Main */}
          <div className="md:w-11/12 w-full">
            <p className="md:text-base text-sm  w-full text-justify">
              {dataPoliklinik.keterangan}
            </p>
            <h1 className="mt-5 text-lg font-semibold">
              Prosedur Pendaftaran :{" "}
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              {listProsedur.map((prosedur, index) => (
                <div
                  key={index}
                  className="flex flex-row md:justify-between items-center my-3 bg-white p-2 rounded-md shadow-md border"
                >
                  <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-900 text-white">
                    <h1 className="text-2xl font-semibold">{prosedur.id}</h1>
                  </div>
                  <div className="ml-3">
                    <h1 className="text-sm font-semibold">{prosedur.title}</h1>
                  </div>
                </div>
              ))}
            </div>
            <h1 className="mt-5 text-lg font-semibold">Persyaratan : </h1>
            <ol className="list-decimal list-inside text-sm">
              {listPersyaratan.map((persyaratan, index) => (
                <li key={index} className="my-2 text-lg">
                  {persyaratan.title}
                </li>
              ))}
            </ol>
            <h1 className="mt-5 text-lg font-semibold">
              Layanan Poliklinik :{" "}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 my-5">
              {listJadwalPoli.jenis_perawatan
                ?.slice(
                  0,
                  showAllLayanan ? listJadwalPoli.jenis_perawatan.length : 8
                )
                .map((layanan, index) => (
                  <CardLayanan key={index} layanan={layanan} />
                ))}
            </div>
            <div
              className={
                listJadwalPoli.jenis_perawatan?.length > 8
                  ? `w-full flex justify-center`
                  : `hidden`
              }
            >
              <button
                className="btn"
                onClick={() => setShowAllLayanan(!showAllLayanan)}
              >
                Lihat Selengkapnya
              </button>
            </div>
            <div className="w-full">
              <h1 className="my-5 text-lg font-semibold">Jadwal Dokter :</h1>
                {listJadwalPoli.dokter
                    ?.filter((doctor) => doctor.status === "1")
                    .map((doctor, index) => (
                      <JadwalDokter
                        key={index}
                        doctor={doctor}
                        namaPoli={listJadwalPoli.nm_poli}
                      />
                  ))
                }
            </div>
          </div>
          {/* Main */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
