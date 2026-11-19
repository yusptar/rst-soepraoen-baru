import { React, useState } from "react";
import ReactStars from "react-stars";
import { WEBSERVICE } from "../../services/NetworkServices";

export default function ModalAddReview(props) {
  const submitReview = async (event) => {
    event.preventDefault();
    try {
      const res = await WEBSERVICE.POST("/review", rating);
      if (res.status === 200) {
        document.getElementById("modal-add-review").checked = false;
        props.fetchUlasan();
        props.setResponseStatus({
          status: true,
          message: res.data.result,
        });
        cleanForm();
        document.getElementById("modal-input-notification").checked = true;
      }
    } catch (error) {
      props.setResponseStatus({
        status: false,
        message: error.response.data.result,
      });
      document.getElementById("modal-input-notification").checked = true;
    }
  };
  const handleRating = (e) => {
    setRating({
      ...rating,
      rating: e,
    });
  };

  const handleChange = (e) => {
    setRating({
      ...rating,
      [e.target.name]: e.target.value,
    });
  };
  const cleanForm = () => {
    setRating({
      rating: 0,
      name: "",
      email: "",
      review: "",
    });
    document.getElementById("review").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  };
  const [rating, setRating] = useState({
    name: "",
    email: "",
    rating: 0,
    review: "",
  });
  return (
    <>
      <input type="checkbox" id="modal-add-review" className="modal-toggle" />
      <label
        htmlFor="modal-add-review"
        className="modal cursor-pointer md:mt-20"
      >
        <label className="modal-box relative bg-white">
          <h3 className="text-xl font-bold text-left">Tambah Ulasan</h3>
          <div className="w-full mt-3">
            <hr />
            <form
              className="w-full"
              action=""
              method="post"
              onSubmit={submitReview}
            >
              <div className="flex justify-center py-3">
                <ReactStars
                  count={5}
                  size={40}
                  color2={"#ffd700"}
                  half={false}
                  onChange={handleRating}
                  value={rating.rating}
                />
              </div>
              <textarea
                className="w-full h-40 p-2 border rounded-md bg-white"
                placeholder="Ulasan"
                name="review"
                onChange={handleChange}
                id="review"
              ></textarea>
              <input
                type="text"
                className="w-full p-2 border rounded-md bg-white my-2"
                placeholder="Nama"
                name="name"
                onChange={handleChange}
                id="name"
                autoComplete="off"
              />
              <input
                type="email"
                className="w-full p-2 border rounded-md bg-white my-2"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                id="email"
                autoComplete="off"
              />
              <button
                className="btn w-full bg-blue-900 text-white mt-2 hover:bg-blue-800"
                id="submit-review"
                type="submit"
              >
                Kirim Ulasan
              </button>
            </form>
            <label
              className="btn w-full bg-blue-900 text-white mt-2"
              htmlFor="modal-add-review"
            >
              Tutup
            </label>
          </div>
        </label>
      </label>
    </>
  );
}
