import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { asset } from "../../helpers/asset";

function BannerRS(props) {
  return (
    <div className="flex justify-center mt-3">
      <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center">
        <div className="md:w-11/12 w-full aspect-[7/3] md:aspect-[7/1] relative cursor-pointer ">
          <Image
            src={asset("/assets/bg-banner.jpeg")}
            alt={"Rumah Sakit dr Soepraoen"}
            fill={true}
            priority={true}
            className="object-cover backdrop-blur-xl bg-white/30"
          />
          <div className="justify-center flex items-center h-full">
            <h1 className="font-medium text-4xl text-white drop-shadow-2xl backdrop-blur-sm bg-white/30 p-2 rounded-md text-center w-full h-full flex justify-center items-center">
              {props.title}
            </h1>
          </div>
        </div>
        {/* <div className="md:w-11/12 h-[13em] bg-[url('/assets/banner.png')] text-center justify-center flex items-center bg-cover bg-center drop"> */}
        {/* <Image
        src={asset("/assets/banner.png")}
        alt={"Rumah Sakit dr Soepraoen"}
        fill={true}
        className="object-cover"
        priority={true}
        blurDataURL={asset("/assets/banner.png")}
      /> */}
        {/* <h1 className="font-medium text-4xl text-white drop-shadow-2xl bg-gray-900/50 p-2 rounded-md">
            {props.title}
          </h1> */}
        {/* </div> */}
      </div>
    </div>
  );
}

BannerRS.propTypes = {};

export default BannerRS;
