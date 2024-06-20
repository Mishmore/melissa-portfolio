import Lenis from "lenis";
import { gsap, useGSAP, ScrollTrigger } from "../helpers/gsap";

export const useLenis = () => {
  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });
};
