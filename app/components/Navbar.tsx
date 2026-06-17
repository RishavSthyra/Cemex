"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-[1880px] items-center justify-between px-4 py-7 sm:px-6 md:px-8 md:py-8 lg:px-8 xl:px-10">
        <a
          href="#top"
          className="inline-flex h-10 items-center bg-[#1b1714] px-3 text-[0.9rem] font-semibold uppercase tracking-[-0.03em] text-[#f4ede2] md:h-11 md:px-4 md:text-[1.05rem]"
        >
          CEMEX
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
          className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[-0.03em] text-[#5a4939] transition hover:opacity-65 md:text-[1.05rem]"
        >
          <span>Contact</span>
          <span aria-hidden className="text-[#b79b67]">
            &#8599;
          </span>
        </a>
      </div>
    </motion.header>
  );
}
