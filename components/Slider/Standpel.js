import { React, useEffect, useState } from "react";
import Link from "next/link";
import YouTube from "react-youtube";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Image from "next/image";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { asset } from "../../helpers/asset";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const contents = [
  {
    id: 1,
    image: asset("/assets/standar-pelayanan/2026/igd.jpeg"),
    alt: "Standar Pelayanan IGD",
  },
  {
    id: 2,
    image: asset("/assets/standar-pelayanan/2026/anak.jpeg"),
    alt: "Standar Pelayanan Anak",
  },
  {
    id: 3,
    image: asset("/assets/standar-pelayanan/2026/bedah.jpeg"),
    alt: "Standar Pelayanan Bedah",
  },
  // {
  //   id: 4,
  //   image: "/assets/standar-pelayanan/2025/BEDAH ONKOLOGI.png",
  //   alt: "Standar Pelayanan Bedah Onkologi",
  // },
  // {
  //   id: 5,
  //   image: "/assets/standar-pelayanan/2025/BEDAH ORTHOPEDI.png",
  //   alt: "Standar Pelayanan Bedah Orthopedi",
  // },
  // {
  //   id: 6,
  //   image: "/assets/standar-pelayanan/2025/BEDAH PLASTIK.png",
  //   alt: "Standar Pelayanan Bedah Plastik",
  // },
  // {
  //   id: 7,
  //   image: "/assets/standar-pelayanan/2025/BEDAH SARAF.png",
  //   alt: "Standar Pelayanan Bedah Saraf",
  // },
  // {
  //   id: 8,
  //   image: "/assets/standar-pelayanan/2025/BEDAH THORAX KARDIOVASKULER.png",
  //   alt: "Standar Pelayanan Bedah Thorax Kardiovaskuler",
  // },
  // {
  //   id: 9,
  //   image: "/assets/standar-pelayanan/2025/BEDAH UMUM.png",
  //   alt: "Standar Pelayanan Bedah Umum",
  // },
  // {
  //   id: 10,
  //   image: "/assets/standar-pelayanan/2025/BEDAH UROLOGI.png",
  //   alt: "Standar Pelayanan Bedah Urologi",
  // },
  // {
  //   id: 11,
  //   image: "/assets/standar-pelayanan/2025/GIGI & MULUT.png",
  //   alt: "Standar Pelayanan Gigi dan Mulut",
  // },
  // {
  //   id: 12,
  //   image: "/assets/standar-pelayanan/2025/GIGI ANAK.png",
  //   alt: "Standar Pelayanan Gigi Anak",
  // },
  // {
  //   id: 13,
  //   image: "/assets/standar-pelayanan/2025/JANTUNG.png",
  //   alt: "Standar Pelayanan Jantung",
  // },
  {
    id: 14,
    image: asset("/assets/standar-pelayanan/2026/kandungan.jpeg"),
    alt: "Standar Pelayanan Kandungan",
  },
  // {
  //   id: 15,
  //   image: "/assets/standar-pelayanan/2025/KEMOTERAPI.png",
  //   alt: "Standar Pelayanan Kemoterapi",
  // },
  // {
  //   id: 16,
  //   image: "/assets/standar-pelayanan/2025/KESEHATAN JIWA.png",
  //   alt: "Standar Pelayanan Kesehatan Jiwa",
  // },
  {
    id: 17,
    image: asset("/assets/standar-pelayanan/2026/kulit.jpeg"),
    alt: "Standar Pelayanan Kulit dan Kelamin",
  },
  {
    id: 18,
    image: asset("/assets/standar-pelayanan/2026/mata.jpeg"),
    alt: "Standar Pelayanan Mata",
  },
  {
    id: 19,
    image: asset("/assets/standar-pelayanan/2026/saraf.jpeg"),
    alt: "Standar Pelayanan Neurologi (Syaraf)",
  },
  // {
  //   id: 20,
  //   image: "/assets/standar-pelayanan/2025/ONKOLOGI GYNEKOLOGI.png",
  //   alt: "Standar Pelayanan Onkologi Ginekologi",
  // },
  // {
  //   id: 21,
  //   image: "/assets/standar-pelayanan/2025/PELAYANAN GIZI.png",
  //   alt: "Standar Pelayanan Gizi",
  // },
  {
    id: 22,
    image: asset("/assets/standar-pelayanan/2026/penyakit-dalam.jpeg"),
    alt: "Standar Pelayanan Penyakit Dalam",
  },
  // {
  //   id: 23,
  //   image: "/assets/standar-pelayanan/2025/POLI PARU.png",
  //   alt: "Standar Pelayanan Poli Paru",
  // },
  // {
  //   id: 24,
  //   image: "/assets/standar-pelayanan/2025/RADIOTERAPI.png",
  //   alt: "Standar Pelayanan Radioterapi",
  // },
  // {
  //   id: 25,
  //   image: "/assets/standar-pelayanan/2025/REHABILITASI MEDIK.png",
  //   alt: "Standar Pelayanan Rehabilitasi Medik",
  // },
  // {
  //   id: 26,
  //   image: "/assets/standar-pelayanan/2025/THT.png",
  //   alt: "Standar Pelayanan THT",
  // },
  // {
  //   id: 27,
  //   image: "/assets/standar-pelayanan/2025/VCT ROSELA.png",
  //   alt: "Standar Pelayanan VCT Rosela",
  // },
];


const Responsive = {
  0: {
    items: 1.1,
  },
  500: {
    items: 1,
  },
  768: {
    items: 1,
  },
  900: {
    items: 1,
  },
  1200: {
    items: 1,
  },
  1400: {
    items: 1,
  },
};

export default function Slider() {
  const [selectedBanner, setSelectedBanner] = useState({
    id: 1,
    image: asset("/assets/banner-wtrb-new.png"),
    alt: "image2",
    link: "/",
  });

  // show modal on load
  useEffect(() => {
    $("#modal-show-banner").prop("checked", true);
  }, []);

  return (
    <div className="relative px-8">
      <OwlCarousel
        loop
        margin={5}
        autoplay
        dots={true}
        nav={true}
        navText={[
          '<div class="custom-owl-nav left-4"><span class="text-black text-4xl">&#10094;</span></div>',
          '<div class="custom-owl-nav right-4"><span class="text-black text-4xl">&#10095;</span></div>',
        ]}
        responsive={Responsive}
        animateOut="fadeOut"
        animateIn="fadeIn"
      >
        {contents.map((content) => (
          <div
          className="w-full aspect-[2/1] relative rounded-md cursor-pointer"
          key={content.id}
          >
            <Image
              src={content.image}
              alt={content.alt}
              width={800}
              height={200}
              priority={true}
              className="object-fill rounded-md"
              sizes="50%"
            />
          </div>
          // <div
          //   key={content.id}
          //   className="item p-0 cursor-pointer relative md:h-screen"
          // >
          //   <Image
          //     src={content.image}
          //     alt={content.alt}
          //     priority={true}
          //     style={{ objectFit: "cover" }}
          //     fill={true}
          //     sizes={"100%"}
          // onClick={() => {
          //   setSelectedBanner(content);
          //   $("#modal-show-banner").prop("checked", true);
          // }}
          //   />
          // </div>
        ))}
      </OwlCarousel>

      {/* Modal Banner */}
      {/* <input type="checkbox" id="modal-show-banner" className="modal-toggle" />
      <label
        htmlFor="modal-show-banner"
        className="modal cursor-pointer md:mt-20"
      >
        <label className="modal-box relative bg-transparent shadow-none p-10 rounded-none max-w-screen-md">
          <label
            htmlFor="modal-show-banner"
            className="btn btn-sm btn-circle absolute right-2 top-2 z-10 bg-black opacity-75"
          >
            <h1 className="text-white">✕</h1>
          </label>
          <div className="w-full 2xl:w-5/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
            <div className="md:w-12/12 w-full">
              <YouTube
                videoId="bDPzpgTZ8qI"
                opts={{
                  playerVars: {
                    autoplay: 1, // 1 means autoplay
                    start: 7,    // Ganti dengan detik yang diinginkan
                    end: 20      // Ganti dengan detik akhir yang diinginkan (misal, 5 atau 10 detik)
                  },
                }}
                className={"youtubeContainer"}
              />
            </div>
          </div>
          <Link
              href="https://youtu.be/bDPzpgTZ8qI?si=RGvVRO4R8MOdwkDX"
              className="w-2/2 flex justify-center items-center font-bold bg-yellow-500 text-black shadow-md hover:cursor-pointer p-2 text-sm mt-2 text-center hover:bg-blue-200"
              target="_blank"
            >
            MENGENAL LEBIH DALAM TENTANG RUMAH SAKIT TK.II dr. SOEPRAOEN
          </Link>
        </label>
      </label> */}
      {/* Modal Banner */}
    </div>
  );
}
