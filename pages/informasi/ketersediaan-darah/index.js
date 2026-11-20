import React from "react";
import Image from "next/image";
import BannerRS from "../../../components/Banner/BannerRS";
import { asset } from "../../../helpers/asset";

export default function KetersediaanDarah() {
  return (
    <>
      {/* image banner */}
      <BannerRS title="Informasi Ketersediaan Darah" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <h1 className="font-semibold md:text-4xl text-lg text-blue-900 text-center my-5">
            Informasi Ketersediaan Darah
          </h1>
          <div className="md:w-11/12 w-full">
            <Image
              src={asset("/assets/ketersediaan-darah.png")}
              width={1991}
              height={997}
              onClick={() => window.open("http://ayodonor.pmi.or.id/")}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
