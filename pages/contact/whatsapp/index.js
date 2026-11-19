import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const listMenu = [
    {
      id: 1,
      title: "WA IGD",
      icon: <FaWhatsapp className="text-2xl" size={20} color="green" />,
      link: "https://wa.me/6282330769738",
      color: "bg-green-400",
    },
    {
        id: 2,
        title: "WA HUMAS",
        icon: <FaWhatsapp className="text-2xl" size={20} color="green" />,
        link: "https://wa.me/628113277303",
        color: "bg-slate-400",
      },
  ];

export default function Whastapp() {
  return (
    <>
      {/* content */}
      <div className="flex justify-center my-2">
        <div className="w-11/12 md:flex md:flex-col md:justify-center md:items-center md:px-0 2xl:w-4/5">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500 mt-5">
            <Link href="/">
              <h1 className=" text-xs font-light">Whatsapp</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href="/contact/whatsapp">
              <h1 className=" text-xs font-light">
                List Contact
              </h1>
            </Link>
          </div>
          {/* breadcrumb */}
          <div className="2xl:w-11/12 w-full my-5">
            <h1 className="font-semibold text-base md:text-4xl text-blue-900 text-center my-0">
              List Contact
            </h1>
          </div>
          <div className="w-full mb-5 grid md:grid-cols-2 grid-cols-1 gap-2 justify-center mt-5">
              {listMenu.map((contact, index) => (
                <Link
                  className={`rounded-md shadow-lg flex flex-col p-2 cursor-pointer border-b-4 border-green-500  bg-white-400 hover:bg-green-100`}
                  key={index}
                  href={contact.link}
                >
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-10 h-10"
                    >
                      {contact.icon}
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-xl text-black text-center">
                      {contact.title}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
