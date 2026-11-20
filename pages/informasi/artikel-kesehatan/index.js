import { React, useEffect, useState } from "react";
import Image from "next/image";
import BannerRS from "../../../components/Banner/BannerRS";
import { WEBSERVICE, IMAGE_URL } from "../../../services/NetworkServices";
import { formatDate } from "../../../helpers/DateTimeFormatters";
import Link from "next/link";
import { asset } from "../../../helpers/asset";
const dummyImage = asset("/assets/3.jpg");

export default function Artikel() {
  const [listArtikelPopuler, setListArtikelPopuler] = useState([]);
  const [listArtikel, setListArtikel] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const fetchArtikelPopuler = async () => {
      const res = await WEBSERVICE.GET("/artikel/popular");
      setListArtikelPopuler(res.data.result);
    };
    const fetchArtikel = async () => {
      const res = await WEBSERVICE.GET("/artikel");
      setListArtikel(res.data.result.data);
      setLastPage(res.data.result.last_page);
    };
    fetchArtikel();
    fetchArtikelPopuler();
  }, []);

  // fetch next page pagination
  const fetchNextPage = async () => {
    if (page < lastPage) {
      const res = await WEBSERVICE.GET(`/artikel?page=${page + 1}`);
      setListArtikel((prev) => [...prev, ...res.data.result.data]);
      setPage(page + 1);
    }
  };

  return (
    <>
      {/* image banner */}
      <BannerRS title="Artikel" />
      {/* image banner */}

      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-center md:items-center px-5 md:px-0">
          <div className="md:w-11/12 w-full">
            <div className="mb-5">
              <h1 className="font-semibold text-xl text-blue-900">
                Terpopuler
              </h1>
            </div>
            <div className="md:flex mb-5">
              <Link
                href={
                  "/informasi/artikel-kesehatan/" + listArtikelPopuler[0]?.id
                }
                className="md:w-1/2 w-full aspect-[6/3] bg-slate-500 relative rounded-xl cursor-pointer"
              >
                <Image
                  src={
                    listArtikelPopuler[0]?.banner
                      ? IMAGE_URL + listArtikelPopuler[0].banner
                      : dummyImage
                  }
                  alt={
                    listArtikelPopuler[0]?.judul
                      ? listArtikelPopuler[0].judul
                      : "Artikel Kesehatan"
                  }
                  fill={true}
                  className="object-cover rounded-lg"
                  sizes={"100%"}
                  unoptimized={true}
                />
                <div className="z-10 relative h-full text-white flex flex-col justify-end items-baseline p-5 bg-gradient-to-t from-black hover:from-transparent">
                  <h1 className=" font-semibold lg:text-lg text-sm">
                    {listArtikelPopuler[0]?.judul}
                  </h1>
                  <p className="lg:text-sm text-xs">
                    {formatDate(listArtikelPopuler[0]?.created_at)}
                  </p>
                </div>
              </Link>
              <div className="md:w-1/2 w-full grid grid-cols-2 gap-2 md:ml-2 mt-2 md:mt-0 ">
                {listArtikelPopuler?.slice(1, 5).map((item) => (
                  <Link
                    key={item.id}
                    href={"/informasi/artikel-kesehatan/" + item.id}
                  >
                    <div className="aspect-[5/3] bg-slate-500 relative rounded-xl cursor-pointer">
                      <Image
                        // src={dummyImage}
                        src={item.banner ? IMAGE_URL + item.banner : dummyImage}
                        alt={item.judul}
                        fill={true}
                        className="object-cover rounded-lg"
                        sizes={"100%"}
                        unoptimized={true}
                      />
                      <div className="z-10 relative h-full text-white hidden md:flex flex-col justify-end items-baseline p-2 bg-gradient-to-t from-black hover:from-transparent">
                        <h1 className=" font-semibold lg:text-lg text-xs">
                          {item.judul?.replace(
                            /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                            'RS TK II DR SOEPRAOEN'
                          )}
                        </h1>
                        <p className="lg:text-sm text-xs">
                          {formatDate(item.created_at)}
                        </p>
                      </div>
                    </div>
                    {/* Mobile */}
                    <div className="z-10 text-black flex flex-col justify-end items-baseline mt-2 md:hidden">
                      <h1 className=" font-semibold lg:text-lg text-xs">
                        {item.judul?.replace(
                          /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                          'RS TK II DR SOEPRAOEN'
                        )}
                      </h1>
                      <p className="lg:text-sm text-xs">{item.created_at}</p>
                    </div>
                    {/* Mobile */}
                  </Link>
                ))}
              </div>
            </div>
            <hr />
            <div className="my-5">
              <h1 className="font-semibold text-xl text-blue-900">Terbaru</h1>
            </div>
            <div className="w-full grid md:grid-cols-5 grid-cols-2 gap-2 md:ml-2 mt-2 md:mt-0 ">
              {listArtikel.map((item) => (
                <Link
                  href={"/informasi/artikel-kesehatan/" + item.id}
                  key={item.id}
                >
                  <div className="shadow-lg">
                    <div className="aspect-[5/3] bg-black relative rounded-xl cursor-pointer">
                      <Image
                        // src={dummyImage}
                        src={item.banner ? IMAGE_URL + item.banner : dummyImage}
                        alt={item.judul}
                        fill={true}
                        className="object-cover rounded-lg"
                        sizes={"100%"}
                        unoptimized={true}
                      />
                      <div className="z-10 relative h-full text-white hidden md:flex flex-col justify-end items-baseline p-2 bg-gradient-to-t from-black hover:from-transparent">
                        <h1 className=" font-semibold lg:text-lg text-xs">
                          {item.judul?.replace(
                            /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                            'RS TK II DR SOEPRAOEN'
                          )}
                        </h1>
                        <p className="lg:text-sm text-xs">
                          {formatDate(item.created_at)}
                        </p>
                      </div>
                    </div>
                    {/* Mobile */}
                    <div className="z-10 text-black flex flex-col justify-end items-baseline mt-2 md:hidden">
                      <h1 className=" font-semibold lg:text-lg text-xs">
                        {item.judul?.replace(
                          /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                          'RS TK II DR SOEPRAOEN'
                        )}
                      </h1>
                      <p className="lg:text-sm text-xs">
                        {formatDate(item.created_at)}
                      </p>
                    </div>
                    {/* Mobile */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div
            className="w-full text-center underline mt-5 cursor-pointer text-blue-900 font-medium"
            onClick={fetchNextPage}
          >
            Lebih Banyak...
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
