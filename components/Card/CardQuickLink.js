import Link from "next/link";
import { React } from "react";
import { listQuickLinks } from "../List/ListQuickLink";
import AnimatedInView from "../../components/TransitionEffect/AnimatedInView";

export default function CardQuickLink() {
  return (
    <>
        <AnimatedInView variant="fade-in" delay={0.10}>
        <div className="w-full items-center flex justify-center">
          <p className="text-2xl mt-8 text-blue-900 text-center font-bold">
            Kami Siap Melayani Yang Anda Butuhkan
          </p>
        </div>
        <div className="w-full items-center flex justify-center">
          <p className="mt-5 text-blue-900">
            Silahkan klik tombol di bawah ini
          </p>
        </div>
        </AnimatedInView>
        <AnimatedInView variant="fade-down">
        <div className="w-full flex justify-center px-3 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5 w-full 2xl:w-4/5 mt-6">
            {listQuickLinks.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                className="group relative flex flex-col items-center justify-center p-5 md:p-6 rounded-2xl 
                bg-white/70 backdrop-blur-md
                shadow-sm hover:shadow-xl 
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:bg-white"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-700 group-hover:to-blue-500 transition-all duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 text-3xl mb-3 text-blue-800 group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>

                {/* Text */}
                <div className="relative z-10 text-center">
                  <h1 className="text-lg md:text-base font-bold text-gray-800 group-hover:text-white transition">
                    {link.name}
                  </h1>
                  <p className="text-xs md:text-sm text-gray-500 group-hover:text-white mt-1 leading-snug">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </AnimatedInView>
     
    </>
  );
}
