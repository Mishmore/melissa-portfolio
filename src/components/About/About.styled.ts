import styled from "styled-components";

export const StyledAboutContainer = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
  height: calc(100vh - 7rem);
`;

export const StyledAboutText = styled.p`
  font-size: 3.5vw;
  position: absolute;
  top: 12vw;
  left: 41.6vw;
  line-height: 1.2;

  @media (max-width: ${(props) => props.theme.desktop}) {
    font-size: 3rem;
    position: initial;
  }
`;

export const StyledAboutPhrase = styled.p`
  position: absolute;
  font-size: 4.8rem;
  left: 58.3vw;
  top: 40vw;

  @media (max-width: ${(props) => props.theme.desktop}) {
    font-size: 2rem;
    position: initial;
  }
`;

export const StyledAboutFigure = styled.figure`
  height: calc(100vh - 12rem);
  width: 50vw;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 3rem;

  @media (max-width: ${(props) => props.theme.desktop}) {
    width: 90vw;
    height: 50vh;
    top: 0;
    transform: translateY(0);
    position: initial;
  }
`;

export const StyledAboutImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
