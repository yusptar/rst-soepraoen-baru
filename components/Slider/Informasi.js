import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "../../components/TransitionEffect/AnimatedInView";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { listLayananUnggulan } from "../List/listLayananUnggulan";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const contents = [
  {
    id: 1,
    image: "/assets/mcu.png",
    description: "Medical Checkup",
    subtitle: "Pemeriksaan kesehatan menyeluruh",
    alt: "Medical Checkup",
    link: "/informasi/tarif-pelayanan/medical-checkup",
  },
  {
    id: 2,
    image: "/assets/unggulan/eswl.jpg",
    description: "Urologi Terpadu",
    subtitle: "Layanan batu ginjal & saluran kemih",
    alt: "Urologi Terpadu",
    link: "/informasi/tarif-pelayanan/rapid-antigen-swab-pcr",
  },
  {
    id: 3,
    image: "/assets/hemodialisa.png",
    description: "Unit Hemodialisa",
    subtitle: "Terapi cuci darah dengan alat modern",
    alt: "Unit Hemodialisa",
    link: "/fasilitas-layanan/layanan-unggulan/unit-hemodialisa",
  },
  {
    id: 4,
    image: "/assets/kemoterapi.jpg",
    description: "Unit Kemoterapi",
    subtitle: "Penanganan kanker secara terpadu",
    alt: "Unit Kemoterapi",
    link: "/fasilitas-layanan/layanan-unggulan/unit-kemoterapi",
  },
  {
    id: 5,
    image: "/assets/unggulan/ct-scan.jpg",
    description: "CT Scan",
    subtitle: "Pencitraan detail untuk diagnosis akurat",
    alt: "CT Scan",
    link: "/fasilitas-layanan/layanan-unggulan/unit-kemoterapi",
  },
  {
    id: 6,
    image: "/assets/unggulan/cath-lab.jpg",
    description: "Jantung Terpadu",
    subtitle: "Layanan kateterisasi & tindakan jantung",
    alt: "Jantung Terpadu",
    link: "/fasilitas-layanan/layanan-unggulan/unit-kemoterapi",
  },
];

export default function Informasi() {
  return (

      <AnimatedInView variant="fade-up" delay={0.20}>
      <div className="mb-10 flex justify-center">
          <div className="hidden md:block w-4/5">
            <div className="grid grid-cols-4 gap-5 px-4">
              {listLayananUnggulan.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="group relative rounded-2xl overflow-hidden 
                  bg-white/60 backdrop-blur-md 
                  shadow-sm hover:shadow-xl 
                  transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative w-full h-[18rem] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  {/* Text overlay */}
                  <div className="absolute bottom-0 w-full p-4 z-10">
                    <div className="text-white text-3xl mb-1 opacity-90">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {item.description}
                    </h3>
                    <p className="text-white/80 text-xs mt-1 line-clamp-2">
                      {item.subtitle}
                    </p>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        {/* Mobile */}
        <div className="md:hidden w-full px-3">
          <OwlCarousel loop autoplay dots={false} items={2.2} margin={12}>
            {listLayananUnggulan.map((item) => (
              <Link href={item.link} key={item.id}>
                <div className="group relative rounded-2xl overflow-hidden shadow-sm">
                  
                  <div className="relative w-full h-44">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      priority
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 w-full p-4 z-10">
                    <div className="text-white text-xl mb-1 opacity-90">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-semibold text-sm md:text-base">
                      {item.description}
                    </h3>
                    <p className="text-white/80 text-xs mt-1 line-clamp-2">
                      {item.subtitle}
                    </p>

                  </div>
                </div>
              </Link>
            ))}
          </OwlCarousel>
        </div>
        {/* Mobile */}
      </div>
      </AnimatedInView>
  );
}
