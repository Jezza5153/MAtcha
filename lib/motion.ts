import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

export function registerMotionEases() {
  if (registered || typeof window === "undefined") return;

  gsap.registerPlugin(CustomEase);

  CustomEase.create("matcha.rise", "M0,0 C0.16,1 0.3,1 1,1");
  CustomEase.create("matcha.settle", "M0,0 C0.22,1 0.36,1 1,1");
  CustomEase.create("matcha.drift", "M0,0 C0.4,0 0.6,1 1,1");
  CustomEase.create("matcha.carve", "M0,0 C0.65,0 0.35,1 1,1");
  CustomEase.create("matcha.lift", "M0,0 C0.34,1.56 0.64,1 1,1");

  registered = true;
}

export const motionEase = {
  rise: "matcha.rise",
  settle: "matcha.settle",
  drift: "matcha.drift",
  carve: "matcha.carve",
  lift: "matcha.lift",
} as const;

export const motionDuration = {
  flick: 0.2,
  beat: 0.6,
  turn: 0.9,
  pour: 1.6,
  breathe: 8,
} as const;

export const motionDistance = {
  nudge: 6,
  step: 14,
  arrive: 24,
  drift: "3%",
  swell: "8%",
} as const;

export const motionOpacity = {
  ghost: 0.15,
  present: 0.25,
  full: 1,
  exit: 0,
} as const;

export const motionScrub = {
  hero: 1.15,
  story: 1,
  image: 0.8,
  micro: 0.4,
} as const;
