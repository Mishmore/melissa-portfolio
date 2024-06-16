import styled from "styled-components";

export const SytledProjectWrapper = styled.div``;

export const StyledProjectImage = styled.img`
  position: absolute;
`;

export const StyledProjectTitle = styled.p`
  color: ${(props) => props.theme.beige};
  font-size: 6vw;
  position: absolute;
  max-width: 30vw;
  line-height: 6vw;
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
      top: 24vw;
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
      top: 95vw;
      left: 32vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(3) {
    ${StyledProjectImage} {
      width: 50vw;
      top: 130vw;
      left: 8vw;
    }

    ${StyledProjectTitle} {
      top: 140vw;
      left: 65vw;
    }
  }

  ${SytledProjectWrapper}:nth-child(4) {
    ${StyledProjectImage} {
      width: 40vw;
      top: 180vw;
      left: 8vw;
    }

    ${StyledProjectTitle} {
      top: 190vw;
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
      left: 25vw;
    }
  }
`;
