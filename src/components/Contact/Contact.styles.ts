import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const StyledContactWrapper = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
  height: calc(100vh - 7rem);
  min-height: 70rem;

  *::selection {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.defaultBg};
  }

  @media (max-width: ${breakpoints.laptop.small}) {
    height: calc(100vh - 5.3rem);
    min-height: fit-content;
  }
`;

export const StyledContactTextWrapper = styled.div`
  position: relative;
  padding-left: 12rem;
  display: flex;
  flex-direction: column;
  gap: 3.5vw;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: ${breakpoints.laptop.small}) {
    position: initial;
    transform: translateY(0);
    padding: 3rem;
    gap: 4rem;
    padding-top: 5rem;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContactText = styled.p`
  font-size: clamp(5rem, 3.5vw, 10rem);
  line-height: 1;
  letter-spacing: -0.027em;
  font-weight: 500;

  @media (max-width: ${breakpoints.laptop.small}) {
    font-size: 3.2rem;
  }
`;

export const StyledContactLink = styled.a`
  font-size: clamp(5rem, 3.5vw, 10rem);
  line-height: 1;
  letter-spacing: -0.027em;
  font-weight: 500;

  @media (max-width: ${breakpoints.laptop.small}) {
    font-size: 3.2rem;
  }
`;
