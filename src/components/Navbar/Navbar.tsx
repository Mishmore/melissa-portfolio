import { NavLink } from "react-router-dom";
import { StyledLogoWrapper, StyledNavbar } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to="/work">Work</NavLink>
      <StyledLogoWrapper>
        <NavLink to="/">Melissa</NavLink>
      </StyledLogoWrapper>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </StyledNavbar>
  );
};
