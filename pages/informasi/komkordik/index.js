import { React } from "react";
import BannerRS from "../../../components/Banner/BannerRS";
import NavbarPPID from "../../../components/Navbar/NavbarPPID";
import Link from "next/link";

const listMenu = [
  {
    id: 1,
    title: "Data Dasar",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
        />
      </>
    ),
    link: "/informasi/komkordik/struktur-komkordik", //"/contact",
    color: "bg-slate-400",
  },
  {
    id: 2,
    title: "E-Log Book",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
        />
      </>
    ),
    link: "/informasi/komkordik/e-log-books",
    color: "bg-slate-400",
  },
  {
    id: 3,
    title: "Penilaian",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
        />
      </>
    ),
    link: "/informasi/komkordik/penilaiank",
    color: "bg-slate-400",
  },
 
];

export default function PPID() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Komite Koordinasi Pendidikan (KOMKORDIK)" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 flex flex-col">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
                Komite Koordinasi Pendidikan
              </h1>
              <p>
                Komite Koordinasi Pendidikan (KOMKORDIK) merupakan unit fungsional yang berkedudukan 
                di rumah sakit yang dibentuk oleh Direktur / Kepala Rumah Sakit Pendidikan Utama bersama 
                Pimpinan Institusi Pendidikan dan bertanggung jawab kepada Direktur/ Kepala Rumah Sakit Pendidikan.
              </p>
            </div>
            <div className="w-full mb-5 grid md:grid-cols-3 grid-cols-1 gap-2 justify-center mt-5">
              {listMenu.map((contact, index) => (
                <Link
                  className={`rounded-md shadow-lg flex flex-col p-2 cursor-pointer border-b-4 border-black  bg-blue-900 hover:bg-black`}
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
                    <h1 className="font-semibold text-xl text-white text-center">
                      {contact.title}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
