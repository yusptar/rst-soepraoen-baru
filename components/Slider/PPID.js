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

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const contents = [
  {
    id: 1,
    image: "/assets/ppid/ppid-1.png",
    alt: "image2",
    link: "/",
  },
  {
    id: 2,
    image: "/assets/ppid/ppid-2.png",
    alt: "image2",
    link: "/",
  },
  {
    id: 3,
    image: "/assets/ppid/maklumat-pelayanan-2.jpeg",
    alt: "image2",
    link: "/",
  },
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
    image: "/assets/banner-wtrb-new.png",
    alt: "image2",
    link: "/",
  });

  // show modal on load
  useEffect(() => {
    $("#modal-show-banner").prop("checked", true);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-md">
      <OwlCarousel
        loop
        margin={0}
        autoplay
        dots={false}
        responsive={Responsive}
        animateOut="fadeOut"
        animateIn="fadeIn"
        className="w-full"
      >
        {contents.map((content) => (
          <div
            key={content.id}
            className="relative w-full aspect-[12/7] overflow-hidden"
          >
            <Image
              src={content.image}
              alt={content.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
