import styled from "styled-components";

export const StyledHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const StyledHeroWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 370rem;
  height: 230rem;
  transform: translate(-50%, -50%);
  z-index: 1;
  touch-action: none;
  transition: transform 500ms cubic-bezier(0.34, 0.56, 0.64, 1);
`;
