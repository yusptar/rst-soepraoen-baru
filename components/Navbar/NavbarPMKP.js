import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

const submenus = [
  {
    title: "Indikator Mutu",
    link: "/zona-integritas/pmkp/indikator-mutu",
  },
  {
    title: "Visi dan Misi PMKP",
    link: "/zona-integritas/pmkp/visi-dan-misi-pmkp",
  },
  {
    title: "Struktur Organisasi PMKP",
    link: "/zona-integritas/pmkp/struktur-organisasi-pmkp",
  },
  // {
  //   title: "Produk PMKP Rumah Sakit",
  //   link: "/zona-integritas/pmkp/produk-pmkp-rumah-sakit",
  // },
];

function NavbarPMKP(props) {
  const router = useRouter();
  const handleChange = (e) => {
    e.preventDefault();
    router.push(e.target.value);
  };
  return (
    <>
      <div className="md:flex justify-center mt-0 hidden">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center">
          <div className="md:w-11/12 flex">
            {submenus.map((submenu, index) => (
              <Link
                key={index}
                href={submenu.link}
                className={
                  "md:cursor-pointer md:border-grey-500 md:grow md:flex md:justify-center md:hover:bg-blue-900 md:hover:text-white py-5 text-sm font-semibold text-blue-900" +
                  (submenu.title === props.active
                    ? " bg-blue-900 text-white"
                    : "")
                }
              >
                {/* <Link href={submenu.link}> */}
                {submenu.title}
                {/* </Link> */}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="w-full md:hidden flex justify-center mt-3">
        <select
          className="w-11/12 bg-white text-blue-900 py-3 border border-gray-300 rounded-md"
          onChange={(e) => handleChange(e)}
          defaultValue={props.url}
        >
          {submenus.map((submenu, index) => (
            <option key={index} value={submenu.link} className="text-blue-900">
              {submenu.title}
            </option>
          ))}
        </select>
      </div>
      {/* mobile */}
    </>
  );
}

NavbarPMKP.propTypes = {};

export default NavbarPMKP;
