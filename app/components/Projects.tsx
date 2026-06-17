"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    heroSrc:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80",
    detailSrc:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    alt: "Concrete slab pour at a large commercial site",
    code: "PROJECT 01",
    title: "East Bengaluru villa community - footing to roof slab",
    mix: "M25 / M30",
  },
  {
    heroSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
    detailSrc:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern tower construction project",
    code: "PROJECT 02",
    title: "Whitefield commercial shell - raft and column cycle",
    mix: "M35 PUMPABLE",
  },
  {
    heroSrc:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=2000&q=80",
    detailSrc:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    alt: "Industrial foundation pour in progress",
    code: "PROJECT 03",
    title: "Peenya industrial floor - large slab package",
    mix: "M30 FLOOR MIX",
  },
];

const imageTransition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 78%",
        },
      });

      tl.from(".projects-kicker", {
        y: 18,
        opacity: 0,
        duration: 0.42,
      })
        .from(
          ".projects-headline",
          {
            y: 30,
            opacity: 0,
            duration: 0.56,
          },
          "-=0.16"
        )
        .from(
          ".projects-link",
          {
            x: 18,
            opacity: 0,
            duration: 0.42,
          },
          "-=0.3"
        )
        .from(
          ".projects-stage",
          {
            y: 36,
            opacity: 0,
            duration: 0.62,
          },
          "-=0.16"
        )
        .from(
          ".projects-footer-item",
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.42,
          },
          "-=0.18"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  const next = () => setActive((index) => (index + 1) % PROJECTS.length);
  const prev = () =>
    setActive((index) => (index - 1 + PROJECTS.length) % PROJECTS.length);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative overflow-hidden bg-[#f4ede2] py-20 text-[#1b1714] md:py-24 xl:py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 22%, rgba(184,153,98,0.12), transparent 28%), radial-gradient(circle at 84% 14%, rgba(189,162,112,0.09), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0))",
      }}
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-6 md:px-8 xl:px-10">
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-[48rem]">
            <p className="projects-kicker text-sm uppercase tracking-[0.28em] text-[#b79b67] md:text-base">
              {"// PROJECTS"}
            </p>

            <h2 className="projects-headline mt-6 text-[clamp(3.3rem,7vw,5.9rem)] font-light uppercase leading-[0.92] tracking-[-0.08em] text-[#1b1714]">
              SELECTED WORK.
            </h2>
          </div>

          <a
            href="#contact"
            className="projects-link inline-flex items-center gap-4 self-start border-b border-[#c7ab7c] pb-2 text-sm uppercase tracking-[0.2em] text-[#b79b67] transition hover:text-[#1b1714] md:self-end md:text-base"
          >
            <span>START YOUR PROJECT</span>
            <LuArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>

        <div className="projects-stage mt-12 lg:mt-14">
          <div className="grid grid-cols-1 gap-4 md:gap-5 xl:grid-cols-[minmax(0,2.15fr)_minmax(320px,0.98fr)] xl:gap-7">
            <div className="relative aspect-[1.64/1] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.heroSrc}
                  initial={{ opacity: 0, scale: 1.045 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.015 }}
                  transition={imageTransition}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.heroSrc}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 62vw, (min-width: 768px) 60vw, 100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative aspect-[0.78/1] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.detailSrc}
                  initial={{ opacity: 0, scale: 1.045 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.015 }}
                  transition={imageTransition}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.detailSrc}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 34vw, 100vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-7 border-t border-[#ddd2c0] pt-5 md:mt-8 md:pt-6">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[auto_minmax(0,1fr)_auto_auto] lg:items-center lg:gap-8">
              <div className="projects-footer-item flex items-center gap-6">
                <span className="text-sm uppercase tracking-[0.26em] text-[#b79b67] md:text-base">
                  {project.code}
                </span>
                <span className="hidden h-14 w-px bg-[#ddd2c0] lg:block" />
              </div>

              <p className="projects-footer-item text-base text-[#2c2621] md:text-[1.14rem]">
                {project.title} - {project.mix}
              </p>

              <a
                href="#contact"
                className="projects-footer-item inline-flex items-center gap-4 justify-self-start border-b border-[#c7ab7c] pb-2 text-sm uppercase tracking-[0.2em] text-[#1b1714] transition hover:text-[#b79b67] md:text-base lg:justify-self-end"
              >
                <span>BOOK A CONSULT</span>
                <LuArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
              </a>

              <div className="projects-footer-item flex items-center gap-3 lg:justify-self-end">
                <button
                  onClick={prev}
                  aria-label="Previous project"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c7ab7c] text-[#b79b67] transition hover:bg-[#1b1714] hover:text-[#f4ede2] md:h-14 md:w-14"
                >
                  <LuArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next project"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c7ab7c] text-[#b79b67] transition hover:bg-[#1b1714] hover:text-[#f4ede2] md:h-14 md:w-14"
                >
                  <LuArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
