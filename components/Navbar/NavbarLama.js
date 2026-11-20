import Link from "next/link";
import { React, useState } from "react";
import Image from "next/image";
import Navlinks from "./Navlinks";
import { asset } from "../../helpers/asset";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="bg-white sticky top-0 shadow-md md:flex md:flex-col md:justify-center md:items-center "
      style={{ zIndex: 1000 }}
    >
      <div className="z-20 flex items-center font-medium relative bg-white 2xl:w-11/12 w-full">
        <div className="mx-auto md:px-0 md:w-4/5  w-full justify-between flex pt-2 pr-3">
          <div className="md:px-0 md:py-2 ">
            <Image
              src={asset("/assets/logo-web.png")}
              alt="logo"
              className="md:cursor-pointer pl-3 md:pl-0"
              width={180}
              height={60}
              // fill={true}
              // style={{ objectFit: "cover" }}
            />
          </div>
          <div className="hidden p-0 md:flex items-center">
            {/* <button className="btn btn-primary">Hubungi kami</button> */}
            <Image
              src={asset("/assets/contact.png")}
              alt="logo"
              className="md:cursor-pointer"
              width={180}
              height={50}
              onClick={() => {
                window.location.href
                  ? (window.location.href =
                      "https://api.whatsapp.com/send/?phone=6281331096466")
                  : (window.location.href =
                      "https://api.whatsapp.com/send/?phone=6281331096466");
              }}
            />
          </div>
          <div className="md:hidden p-0  items-center">
            <div className="z-20 p-3 md:hidden w-full flex justify-between sticky bg-white">
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
      <div className="flex items-center font-bold justify-around relative 2xl:w-4/5 w-full ">
        <ul className="md:flex w-11/12 hidden justify-between font-thin text-black relative z-4 text-sm">
          <li className="md:border-solid md:border-2 md:border-grey-500 md:grow md:text-center flex md:justify-center hover:bg-blue-900 hover:text-white">
            <Link href="/" className="py-7 md:py-2 px-3 font-light">
              Home
            </Link>
          </li>
          <Navlinks />
        </ul>

        {/* Mobile Nav */}
        <ul
          className={`
          md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 pt-16 pl-4 text-black
          duration-500 ${open ? "left-0" : "-left-full"}`}
        >
          <li>
            <Link href="/" className=" py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
