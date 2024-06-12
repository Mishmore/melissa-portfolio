import { useEffect, useState } from "react";
import {
  StyledHeroFrame,
  StyledFigure,
  StyledImg,
  StyledDescription,
} from "./HeroFrame.styled";

interface HeroFrame {
  imageUrl: string;
  description: string;
  styles: {
    width: string | number;
    height: string | number;
    top: string | number;
    left: string | number;
  };
}

export const HeroFrame = ({ imageUrl, styles }: HeroFrame) => {
  return (
    <StyledHeroFrame className="hero_frame" {...styles}>
      <StyledFigure>
        <StyledImg src={imageUrl} />
        <StyledDescription>{}</StyledDescription>
      </StyledFigure>
    </StyledHeroFrame>
  );
};
