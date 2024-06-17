export * from "gsap";
export * from "@gsap/react";
export { Draggable } from "gsap/Draggable";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin, Draggable);

gsap.registerEffect({
  name: "textSwipeIn",
  effect: (targets: gsap.DOMTarget) =>
    gsap.fromTo(
      targets,
      {
        y: "100%",
      },
      {
        y: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: targets,
          start: "top +=80%",
        },
      }
    ),
  extendTimeline: true,
});
