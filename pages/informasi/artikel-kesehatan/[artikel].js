import { useRouter } from "next/router";
import { React, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { WEBSERVICE, IMAGE_URL } from "../../../services/NetworkServices";
import { formatDate } from "../../../helpers/DateTimeFormatters";
import { asset } from "../../../helpers/asset";

const dummyImage = asset("/assets/3.jpg");

export default function DetailBerita() {
  const router = useRouter();
  const { artikel } = router.query;

  const [dataArtikel, setDataArtikel] = useState([]);

  useEffect(() => {
    const fetchArtikel = async () => {
      const res = await WEBSERVICE.GET("/artikel/" + artikel);
      setDataArtikel(res.data.result);
    };
    if (artikel) {
      fetchArtikel();
    }
  }, [artikel]);

  return (
    <>
      {/* content */}
      <div className="flex justify-center my-5">
        <div className="w-full 2xl:w-4/5 md:flex md:flex-col md:justify-start md:items-center px-5 md:px-0">
          {/* breadcrumb */}
          <div className="md:w-11/12 w-full flex justify-start items-center text-gray-500">
            <Link href="/informasi/artikel">
              <h1 className=" text-xs font-light">Informasi</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>

            <Link href="/informasi/artikel">
              <h1 className=" text-xs font-light">Artikel</h1>
            </Link>
            <span className=" text-xs font-light mx-2">/</span>
            <Link href={"/informasi/artikel/" + artikel}>
              <h1 className=" text-xs font-light">{dataArtikel.judul?.replace(
                  /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                  'RS TK II DR SOEPRAOEN'
                )}</h1>
            </Link>
          </div>
          {/* breadcrumb */}

          <h1 className="md:w-11/12 w-full font-semibold md:text-2xl text-lg text-blue-900 text-left my-5">
            <p className="md:w-3/5 w-11/12">
              {dataArtikel.judul?.replace(
                /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                'RS TK II DR SOEPRAOEN'
              )}
            </p>
          </h1>
          <h2 className="md:w-11/12 w-full text-sm font-light text-gray-500">
            Terakhir diubah {formatDate(dataArtikel.created_at)}
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
                  dataArtikel.banner
                    ? IMAGE_URL + dataArtikel.banner
                    : dummyImage
                }
                alt={
                  dataArtikel.judul ? dataArtikel.judul : "Artikel Kesehatan"
                }
                fill={true}
                className="object-cover rounded-md"
                sizes={"100%"}
                priority={true}
                unoptimized={true}
              />
            </div>
          </div>

          {/* <div className="md:w-11/12 grid grid-cols-3 gap-2"></div> */}
          <div className="md:w-11/12 w-full">
            <article
              className="w-full prose prose-sm md:prose-lg prose-headings:text-black prose-p:text-black"
              dangerouslySetInnerHTML={{ __html: dataArtikel.isi?.replace(
                /\b(rumah\s*sakit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rs\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen|rst\.?\s*soepraoen|rumah\s*sakit\s*tentara\s*\(rst\)\s*dr\.?\s*soepraoen|rstds|rumkit\s*tk\.?\s*ii\.?\s*dr\.?\s*soepraoen)\b/gi,
                'RS TK II DR SOEPRAOEN'
              ) }}
            ></article>
          </div>
        </div>
      </div>
      {/* content */}
    </>
  );
}
