import { MouseEventHandler, useRef } from "react";
import { gsap, useGSAP } from "../../../helpers/gsap";

import {
  StyledHeroFrame,
  StyledFigure,
  StyledImg,
  StyledDescription,
  StyledHeroFrameWrapper,
} from "./HeroFrame.styled";

interface HeroFrame {
  imageUrl: string;
  description: string;
  styles: {
    width: string | number;
    height?: string | number;
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
  };
}

export const HeroFrame = ({ imageUrl, styles, description }: HeroFrame) => {
  const heroRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: heroRef });

  const onMouseMove: MouseEventHandler = contextSafe((e) => {
    const heroWrapper = document
      .querySelector(".hero_wrapper")!
      .getBoundingClientRect();
    const x = e.clientX - heroWrapper.left;
    const y = e.clientY - heroWrapper.top - 60; // Position description 60px above the cursor

    gsap.to(".hero_description", {
      x: x,
      y: y,
      duration: 1,
      ease: "expoScale(0.5,7,none)",
    });
  });

  const onMouseEnter = contextSafe(() => {
    gsap.to(".hero_description", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(".hero_description", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });

  return (
    <StyledHeroFrameWrapper
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseOver={onMouseEnter}
      onMouseOut={onMouseLeave}
    >
      <StyledHeroFrame className="hero_frame" style={styles}>
        <StyledFigure>
          <source srcSet={`${imageUrl}.webp`} type="image/webp" />
          <source srcSet={`${imageUrl}.jpg`} type="image/jpeg" />
          <StyledImg src={`${imageUrl}.jpg`} alt={description} />
        </StyledFigure>
      </StyledHeroFrame>
      <StyledDescription className="hero_description">
        {description}
      </StyledDescription>
    </StyledHeroFrameWrapper>
  );
};
