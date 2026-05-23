"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = (): Lenis | null => useContext(LenisContext);

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Disable Lenis on coarse-pointer devices (touch). iOS + Android use native
    // momentum scroll which is smoother and more reliable than Lenis syncTouch.
    // Desktop wheel + trackpad still get Lenis.
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || isTouch) return;

    const instance = new Lenis({
      autoRaf: false,
      lerp: 0.07,
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      syncTouch: false,
    });

    setLenis(instance);

    if (process.env.NODE_ENV === "development") {
      (window as unknown as { __lenis?: Lenis }).__lenis = instance;
    }

    const onScroll = () => ScrollTrigger.update();
    instance.on("scroll", onScroll);

    const tickerCallback = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.wake();

    return () => {
      gsap.ticker.remove(tickerCallback);
      instance.off("scroll", onScroll);
      instance.destroy();
      setLenis(null);
      if (process.env.NODE_ENV === "development") {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
