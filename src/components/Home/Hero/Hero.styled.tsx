import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

export const StyledHero = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: ${(props) => props.theme.homeBg};
`;

export const StyledHeroWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 218vw;
  height: 127vw;
  transform: translate(-50%, -50%);
  z-index: 1;
  touch-action: none;
  transition: transform 150ms cubic-bezier(0.34, 0.56, 0.64, 1);

  @media (max-width: ${breakpoints.laptop.small}) {
    width: 150vw;
    height: 150vh;
  }
`;
