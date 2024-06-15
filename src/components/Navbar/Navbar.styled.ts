import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: flex;
  padding: 4rem 8rem 2.5rem;
  gap: 1.6rem;
  align-items: center;
  z-index: 10;
  position: relative;

  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: grayscale(100%) blur(5px);
  -webkit-backdrop-filter: grayscale(100%) blur(5px);
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
`;

export const StyledLogoWrapper = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 500;
  text-transform: lowercase;
`;

export const StyledNavlink = styled(NavLink)`
  position: relative;
  text-transform: uppercase;

  &::selection {
    background: #000;
    color: #fff;
  }

  &::before {
    content: "";
    background-color: #000;
    height: 0.2rem;
    left: 0;
    position: absolute;
    bottom: 0;
    width: 100%;

    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1),
      background-color 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
