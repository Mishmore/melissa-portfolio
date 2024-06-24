import styled from "styled-components";

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

export const StyledProjectTitle = styled.p<{ id: string }>`
  color: ${(props) => props.theme.text};
  font-size: 4vw;
  position: absolute;
  max-width: 20vw;
  line-height: 1.2;
`;

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
  height: 280vw;

  ${SytledProjectWrapper}:nth-child(1) {
    ${StyledProjectFigure} {
      width: 40vw;
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
      width: 33vw;
      top: 68vw;
      right: 8vw;
    }

    ${StyledProjectTitle} {
      top: 100vw;
      left: 40vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(3) {
    ${StyledProjectFigure} {
      width: 50vw;
      top: 130vw;
      left: 8vw;
    }

    ${StyledProjectTitle} {
      top: 145vw;
      left: 63vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(4) {
    ${StyledProjectFigure} {
      width: 40vw;
      top: 180vw;
      left: 8vw;
    }

    ${StyledProjectTitle} {
      top: 205vw;
      left: 52vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(5) {
    ${StyledProjectFigure} {
      width: 33vw;
      top: 230vw;
      right: 8vw;
    }

    ${StyledProjectTitle} {
      top: 240vw;
      left: 38vw;
    }
  }
`;
