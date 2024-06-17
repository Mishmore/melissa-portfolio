import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: flex;
  padding: 1.8rem 6rem;
  gap: 4rem;
  align-items: center;
  z-index: 10;
  position: relative;

  background-color: ${(props) => props.theme.beigeAlpha};
  border-bottom: ${(props) => props.theme.darkBeige} solid 1px;
  backdrop-filter: blur(2rem);
  -webkit-backdrop-filter: blur(2rem);
  color: ${(props) => props.theme.brownGray};
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
`;

export const StyledNavlink = styled(NavLink)`
  position: relative;
  text-transform: lowercase;
  font-size: 2rem;

  &::selection {
    background: #000;
    color: #fff;
  }
`;
