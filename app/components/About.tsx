"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "@/lib/useResponsive";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    value: "23",
    label: "PROFESSIONALS",
    icon: "people" as const,
  },
  {
    value: "15",
    label: "YEARS ON THE MARKET",
    icon: "calendar" as const,
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { width } = useResponsive();

  const isCompactLaptop = width >= 1024 && width < 1440;
  const gridLayoutClass = isCompactLaptop
    ? "lg:grid-cols-[minmax(0,0.94fr)_minmax(0,0.58fr)_minmax(390px,1fr)]"
    : "lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.6fr)_minmax(340px,0.88fr)] xl:grid-cols-[minmax(0,1.22fr)_minmax(0,0.66fr)_minmax(360px,0.94fr)] 2xl:grid-cols-[1.34fr_0.74fr_1fr]";
  const sectionHeightClass = isCompactLaptop
    ? "lg:min-h-[760px] xl:min-h-[790px]"
    : "lg:min-h-[820px] xl:min-h-[880px]";
  const leftPanelPaddingClass = isCompactLaptop
    ? "lg:px-7 xl:px-8 2xl:px-14"
    : "lg:px-10 xl:px-12 2xl:px-14";
  const leftPanelOffsetClass = isCompactLaptop
    ? "xl:ml-4 2xl:ml-[4.5rem]"
    : "xl:ml-10 2xl:ml-[4.5rem]";
  const leftPanelContentWidthClass = isCompactLaptop
    ? "max-w-[24rem]"
    : "max-w-none";
  const headlineClass = isCompactLaptop
    ? "text-[clamp(3rem,3.85vw,4.9rem)]"
    : "text-[clamp(3.15rem,4.25vw,5.4rem)]";
  const copyClass = isCompactLaptop
    ? "text-[1rem] leading-[1.62]"
    : "text-[1.1rem] leading-[1.58]";
  const copyWidthClass = isCompactLaptop ? "max-w-[20.5rem]" : "max-w-[24rem]";
  const verticalTagClass = isCompactLaptop
    ? "bottom-8 left-4 h-[132px] w-8"
    : "bottom-10 left-5 h-[150px] w-9";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 78%",
        },
      });

      tl.from(".about-kicker", {
        y: 18,
        opacity: 0,
        duration: 0.45,
      })
        .from(
          ".about-headline-line",
          {
            y: 28,
            opacity: 0,
            stagger: 0.08,
            duration: 0.52,
          },
          "-=0.18"
        )
        .from(
          ".about-rule",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.42,
          },
          "-=0.14"
        )
        .from(
          ".about-copy",
          {
            y: 18,
            opacity: 0,
            stagger: 0.08,
            duration: 0.45,
          },
          "-=0.08"
        )
        .from(
          ".about-rail",
          {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 0.55,
          },
          "-=0.3"
        )
        .from(
          ".about-tag",
          {
            x: -12,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.35"
        )
        .from(
          ".about-panel",
          {
            y: 24,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.2"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden bg-[#f4ede2] text-[#1b1714]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 22%, rgba(184,153,98,0.12), transparent 28%), radial-gradient(circle at 84% 14%, rgba(189,162,112,0.09), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0))",
      }}
    >
      <div
        className={`grid grid-cols-1 ${sectionHeightClass} ${gridLayoutClass}`}
      >
        <div
          className={`relative overflow-hidden border-[#d9ccb6] px-6 py-16 sm:px-8 lg:border-r ${leftPanelPaddingClass} xl:py-24`}
        >
          <div className="about-rail absolute bottom-0 left-8 top-0 hidden w-px bg-[#d8c8ae] lg:block" />

          <div
            className={`flex h-full flex-col ${leftPanelOffsetClass} ${leftPanelContentWidthClass}`}
          >
            <p className="about-kicker text-[1.1rem] font-medium uppercase tracking-[-0.04em] text-[#b59762] md:text-[1.45rem]">
              {"// ABOUT"}
            </p>

            <div className={`mt-12 space-y-1 tracking-[-0.06em] text-[#1b1714] ${headlineClass}`}>
              <h2 className="about-headline-line font-semibold leading-[0.9]">
                Built <span className="font-light">with</span>
              </h2>
              <h2 className="about-headline-line font-light leading-[0.9]">
                precision.
              </h2>
              <h2 className="about-headline-line font-semibold leading-[0.9]">
                Delivered <span className="font-light">with</span>
              </h2>
              <h2 className="about-headline-line font-light leading-[0.9]">
                trust.
              </h2>
            </div>

            <div className="about-rule mt-10 h-px w-14 bg-[#c4a56c]" />

            <div className={`mt-12 space-y-8 text-[#3c332d] ${copyClass} ${copyWidthClass}`}>
              <p className="about-copy">
                CEMEX is a new modern concrete partner inspired by precision,
                disciplined detailing, and better site outcomes.
              </p>
              <p className="about-copy">
                Our mixes are designed to achieve the optimal balance between
                functionality, quality, cost, and construction speed.
              </p>
            </div>
          </div>

          <div
            className={`about-tag pointer-events-none absolute hidden overflow-hidden lg:flex ${verticalTagClass}`}
          >
            <span className="origin-bottom-left -rotate-90 whitespace-nowrap text-[1.05rem] font-medium uppercase tracking-[-0.04em] text-[#1b1714]">
              / CEMEX
            </span>
          </div>
        </div>

        <div className="about-panel relative min-h-[520px] overflow-hidden border-[#d9ccb6] lg:min-h-0 lg:border-r">
          <Image
            src="/Images/Cemex_2ndSection_MiddleImage.png"
            alt="Architectural concrete facade detail"
            fill
            loading="eager"
            className="object-cover"
            sizes="(min-width: 1280px) 33vw, 100vw"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[0.92fr_1fr]">
          <div className="about-panel relative min-h-[320px] overflow-hidden bg-[#171615] text-[#f5efe5] lg:col-span-2 lg:min-h-0 lg:border-b lg:border-[#3e352a]">
            <div className="relative z-10 flex h-full flex-col justify-center px-8 py-10 sm:px-10 xl:px-14">
              <div className="h-px w-14 bg-[#b79b67]" />
              <p className="mt-10 text-[clamp(4.8rem,8vw,6.9rem)] font-light leading-none tracking-[-0.08em] text-[#f6f0e7]">
                100+
              </p>
              <p className="mt-5 text-[1.05rem] uppercase tracking-[0.08em] text-[#b79b67] md:text-[1.35rem]">
                COMPLETED PROJECTS
              </p>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 w-[68%] opacity-[0.42] mix-blend-screen">
              <Image
                src="/Images/Wireframe_Building_Illustration.png"
                alt=""
                fill
                className="object-contain object-right-bottom"
                sizes="(min-width: 1280px) 26vw, 60vw"
              />
            </div>
          </div>

          {STATS.map((stat, index) => (
            <StatCard key={stat.value} {...stat} addLeftBorder={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  icon,
  addLeftBorder,
}: {
  value: string;
  label: string;
  icon: "people" | "calendar";
  addLeftBorder: boolean;
}) {
  return (
    <div
      className={`about-panel relative min-h-[260px] overflow-hidden border-[#dccfb9] bg-[#f7f1e8] lg:min-h-0 lg:border-t ${
        addLeftBorder ? "lg:border-l" : ""
      }`}
    >
      <div className="relative z-10 flex h-full flex-col justify-between px-8 py-8 sm:px-10 xl:px-12">
        <div>
          <div className="h-px w-14 bg-[#c4a56c]" />
          <p className="mt-8 text-[clamp(4rem,7vw,5.4rem)] font-light leading-none tracking-[-0.08em] text-[#1b1714]">
            {value}
          </p>
          <p className="mt-5 max-w-[13rem] text-[1rem] uppercase tracking-[0.08em] text-[#b79b67] md:text-[1.2rem]">
            {label}
          </p>
        </div>

        <div className="self-end opacity-28">
          <StatIcon type={icon} />
        </div>
      </div>
    </div>
  );
}

function StatIcon({ type }: { type: "people" | "calendar" }) {
  if (type === "calendar") {
    return (
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#b79b67]"
      >
        <rect x="7" y="11" width="44" height="38" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M7 20H51" stroke="currentColor" strokeWidth="2" />
        <path d="M18 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 29H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 29H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#b79b67]"
    >
      <circle cx="22" cy="19" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="38" cy="19" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 42C12 36.4772 16.4772 32 22 32H38C43.5228 32 48 36.4772 48 42V46H12V42Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M5 45V41C5 36.5817 8.58172 33 13 33H16" stroke="currentColor" strokeWidth="2" />
      <path d="M55 45V41C55 36.5817 51.4183 33 47 33H44" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
