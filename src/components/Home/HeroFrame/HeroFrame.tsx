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
  const heroRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<any>();
  const yTo = useRef<any>();

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo(".hero_description", "x", {
        duration: 0.8,
        ease: "power3",
      });

      yTo.current = gsap.quickTo(".hero_description", "y", {
        duration: 0.8,
        ease: "power3",
      });
    },
    { scope: heroRef }
  );

  const onMouseMove: MouseEventHandler = contextSafe((e) => {
    if (heroRef.current) {
      const { left, top } = heroRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      xTo.current(x);
      yTo.current(y);
    }
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
      style={styles}
      onMouseOver={onMouseEnter}
      onMouseOut={onMouseLeave}
    >
      <StyledHeroFrame className="hero_frame">
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
