"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    n: "01",
    t: "Specify",
    d: "Submit your mix grade, slump, and pour window through our portal or with a call.",
  },
  {
    n: "02",
    t: "Batch",
    d: "We weigh and blend cement, aggregates, and admixtures to a tolerance of ±2%.",
  },
  {
    n: "03",
    t: "Pour",
    d: "Mix arrives on site in a transit mixer with a live ticket — ready in 90 minutes.",
  },
  {
    n: "04",
    t: "Verify",
    d: "Cubes are cast from every load and tested at 7 and 28 days at our lab.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 78%",
        },
      });

      tl.from(".proc-kicker", {
        y: 18,
        opacity: 0,
        duration: 0.45,
      })
        .from(
          ".proc-headline-line",
          {
            y: 36,
            opacity: 0,
            stagger: 0.08,
            duration: 0.58,
          },
          "-=0.2"
        )
        .from(
          ".proc-rule",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.42,
          },
          "-=0.18"
        )
        .from(
          ".proc-copy",
          {
            y: 18,
            opacity: 0,
            duration: 0.46,
          },
          "-=0.12"
        );

      const steps = gsap.utils.toArray<HTMLElement>(".proc-step");

      steps.forEach((step, index) => {
        const procIndex = step.querySelector<HTMLElement>(".proc-index");
        const procLine = step.querySelector<HTMLElement>(".proc-line");
        const procDot = step.querySelector<HTMLElement>(".proc-dot");
        const divider = step.querySelector<HTMLElement>(".proc-divider");
        const contentItems = step.querySelectorAll<HTMLElement>(".proc-content > *");

        if (procIndex) {
          tl.from(
            procIndex,
            {
              y: 14,
              opacity: 0,
              duration: 0.28,
            },
            index === 0 ? "-=0.08" : "-=0.2"
          );
        }

        if (procLine) {
          tl.to(
            procLine,
            {
              scaleX: 1,
              duration: 0.32,
            },
            "-=0.1"
          );
        }

        if (procDot) {
          tl.from(
            procDot,
            {
              scale: 0,
              opacity: 0,
              duration: 0.18,
            },
            "-=0.05"
          );
        }

        if (divider) {
          tl.to(
            divider,
            {
              scaleY: 1,
              duration: 0.34,
            },
            "-=0.04"
          );
        }

        if (contentItems.length) {
          tl.from(
            contentItems,
            {
              y: 22,
              opacity: 0,
              stagger: 0.06,
              duration: 0.36,
            },
            "-=0.08"
          );
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="process"
      className="relative overflow-hidden bg-[#f4ede2] py-20 text-[#1b1714] md:py-24 xl:py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 22%, rgba(184,153,98,0.12), transparent 28%), radial-gradient(circle at 84% 14%, rgba(189,162,112,0.09), transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0))",
      }}
    >
      <div className="mx-auto max-w-[1680px] px-5 sm:px-6 md:px-8 xl:px-10">
        <div className="max-w-[48rem]">
          <p className="proc-kicker text-sm uppercase tracking-[0.28em] text-[#b79b67] md:text-base">
            {"// PROCESS"}
          </p>

          <div className="mt-8 space-y-1 text-[clamp(2.65rem,5.15vw,5.35rem)] font-light uppercase leading-[0.92] tracking-[-0.08em] text-[#1b1714]">
            <h2 className="proc-headline-line whitespace-nowrap">
              FROM ORDER TO POUR,
            </h2>
            <h2 className="proc-headline-line whitespace-nowrap">
              IN 90 MINUTES.
            </h2>
          </div>

          <div className="proc-rule mt-10 h-px w-14 bg-[#c4a56c]" />

          <p className="proc-copy mt-10 max-w-[38rem] text-lg leading-[1.7] text-[#55504b] md:text-[1.2rem]">
            A precision-driven process built for consistency, transparency, and
            speed — from your mix to the jobsite.
          </p>
        </div>

        <div className="mt-18 grid grid-cols-1 gap-y-12 md:mt-20 md:grid-cols-2 md:gap-x-10 xl:mt-24 xl:grid-cols-4 xl:gap-x-0">
          {STEPS.map((step, index) => (
            <ProcessStep
              key={step.n}
              step={step}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  isLast,
}: {
  step: (typeof STEPS)[number];
  isLast: boolean;
}) {
  return (
    <div className="proc-step relative pr-0 xl:pr-10">
      <div className="flex items-center gap-8">
        <span className="proc-index text-[2.1rem] font-medium tracking-[-0.04em] text-[#b79b67]">
          {step.n}
        </span>
        <div className="relative flex-1">
          <span className="proc-line block h-px origin-left scale-x-0 bg-[#dfd4c3]" />
          <span className="proc-dot absolute -right-[5px] -top-[4px] h-[10px] w-[10px] rounded-full bg-[#b79b67]" />
        </div>
      </div>

      <div className="relative mt-9 min-h-[285px] pr-6 md:min-h-[260px] xl:pr-10">
        {!isLast && (
          <span className="proc-divider absolute right-0 top-0 hidden h-full w-px origin-top scale-y-0 bg-[#e8dece] xl:block" />
        )}

        <div className="proc-content">
          <h3
            className="text-[clamp(2.05rem,4vw,3.2rem)] font-normal leading-[0.96] tracking-[-0.05em] text-[#1b1714]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {step.t}
          </h3>
          <div className="mt-7 h-px w-10 bg-[#c4a56c]" />
          <p className="mt-8 max-w-[17rem] text-lg leading-[1.7] text-[#55504b] md:text-[1.15rem]">
            {step.d}
          </p>
        </div>
      </div>
    </div>
  );
}
