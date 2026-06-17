"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { IconType } from "react-icons";
import {
  LuArrowRight,
  LuArrowUpRight,
  LuBox,
  LuBuilding2,
  LuFactory,
  LuTruck,
} from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

type ServiceCard = {
  title: string;
  body: string;
  icon: IconType;
  lightImage: string;
  darkImage: string;
  imageClassName: string;
};

const SERVICES: ServiceCard[] = [
  {
    title: "Ready-Mix Supply",
    body: "Reliable concrete for villas, apartments, and commercial structures, dispatched to match your pour window and site conditions.",
    icon: LuTruck,
    lightImage: "/Images/ChatGPT Image Jun 17, 2026, 10_19_43 AM (1)-Photoroom.png",
    darkImage: "/Images/ChatGPT Image Jun 17, 2026, 10_19_45 AM (5)-Photoroom.png",
    imageClassName: "w-[44%] min-w-[180px] max-w-[340px]",
  },
  {
    title: "Custom Mix Design",
    body: "From standard structural grades to pumpable and high-strength mixes, we help choose the right concrete for the job.",
    icon: LuBox,
    lightImage: "/Images/ChatGPT Image Jun 17, 2026, 10_19_43 AM (2)-Photoroom.png",
    darkImage: "/Images/ChatGPT Image Jun 17, 2026, 10_19_46 AM (6)-Photoroom.png",
    imageClassName: "w-[41%] min-w-[175px] max-w-[320px]",
  },
  {
    title: "Structural Pour Support",
    body: "Support for foundations, columns, slabs, retaining walls, and other key pours where timing and consistency matter most.",
    icon: LuBuilding2,
    lightImage: "/Images/ChatGPT Image Jun 17, 2026, 10_19_44 AM (3)-Photoroom.png",
    darkImage: "/Images/ChatGPT Image Jun 17, 2026, 10_19_46 AM (7)-Photoroom.png",
    imageClassName: "w-[44%] min-w-[190px] max-w-[350px]",
  },
  {
    title: "Pumping And Testing",
    body: "Site coordination, pumping support, and cube testing that help your team pour cleanly and close each stage with confidence.",
    icon: LuFactory,
    lightImage: "/Images/ChatGPT Image Jun 17, 2026, 10_19_45 AM (4)-Photoroom.png",
    darkImage: "/Images/ChatGPT Image Jun 17, 2026, 10_19_46 AM (8)-Photoroom.png",
    imageClassName: "w-[42%] min-w-[180px] max-w-[330px]",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 76%",
        },
      });

      tl.from(".svc-kicker", {
        y: 16,
        opacity: 0,
        duration: 0.45,
      })
        .from(
          ".svc-headline",
          {
            y: 26,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.18"
        )
        .from(
          ".svc-copy",
          {
            y: 18,
            opacity: 0,
            duration: 0.46,
          },
          "-=0.22"
        )
        .from(
          ".svc-link",
          {
            x: 16,
            opacity: 0,
            duration: 0.42,
          },
          "-=0.3"
        )
        .from(
          ".svc-card",
          {
            y: 34,
            opacity: 0,
            stagger: 0.08,
            duration: 0.58,
          },
          "-=0.18"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="relative overflow-hidden bg-[#f4ede2] py-20 text-[#1b1714] md:py-24 xl:py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 22%, rgba(184,153,98,0.12), transparent 28%), radial-gradient(circle at 84% 14%, rgba(189,162,112,0.09), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.36), rgba(255,255,255,0))",
      }}
    >
      <div className="mx-auto max-w-[1660px] px-5 sm:px-6 md:px-8 xl:px-10">
        <div className="grid gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div className="max-w-[46rem]">
            <p className="svc-kicker text-sm uppercase tracking-[0.28em] text-[#b79b67] md:text-base">
              {"// CAPABILITIES"}
            </p>
            <h2 className="svc-headline mt-6 text-[clamp(3.3rem,7vw,5.9rem)] font-light uppercase leading-[0.92] tracking-[-0.08em] text-[#1b1714]">
              HOW WE <span className="font-semibold">SUPPORT.</span>
            </h2>
            <p className="svc-copy mt-8 max-w-[22rem] text-lg leading-[1.55] text-[#4a4139] md:text-[1.18rem]">
              We are built for projects that need more than material alone:
              clear planning, disciplined dispatch, and better execution on
              pour day.
            </p>
          </div>

          <a
            href="#projects"
            className="svc-link inline-flex items-center gap-4 self-start border-b border-[#c7ab7c] pb-2 text-sm uppercase tracking-[0.2em] text-[#b79b67] transition hover:text-[#1b1714] md:text-base"
          >
            <span>SEE PROJECT TYPES</span>
            <LuArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-2 lg:gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: ServiceCard;
}) {
  const Icon = service.icon;

  return (
    <article className="svc-card group relative min-h-[312px] overflow-hidden border border-[#ddd2c0] bg-[rgba(255,252,247,0.36)] transition-colors duration-500 hover:bg-[#1a1715] md:min-h-[330px] xl:min-h-[345px]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#f1e6d3]/12 opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

      <div
        className={`pointer-events-none absolute bottom-0 right-0 h-[72%] ${service.imageClassName}`}
      >
        <div className="relative h-full w-full">
          <Image
            src={service.lightImage}
            alt=""
            fill
            loading="eager"
            className="object-contain object-right-bottom opacity-[0.72] transition-opacity duration-500 group-hover:opacity-0"
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 32vw, 48vw"
          />
          <Image
            src={service.darkImage}
            alt=""
            fill
            className="object-contain object-right-bottom opacity-0 transition-opacity duration-500 group-hover:opacity-[0.88]"
            sizes="(min-width: 1280px) 22vw, (min-width: 768px) 32vw, 48vw"
          />
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col px-6 py-7 md:px-9 md:py-8">
        <Icon className="h-10 w-10 text-[#be9f6f] transition-colors duration-500 group-hover:text-[#d9c29b]" />

        <h3 className="mt-8 max-w-[20rem] text-[2.05rem] font-medium leading-[1] tracking-[-0.05em] text-[#1b1714] transition-colors duration-500 group-hover:text-[#f6efe6] md:text-[2.35rem]">
          {service.title}
        </h3>

        <p className="mt-5 max-w-[22rem] text-base leading-[1.65] text-[#4f463f] transition-colors duration-500 group-hover:text-[#d8d0c7] md:text-[1.12rem]">
          {service.body}
        </p>

        <a
          href="#contact"
          className="mt-auto inline-flex w-fit items-center gap-5 border-b border-[#c7ab7c] pb-2 pt-10 text-sm uppercase tracking-[0.22em] text-[#6d5c4a] transition-colors duration-500 group-hover:text-[#d9c29b] md:text-[0.98rem]"
        >
          <span>TALK TO US</span>
          <LuArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
