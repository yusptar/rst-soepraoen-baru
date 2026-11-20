import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import "dayjs/locale/id";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.locale("id");
import { WEBSERVICE, IMAGE_URL } from "../../services/NetworkServices";
import { asset } from "../../helpers/asset";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1,
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

const dummyImage = asset("/assets/2.jpg");

// strip html tags
function strip(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export default function Tentang() {
  const [listBeritaPopuler, setListBeritaPopuler] = useState([]);

  useEffect(() => {
    const fetchBeritaPopuler = async () => {
      const res = await WEBSERVICE.GET("/berita/popular");
      setListBeritaPopuler(res.data.result);
    };
    fetchBeritaPopuler();
  }, []);

  return (
    <div>
      <div className="md:w-full md:flex hidden">
        <OwlCarousel loop margin={10} autoplay responsive={Responsive}>
          {listBeritaPopuler.map((berita) => (
            <Link
              href={`/informasi/berita/${berita.id}`}
              className="flex flex-row md:h-[20rem] cursor-pointer"
              key={berita.id}
            >
              <div className="basis-3/10 flex items-center bg-black rounded-l-lg aspect-[4/3] relative cursor-pointer">
                <Image
                  // src={IMAGE_URL + berita.banner}
                  src={berita.banner ? IMAGE_URL + berita.banner : dummyImage}
                  alt={berita.judul}
                  fill={true}
                  priority={true}
                  className="object-cover rounded-md w-max-1/2"
                  unoptimized={true}
                  sizes={"100%"}
                />
              </div>
              <div className="md:basis-7/10 flex items-center md:px-8 md:py-10 bg-white rounded-r-lg">
                <div>
                  <h2 className="text-left">
                    <b>{berita.judul}</b>
                  </h2>
                  <p className="text-left text-sm lg:text-base">
                    {/* {berita.isi.substring(0, 150) + "..."} */}
                    {strip(berita.isi).substring(0, 150) + "..."}
                  </p>
                  {/* <article
                    className="text-left text-sm lg:text-base prose prose-sm md:prose-lg prose-headings:text-black prose-p:text-black"
                    dangerouslySetInnerHTML={{ __html: berita.isi }}
                  ></article> */}
                </div>
              </div>
            </Link>
          ))}
        </OwlCarousel>
      </div>
      <div className="md:w-full md:hidden">
        <OwlCarousel loop margin={10} autoplay responsive={Responsive}>
          {listBeritaPopuler.map((berita) => (
            <Link
              href={`/informasi/berita/${berita.id}`}
              className="md:h-[20rem] cursor-pointer"
              key={berita.id}
            >
              <div className="basis-3/10 flex items-center bg-black aspect-[6/3] relative rounded-t-lg">
                <Image
                  src={berita.banner ? IMAGE_URL + berita.banner : dummyImage}
                  alt={berita.judul}
                  fill={true}
                  priority={true}
                  className="object-cover rounded-md"
                  unoptimized={true}
                  sizes={"100%"}
                />
              </div>
              <div className="md:basis-7/10 flex items-center px-5 py-5 bg-white rounded-b-lg">
                <div>
                  <h2 className="text-left text-base">
                    <b>{berita.judul}</b>
                  </h2>
                  <p className="text-left text-xs">
                    {/* {berita.isi.substring(0, 200) + "..."} */}
                    {strip(berita.isi).substring(0, 200) + "..."}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
}
