import Link from "next/link";
import { React, useState } from "react";
import Image from "next/image";
import Navlinks from "./Navlinks";
import { SocialIcon } from "react-social-icons";
import { Ri24HoursLine } from "react-icons/ri";
import { asset } from "../../helpers/asset";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="bg-white sticky top-0 md:flex md:flex-col md:justify-center md:items-center border border-b-1 border-gray-200"
      style={{ zIndex: 1000 }}
    >
      <div className="z-20 flex flex-col items-center font-medium relative bg-white 2xl:w-4/5 w-full md:bg-white">
        <div className="md:hidden flex bg-blue-900 w-full py-2 justify-center px-2">
          <div className="flex">
            {/* <div className="flex flex-col justify-center ">
              <h5 className="text-white font-semibold">Gawat Darurat</h5>
            </div> */}
            {/* <div className="divider divider-horizontal before:bg-white after:bg-white mx-2"></div> */}
          </div>
          <div className="flex justify-center items-center">
                <Ri24HoursLine className="text-2xl text-white mr-1" size={35} />
                <Link
                  className="flex flex-col justify-center items-start"
                  href={"tel:628113277303"}
                  // href={"tel:6282330769738"}
                >
                  {/* <h5 className="text-sm font-bold text-white">
                    Layanan Gawat Darurat
                  </h5> */}
                  <h5 className="md:text-base 2xl:text-2 font-bold text-white">
                    (0341) 364125 <br></br>
                    0811-3277-303
                    {/* 0823-3076-9738 */}
                  </h5>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  className="flex flex-col justify-center items-start"
                  href="https://www.lapor.go.id/"
                >
                   <img
                    src={asset("/assets/SPANLAPOR.png")}
                    alt="image"
                    className="w-10 h-10 ml-2"
                  />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  className="flex flex-col justify-center items-start"
                  href="https://sippn.menpan.go.id/"
                >
                   <img
                    src={asset("/assets/CARIYANKLIK.png")}
                    alt="image"
                    className="w-20 h-10 ml-1"
                  />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  className="flex flex-col justify-center items-start"
                  href="/zona-integritas/all-bidang"
                >
                   <img
                    src={asset("/assets/logo-zi.png")}
                    alt="image"
                    className="w-20 h-10 ml-3"
                  />
                </Link>
              </div>
        </div>
        <div className="mx-auto md:px-0 md:w-5/6  w-full justify-between flex pr-3">
          <div className="md:px-0 md:hidden">
            <Image
              src={asset("/assets/logo-banner.png")}
              alt="logo"
              className="md:cursor-pointer"
              width={250}
              height={0}
            />
          </div>
          <div className="px-0 py-2 items-center hidden md:flex md:flex-col md:justify-center w-full text-right justify-end">
            <div className="flex text-xs font-normal text-black w-full justify-around">
              <div className="md:p-0 h-full flex flex-col justify-center items-center align-middle">
                <Image
                  src={asset("/assets/logo/logo-panjang-rst.jpg")}
                  alt="logo"
                  className="md:cursor-pointer pl-3 md:pl-0 w-full h-auto"
                  width="0"
                  height="0"
                  sizes="13vw"
                />
                <p className="text-lg font-bold">RS TK II DR SOEPRAOEN</p>
              </div>

              {/* <div className="flex justify-between "> */}
              {/* make flex but middle vertical align */}
              {/* <div className="flex justify-center items-center">
                <SocialIcon
                  url="https://instagram.com/rssoepraoen"
                  bgColor="black"
                  fgColor="white"
                  style={{ height: 40, width: 40 }}
                  className="ml-3 mr-1"
                />
                <Link
                  className="flex flex-col justify-center text-xl font-bold text-blue-900"
                  href={"https://instagram.com/rssoepraoen"}
                >
                  <h5>rssoepraoen</h5>
                </Link>
              </div> */}
              {/* <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="black"
                  className="w-10 h-10 ml-3 mr-1"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <Link
                  className="flex flex-col justify-center text-xl font-bold text-blue-900"
                  href={"mailto:rumkit.soepraoen@gmail.com"}
                >
                  <h5>rumkit.soepraoen@gmail.com</h5>
                </Link>
              </div> */}

              <div className="flex justify-center items-center">
                <Ri24HoursLine className="text-2xl text-black mr-1" size={35} />
                <Link
                  className="flex flex-col justify-center items-start"
                  // href={"tel:628113038777"}
                  href={"tel:6282330769738"}
                >
                  <h5 className="text-md font-bold text-blue-900">
                    Layanan Gawat Darurat
                  </h5>
                  <h5 className="md:text-base 2xl:text-xl font-bold text-blue-900">
                    (0341) 364125 <br></br>
                    {/* 0811-3038-777 */}
                    0823-3076-9738
                  </h5>
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  className="flex flex-col justify-center items-start"
                  href="https://www.lapor.go.id/"
                >
                   <img
                    src={asset("/assets/SPANLAPOR.png")}
                    alt="image"
                    className="w-20 h-50 ml-5"
                  />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  className="flex flex-col justify-center items-start"
                  href="https://sippn.menpan.go.id/"
                >
                   <img
                    src={asset("/assets/CARIYANKLIK.png")}
                    alt="image"
                    className="w-50 h-20 ml-5"
                  />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  className="flex flex-col justify-center items-start"
                  href="/zona-integritas/all-bidang"
                >
                   <img
                    src={asset("/assets/logo-zi.png")}
                    alt="image"
                    className="w-50 h-20 ml-5"
                  />
                </Link>
              </div>
              {/* <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-10 h-10 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>

                <Link
                  className="flex flex-col justify-center items-start"
                  href={"tel:08113494390"}
                >
                  <h5 className="text-md font-bold text-blue-900">
                    Pengaduan Layanan
                  </h5>
                  <h5 className="md:text-base 2xl:text-xl font-bold text-blue-900">
                    0811-3494-390
                  </h5>
                </Link>
              </div> */}
              {/* <div className="flex flex-col justify-center ">
                <h5>Hubungi Kami</h5>
              </div>
              <div className="divider divider-horizontal before:bg-white after:bg-white mx-2"></div> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex flex-col justify-center">
                <h5>(0341) 325111 / 325112</h5>
              </div> */}
              {/* <div className="flex md:grow bg-green-200 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <div className="flex flex-col justify-center">
                  <Link href="https://rssoepraoen.com/pendaftaran/login.php">
                    Pendaftaran Online
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
          <div className="md:hidden p-0  items-center">
            <div className="z-20 p-3 md:hidden w-full flex justify-between sticky ">
              <div
                className="text-3xl md:hidden"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={`${
                      open
                        ? "M6 18L18 6M6 6l12 12"
                        : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    }`}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center font-bold justify-around relative 2xl:w-4/5 w-full bg-blue-900">
        <ul className="md:flex w-11/12 hidden justify-between font-thin text-black relative z-4 text-sm">
          <li
            className="
          md:grow 
          md:text-center 
          flex 
          md:justify-center "
          >
            <Link href="/" className="py-7 md:py-0 px-3 md:px-0 font-light">
              <div className="md:p-1 h-full flex flex-col justify-center md:hidden">
                <Image
                  src={asset("/assets/logo-web.png")}
                  alt="logo"
                  className="md:cursor-pointer pl-3 md:pl-0 w-full h-auto"
                  width="0"
                  height="0"
                  sizes="100vw"
                  // width={120}
                  // height={60}
                  // fill={true}
                  // style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          </li>
          <Navlinks setOpen={setOpen} />
          <li className="ml-2 flex justify-end">
            <div className="md:flex hidden md:grow justify-end py-1">
              <Link
                href="/informasi/pendaftaran"
                className="flex flex-col justify-center text-blue-900 p-2 bg-white font-medium rounded"
              >
                Pendaftaran
              </Link>
            </div>
          </li>
        </ul>

        {/* Mobile Nav */}
        <ul
          className={`
          md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 pt-16 pl-4 text-black mt-4
          duration-500 ${open ? "left-0" : "-left-full"}`}
        >
          {/* <li>
            <Link
              href="/"
              className=" py-7 px-3 inline-block"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li> */}
          <Navlinks setOpen={setOpen} />
          <li className="py-2 pr-3">
            {/* <input
              type="search"
              className="py-2 text-sm text-black bg-gray-100 rounded-md pl-10 focus:outline-none focus:w-full font-medium px-1 h-full w-3/4"
              placeholder="Cari..."
              autoComplete="off"
            /> */}
            <div className="p-1">
              <Link
                href="/informasi/pendaftaran"
                className="flex justify-center text-white p-2 bg-blue-900 font-medium rounded"
              >
                Pendaftaran
              </Link>
            </div>
          </li>
        </ul>
        {/* Mobile Nav */}
      </div>
    </nav>
  );
};

export default Navbar;
