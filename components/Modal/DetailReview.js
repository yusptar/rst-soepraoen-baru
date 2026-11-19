import { React, useState } from "react";

export default function ModalDetailReview(props) {
  return (
    <>
      <input type="checkbox" id="modal-show-review" className="modal-toggle" />
      <label
        htmlFor="modal-show-review"
        className="modal cursor-pointer md:mt-20"
      >
        <label className="modal-box relative bg-white">
          <h3 className="text-xl font-bold text-center">Ulasan</h3>
          <div className="w-full mt-3">
            <hr />
            <div className="flex justify-center">
              {props.reviewStars(props.selectedReview.rating)}
            </div>
            <p className="text-center font-medium text-sm mb-2">
              {props.selectedReview.name}
            </p>
            <p className="text-center text-base">
              {props.selectedReview.review}
            </p>

            <label
              className="btn w-full bg-blue-900 text-white mt-2"
              htmlFor="modal-show-review"
            >
              Tutup
            </label>
          </div>
        </label>
      </label>
    </>
  );
}
