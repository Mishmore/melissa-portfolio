import styled from "styled-components";

export const StyledHeroFrameWrapper = styled.div`
  position: relative;
`;

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

export const StyledDescription = styled.figcaption`
  opacity: 0;
  color: #fff;
  padding: 1rem 0.8rem;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
`;
