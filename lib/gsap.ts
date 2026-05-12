import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerMotionEases } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  registerMotionEases();

  if (process.env.NODE_ENV === "development") {
    (window as unknown as { __gsap?: unknown; __ST?: unknown }).__gsap = gsap;
    (window as unknown as { __gsap?: unknown; __ST?: unknown }).__ST =
      ScrollTrigger;
  }
}

export { gsap, ScrollTrigger };
