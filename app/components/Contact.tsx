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
      className="relative bg-[#1a1817] text-white py-28 md:py-40 px-6 md:px-10 border-t border-white/10"
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-5">
          <p className="ct-line text-xs md:text-sm tracking-[0.3em] text-white/60 uppercase mb-6">
            // Estimate project cost
          </p>
          <h2 className="ct-line text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight uppercase">
            Pour <em className="not-italic italic">with us.</em>
          </h2>
          <p className="ct-line text-sm md:text-base text-white/70 mt-8 max-w-md leading-relaxed">
            Tell us about your site and we&apos;ll come back with a mix
            recommendation and a transparent quote within 24 hours.
          </p>
        </div>

        <form
          className="ct-form col-span-12 md:col-span-7 grid grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <Field label="Building type" defaultValue="Commercial" />
          <Field label="Square feet" placeholder="e.g. 12,000" />

          <div className="col-span-1 flex flex-col">
            <label className="text-[10px] tracking-[0.25em] text-white/50 uppercase mb-2">
              Number of floors
            </label>
            <div className="flex items-center border border-white/30 px-3 h-12">
              <button
                type="button"
                onClick={() => setFloors((f) => Math.max(1, f - 1))}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/10"
                aria-label="decrease floors"
              >
                −
              </button>
              <span className="flex-1 text-center text-sm">{floors}</span>
              <button
                type="button"
                onClick={() => setFloors((f) => f + 1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/10"
                aria-label="increase floors"
              >
                +
              </button>
            </div>
          </div>

          <Field label="Terrace" defaultValue="Yes" />

          <Field label="First name" placeholder="Jane" />
          <Field label="Last name" placeholder="Doe" />

          <div className="col-span-1 flex flex-col">
            <label className="text-[10px] tracking-[0.25em] text-white/50 uppercase mb-2">
              Bedrooms
            </label>
            <div className="flex items-center border border-white/30 px-3 h-12">
              <button
                type="button"
                onClick={() => setBedrooms((b) => Math.max(0, b - 1))}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/10"
                aria-label="decrease bedrooms"
              >
                −
              </button>
              <span className="flex-1 text-center text-sm">{bedrooms}</span>
              <button
                type="button"
                onClick={() => setBedrooms((b) => b + 1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/10"
                aria-label="increase bedrooms"
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
              className="bg-white text-[#1a1817] rounded-full px-10 py-3 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase"
            >
              {submitted ? "Sent ✓" : "Submit"}
            </motion.button>
            {submitted && (
              <p className="text-xs text-white/60">
                Thanks — we&apos;ll be in touch shortly.
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
      <label className="text-[10px] tracking-[0.25em] text-white/50 uppercase mb-2">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="bg-transparent border border-white/30 px-4 h-12 text-sm placeholder:text-white/40 focus:border-white focus:outline-none transition"
      />
    </div>
  );
}
