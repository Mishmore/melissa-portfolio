import { useRef } from "react";
import { gsap, useGSAP, Draggable } from "../helpers/gsap";

import { Container } from "../components/Container/Container";
import { StyledHero, StyledHeroWrapper } from "../components/Hero/Hero.styled";
import { HeroFrame } from "../components/HeroFrame/HeroFrame";

import { projects } from "../constants/projects";
import { Navbar } from "../components/Navbar/Navbar";

const Home = () => {
  const main = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP();

  function getDirection(direction: string) {
    const position = { x: "0", y: "0" };

    switch (direction) {
      case "left":
        position.x = "-"; // Move left by a negative value
        break;
      case "right":
        position.x = "+"; // Move right by a positive value
        break;
      case "up":
        position.y = "-"; // Move up by a negative value
        break;
      case "down":
        position.y = "+"; // Move down by a positive value
        break;
      case "left-up":
        position.x = "-"; // Move left by a negative value
        position.y = "-"; // Move up by a negative value
        break;
      case "left-down":
        position.x = "-"; // Move left by a negative value
        position.y = "+"; // Move down by a positive value
        break;
      case "right-up":
        position.x = "+"; // Move right by a positive value
        position.y = "-"; // Move up by a negative value
        break;
      case "right-down":
        position.x = "+"; // Move right by a positive value
        position.y = "+"; // Move down by a positive value
        break;
      default:
        break;
    }

    return position;
  }

  const drag = contextSafe(() => {
    Draggable.create(".hero_wrapper", {
      type: "x,y",
      bounds: window,
      onDragEnd: function () {
        const direction = this.getDirection("start");

        gsap.to(".hero_frame", {
          duration: 1,
          ease: "power1.out",
          x: `+=${
            getDirection(direction).x != "0"
              ? `${getDirection(direction).x}random([10,15,20])`
              : 0
          }`,
          y: `+=${
            getDirection(direction).y != "0"
              ? `${getDirection(direction).y}random([10,15,20])`
              : 0
          }`,
        });
      },
    });
  });

  useGSAP(() => {
    gsap.from(".hero_frame", {
      duration: 1.8,
      scale: 2,
      ease: "power1.out",
      onComplete: drag,
      stagger: 0.05,
      opacity: 0,
    });
  });

  return (
    <>
      <Container ref={main}>
        <Navbar hideOnScroll={false} />
        <StyledHero>
          <StyledHeroWrapper className="hero_wrapper">
            {projects.map((elm, index) => (
              <HeroFrame
                key={elm.description + index}
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
};

export default Home;
