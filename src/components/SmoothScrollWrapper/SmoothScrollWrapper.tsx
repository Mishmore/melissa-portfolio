import ReactLenis from "lenis/react";
import { useRef } from "react";
import { gsap, useGSAP } from "../../helpers/gsap";
import Lenis from "lenis";

interface SmoothScrollWrapper {
  children: JSX.Element;
}

type LenisRef = {
  wrapper?: HTMLElement;
  content?: HTMLElement;
  lenis?: Lenis;
};

export const SmoothScrollWrapper = ({ children }: SmoothScrollWrapper) => {
  const lenisRef = useRef<LenisRef>(null);

  useGSAP(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
};
