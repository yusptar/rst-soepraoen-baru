import React from "react";
import Image from "next/image";

export default function Epasien() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="
    flex 
    justify-center 
    items-center 
    md:my-10 
    my-5 
    bg-gradient-to-b 
    from-white 
    to-slate-200 
    2xl:w-4/5 
    w-full"
      >
        <div className="flex w-5/6">
          <div className="w-1/3 md:w-2/12 z-20 ">
            <Image
              src={"/assets/Epasien.png"}
              alt={"epasien"}
              height={0}
              width={300}
              onClick={() => {
                window.location.href
                  ? (window.location.href = "https://www.google.com")
                  : (window.location.href = "https://www.google.com");
              }}
            />
          </div>
          <div
            className="
            px-2
            w-full 
            flex
            md:flex-row
            flex-col
            justify-center 
            items-center"
          >
            <div className="mr-3 mb-2 md:w-1/5 sm:3/4 w-5/6">
              <Image
                width="0"
                height="0"
                sizes="100%"
                className="w-full h-auto"
                src={"/assets/HaloSoepraoen.png"}
                alt={"logo epasien"}
              />
            </div>

            <div className="mb-2 md:w-1/5 sm:3/4 w-5/6">
              <Image
                width="0"
                height="0"
                sizes="100%"
                className="w-full h-auto cursor-pointer"
                src={"/assets/playstore.png"}
                alt={"logo playstore"}
                onClick={() => {
                  window.location.href
                    ? (window.location.href =
                        "https://play.google.com/store/apps/details?id=com.rstds.halosoepraoen")
                    : (window.location.href =
                        "https://play.google.com/store/apps/details?id=com.rstds.halosoepraoen");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
