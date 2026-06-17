"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [floors, setFloors] = useState(2);
  const [bedrooms, setBedrooms] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ct-line", {
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".ct-form", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative border-t border-white/10 bg-[#1a1817] px-6 py-28 text-white md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <p className="ct-line mb-6 text-xs uppercase tracking-[0.3em] text-white/60 md:text-sm">
            {"// REQUEST A QUOTE"}
          </p>
          <h2 className="ct-line text-5xl font-medium uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Plan your <em className="not-italic italic">next pour.</em>
          </h2>
          <p className="ct-line mt-8 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
            Share your project type, area, and expected schedule. We&apos;ll
            recommend a suitable grade and come back with a clear estimate
            within one working day.
          </p>
        </div>

        <form
          className="ct-form col-span-12 grid grid-cols-2 gap-4 md:col-span-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <Field label="Project type" defaultValue="Residential villa" />
          <Field label="Built-up area" placeholder="e.g. 12,000 sq ft" />

          <div className="col-span-1 flex flex-col">
            <label className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
              Floors
            </label>
            <div className="flex h-12 items-center border border-white/30 px-3">
              <button
                type="button"
                onClick={() => setFloors((f) => Math.max(1, f - 1))}
                className="flex h-8 w-8 items-center justify-center hover:bg-white/10"
                aria-label="decrease floors"
              >
                -
              </button>
              <span className="flex-1 text-center text-sm">{floors}</span>
              <button
                type="button"
                onClick={() => setFloors((f) => f + 1)}
                className="flex h-8 w-8 items-center justify-center hover:bg-white/10"
                aria-label="increase floors"
              >
                +
              </button>
            </div>
          </div>

          <Field label="Concrete grade" defaultValue="M25 / M30" />

          <Field label="First name" placeholder="Jane" />
          <Field label="Last name" placeholder="Doe" />

          <div className="col-span-1 flex flex-col">
            <label className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
              Pour stages
            </label>
            <div className="flex h-12 items-center border border-white/30 px-3">
              <button
                type="button"
                onClick={() => setBedrooms((b) => Math.max(0, b - 1))}
                className="flex h-8 w-8 items-center justify-center hover:bg-white/10"
                aria-label="decrease pour stages"
              >
                -
              </button>
              <span className="flex-1 text-center text-sm">{bedrooms}</span>
              <button
                type="button"
                onClick={() => setBedrooms((b) => b + 1)}
                className="flex h-8 w-8 items-center justify-center hover:bg-white/10"
                aria-label="increase pour stages"
              >
                +
              </button>
            </div>
          </div>

          <Field label="Phone number" placeholder="+91 98xxxxxxxx" />

          <div className="col-span-2 mt-2 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="rounded-full bg-white px-10 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#1a1817] md:text-sm"
            >
              {submitted ? "Request sent" : "Request quote"}
            </motion.button>
            {submitted && (
              <p className="text-xs text-white/60">
                Thanks, our team will be in touch shortly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  defaultValue,
}: {
  label: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div className="col-span-1 flex flex-col">
      <label className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="h-12 border border-white/30 bg-transparent px-4 text-sm transition placeholder:text-white/40 focus:border-white focus:outline-none"
      />
    </div>
  );
}
