import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import { Container } from "./components/Container/Container";
import { StyledHero, StyledHeroWrapper } from "./components/Hero/Hero.styled";
import { projects } from "./constants/projects";
import { HeroFrame } from "./components/HeroFrame/HeroFrame";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

function App() {
  const main = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP();

  const drag = contextSafe(() => {
    Draggable.create(".hero_wrapper", {
      type: "x,y",
      bounds: window,
      onDragStart: function () {
        gsap.to(".hero_frame", {
          duration: 0.2,
          ease: "power1.out",
        });
      },
      onDragEnd: function () {
        gsap.to(".hero_frame", {
          duration: 0.2,
          ease: "power1.out",
        });
      },
    });
  });

  useGSAP(() => {
    gsap.from(".hero_frame", {
      duration: 2,
      scale: 2,
      ease: "power1.out",
      onComplete: drag,
      stagger: 0.08,
      opacity: 0,
    });
  }, []);

  return (
    <>
      <Container ref={main}>
        <StyledHero>
          <StyledHeroWrapper className="hero_wrapper">
            {projects.map((elm) => (
              <HeroFrame
                key={elm.description}
                imageUrl={elm.image_url}
                description={elm.description}
                styles={elm.css}
              ></HeroFrame>
            ))}
          </StyledHeroWrapper>
        </StyledHero>
      </Container>
    </>
  );
}

export default App;
