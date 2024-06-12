import styled from "styled-components";

interface StyledFigureProps {
  width: string | number;
  height: string | number;
  top: string | number;
  left: string | number;
}

export const StyledHeroFrame = styled.div.withConfig({})<StyledFigureProps>`
  position: absolute;
  mix-blend-mode: multiply;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const StyledFigure = styled.figure`
  position: relative;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  object-fit: cover;
`;

export const StyledDescription = styled.figcaption``;
