import React from "react";
import PropTypes from "prop-types";
import { rupiah } from "../../helpers/CurrencyFormatter";

function CardLayanan(props) {
  return (
    <div
      className={
        props.layanan.total_byrdrpr == "0"
          ? `rounded-md bg-white shadow-lg p-2 border h-full justify-between hidden`
          : `rounded-md bg-white shadow-lg p-2 border h-full justify-between flex flex-col`
      }
    >
      <h3 className="text-sm md:text-lg">
        {props.layanan.nm_perawatan.slice(0, 30) +
          (props.layanan.nm_perawatan.length > 30 ? "..." : "")}
      </h3>
      <div className="w-full">
        <h4 className="text-base font-semibold my-2">
          {rupiah(props.layanan.total_byrdrpr)}
        </h4>
        <div className="w-full bg-blue-100 mb-3 rounded-md p-2">
          <p className="text-xs">08:00 - 14:00 WIB</p>
        </div>
        <label
          className="btn bg-blue-900 text-white w-full"
          htmlFor="modal-medical-checkup"
        >
          Detail
        </label>
      </div>
    </div>
  );
}

CardLayanan.propTypes = {};

export default CardLayanan;
