import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../../styles/breakpoints";

export const StyledNavbar = styled.nav`
  display: flex;
  padding: 1.8rem 6rem;
  gap: 4rem;
  align-items: center;
  z-index: 10;
  position: sticky;
  width: 100%;
  top: 0;

  background-color: ${(props) => props.theme.navbarBg};
  border-bottom: ${(props) => props.theme.navbarStroke} solid 1px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: ${(props) => props.theme.text};

  @media (max-width: ${breakpoints.laptop.small}) {
    padding: 1.4rem 1.8rem;
    max-height: 5.3rem;
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: start;
  justify-content: start;
`;

export const StyledLogo = styled(NavLink)`
  font-size: 2.2rem;
  font-weight: 500;
  text-transform: lowercase;

  @media (max-width: ${breakpoints.laptop.small}) {
    font-size: 1.8rem;
  }
`;

export const StyledNavlink = styled(NavLink)`
  position: relative;
  text-transform: lowercase;
  font-size: 2rem;
  min-width: 8rem;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;

  &::selection {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.defaultBg};
  }

  @media (max-width: ${breakpoints.laptop.small}) {
    font-size: 3rem;
  }
`;

export const StyledMenuButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-weight: 500;
  font-size: 1.8rem;
`;

export const StyledMenuMobile = styled.div`
  width: 100vw;
  height: calc(100vh - 5.3rem);
  position: fixed;
  padding: 1.4rem 1.8rem;
  background-color: ${(props) => props.theme.navbarBg};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  left: 0;
  top: 5.3rem;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  padding-top: 5rem;
  opacity: 0;
  visibility: hidden;
`;
