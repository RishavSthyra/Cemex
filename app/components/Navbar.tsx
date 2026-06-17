"use client";

import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-[1880px] items-center justify-between px-4 pt-2 pb-4 sm:px-6 md:px-8 md:pt-3 md:pb-5 lg:px-8 xl:px-10">
        <a
          href="#top"
          aria-label="Cemex home"
          className="inline-flex items-center justify-center"
        >
          <Image
            src="/cemex-logo.png"
            alt="Cemex Constructions Pvt Ltd"
            width={1254}
            height={1254}
            className="h-20 w-20 object-contain md:h-24 md:w-24"
          />
        </a>

        <button
          aria-label="Open menu"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-[5px] p-2"
        >
          <span className="block h-[2px] w-11 bg-[#8a6e48]" />
          <span className="block h-[2px] w-11 bg-[#8a6e48]" />
        </button>

        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-[-0.03em] text-[#5a4939] transition hover:opacity-65 md:text-[1.05rem]"
        >
          <span>Contact</span>
         <IoArrowForward className="-rotate-45" />
        </a>
      </div>
    </motion.header>
  );
}
