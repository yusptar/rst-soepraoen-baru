import React from "react";
import Link from "next/link";
import { links } from "./NavbarLinkList";

// const Navlinks = () => {

// };

export default function Navlinks(props) {
  const [heading, setHeading] = React.useState("");
  const [subHeading, setSubHeading] = React.useState("");

  return (
    <>
      {links.map((link, index) => (
        <div
          key={index}
          className="
          md:cursor-pointer 
          md:border-grey-500 
          md:grow 
          md:flex 
          md:justify-center 
          md:hover:bg-white 
          md:hover:text-blue-900
          md:text-white"
        >
          <div className="px-3 group md:flex md:flex-col md:justify-center">
            {!link.submenu && (
              <Link
                className="py-7 md:py-2 flex md:pr-0 pr-5 justify-between font-light"
                href={link.link}
                onClick={() => props.setOpen(!open)}
              >
                {link.name}
              </Link>
            )}
            <h1
              className={
                link.submenu
                  ? "flex py-7 md:py-2 md:pr-0 pr-5 justify-between font-light"
                  : "hidden py-7 md:py-2 md:pr-0 pr-5 justify-between font-light"
              }
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {link.submenu && (
                <span className="text-xl md:hidden inline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={
                        heading === link.name
                          ? "M5 15l7-7 7 7"
                          : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </span>
              )}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute md:top-18 hidden group-hover:md:block hover:md:block text-blue-900">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-3.5 max-h-96 overflow-auto">
                    {link.submenu && (
                      <div className="grid grid-cols-2 gap-10">
                        {link.sublinks.map((midSublink, midLinkIndex) => (
                          <div key={midLinkIndex}>
                            {/* <h1 className="text-lg font-semibold flex group-navgroup"> */}
                            <h1
                              className={
                                midSublink.submenu
                                  ? `px-2 text-lg font-semibold flex`
                                  : `px-2 text-lg font-semibold flex hover:text-white hover:bg-blue-900`
                              }
                            >
                              {/* Head */}
                              {!midSublink.submenu && (
                                <Link href={midSublink.link}>
                                  {midSublink.name}
                                </Link>
                              )}
                              {midSublink.submenu && midSublink.name}
                              {/* Head */}
                            </h1>
                            {midSublink.sublinks?.map(
                              (sublink, subLinkIndex) => (
                                <li
                                  key={subLinkIndex}
                                  className="text-sm text-gray-600 my-2.5 hover:text-white hover:bg-blue-900 p-1 group-navgroup-focus:bg-yellow-200"
                                >
                                  <Link
                                    href={sublink.link}
                                    className="font-light"
                                  >
                                    {sublink.name}
                                  </Link>
                                </li>
                              )
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.submenu &&
              link.sublinks.map((midSublink, midLinkIndex) => (
                <div key={midLinkIndex}>
                  <div>
                    <h1
                      className="py-3 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                      onClick={() =>
                        midSublink.submenu
                          ? subHeading !== midSublink.name
                            ? setSubHeading(midSublink.name)
                            : setSubHeading("")
                          : (window.location.href = midSublink.link)
                      }
                    >
                      {midSublink.name}
                      {midSublink.submenu && (
                        <span className="text-xl md:mt-1 md:ml-2 md:block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d={
                                subHeading === midSublink.name
                                  ? "M5 15l7-7 7 7"
                                  : "M19 9l-7 7-7-7"
                              }
                            />
                          </svg>
                        </span>
                      )}
                    </h1>
                    <div
                      className={`${
                        subHeading === midSublink.name ? "md:hidden" : "hidden"
                      }`}
                    >
                      {midSublink.sublinks?.map((sublink, subLinkIndex) => (
                        <li key={subLinkIndex} className="py-3 pl-14">
                          <Link
                            href={sublink.link}
                            className="hover:text-slate-500 "
                            onClick={() => props.setOpen(!open)}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* End Mobile */}
        </div>
      ))}
    </>
  );
}
