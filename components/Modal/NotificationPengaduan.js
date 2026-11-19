export default function ModalNotificationPengaduan(props) {
  return (
    <>
      <input
        type="checkbox"
        id="modal-input-notification"
        className="modal-toggle"
      />
      <label
        htmlFor="modal-input-notification"
        className="modal cursor-pointer md:mt-20"
      >
        <label className="modal-box relative bg-white">
          <div className="w-full mt-3">
            <div className="flex justify-center">
              {props.responseStatus.status ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <h3 className="text-xl font-bold text-center">
              {props.responseStatus.status ? "Berhasil" : "Gagal"}
            </h3>
            <p className="font-medium text-center">
              {props.responseStatus.message}
            </p>
            <label
              className="btn w-full bg-blue-900 text-white mt-2"
              htmlFor="modal-input-notification"
            >
              Tutup
            </label>
          </div>
        </label>
      </label>
    </>
  );
}
