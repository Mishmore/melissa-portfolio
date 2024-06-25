import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const SytledProjectWrapper = styled.div``;

export const StyledProjectFigure = styled.figure`
  position: absolute;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledProjectTitle = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 3.5vw;
  position: absolute;
  max-width: 20vw;
  cursor: pointer;

  line-height: 1.1;
  letter-spacing: -0.027em;
  font-weight: 500;

  div::selection {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.defaultBg};
  }

  @media (max-width: ${breakpoints.laptop.small}) {
    font-size: 2rem;
  }
`;

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
  height: 270vw;

  ${SytledProjectWrapper}:nth-child(1) {
    ${StyledProjectFigure} {
      width: 38vw;
      top: 12vw;
      left: 8vw;
    }

    ${StyledProjectTitle} {
      top: 24vw;
      left: 52vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(2) {
    ${StyledProjectFigure} {
      width: 34vw;
      top: 60vw;
      right: 8vw;
    }

    ${StyledProjectTitle} {
      top: 90vw;
      left: 38vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(3) {
    ${StyledProjectFigure} {
      width: 38vw;
      top: 111vw;
      left: 8vw;
    }

    ${StyledProjectTitle} {
      top: 130vw;
      left: 52vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(4) {
    ${StyledProjectFigure} {
      width: 36vw;
      top: 165vw;
      right: 8vw;
    }

    ${StyledProjectTitle} {
      top: 189vw;
      left: 40vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(5) {
    ${StyledProjectFigure} {
      width: 38vw;
      top: 211vw;
      left: 8vw;
    }

    ${StyledProjectTitle} {
      top: 240vw;
      left: 53vw;
    }
  }
`;
