import React, { useState, useEffect } from "react";
import CariDokter from "../components/CariDokter/CariDokter";
import Informasi from "../components/Slider/Informasi";
import Slider from "../components/Slider/Slider";
import CardFAQ from "../components/Card/CardFAQ";
import Artikel from "../components/Grid/Artikel";
import Berita from "../components/Grid/Berita";
import JamPelayanan from "../components/Grid/JamPelayanan";
import CardUlasan from "../components/Card/CardUlasan";
import CardQuickLink from "../components/Card/CardQuickLink";
import { StickyContactButton } from "../components/Button/StickyContactButton";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import AnimatedInView from "../components/TransitionEffect/AnimatedInView";
import AccessibilityTools from "../components/Button/AccessibilityTools";


const Dashboard = () => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [negativeContrast, setNegativeContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    document.body.className = `
      ${highContrast ? "bg-black text-yellow-300" : ""}
      ${negativeContrast ? "invert" : ""}
      ${grayscale ? "grayscale" : ""}
    `;
  }, [highContrast, negativeContrast, grayscale]);

  const resetSettings = () => {
    setFontSize(16);
    setHighContrast(false);
    setNegativeContrast(false);
    setGrayscale(false);
  };


  return (
    <>
      <AccessibilityTools
        increaseText={() => setFontSize((f) => f + 2)}
        decreaseText={() => setFontSize((f) => Math.max(14, f - 2))}
        toggleHighContrast={() => setHighContrast((h) => !h)}
        toggleNegativeContrast={() => setNegativeContrast((n) => !n)}
        toggleGrayscale={() => setGrayscale((g) => !g)}
        resetSettings={resetSettings}
      />

      <div
        className={`transition-all duration-300 ease-in-out ${
          highContrast ? "bg-black text-yellow-300" : ""
        }`}
        style={{ fontSize: `${fontSize}px` }}
      >

      {/* carousel slider banner  */}
      <div className="flex justify-center z-10 ">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center">
          <Slider />
        </div>
      </div>
      {/* carousel slider banner  */}

      {/* QuickLink Layanan*/}
      <CardQuickLink />
      {/* QuickLink Layanan*/}

      {/* cari dokter  */}
      <CariDokter highContrast={highContrast} />
      {/* cari dokter  */}

      <AnimatedInView variant="fade-in" delay={0.20}>
        <div className="flex justify-center overflow-y-auto ">
          <div className="2xl:w-4/5 w-full justify-center flex">
            <div className="relative z-10 md:w-11/12">
              <div className="absolute z-0 inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative z-10 flex justify-center">
                <span className="bg-white md:px-4 text-2xl font-bold text-blue-900 my-5 text-center">
                  WAKTU PELAYANAN
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedInView>
      
      <div className="flex justify-center">
        <JamPelayanan />
      </div>
     
      <AnimatedInView variant="fade-in" delay={0.20}>
        <div className="flex justify-center overflow-y-auto">
          <div className="2xl:w-4/5 w-full justify-center flex">
            <div className="relative z-10 md:w-11/12">
              <div className="absolute z-0 inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative z-10 flex justify-center">
                <span className="bg-white md:px-4 text-2xl font-bold text-blue-900 my-5 text-center">
                  LAYANAN UNGGULAN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center mb-5">
          Klik gambar untuk informasi jenis layanan terperinci
        </div>
      </AnimatedInView>
      {/* Layanan Unggulan  */}
      <Informasi />
      {/* Layanan Unggulan  */}

      {/* carousel artikel */}
      {/* <div className="my-5">
        <div className="flex flex-col items-center justify-center px-4 md:py-10 py-5 mx-auto space-y-4 rounded-sm md:w-full 2xl:w-4/5 bg-slate-300">
          <div className="w-5/6">
            <div className="tex-center md:mb-10 mb-5">
              <h1 className="text-xl md:text-3xl text-center font-medium">
                TENTANG RST
              </h1>
            </div>
            <Tentang />
          </div>
        </div>
      </div> */}
      {/* carousel artikel */}
      <AnimatedInView variant="fade-in" delay={0.20}>
        <div className="flex justify-center overflow-y-auto ">
          <div className="2xl:w-4/5 w-full justify-center flex ">
            <div className="relative z-10 md:w-11/12">
              <div className="absolute z-0 inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative z-10 flex justify-center">
                <span className="bg-white md:px-4 text-2xl font-bold text-blue-900 my-5 text-center">
                  ARTIKEL KESEHATAN
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedInView>
      {/* Artikel Kesehatan */}
    
        <div className="my-2 md:my-5">
          <AnimatedInView variant="fade-down" delay={0.20}>
            <Artikel />
          </AnimatedInView>
        </div>
   
      {/* Artikel Kesehatan */}

      {/* Berita */}
      <AnimatedInView variant="fade-in" delay={0.20}>
        <div className="flex justify-center overflow-y-auto ">
          <div className="2xl:w-4/5 w-full justify-center flex ">
            <div className="relative z-10 md:w-11/12">
              <div className="absolute z-0 inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative z-10 flex justify-center">
                <span className="bg-white md:px-4 text-2xl font-bold text-blue-900 my-5 text-center">
                  BERITA
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedInView>
      
     
      <div className="my-2 md:my-5">
        <AnimatedInView variant="fade-down" delay={0.20}>
          <Berita />
        </AnimatedInView>
      </div>
      {/* Berita */}

      {/* FAQ */}
      <div className="my-2 md:my-5">
        <CardFAQ/>
      </div>
      {/* FAQ */}

      {/* <AnimatedInView variant="fade-in" delay={0.20}> */}
        {/* <div className="flex justify-center overflow-y-auto ">
          <div className="2xl:w-4/5 w-full justify-center flex ">
            <div className="relative z-10 md:w-11/12">
              <div className="absolute z-0 inset-0 flex items-center">
                <div className="w-full border-b border-gray-300"></div>
              </div>
              <div className="relative z-10 flex justify-center">
                <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                  Ulasan
                </span>
              </div>
            </div>
          </div>
        </div> */}
      {/* </AnimatedInView> */}

      {/* Ulasan */}
      {/* <div className="my-2 md:mb-5 flex justify-center ">
        <div className="2xl:w-4/5 w-full justify-center flex-col items-center">
          <CardUlasan />
        </div>
      </div> */}
      
      {/* Video RST */}
      {/* <div className="relative z-10 flex justify-center">
        <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
          Suasana Senja Rumah Sakit Tk.II dr. Soepraoen
        </span>
      </div>
      <div className="w-full 2xl:w-5/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
        <div className="md:w-9/12 w-full">
          <YouTube
            videoId="BbFwvKYuE_M"
            opts={{
              playerVars: {
                autoplay: 1, 
              },
            }}
            className={"youtubeContainer"}
          />
        </div>
      </div>
      <div className="relative z-10 flex justify-center">
        <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
          Kegiatan Rumah Sakit Tk.II dr.Soepraoen Ramadhan 2025
        </span>
      </div>
      <div className="w-full 2xl:w-5/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
        <div className="md:w-9/12 w-full">
          <video
            controls
            autoPlay
            className="w-full rounded-lg shadow-lg"
          >
            <source src="/assets/video/ramadhan-2025.mp4" type="video/mp4" />
            Browser Anda tidak mendukung pemutaran video.
          </video>
        </div>
      </div> */}
        <div className="w-full flex justify-center items-center px-5 md:px-0">
          <div className="md:w-9/12 w-full">
            <Swiper
              modules={[Navigation]}
              navigation
              loop={true}
              className="w-full"
            >
              {/* Slide 1 - YouTube Video */}
              {/* <SwiperSlide>
                <div className="relative z-10 flex justify-center">
                  <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                    Rumah Sakit Tk.II dr.Soepraoen Menyambut Bulan Suci Ramadhan 1446 H / 2025
                  </span>
                </div>
                <div className="flex justify-center">
                  <video
                    controls
                    className="w-full md:w-9/12 h-auto md:h-[500px] rounded-lg shadow-lg"
                    style={{ objectFit: "contain", aspectRatio: "16/9" }}
                  >
                    <source src="/assets/video/ramadhan-2025.mp4" type="video/mp4" />
                    Browser Anda tidak mendukung pemutaran video.
                  </video>
                </div>
              </SwiperSlide> */}
{/* 
              <SwiperSlide>
                <div className="relative z-10 flex justify-center">
                  <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                    Jadwal Dokter 
                  </span>
                </div>
              <div className="flex justify-center">
                <div className="w-full md:w-3/12 aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/9n7YJr_9N24"
                    title="YouTube Shorts"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
              </div>
              </SwiperSlide> */}

              <SwiperSlide>
                <div className="relative z-10 flex justify-center">
                  <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                    Jadwal Dokter
                  </span>
                </div>

                <div className="flex justify-center">
                  <div className="w-full md:w-3/12 aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                    >
                      <source src="/assets/jadwal-dokter/24-05-26.mp4" type="video/mp4" />
                      Browser Anda tidak mendukung video.
                    </video>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 - Video Lokal */}
              {/* <SwiperSlide>
                <div className="relative z-10 flex justify-center">
                  <span className="bg-white md:px-4 text-2xl font-medium text-blue-900 my-5 text-center">
                    Suasana Senja Rumah Sakit Tk.II dr. Soepraoen
                  </span>
                </div>
                <div className="flex justify-center">
                  <iframe
                    className="w-full md:w-9/12 h-auto md:h-[500px] rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/BbFwvKYuE_M"
                    title="YouTube Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ objectFit: "contain", aspectRatio: "16/9" }}
                  ></iframe>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      
      {/* sticky button */}
      <StickyContactButton />
      </div>
    </>
  );
};

export default Dashboard;