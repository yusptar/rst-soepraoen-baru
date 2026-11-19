import { React, useEffect, useState } from "react";
import { WEBSERVICE } from "../../services/NetworkServices";
import { formatDate } from "../../helpers/DateTimeFormatters";
import Link from "next/link";
import ModalNotificationReview from "../Modal/NotificationReview";
import ModalAddReview from "../Modal/AddReview";
import AnimatedInView from "../../components/TransitionEffect/AnimatedInView";

export default function CardUlasan() {
  const [listUlasan, setListUlasan] = useState([]);
  const [selectedReview, setSelectedReview] = useState({});
  const [responseStatus, setResponseStatus] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    fetchUlasan();
  }, []);

  const fetchUlasan = async () => {
    const res = await WEBSERVICE.GET("/review");
    // fetch only 4 reviews
    setListUlasan(res.data.result.reviews.data.slice(0, 4));
  };

  const reviewStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="orange"
          className="w-6 h-6"
          key={i}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <>
      {/* content */}
      <AnimatedInView variant="fade-in" delay={0.20}>
      <div className="w-full flex justify-center mb-5 text-lg">
        <p>"Ulasan Anda Sangat Berarti Bagi Kami"</p>
      </div>
      </AnimatedInView>

      <AnimatedInView variant="zoom-in" delay={0.20}>
      <div className="w-full flex justify-center">
        <label
          className="bg-blue-900 text-white px-3 py-2 hover:bg-blue-800 hover:cursor-pointer text-start mb-2 text-sm"
          htmlFor="modal-add-review"
        >
          Tambahkan Ulasan
        </label>
      </div>
      </AnimatedInView>

      <AnimatedInView variant="fade-down" delay={0.20}>
      <div className="grid-cols-1 md:grid-cols-4 grid md:gap-5 gap-3 p-2 w-full">
        {listUlasan?.map((ulasan, index) => (
          <label
            className="rounded-md bg-white border p-2 shadow-md hover:cursor-pointer grow md:h-100"
            key={index}
            htmlFor="modal-show-review"
            onClick={() => setSelectedReview(ulasan)}
          >
            <h2 className="text-xl font-medium">{ulasan.name}</h2>
            <div className="flex gap-1">{reviewStars(ulasan.rating)}</div>
            <p className="font-light text-xs">
              {formatDate(ulasan.created_at)}
            </p>
            <p className="mt-2 text-sm">
              {ulasan.review.length > 100 ? (
                <span>
                  {ulasan.review.substring(0, 80)}...
                  <span className="text-blue-900 font-medium">
                    Selengkapnya
                  </span>
                </span>
              ) : (
                ulasan.review
              )}
            </p>
            {ulasan?.respon && ulasan?.user_id ? (
              <div>
                <br/><hr/>
                <p className="mt-2 text-sm font-semibold">{ulasan.user_id}</p>
                <p className="mt-2 text-sm">{ulasan.respon}</p>
              </div>
            ) : (
              <p></p>
            )}
          </label>
        ))}
      </div>
      </AnimatedInView>

      <AnimatedInView variant="fade-up" delay={0.20}>
      <div className="w-full flex justify-center mt-3">
        <Link
          href="/informasi/ulasan"
          className="bg-blue-900 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-800"
        >
          Lihat lebih banyak ulasan
        </Link>
      </div>
      </AnimatedInView>
     
      {/* content */}

      {/* Modal Show Review */}
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
              {reviewStars(selectedReview.rating)}
            </div>
            <p className="text-center font-medium text-sm mb-2">
              {selectedReview.name}
            </p>
            <p className="text-center text-base">{selectedReview.review}</p>
            <label
              className="btn w-full bg-blue-900 text-white mt-2"
              htmlFor="modal-show-review"
            >
              Tutup
            </label>
          </div>
        </label>
      </label>

      {/* Modal Show Review */}

      {/* Modal Add Review */}
      <ModalAddReview
        setResponseStatus={setResponseStatus}
        fetchUlasan={fetchUlasan}
      />
      {/* Modal Add Review */}

      {/* Modal Notification */}
      <ModalNotificationReview responseStatus={responseStatus} />
      {/* Modal Notification */}
    </>
  );
}
