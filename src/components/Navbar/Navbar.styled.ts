import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: flex;
  padding: 1rem 8rem;
  gap: 1.6rem;
  align-items: center;
  z-index: 10;
  position: relative;
  height: 9.6rem;

  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 500;
`;

export const StyledNavlink = styled(NavLink)`
  &::selection {
    background: #000;
    color: #fff;
  }
`;
