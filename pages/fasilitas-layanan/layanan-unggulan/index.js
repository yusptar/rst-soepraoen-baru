import React from "react";
import { listPoliklinik } from "../../../components/List/listPoliklinik";
import Image from "next/image";
import Link from "next/link";
import BannerRS from "../../../components/Banner/BannerRS";
import { listLayananUnggulan } from "../../../components/List/listLayananUnggulan";

export default function Mitra() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Layanan Unggulan Rumah Sakit" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-11/12 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0 ">
          <h1 className="font-semibold text-4xl text-blue-900 text-center my-5">
            Layanan Unggulan Rumah Sakit
          </h1>
          <div className="mb-5 md:flex justify-center">
            <div className="flex items-center justify-center w-full ">
              <div className="md:grid md:grid-cols-3 md:gap-3 items-center justify-around md:px-4 w-full flex flex-col gap-2">
                {listLayananUnggulan.map((information, index) => (
                  <Link
                    href={information.link}
                    className="
              w-full
              rounded-md 
              mx-2 
              overflow-hidden 
              shadow-lg 
              bg-white 
              hover:bg-blue-900 
              hover:text-white 
              text-blue-900 
              hover:shadow-2xl 
              md:cursor-pointer 
              md:h-[20rem]"
                    key={index}
                  >
                    <div className="w-full aspect-[4/3] relative rounded-md cursor-pointer h-3/4">
                      <Image
                        src={information.image}
                        alt={information.alt}
                        fill={true}
                        priority={true}
                        className="object-cover rounded-t-md"
                        sizes={"100%"}
                      />
                    </div>

                    <div className="px-6 py-2 text-center h-1/4 flex flex-col justify-center">
                      <div className="font-medium xl:text-xl lg:text-base text-sm mb-2 ">
                        {information.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="w-full flex justify-center items-center">
            <div className="w-full lg:w-11/12  grid md:grid-cols-4 grid-cols-2 gap-2">
              {listPoliklinik.map((item, index) => {
                return (
                  <Link
                    className="w-full bg-blue-900 md:p-5 p-2 rounded-lg shadow-lg mx-1 flex justify-center items-center cursor-pointer md:min-h-[10em] min-h-[8em] text-white font-bold"
                    key={index}
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
      {/* content */}
    </>
  );
}
