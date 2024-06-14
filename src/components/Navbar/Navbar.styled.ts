import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  padding: 1rem 2.4rem;
  gap: 1.2rem;
  align-items: center;
  z-index: 10;
  position: relative;

  background: rgba(255, 255, 255, 0.23);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img``;
