"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0e0d] text-white pt-20 pb-10 px-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-8 pb-16 border-b border-white/10">
          <div className="col-span-12 md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center justify-center bg-white text-[#1a1817] px-4 py-2 text-sm font-bold tracking-[0.18em] mb-8"
            >
              CEMEX
            </a>
            <p className="text-sm md:text-base text-white/60 max-w-sm leading-relaxed">
              Premium ready-mix concrete, engineered for modern Bangalore.
            </p>
          </div>
          <FooterCol
            title="Plant"
            items={["Hosur Road", "Whitefield", "Mysuru"]}
          />
          <FooterCol
            title="Contact"
            items={["hello@cemex.in", "+91 80 4000 1234", "Mon–Sat · 7am–9pm"]}
          />
          <FooterCol
            title="Follow"
            items={["Instagram", "LinkedIn", "YouTube"]}
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-xs tracking-widest text-white/40 uppercase">
            © 2026 Cemex · Bangalore, India
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            href="#top"
            className="text-xs tracking-widest text-white/60 uppercase inline-flex items-center gap-2"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="col-span-6 md:col-span-2 lg:col-span-2">
      <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-4">
        {"// "}
        {title}
      </p>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((it) => (
          <li key={it} className="hover:text-white transition cursor-pointer">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
