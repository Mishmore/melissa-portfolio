import {
  StyledLogoWrapper,
  StyledNavbar,
  StyledNavlink,
} from "./Navbar.styled";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavlink to="/work">Work</StyledNavlink>
      <StyledLogoWrapper>
        <StyledNavlink to="/">melissa more</StyledNavlink>
      </StyledLogoWrapper>
      <StyledNavlink to="/about">About</StyledNavlink>
      <StyledNavlink to="/contact">Contact</StyledNavlink>
    </StyledNavbar>
  );
};
