import styled from "styled-components";

export const SytledProjectWrapper = styled.div``;

export const StyledProjectImage = styled.img`
  position: absolute;
`;

export const StyledProjectTitle = styled.p<{ id: string }>`
  color: ${(props) => props.theme.beige};
  font-size: 4vw;
  position: absolute;
  max-width: 20vw;
  line-height: 0.9;
`;

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.brown};
  height: 290vw;

  ${SytledProjectWrapper}:nth-child(1) {
    ${StyledProjectImage} {
      width: 40vw;
      top: 20vw;
      left: 8vw;
    }

    ${StyledProjectTitle} {
      top: 30vw;
      left: 52vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(2) {
    ${StyledProjectImage} {
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
    ${StyledProjectImage} {
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
    ${StyledProjectImage} {
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
    ${StyledProjectImage} {
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
