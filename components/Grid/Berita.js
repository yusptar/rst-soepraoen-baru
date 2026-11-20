import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WEBSERVICE, IMAGE_URL } from "../../services/NetworkServices";
import { formatDate } from "../../helpers/DateTimeFormatters";
import { asset } from "../../helpers/asset";

const dummyImage = asset("/assets/3.jpg");

export default function Berita() {
  const [listBeritaPopuler, setListBeritaPopuler] = useState([]);
  const [listBerita, setListBerita] = useState([]);

  useEffect(() => {
    const fetchBeritaPopuler = async () => {
      const res = await WEBSERVICE.GET("/berita/popular");
      setListBeritaPopuler(res.data.result);
    };
    const fetchBerita = async () => {
      const res = await WEBSERVICE.GET("/berita");
      setListBerita(res.data.result.data)
    };
    fetchBerita();
    fetchBeritaPopuler();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-4 md:w-full 2xl:w-4/5 px-4 py-0 md:p-0 ">
      <div className="container md:grid grid-cols-3 gap-2 mx-auto md:w-11/12 w-full hidden">
        {listBerita.slice(0, 6).map((berita) => (
          <Link
            href={`/informasi/berita/${berita.id}`}
            className="aspect-[5/3] bg-slate-500 relative rounded-xl cursor-pointer"
            key={berita.id}
          >
            <Image
              // src={dummyImage}
              src={berita.banner ? IMAGE_URL + berita.banner : dummyImage}
              alt={berita.judul}
              fill={true}
              className="object-cover rounded-lg"
              unoptimized={true}
              sizes={"100%"}
            />
            <div className="z-10 relative h-full text-white hidden md:flex flex-col justify-end items-baseline p-5 bg-gradient-to-t from-black hover:from-transparent">
              <h1 className=" font-semibold lg:text-lg text-xs">
                {berita.judul?.replace(
                  /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                  'RS TK II DR SOEPRAOEN'
                )}
              </h1>
              <p className="lg:text-sm text-xs">
                {formatDate(berita.created_at)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* Mobile */}
      <div className="container grid grid-cols-2 md:hidden gap-2 mx-auto">
        {listBerita.slice(0, 4).map((berita) => (
          <Link
            key={berita.id}
            className={`rounded-md`}
            href={`/informasi/berita/${berita.id}`}
          >
            <div className="w-full aspect-[6/3] relative rounded-md cursor-pointer">
              <Image
                // src={dummyImage}
                src={berita.banner ? IMAGE_URL + berita.banner : dummyImage}
                alt={berita.judul}
                fill={true}
                priority={true}
                className="object-cover rounded-md"
                unoptimized={true}
                sizes={"100%"}
              />
            </div>
            <h5 className="font-medium drop-shadow-lg text-sm">
              {berita.judul?.replace(
                /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                'RS TK II DR SOEPRAOEN'
              )}
            </h5>
            <p className="text-xs drop-shadow-lg ">
              {formatDate(berita.created_at)}
            </p>
          </Link>
        ))}
      </div>
      {/* Mobile */}
      <Link
        href="/informasi/berita"
        className="bg-blue-900 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-800"
      >
        Lihat lebih banyak Berita
      </Link>
    </div>
  );
}
