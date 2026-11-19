import { React, useEffect, useState, Fragment } from "react";
import { HTTP } from "../../services/NetworkServices";
import Link from "next/link";
import AnimatedInView from "../../components/TransitionEffect/AnimatedInView";

export default function CariDokter({ highContrast }) {
  const [open, setOpen] = useState(false);
  const [listDoctors, setListDoctors] = useState([]);
  const [listSpesialis, setListSpesialis] = useState([]);
  const [searchedDoctors, setSearchedDoctors] = useState([]);
  const [search, setSearch] = useState("-");
  const [selectedSpesialis, setSelectedSpesialis] = useState("-");

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await HTTP.GET("/dokter");
      setListDoctors(res.data.result);
      setSearchedDoctors(res.data.result);
    };
    const fetchSpesialis = async () => {
      const res = await HTTP.GET("/spesialis");
      setListSpesialis(res.data.result);
    };
    fetchDoctors();
    fetchSpesialis();
  }, []);

  useEffect(() => {
    if (search != "") {
      const filteredDoctors = listDoctors.filter((doctor) => {
        return doctor.nm_dokter.toLowerCase().includes(search.toLowerCase());
      });
      setSearchedDoctors(filteredDoctors);
    }
  }, [search]);

  useEffect(() => {
    if (selectedSpesialis != "-") {
      const filteredDoctors = listDoctors.filter((doctor) => {
        return doctor.spesialis.kd_sps == selectedSpesialis;
      });
      setSearchedDoctors(filteredDoctors);
    } else {
      setSearchedDoctors(listDoctors);
    }
  }, [selectedSpesialis]);

  // function searchDoctors() {
  //   setSearchedDoctors = listDoctors;
  //   if (search != "") {
  //     const filteredDoctors = searchedDoctors.filter((doctor) => {
  //       return doctor.nm_dokter.toLowerCase().includes(search.toLowerCase());
  //     });
  //     setSearchedDoctors(filteredDoctors);
  //   }
  //   if (selectedSpesialis != "-") {
  //     const filteredDoctors = searchedDoctors.filter((doctor) => {
  //       return doctor.spesialis.kd_sps == selectedSpesialis;
  //     });
  //     setSearchedDoctors(filteredDoctors);
  //   } else {
  //     setSearchedDoctors(listDoctors);
  //   }
  // }

  const Table = () => {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
      setPages(Math.ceil(searchedDoctors.length / itemsPerPage));
      setData(searchedDoctors.slice(0, itemsPerPage));
    }, [searchedDoctors]);

    const handlePageChange = (page) => {
      setCurrentPage(page);
      setData(
        searchedDoctors.slice((page - 1) * itemsPerPage, page * itemsPerPage)
      );
    };

    const handleNextPage = () => {
      if (currentPage < pages) {
        setCurrentPage(currentPage + 1);
        setData(
          searchedDoctors.slice(
            currentPage * itemsPerPage,
            (currentPage + 1) * itemsPerPage
          )
        );
      }
    };

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        setData(
          searchedDoctors.slice(
            (currentPage - 2) * itemsPerPage,
            (currentPage - 1) * itemsPerPage
          )
        );
      }
    };
    return (
      <>
        <tbody>
          {data.map((doctor, index) => (
            <tr
              key={index}
              className="hover:bg-gray-200 bg-white md:cursor-pointer"
            >
              <td className="py-4 border-b border-gray-300">
                {doctor.nm_dokter}
              </td>
              <td className="py-4 border-b border-gray-300">
                {
                  doctor.kd_dokter === "20250039" ? "Dokter Spesialis Anak Konsultan Jantung" :
                  doctor.kd_dokter === "20250050" ? "Dokter Spesialis Anak Subsp.ETIA" :
                  doctor.kd_dokter === "20250041" ? "Dokter Spesialis Penyakit Dalam Hemato Onkologi Medik" : doctor.spesialis.nm_sps
                }
              </td>
              <td className="py-4 border-b border-gray-300 items-start hidden lg:table-cell">
                <Link
                  href={"dokter/" + doctor.kd_dokter}
                  className="btn bg-blue-900 text-white"
                >
                  Lihat Jadwal
                </Link>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <div className="flex justify-center pt-4">
                <button
                  className={`${
                    currentPage == 1
                      ? "hidden"
                      : "bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1"
                  } `}
                  onClick={handlePrevPage}
                >
                  Prev
                </button>
                <button
                  className={`${
                    searchedDoctors.length <= itemsPerPage
                      ? "hidden"
                      : "bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1"
                  }`}
                  onClick={handleNextPage}
                >
                  Next
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </>
    );
  };

  return (
    <div className={`mt-5 flex flex-col items-center justify-center transition-all duration-500 ${highContrast ? "bg-black text-yellow-300" : "bg-white text-gray-900"}`}>
      <div className="w-full 2xl:w-4/5 md:py-10">
        <div className="flex flex-col items-center justify-center px-4 py-10 mx-auto space-y-4 bg-blue-900 md:px-8 md:w-11/12 md:rounded-md">
          <AnimatedInView variant="fade-in" delay={0.20}>
            <h1 className="text-4xl text-center text-white font-medium">
              Cek Jadwal Dokter
            </h1>
            <p className="text-sm text-white text-center">
              Temukan jadwal dokter, booking atau buat janji dengan dokter ahli,
              spesialis atau umum yang berpengalaman
            </p>
          </AnimatedInView>
          <div className="flex flex-col items-center justify-center w-full space-y-4 bg-blue-100 p-4 rounded-md">
            <div className="flex md:flex-row flex-col justify-between w-full items-center">
              <div className="w-full md:w-3/5">
                <form method="GET">
                  <div className="relative text-gray-400 focus-within:text-gray-600 border border-gray-300 rounded-md focus-within:border-blue-900">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button
                        type="button"
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>
                    <input
                      type="search"
                      name="q"
                      className="py-2 text-sm text-gray-900 bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
                      placeholder="Cari Dokter..."
                      autoComplete="off"
                      onClick={() => setOpen(true)}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </form>
              </div>

              <div className="w-full md:w-1/5 justify-center my-4 md:my-0 md:flex hidden">
                <h1>Spesialis : </h1>
              </div>

              <select
                className="w-full md:w-1/5 bg-white py-1 text-gray-400 focus-within:text-gray-600 border border-gray-300 rounded-md focus-within:border-blue-900 md:flex hidden"
                onChange={(e) => {
                  setSelectedSpesialis(e.target.value);
                }}
              >
                {listSpesialis.map((specialty, index) => (
                  <option key={index} value={specialty.kd_sps}>
                    {specialty.nm_sps}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full md:flex hidden">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 font-bold text-gray-600 bg-gray-200 border-b border-gray-300">
                      Nama
                    </th>
                    <th className="py-4 font-bold text-gray-600 bg-gray-200 border-b border-gray-300">
                      Spesialis
                    </th>
                    <th className="py-4 font-bold text-gray-600 bg-gray-200 border-b border-gray-300 hidden lg:table-cell">
                      Jam Praktek
                    </th>
                  </tr>
                </thead>
                {searchedDoctors.length > 0 ? (
                  <Table />
                ) : (
                  <tbody>
                    <tr className="hover:bg-gray-200 bg-white">
                      <td className="py-4 border-b border-gray-300" colSpan="3">
                        Tidak ada data
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>

          <div
            style={{
              zIndex: 1000,
            }}
            className={`
      md:hidden bg-white fixed w-full -top-5 overflow-y-auto bottom-0 text-black
      duration-500 ${open ? "right-0" : "-right-full"}`}
          >
            <div className="md:hidden bg-white  sticky top-0">
              <div className="w-full flex justify-start py-5 px-3">
                <div
                  className="text-3xl md:hidden"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
                <h1 className="pl-3 font-bold text-lg">Nama Dokter</h1>
              </div>
              <div className="w-screen">
                <div className="relative text-gray-400 focus-within:text-gray-600 border rounded-md focus-within:border-blue-900">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="py-2 text-sm text-gray-900 bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-full"
                    placeholder="Search..."
                    autoComplete="off"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </span>
                </div>
                <h1 className="w-full text-center my-2">
                  atau pilih spesialis
                </h1>
                <div className="relative text-gray-400 focus-within:text-gray-600 border rounded-md focus-within:border-blue-900">
                  <select
                    className="w-full md:w-1/5 bg-white py-1 text-gray-400 focus-within:text-gray-600 border border-gray-300 rounded-md focus-within:border-blue-900"
                    onChange={(e) => {
                      setSelectedSpesialis(e.target.value);
                    }}
                  >
                    {listSpesialis.map((specialty, index) => (
                      <option key={index} value={specialty.kd_sps}>
                        {specialty.nm_sps}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="w-screen bg-white ">
              <div>
                <ul className="divide-y divide-gray-200">
                  {searchedDoctors.map((doctor, index) => (
                    <li key={index}>
                      <Link
                        href={"/dokter/" + doctor.kd_dokter}
                        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                      >
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="text-sm leading-5 font-medium text-blue-900 truncate">
                              {doctor.nm_dokter}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
