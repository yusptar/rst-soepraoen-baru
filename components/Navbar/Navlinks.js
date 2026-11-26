"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./NavbarLinkList";

/*
  Struktur data (NavbarLinkList) tidak berubah:
  { name, link, submenu?, cta?, sublinks?: [{ name, link, submenu?, sublinks?: [{ name, link }] }] }

  Tambahan opsional: `cta: true` pada link untuk tampil sebagai tombol
  (otomatis aktif juga untuk menu bernama "Pendaftaran").
*/

const isMatch = (href, pathname) => {
  if (!href || href === "#" || /^https?:/.test(href)) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
};

const isLinkActive = (link, pathname) =>
  isMatch(link.link, pathname) ||
  (link.sublinks ?? []).some(
    (mid) =>
      isMatch(mid.link, pathname) ||
      (mid.sublinks ?? []).some((sub) => isMatch(sub.link, pathname))
  );

const isCta = (link) => link.cta || link.name?.toLowerCase() === "pendaftaran";

function Chevron({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${className}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Navlinks(props) {
  const pathname = usePathname();
  const [heading, setHeading] = React.useState("");
  const [subHeading, setSubHeading] = React.useState("");

  const closeAll = () => {
    setHeading("");
    setSubHeading("");
    props.setOpen?.(false);
  };

  return (
    <>
      {links.map((link, index) => {
        const active = isLinkActive(link, pathname);
        const cta = isCta(link);
        const hasSub = Boolean(link.submenu && link.sublinks?.length);
        const mobileOpen = heading === link.name;
        // item di separuh kanan membuka dropdown ke kiri agar tidak keluar layar
        const align = index < links.length / 2 ? "left-0" : "right-0";

        return (
          <div
            key={link.name ?? index}
            className={`group relative border-b border-slate-200 md:border-0 ${
              cta
                ? "md:flex md:flex-none md:items-center md:px-2"
                : "md:flex md:flex-1 md:items-stretch md:justify-center"
            }`}
          >
            {/* ================= DESKTOP ================= */}
            <div className="hidden md:flex md:items-stretch">
              {cta ? (
                <Link
                  href={link.link}
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-900 shadow-sm transition-colors hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.name}
                </Link>
              ) : hasSub ? (
                <>
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="relative flex items-center gap-1 px-4 py-3.5 text-sm font-light text-white transition-colors hover:text-amber-300 focus-visible:text-amber-300 focus-visible:outline-none"
                  >
                    {link.name}
                    <Chevron className="opacity-70 group-hover:rotate-180 group-focus-within:rotate-180" />
                    <span
                      className={`absolute inset-x-4 bottom-1.5 h-0.5 origin-left rounded-full bg-amber-400 transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown: pt-2 menjaga hover tetap menyambung dengan tombol */}
                  <div
                    className={`invisible absolute top-full z-50 translate-y-1 pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${align}`}
                  >
                    <div className="max-h-[70vh] min-w-56 overflow-auto rounded-xl bg-white p-1.5 text-blue-900 shadow-xl ring-1 ring-slate-900/10">
                      <div className="flex flex-col">
                        {link.sublinks.map((mid, midIndex) => (
                          <div
                            key={mid.name ?? midIndex}
                            className={
                              mid.sublinks?.length
                                ? "border-t border-slate-100 pb-1.5 first:border-t-0"
                                : ""
                            }
                          >
                            {mid.sublinks?.length ? (
                              <>
                                <p className="px-3 pb-2 pt-3 text-sm font-bold text-blue-900">
                                  {mid.name}
                                </p>
                                <ul className="space-y-0.5 pl-2">
                                  {mid.sublinks.map((sub, subIndex) => (
                                    <li key={sub.name ?? subIndex}>
                                      <Link
                                        href={sub.link}
                                        className={`block whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-blue-50 hover:text-blue-900 focus-visible:bg-blue-50 focus-visible:outline-none ${
                                          isMatch(sub.link, pathname)
                                            ? "bg-blue-50 font-semibold text-blue-900"
                                            : "font-medium text-slate-700"
                                        }`}
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <Link
                                href={mid.link}
                                className={`block whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-blue-50 focus-visible:bg-blue-50 focus-visible:outline-none ${
                                  isMatch(mid.link, pathname)
                                    ? "bg-blue-50 font-semibold text-blue-900"
                                    : "font-medium text-slate-700"
                                }`}
                              >
                                {mid.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.link}
                  aria-current={active ? "page" : undefined}
                  className="relative flex items-center px-4 py-3.5 text-sm font-light text-white transition-colors hover:text-amber-300 focus-visible:text-amber-300 focus-visible:outline-none"
                >
                  {link.name}
                  <span
                    className={`absolute inset-x-4 bottom-1.5 h-0.5 origin-left rounded-full bg-amber-400 transition-transform duration-300 group-hover:scale-x-100 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              )}
            </div>

            {/* ================= MOBILE ================= */}
            <div className="md:hidden">
              {cta ? (
                <div className="p-4">
                  <Link
                    href={link.link}
                    onClick={closeAll}
                    className="block rounded-lg bg-blue-900 px-4 py-3 text-center font-medium text-white active:bg-blue-800"
                  >
                    {link.name}
                  </Link>
                </div>
              ) : hasSub ? (
                <>
                  <button
                    type="button"
                    aria-expanded={mobileOpen}
                    onClick={() => {
                      setHeading(mobileOpen ? "" : link.name);
                      setSubHeading("");
                    }}
                    className={`flex min-h-12 w-full items-center justify-between px-5 py-3 text-left font-medium ${
                      active || mobileOpen ? "text-blue-900" : "text-slate-700"
                    }`}
                  >
                    {link.name}
                    <Chevron className={mobileOpen ? "rotate-180" : ""} />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden bg-slate-50">
                      {link.sublinks.map((mid, midIndex) => {
                        const hasMidSub = Boolean(mid.sublinks?.length);
                        const midOpen = subHeading === mid.name;

                        return hasMidSub ? (
                          <div key={mid.name ?? midIndex}>
                            <button
                              type="button"
                              aria-expanded={midOpen}
                              onClick={() =>
                                setSubHeading(midOpen ? "" : mid.name)
                              }
                              className="flex min-h-11 w-full items-center justify-between py-2.5 pl-8 pr-5 text-left text-sm font-semibold text-blue-900"
                            >
                              {mid.name}
                              <Chevron className={midOpen ? "rotate-180" : ""} />
                            </button>
                            <div
                              className={`grid transition-[grid-template-rows] duration-300 ${
                                midOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                              }`}
                            >
                              <ul className="overflow-hidden">
                                {mid.sublinks.map((sub, subIndex) => (
                                  <li key={sub.name ?? subIndex}>
                                    <Link
                                      href={sub.link}
                                      onClick={closeAll}
                                      className={`block py-2.5 pl-12 pr-5 text-sm active:bg-blue-50 ${
                                        isMatch(sub.link, pathname)
                                          ? "font-semibold text-blue-900"
                                          : "font-medium text-slate-700"
                                      }`}
                                    >
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={mid.name ?? midIndex}
                            href={mid.link}
                            onClick={closeAll}
                            className="block py-2.5 pl-8 pr-5 text-sm font-semibold text-blue-900 active:bg-blue-50"
                          >
                            {mid.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.link}
                  onClick={closeAll}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-12 items-center px-5 py-3 font-medium active:bg-blue-50 ${
                    active ? "text-blue-900" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}