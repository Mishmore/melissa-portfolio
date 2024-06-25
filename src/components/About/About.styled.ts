import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const StyledAboutContainer = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
  height: calc(100vh - 7rem);

  @media (max-width: ${breakpoints.laptop.small}) {
    min-height: calc(100vh - 5.3rem);
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 3rem;
    align-items: center;
  }
`;

export const StyledAboutText = styled.p`
  font-size: 3.5vw;
  position: absolute;
  top: 30vh;
  left: 41.6vw;
  max-width: 50vw;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.027em;

  @media (max-width: ${breakpoints.laptop.small}) {
    font-size: 3.6rem;
    position: initial;
    max-width: fit-content;
  }
`;

export const StyledAboutPhrase = styled.p`
  position: absolute;
  font-size: 2.8vw;
  left: 58.3vw;
  top: 60vh;

  @media (max-width: ${breakpoints.laptop.small}) {
    font-size: 2rem;
    position: initial;
    align-self: flex-end;
    padding-top: 3rem;
  }
`;

export const StyledAboutFigure = styled.figure`
  height: calc(100vh - 12rem);
  width: 50vw;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 3rem;

  @media (max-width: ${breakpoints.laptop.small}) {
    width: 100%;
    max-height: 50vh;
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
