import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { WEBSERVICE, IMAGE_URL } from "../../../services/NetworkServices";
import { formatDate } from "../../../helpers/DateTimeFormatters";

const dummyImage = "/assets/2.jpg";

export default function DetailBerita() {
  const router = useRouter();
  const { berita } = router.query;
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    const fetchBerita = async () => {
      const res = await WEBSERVICE.GET("/berita/" + berita);
      setDataBerita(res.data.result);
    };
    if (berita) {
      fetchBerita();
    }
  }, [berita]);

  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/informasi/berita">
              <h1 className=" text-xs font-light">Informasi</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>

            <Link href="/informasi/berita">
              <h1 className=" text-xs font-light">Berita</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href={"/informasi/berita/" + berita}>
              <h1 className=" text-xs font-light">
                {dataBerita.judul?.replace(
                  /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                  'RS TK II DR SOEPRAOEN'
                )}
              </h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <h1 className="md:w-11/12 w-full font-semibold md:text-2xl text-lg text-blue-900 text-left my-5">
            <p className="md:w-3/5 w-11/12">
              {dataBerita.judul?.replace(
                /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                'RS TK II DR SOEPRAOEN'
              )}
            </p>
          </h1>
          <h2 className="md:w-11/12 w-full text-sm font-light text-gray-500">
            Terakhir diubah {formatDate(dataBerita.created_at)}
          </h2>

          <div className="w-11/12 flex mt-5">
            <div className="md:w-3/5 w-11/12 flex">
              <SocialIcon
                url="https://facebook.com"
                bgColor="blue"
                fgColor="white"
                style={{ height: 30, width: 30 }}
                className="mr-2"
              />
              <SocialIcon
                url="https://instagram.com"
                bgColor="purple"
                fgColor="white"
                style={{ height: 30, width: 30 }}
                className="mr-2"
              />
              <SocialIcon
                url="https://whatsapp.com"
                bgColor="green"
                fgColor="white"
                style={{ height: 30, width: 30 }}
                className="mr-2"
              />
            </div>
          </div>

          <div className="md:w-11/12 w-full my-5">
            <div className="md:w-3/5 w-full aspect-[5/3] relative rounded-md cursor-pointer">
              <Image
                // src={dummyImage}
                src={
                  dataBerita.banner ? IMAGE_URL + dataBerita.banner : dummyImage
                }
                alt={dataBerita.judul ?? "Gambar berita"}
                fill={true}
                className="object-cover rounded-md"
                priority={true}
                unoptimized={true}
                sizes={"100%"}
              />
            </div>
          </div>

          {/* <div className="md:w-11/12 grid grid-cols-3 gap-2"></div> */}
          <div className="md:w-11/12 w-full">
            <article
              className="md:w-3/5 w-full prose prose-sm md:prose-lg prose-headings:text-black prose-p:text-black typography"
              dangerouslySetInnerHTML={{
                __html: dataBerita.isi
                ?.replace(
                  /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                  'RS TK II DR SOEPRAOEN'
                )
              }}
            ></article>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
