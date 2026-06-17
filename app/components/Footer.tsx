"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0e0d] px-6 pb-10 pt-20 text-white md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 border-b border-white/10 pb-16">
          <div className="col-span-12 md:col-span-5">
            <a
              href="#top"
              className="mb-8 inline-flex items-center justify-center bg-white px-4 py-2 text-sm font-bold tracking-[0.18em] text-[#1a1817]"
            >
              CEMEX
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-base">
              Concrete supply and pour support for residential, commercial, and
              industrial projects across Bengaluru.
            </p>
          </div>
          <FooterCol
            title="Coverage"
            items={["North Bengaluru", "East Bengaluru", "South Bengaluru"]}
          />
          <FooterCol
            title="Contact"
            items={["hello@cemex.in", "+91 80 4000 1234", "Mon-Sat | 7am-9pm"]}
          />
          <FooterCol
            title="Support"
            items={["Mix recommendation", "Pour scheduling", "Cube testing"]}
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
          <p className="text-xs uppercase tracking-widest text-white/40">
            (c) 2026 Cemex Constructions Pvt Ltd | Bengaluru, India
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            href="#top"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60"
          >
            Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="col-span-6 md:col-span-2 lg:col-span-2">
      <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {"// "}
        {title}
      </p>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((it) => (
          <li key={it} className="cursor-pointer transition hover:text-white">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
