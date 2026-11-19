export default function ModalDetailMCU(props) {
  return (
    <>
      <input
        type="checkbox"
        id="modal-medical-checkup"
        className="modal-toggle"
      />
      <label
        htmlFor="modal-medical-checkup"
        className="modal cursor-pointer md:mt-20"
      >
        <label className="modal-box relative bg-white max-h-[450px] md:max-h-[500px] overflow-hidden">
          <h3 className="text-xl font-bold text-left">{props.paket.nama}</h3>
          <h4 className="text-base font-normal text-left">
            {props.paket.keterangan}
          </h4>
          <div className="w-full mt-3">
            <div className="overflow-y-auto max-h-[200px] md:max-h-[300px] pr-2">
              {props.paket.listLayanan.map((layanan, index) => (
                <div key={index}>
                  <div className="flex justify-between py-1">
                    <p className="text-sm">{layanan.nama}</p>
                    <p className="text-sm">
                      {layanan.biaya == "-" ? "✓" : props.rupiah(layanan.biaya)}
                    </p>
                  </div>
                  <hr />
                </div>
              ))}
              {props.paket.pemeriksaanLab.length > 0 && (
                <>
                  <h4 className="font-semibold mt-2">Pemeriksaan Lab : </h4>
                  {props.paket.pemeriksaanLab.map((lab, index) => (
                    <div key={index}>
                      <div className="flex justify-between py-1">
                        <p className="text-sm">{lab.nama}</p>
                        <p className="text-sm">
                          {lab.biaya == "-" ? "✓" : props.rupiah(lab.biaya)}
                        </p>
                      </div>
                      <hr />
                    </div>
                  ))}
                </>
              )}
              {props.paket.tambahan && (
                <>
                  <h4 className="font-semibold mt-2">Tambahan : </h4>
                  {props.paket.tambahan.map((tambahan, index) => (
                    <div key={index}>
                      <div className="flex justify-between py-1">
                        <p className="text-sm">{tambahan.nama}</p>
                        <p className="text-sm">
                          {tambahan.biaya == "-"
                            ? "✓"
                            : props.rupiah(tambahan.biaya)}
                        </p>
                      </div>
                      <hr />
                    </div>
                  ))}
                </>
              )}
              {props.paket.jenisLayanan && (
                <>
                  <h4 className="font-semibold mt-2">Jenis Layanan : </h4>
                  {props.paket.jenisLayanan.map((tambahan, index) => (
                    <div key={index}>
                      <div className="flex justify-between py-1">
                        <p className="text-sm">{tambahan.nama}</p>
                        <p className="text-sm">
                          {tambahan.biaya == "-"
                            ? "✓"
                            : props.rupiah(tambahan.biaya)}
                        </p>
                      </div>
                      <hr />
                    </div>
                  ))}
                </>
              )}
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-lg font-semibold">
                {props.paket.biaya == "-"
                  ? "-"
                  : props.rupiah(props.paket.biaya)}
              </p>
            </div>
            <label
              className="btn w-full bg-blue-900 text-white"
              htmlFor="modal-medical-checkup"
            >
              Tutup
            </label>
          </div>
        </label>
      </label>
    </>
  );
}
