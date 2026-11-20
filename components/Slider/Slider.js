import { React, useEffect, useState } from "react";
import Link from "next/link";
import YouTube from "react-youtube";

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
    // image: "/assets/menolak-gratifikasi.png",
    image: asset("/assets/banner-edit.jpg"),
    alt: "image2",
    link: "/",
  },
  // {
  //   id: 31,
  //   image: "/assets/banner-ipkp.jpeg",
  //   alt: "ipkp-ipak",
  //   link: "/",
  // },
  {
    id: 7,
    image: asset("/assets/menolak-gratifikasi-baru.png"),
    alt: "image2",
    link: "/",
  },
  {
    id: 33,
    image: asset("/assets/banner/daftar_asuransi.png"),
    alt: "image2",
    link: "/",
  },
  {
    id: 32,
    image: asset("/assets/banner/faslay-2.png"),
    alt: "image2",
    link: "/",
  },
  {
    id: 16,
    image: asset("/assets/banner/kakes-karumkit.jpeg"),
    alt: "Kakes - Karumkit",
    link: "/",
  },
  {
    id: 17,
    image: asset("/assets/banner/wtrb.png"),
    alt: "wtrb",
    link: "/",
  },
  {
    id: 17,
    image: asset("/assets/banner/pengesahan-karumkit.jpeg"),
    alt: "Kunjungan Pangdam",
    link: "/",
  },
  {
    id: 3,
    image: asset("/assets/kapus-baru-2026.jpeg"),
    alt: "kapuskesad-2026",
    link: "/",
  },
  {
    id: 7,
    image: asset("/assets/fotber-kapus-2026.jpeg"),
    alt: "kapuskesad-2025",
    link: "/",
  },
  {
    id: 7,
    image: asset("/assets/fotber-kapus-2026-1.jpeg"),
    alt: "kapuskesad-2025",
    link: "/",
  },
  {
    id: 3,
    image: asset("/assets/fotbar-kapus-2026-2.jpeg"),
    alt: "kapuskesad-2025",
    link: "/",
  },
  {
    id: 7,
    image: asset("/assets/fotber-kapus-2026-4.jpeg"),
    alt: "kapuskesad-2025",
    link: "/",
  },
  {
    id: 7,
    image: asset("/assets/fotber-kapus-2026-3.jpeg"),
    alt: "kapuskesad-2025",
    link: "/",
  },
  {
    id: 24,
    image: asset("/assets/nambah1.jpg"),
    alt: "Kunjungan Pangdam",
    link: "/",
  },
  {
    id: 2,
    image: asset("/assets/banner/komdik.jpeg"),
    alt: "image1",
    link: "/",
  },
  {
    id: 5,
    image: asset("/assets/banner/dr-ardian.png"),
    alt: "image1",
    link: "/",
  },
  // {
  //   id: 3,
  //   image: "/assets/supervisi/kapuskesad/23.jpg",
  //   alt: "kapuskesad-2024",
  //   link: "/",
  // },
  // {
  //   id: 7,
  //   image: "/assets/supervisi/kapuskesad/13.jpg",
  //   alt: "kapuskesad-2024",
  //   link: "/",
  // },
  // {
  //   id: 7,
  //   image: "/assets/supervisi/kapuskesad/61.jpg",
  //   alt: "kapuskesad-2024",
  //   link: "/",
  // },
  // {
  //   id: 2,
  //   image: "/assets/ganti1.jpg",
  //   alt: "image1",
  //   link: "/",
  // },

  // {
  //   id: 2,
  //   image: "/assets/banner-1.jpg",
  //   alt: "image1",
  //   link: "/",
  // },
  // {
  //   id: 3,
  //   image: "/assets/gratifikasi-2.png",
  //   alt: "image3",
  //   link: "/",
  // },
  // {
  //   id: 4,
  //   image: "/assets/ganti2.jpg",
  //   alt: "image1",
  //   link: "/",
  // },
  // {
  //   id: 4,
  //   image: "/assets/banner-2.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  {
    id: 5,
    // image: "/assets/pakai-masker.jpg",
    image: asset("/assets/banner-3.jpg"),
    alt: "image2",
    link: "/",
  },
  {
    id: 6,
    image: asset("/assets/ganti4cathlab.jpeg"),
    alt: "image2",
    link: "/",
  },
  // {
  //   id: 6,
  //   image: "/assets/banner-4.jpeg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 7,
  //   image: "/assets/banner-5.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
    // id: 8,
    // image: "/assets/ppni2.jpeg",
    // alt: "image2",
    // link: "/",
  // },
  // {
    // id: 9,
    // image: "/assets/ppni1.jpeg",
    // alt: "image2",
    // link: "/",
  // },
  {
    id: 10,
    image: asset("/assets/banner-6.jpg"),
    alt: "image2",
    link: "/",
  },
  {
    id: 11,
    image: asset("/assets/sebelum-kemo.jpeg"),
    alt: "image2",
    link: "/",
  },
  {
    id: 12,
    image: asset("/assets/banner/kemo.jpeg"),
    alt: "image2",
    link: "/",
  },
  {
    id: 13,
    image: asset("/assets/banner-9.jpeg"),
    alt: "image2",
    link: "/",
  },
  {
    id: 14,
    image: asset("/assets/banner/radiologi.jpeg"),
    alt: "image2",
    link: "/",
  },
  {
    id: 15,
    image: asset("/assets/panoramic.jpeg"),
    alt: "image2",
    link: "/",
  },
  {
    id: 16,
    image: asset("/assets/endoskopi.jpeg"),
    alt: "image2",
    link: "/",
  },
   {
    id: 9,
    image: asset("/assets/banner/layung-3.jpeg"),
    alt: "image2",
    link: "/",
  },
  {
    id: 23,
    // image: "/assets/menolak-gratifikasi.png",
    image: asset("/assets/baru-onkologi.jpg"),
    alt: "Onkologi Terpadu",
    link: "/",
  },

  // {
  //   id: 7,
  //   image: "/assets/banner/evla.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 8,
  //   image: "/assets/banner/eswl.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 9,
  //   image: "/assets/banner/cauter.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 24,
  //   image: "/assets/banner/lab pk.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 25,
  //   image: "/assets/banner/dental panoramic.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 26,
  //   image: "/assets/banner/cyro.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 27,
  //   image: "/assets/banner/nicu.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 28,
  //   image: "/assets/13.png",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 2,
  //   image: "/assets/banner/radiologi.jpg",
  //   alt: "image2",
  //   link: "/",
  // },
  // {
  //   id: 29,
  //   image: "/assets/banner/tht.jpg",
  //   alt: "image2",
  //   link: "/",
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
    image: asset("/assets/BANNER WTRB NEW.png"),
    alt: "image2",
    link: "/",
  });

  // show modal on load
  useEffect(() => {
    $("#modal-show-banner").prop("checked", true);
  }, []);

  return (
    <div className="w-full">
      <OwlCarousel
        loop
        margin={5}
        autoplay
        dots={false}
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
              // src={dummyImage}
              src={content.image}
              alt={content.alt}
              fill={true}
              priority={true}
              className="object-cover rounded-md"
              sizes={"100%"}
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
      <input type="checkbox" id="modal-show-banner" className="modal-toggle" />
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
          <div className="aspect-[16/8] relative p-0 m-0">
            <Image
              src={selectedBanner.image}
              alt={selectedBanner.alt}
              style={{ objectFit: "cover" }}
              fill={true}
              sizes={"100%"}
              priority={true}
            />
          </div>
          <div className="w-ful flex gap-1">
            <Link
              href="/zona-integritas/pengaduan-masyarakat"
              className="w-1/2 flex justify-center items-center bg-yellow-500 text-black shadow-md hover:cursor-pointer p-2 text-sm mt-2 text-center hover:bg-blue-200"
            >
              Pengaduan Klik di Sini
            </Link>
            <Link
              href="/zona-integritas/whistle-blowing-system"
              className="w-1/2 flex justify-center items-center bg-yellow-500 text-black shadow-md hover:cursor-pointer p-2 text-sm mt-2 text-center hover:bg-blue-200"
            >
              Pengaduan WBS Klik di Sini
            </Link>
          </div>
          <Link
              href="https://youtu.be/bDPzpgTZ8qI?si=RGvVRO4R8MOdwkDX"
              className="w-2/2 flex justify-center items-center font-bold bg-yellow-500 text-black shadow-md hover:cursor-pointer p-2 text-sm mt-2 text-center hover:bg-blue-200"
              target="_blank"
            >
              MENGENAL LEBIH DALAM TENTANG RUMAH SAKIT TK.II dr. SOEPRAOEN
          </Link>
          {/* <div className="justify-center">
                <YouTube
                  videoId="bDPzpgTZ8qI"
                  className={"youtubeContainer"}
                />
                <p className="bg-yellow-500 text-black">TES 123</p>
           </div> */}
        </label>
      </label>
      {/* Modal Banner */}
    </div>
  );
}
