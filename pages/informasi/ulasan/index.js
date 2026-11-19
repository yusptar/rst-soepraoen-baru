import { React, useEffect, useState } from "react";
import { WEBSERVICE } from "../../../services/NetworkServices";
import { formatDate } from "../../../helpers/DateTimeFormatters";
import BannerRS from "../../../components/Banner/BannerRS";
import StatistikUlasan from "../../../components/Chart/Ulasan";
import ModalAddReview from "../../../components/Modal/AddReview";
import ModalNotificationReview from "../../../components/Modal/NotificationReview";
import ModalDetailReview from "../../../components/Modal/DetailReview";

export default function Ulasan() {
  const [listUlasan, setListUlasan] = useState([]);
  const [statistikUlasan, setStatistikUlasan] = useState([]);
  const [totalUlasan, setTotalUlasan] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
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
    setListUlasan(res.data.result.reviews.data);
    setLastPage(res.data.result.reviews.last_page);
    setStatistikUlasan(res.data.result.review_statistics);
    setTotalUlasan(res.data.result.total_reviews);
    setAverageRating(res.data.result.average_rating);
  };

  // fetch next page pagination
  const fetchNextPage = async () => {
    if (page < lastPage) {
      const res = await WEBSERVICE.GET(`/review?page=${page + 1}`);
      setListUlasan((prev) => [...prev, ...res.data.result.reviews.data]);
      setPage((prev) => prev + 1);
    }
  };

  const reviewStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="orange"
          className="w-7 h-7"
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
      {/* image banner */}
      <BannerRS title="Ulasan" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 w-full">
            <div className="mb-5">
              <h1 className="font-semibold text-3xl text-blue-900">Ulasan</h1>
            </div>
            <div className="md:flex mb-5"></div> {/* ini isi */}
            {/* total review */}
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto text-center md:divide-x mb-5 gap-2">
              <div className="">
                <h4 className="font-medium md:text-start">Total Ulasan</h4>
                <div className="md:flex">
                  <h2 className="font-semibold text-3xl text-blue-900">
                    {totalUlasan ?? "0"}
                  </h2>
                  {/* add button */}
                  <div className="flex justify-center items-center ml-2">
                    <button className="bg-green-300 text-green-800 font-light px-3 py-0 rounded-full text-xs">
                      21 %
                    </button>
                  </div>
                </div>
                <p className="md:text-start text-sm">
                  Penambahan ulasan tahun ini
                </p>
              </div>
              {/* average rating */}
              <div className="md:px-5">
                <h4 className="font-medium md:text-start">Rata-rata ulasan</h4>
                <div className="md:flex">
                  <h2 className="font-semibold text-3xl text-blue-900">
                    {averageRating ?? "0"}
                  </h2>
                  {/* add stars */}
                  <div className="flex justify-center items-center ml-2">
                    {reviewStars(averageRating ?? 0)}
                  </div>
                </div>
                <p className="md:text-start text-sm">
                  Rata-rata ulasan tahun ini
                </p>
              </div>
              {/* statistic review */}
              {statistikUlasan.length > 0 && (
                <StatistikUlasan statisik={statistikUlasan} />
              )}
            </div>
            <hr />
            {/* list review */}
            {/* <div className="w-full flex justify-center">
              <label
                className="bg-blue-900 text-white px-3 py-2 rounded-md hover:bg-blue-800 hover:cursor-pointer text-start mt-5"
                htmlFor="modal-add-review"
              >
                Tambahkan Ulasan
              </label>
            </div> */}
            <div className="mt-5 grid-cols-1 md:grid-cols-2 grid gap-5">
              {listUlasan.map((ulasan, index) => (
                <label
                  className="rounded-md bg-white border p-2 shadow-md hover:cursor-pointer"
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
                        {ulasan.review.substring(0, 100)}...
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
            <div
              className="w-full text-center underline mt-5 cursor-pointer text-blue-900 font-medium"
              onClick={fetchNextPage}
            >
              Lebih Banyak...
            </div>
          </div>
        </div>
      </div>
      {/* content */}

      {/* Modal Add Review */}
      <ModalAddReview
        setResponseStatus={setResponseStatus}
        fetchUlasan={fetchUlasan}
      />
      {/* Modal Add Review */}

      {/* Modal Notification */}
      <ModalNotificationReview responseStatus={responseStatus} />
      {/* Modal Notification */}

      {/* Modal Show Review */}
      <ModalDetailReview
        selectedReview={selectedReview}
        reviewStars={reviewStars}
      />
      {/* Modal Show Review */}
    </>
  );
}
