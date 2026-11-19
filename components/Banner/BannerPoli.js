import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function BannerPoli(props) {
  return (
    <div className="w-full aspect-[7/3] relative rounded-md cursor-pointer">
      <Image
        src={props.banner}
        alt={props.nama_poli}
        width="1000"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-md"
      />
    </div>
  );
}

BannerPoli.propTypes = {};

export default BannerPoli;
