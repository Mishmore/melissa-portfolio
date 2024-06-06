import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import { Container } from "./components/Container/Container";
import { Hero, HeroFrame, HeroWrapper } from "./components/Hero/Hero";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

function App() {
  const main = useRef<HTMLDivElement>(null);

  const tl = gsap.timeline();
  // gsap.DOMTarget[]

  return (
    <>
      <Container ref={main}>
        <Hero>
          <HeroWrapper>
            <HeroFrame></HeroFrame>
          </HeroWrapper>
        </Hero>
      </Container>
    </>
  );
}

export default App;
