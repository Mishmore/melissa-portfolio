export * from "gsap";
export * from "@gsap/react";
export { Draggable } from "gsap/Draggable";
export { Observer } from "gsap/Observer";
export { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin, Draggable, Observer);

window.history.scrollRestoration = "manual";
ScrollTrigger.clearScrollMemory("manual");

gsap.registerEffect({
  name: "textSwipeIn",
  effect: (targets: gsap.DOMTarget) =>
    gsap.fromTo(
      targets,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: targets,
          start: "top bottom",
          toggleActions: "restart none resume reset",
        },
      }
    ),
  extendTimeline: true,
});

gsap.registerEffect({
  name: "textLeftIn",
  effect: (targets: gsap.DOMTarget) =>
    gsap.to(targets, {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 2,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: targets,
        start: "top bottom",
        toggleActions: "restart none resume reset",
      },
    }),
  extendTimeline: true,
});
