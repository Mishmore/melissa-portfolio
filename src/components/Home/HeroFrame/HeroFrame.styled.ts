import styled from "styled-components";

export const StyledHeroFrameWrapper = styled.div`
  position: absolute;
`;

export const StyledHeroFrame = styled.div`
  position: absolute;
  mix-blend-mode: multiply;
`;

export const StyledFigure = styled.picture`
  position: relative;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  object-fit: cover;
`;

export const StyledDescription = styled.figcaption`
  opacity: 0;
  color: ${(props) => props.theme.defaultBg};
  text-align: left;
  font-size: 1.6rem;
  max-width: 50%;
  position: absolute;
  text-align: center;
  line-height: 1.2;
  font-weight: 500;
`;
