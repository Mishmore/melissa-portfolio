import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

  @media (max-width: ${(props) => props.theme.desktop}) {
    padding: 1rem;
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

  @media (max-width: ${(props) => props.theme.desktop}) {
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

  &::selection {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.defaultBg};
  }

  @media (max-width: ${(props) => props.theme.desktop}) {
    font-size: 1.6rem;
  }
`;
