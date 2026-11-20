import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
import { asset } from "../helpers/asset";

const tentang = [
  {
    name: "Sejarah",
    link: "/profil/sejarah",
  },
  {
    name: "Visi & Misi",
    link: "/profil/visi-misi",
  },
  {
    name: "Jajaran Direksi",
    link: "/profil/jajaran-direksi",
  },
  {
    name: "Prestasi",
    link: "/profil/prestasi",
  },
  {
    name: "Mitra Kerjasama RS",
    link: "/profil/mitra-kerjasama-rs",
  },
  {
    name: "Denah Rumah Sakit",
    link: "/profil/denah-rumah-sakit",
  },
  {
    name: "Privacy Policy",
    link: "/informasi/privacy-policy",
  },
];

const layanan_unggulan = [
  {
    name: "Unit Kemoterapi",
    link: "/fasilitas-layanan/layanan-unggulan/unit-kemoterapi",
  },
  {
    name: "Unit Hemodialisa",
    link: "/fasilitas-layanan/layanan-unggulan/unit-hemodialisa",
  },
  {
    name: "Medical Checkup",
    link: "/informasi/tarif-pelayanan/medical-checkup",
  },
  {
    name: "Unit PCR",
    link: "/informasi/tarif-pelayanan/rapid-antigen-swab-pcr",
  },
  {
    name: "Radioterapi",
    link: "/fasilitas-layanan/layanan-unggulan/radioterapi",
  },
  {
    name: "Radiologi",
    link: "/fasilitas-layanan/layanan-unggulan/radiologi",
  },
  {
    name: "Jantung terpadu",
    link: "/fasilitas-layanan/layanan-unggulan/cathlab",
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="2xl:w-4/5 w-full my-5 p-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:flex md:flex-row hidden">
            <div className="md:mr-5 mr-2 w-1/5">
              <div className="xl:w-1/2 flex md:w-3/4">
                <Image
                  src={asset("/assets/logo/logo-rs-baru.jpg")}
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-xs text-justify">
                Rumah Sakit Tk. II dr.Soepraoen adalah Rumah Sakit milik TNI AD 
                yang mempunyai tugas pokok memberikan pelayanan kesehatan kepada 
                Prajurit, ASN dan Keluarganya serta Masyarakat Umum.
              </p>
            </div>
            <div className="flex flex-col w-1/5 items-start pl-5 ">
              <span className="text-sm md:text-lg font-medium">Tentang</span>
              {tentang.map((tentang, index) => (
                <div
                  className="flex items-center cursor-pointer hover:bg-blue-900 hover:text-white"
                  key={index}
                >
                  <Link href={tentang.link} key={index}>
                    {" "}
                    <div className="w-full">
                      <span className="text-xs md:text-xs font-medium">
                        {tentang.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-1/5 items-start pl-5 ">
              <span className="text-sm md:text-lg font-medium">
                Layanan Unggulan
              </span>
              {layanan_unggulan.map((layanan_unggulan, index) => (
                <div
                  className="flex items-center cursor-pointer hover:bg-blue-900 hover:text-white"
                  key={index}
                >
                  <Link href={layanan_unggulan.link} key={index}>
                    {" "}
                    <div className="w-full">
                      <span className="text-xs md:text-xs font-medium">
                        {layanan_unggulan.name}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {/* <div className="flex flex-col w-1/5 items-center">
              <span className="text-sm md:text-lg font-medium justify-center">
                Download Aplikasi
              </span>
              <div className="w-1/2">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  src={asset("/assets/playstore.png")}
                  alt={"logo playstore"}
                />
              </div>
            </div> */}
            <div className="flex flex-col w-1/5 items-start pl-5 ">
              <span className="text-sm md:text-lg font-medium">Kontak</span>
              <div className="flex items-center">
                <div className="w-full">
                  <span className="text-xs md:text-xs font-medium">
                    RS Tk.II dr. Soepraoen
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-full">
                  <span className="text-xs md:text-xs font-medium">
                    Jl. S. Supriadi No.22, Kec. Sukun Kota Malang, Jawa Timur
                    65112
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-full">
                  <Link
                    href={"tel:628113277303"}
                    // href={"tel:6282330769738"}
                    className="flex flex-col justify-center"
                  >
                    <span className="text-xs md:text-xs font-medium">
                      Pusat Informasi : 0811-3277-303
                      {/* 0823-3076-9738 */}
                    </span>
                  </Link>
                  {/* <span className="text-xs md:text-xs font-medium">Jl. S. Supriadi No.22, Sukun, Kec. Sukun, Kota Malang, Jawa Timur 65112</span> */}
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-full">
                  <Link
                    href={"tel:0341364125"}
                    className="flex flex-col justify-center"
                  >
                    <span className="text-xs md:text-xs font-medium">
                      Layanan IGD : (0341) 364125 / 0823-3076-9738
                    </span>
                  </Link>
                  {/* <span className="text-xs md:text-xs font-medium">Jl. S. Supriadi No.22, Sukun, Kec. Sukun, Kota Malang, Jawa Timur 65112</span> */}
                </div>
              </div>
              {/* <div
                className="flex w-1/4 items-center cursor-pointer"
                onClick={() => {
                  window.location.href
                    ? (window.location.href = "https://facebook.com")
                    : (window.location.href = "https://facebook.com");
                }}
              >
                <SocialIcon
                  url="https://facebook.com"
                  bgColor="transparent"
                  fgColor="black"
                  style={{ height: 25, width: 25 }}
                  className="-ml-2"
                />
              </div>
              <div
                className="flex w-1/4 items-center cursor-pointer"
                onClick={() => {
                  window.location.href
                    ? (window.location.href =
                        "https://instagram.com/rssoepraoen")
                    : (window.location.href =
                        "https://instagram.com/rssoepraoen");
                }}
              >
                <SocialIcon
                  url="https://instagram.com/rssoepraoen"
                  bgColor="transparent"
                  fgColor="black"
                  style={{ height: 25, width: 25 }}
                  className="-ml-2"
                />
              </div>
              <div
                className="flex w-1/4 items-center cursor-pointer"
                onClick={() => {
                  window.location.href
                    ? (window.location.href =
                        "https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ")
                    : (window.location.href =
                        "https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ");
                }}
              >
                <SocialIcon
                  url="https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ"
                  bgColor="transparent"
                  fgColor="black"
                  style={{ height: 25, width: 25 }}
                  className="-ml-2"
                />
              </div> */}
              <br></br>
              <span className="text-sm md:text-lg font-medium">
                Media Sosial
              </span>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  window.location.href
                    ? (window.location.href = "https://facebook.com")
                    : (window.location.href = "https://facebook.com");
                }}
              >
                <div className="w-1/4">
                  <SocialIcon
                    url="https://facebook.com"
                    bgColor="transparent"
                    fgColor="black"
                    style={{ height: 25, width: 25 }}
                    className="-ml-2"
                  />
                </div>
                <div className="w-3/4">
                  <span className="text-xs md:text-sm font-medium hover:bg-blue-900 hover:text-white">
                    Facebook
                  </span>
                </div>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  window.location.href
                    ? (window.location.href =
                        "https://instagram.com/rssoepraoen")
                    : (window.location.href =
                        "https://instagram.com/rssoepraoen");
                }}
              >
                <div className="w-1/4">
                  <SocialIcon
                    url="https://instagram.com/rssoepraoen"
                    bgColor="transparent"
                    fgColor="black"
                    style={{ height: 25, width: 25 }}
                    className="-ml-2"
                  />
                </div>
                <div className="w-3/4">
                  <span className="text-xs md:text-sm font-medium hover:bg-blue-900 hover:text-white">
                    Instagram
                  </span>
                </div>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  window.location.href
                    ? (window.location.href =
                        "https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ")
                    : (window.location.href =
                        "https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ");
                }}
              >
                <div className="w-1/4">
                  <SocialIcon
                    url="https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ"
                    bgColor="transparent"
                    fgColor="black"
                    style={{ height: 25, width: 25 }}
                    className="-ml-2"
                  />
                </div>
                <div className="w-3/4">
                  <span className="text-xs md:text-sm font-medium hover:bg-blue-900 hover:text-white">
                    Youtube
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-1/5 items-left">
              <span className="text-sm md:text-lg font-medium justify-center">
                Survey Kepuasan Masyarakat
              </span>
              <Link href="https://bit.ly/SKM_TW-4_2026" className="w-4/5">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  src={asset("/assets/ikm/link-skm-tw-4-2026.jpeg")}
                  alt={"logo playstore"}
                />
              </Link>
            </div>
          </div>
          {/* mobile */}
          <div className="md:hidden">
            <div className="w-full p-0 flex flex-col items-center">
              <div className="w-1/3">
                <Image
                  src={asset("/assets/logo-revisi.png")}
                  alt="logo"
                  // width={150}
                  // height={0}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <p className="text-xs text-justify">
                Rumah sakit Tk.II dr. Soepraoen adalah rumah sakit milik TNI AD
                yang mempunyai tupoksi memberikan pelayanan kesehatan kepada
                Prajurit TNI, Aparatur Sipil Negara dan Keluarganya serta
                masyarakat Umum.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-5">
              <div className="flex flex-col items-left">
                <span className="text-sm md:text-lg font-medium">Tentang</span>
                {tentang.map((tentang, index) => (
                  <div
                    className="flex items-center cursor-pointer hover:bg-blue-900 hover:text-white"
                    key={index}
                  >
                    <Link href={tentang.link} key={index}>
                      {" "}
                      <div className="w-full">
                        <span className="text-xs md:text-xs font-medium">
                          {tentang.name}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-left">
                <span className="text-sm md:text-lg font-medium">
                  Pelayanan Unggulan
                </span>
                {layanan_unggulan.map((layanan_unggulan, index) => (
                  <div
                    className="flex items-center cursor-pointer hover:bg-blue-900 hover:text-white"
                    key={index}
                  >
                    <Link href={layanan_unggulan.link} key={index}>
                      {" "}
                      <div className="w-full">
                        <span className="text-xs md:text-xs font-medium">
                          {layanan_unggulan.name}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {/* <div className="flex flex-col items-center">
                <span className="text-sm md:text-lg font-medium justify-center">
                  Download Aplikasi
                </span>
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                  src={asset("/assets/playstore.png")}
                  alt={"logo playstore"}
                />
              </div> */}

              <div className="flex flex-col items-left">
                <span className="text-sm md:text-lg font-medium">Kontak</span>
                <div
                  className="flex items-center w-3/4"
                  onClick={() => {
                    window.location.href
                      ? (window.location.href =
                          "https://instagram.com/rssoepraoen")
                      : (window.location.href =
                          "https://instagram.com/rssoepraoen");
                  }}
                >
                  <div className="w-1/4">
                    <SocialIcon
                      url="https://facebook.com"
                      bgColor="transparent"
                      fgColor="black"
                      style={{ height: 25, width: 25 }}
                      className="-ml-2"
                    />
                  </div>
                  <div className="w-3/4 ">
                    <span className="text-xs md:text-sm font-medium hover:bg-blue-900 hover:text-white">
                      Facebook
                    </span>
                  </div>
                </div>
                <div
                  className="flex items-center w-3/4"
                  onClick={() => {
                    window.location.href
                      ? (window.location.href =
                          "https://instagram.com/rssoepraoen")
                      : (window.location.href =
                          "https://instagram.com/rssoepraoen");
                  }}
                >
                  <div className="w-1/4">
                    <SocialIcon
                      url="https://instagram.com/rssoepraoen"
                      bgColor="transparent"
                      fgColor="black"
                      style={{ height: 25, width: 25 }}
                      className="-ml-2"
                    />
                  </div>
                  <div className="w-3/4">
                    <span className="text-xs md:text-sm font-medium hover:bg-blue-900 hover:text-white">
                      Instagram
                    </span>
                  </div>
                </div>
                <div
                  className="flex items-center w-3/4"
                  onClick={() => {
                    window.location.href
                      ? (window.location.href =
                          "https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ")
                      : (window.location.href =
                          "https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ");
                  }}
                >
                  <div className="w-1/4">
                    <SocialIcon
                      url="https://youtube.com/channel/UC1H9VkOZwCxLi9nvtgL4RsQ"
                      bgColor="transparent"
                      fgColor="black"
                      style={{ height: 25, width: 25 }}
                      className="-ml-2"
                    />
                  </div>
                  <div className="w-3/4">
                    <span className="text-xs md:text-sm font-medium hover:bg-blue-900 hover:text-white">
                      Youtube
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-left">
                <span className="text-sm md:text-lg font-medium">
                  Survey Kepuasan Masyarakat
                </span>
                <Link href="https://bit.ly/SKM_TW-4_2026" className="w-1/2">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                    src={asset("/assets/ikm/link-skm-tw-4-2026.jpeg")}
                    alt={"logo playstore"}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* mobile */}
        </div>
      </div>
      {/* <hr className="my-5 w-full " /> */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-900 w-full">
        {/* copyright  */}
        <h1 className="w-full text-center text-stone-50">
          <span className="font-bold ">© Copyright 2023</span>, Rumah Sakit
          Tk.II dr.Soepraoen
        </h1>
      </div>
    </div>
  );
}
