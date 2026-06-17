"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useResponsive } from "@/lib/useResponsive";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2200&q=80",
    alt: "Concrete slab pour at a modern job site",
    code: "01",
    title: "Flagship Pour",
    eyebrow: "READY-MIX SERIES",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80",
    alt: "Architectural concrete tower in an urban setting",
    code: "02",
    title: "Tower Grid",
    eyebrow: "STRUCTURAL MIX",
  },
  {
    src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2200&q=80",
    alt: "Precision concrete work with engineering supervision",
    code: "03",
    title: "Site Control",
    eyebrow: "QUALITY ASSURANCE",
  },
];

const SLIDE_INTERVAL_MS = 4400;
const HERO_SURFACE = "#f4ede2";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const { isMobile, isLaptop, isWideDesktop, isShortViewport, height } =
    useResponsive();

  const isCompactHero = (isLaptop && isShortViewport) || height < 820;
  const mediaWidth = isMobile ? "100%" : isWideDesktop ? "97.15%" : "97%";
  const mediaAspectRatio = isMobile
    ? "1.12 / 1"
    : isCompactHero
      ? "2.35 / 1"
      : isWideDesktop
        ? "2.12 / 1"
        : "1.94 / 1";
  const topLineClass = isCompactHero
    ? "text-[clamp(1.85rem,3.3vw,4rem)]"
    : "text-[clamp(2rem,4vw,5rem)]";
  const displayClass = isCompactHero
    ? "text-[clamp(3.45rem,8vw,7.4rem)]"
    : "text-[clamp(3.9rem,9.3vw,8.8rem)]";
  const bodyClass = isCompactHero ? "text-[0.95rem]" : "text-sm md:text-[1.05rem]";
  const sectionPaddingClass = isCompactHero
    ? "pb-5 pt-24 md:pb-6 md:pt-28"
    : "pb-8 pt-28 md:pb-8 md:pt-32 lg:pt-36";
  const mediaTopSpaceClass = isCompactHero ? "mt-6 md:mt-7" : "mt-8 md:mt-9";
  const metaPanelClass = isCompactHero
    ? "h-[24%] w-[26%] min-h-[118px] min-w-[215px] max-w-[360px]"
    : "h-[27%] w-[27%] min-h-[132px] min-w-[240px] max-w-[390px]";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-topline", {
        y: 28,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero-sidecopy",
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-display",
          {
            y: 42,
            opacity: 0,
            duration: 0.85,
          },
          "-=0.35"
        )
        .from(
          ".hero-cta",
          {
            y: 18,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.65"
        )
        .from(
          ".hero-media",
          {
            y: 36,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.45"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  const slide = SLIDES[index];

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative overflow-hidden bg-[#f4ede2]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 18%, rgba(187,154,96,0.14), transparent 28%), radial-gradient(circle at 82% 16%, rgba(197,168,114,0.09), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.42), rgba(255,255,255,0))",
      }}
    >
      <div
        className={`mx-auto flex min-h-[100svh] max-w-[1880px] flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 ${sectionPaddingClass}`}
      >
        <div className="grid grid-cols-12 gap-x-6 gap-y-3 md:gap-y-5">
          <div className="col-span-12 lg:col-span-8">
            <p
              className={`hero-topline font-medium uppercase leading-[0.92] tracking-[-0.04em] text-[#1b1918] ${topLineClass}`}
            >
              CEMENT MIXING IS OUR
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:flex lg:justify-end lg:pt-2">
            <a
              href="#contact"
              className="hero-cta inline-flex min-h-11 items-center justify-center rounded-full border border-[#c5a66d]/60 px-6 text-sm font-medium uppercase tracking-[-0.03em] text-[#7f6440] transition hover:bg-[#1b1714] hover:text-[#f4ede2] md:min-h-12 md:px-8 md:text-base"
            >
              Discuss The Project
            </a>
          </div>

          <div className="hero-sidecopy col-span-12 pt-1 md:col-span-3 lg:col-span-2 lg:pt-4">
            <p
              className={`max-w-[12.5rem] leading-[1.43] text-[#4d4239] ${bodyClass}`}
            >
              We design and deliver precision-engineered ready-mix concrete for
              modern construction across Bangalore and the rest of Karnataka.
            </p>
          </div>

          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <h1
              className={`hero-display font-semibold uppercase leading-[0.9] tracking-[-0.07em] text-[#1b1918] ${displayClass}`}
            >
              NEW STANDARD.
            </h1>
          </div>
        </div>

        <div
          className={`hero-media relative mx-auto ${mediaTopSpaceClass}`}
          style={{ width: mediaWidth }}
        >
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: mediaAspectRatio }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.src}
                initial={{ opacity: 0, x: 26, scale: 1.02 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -26, scale: 1.01 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  loading="eager"
                  className="object-cover"
                  sizes="(min-width: 1536px) 1820px, (min-width: 1024px) 97vw, 100vw"
                />
              </motion.div>
            </AnimatePresence>

            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-[13%] w-[26%] -translate-x-1/2"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                backgroundColor: HERO_SURFACE,
              }}
            />

            <div
              className={`absolute bottom-0 left-0 z-20 ${metaPanelClass}`}
              style={{
                clipPath: "polygon(0 0, 31% 0, 100% 100%, 0 100%)",
                backgroundColor: HERO_SURFACE,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${slide.code}-${slide.title}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col justify-end px-5 pb-4 pt-7 md:px-6 md:pb-5"
                >
                  <p className="text-[clamp(1.8rem,2.9vw,3rem)] font-light leading-none text-[#b49a6c]">
                    {slide.code}
                  </p>
                  <p className="mt-1 text-[clamp(1.4rem,2.4vw,2.7rem)] font-medium leading-[0.95] tracking-[-0.05em] text-[#1b1918]">
                    {slide.title}
                  </p>
                  <p className="mt-3 text-[0.72rem] uppercase tracking-[0.26em] text-[#b49a6c] md:text-[0.86rem]">
                    {slide.eyebrow}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
