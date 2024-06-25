import styled from "styled-components";

export const StyledHeroFrameWrapper = styled.div`
  position: relative;
`;

export const StyledHeroFrame = styled.div`
  position: absolute;
  mix-blend-mode: multiply;
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
  color: ${(props) => props.theme.beige};
  padding: 1rem 0.8rem;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  font-size: 1.4rem;
`;
