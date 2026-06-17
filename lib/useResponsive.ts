"use client";

import { useEffect, useState } from "react";

type Viewport = {
  width: number;
  height: number;
};

const DEFAULT_VIEWPORT: Viewport = {
  width: 1440,
  height: 900,
};

function readViewport(): Viewport {
  if (typeof window === "undefined") {
    return DEFAULT_VIEWPORT;
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export function useResponsive() {
  const [viewport, setViewport] = useState<Viewport>(DEFAULT_VIEWPORT);

  useEffect(() => {
    let frame = 0;

    const updateViewport = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setViewport(readViewport());
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const { width, height } = viewport;

  return {
    width,
    height,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isLaptop: width >= 1024 && width < 1440,
    isWideDesktop: width >= 1440,
    isShortViewport: height < 860,
  };
}
