import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";
import {
  StyledLogo,
  StyledLogoWrapper,
  StyledNavbar,
  StyledNavlink,
} from "./Navbar.styled";

gsap.registerPlugin(useGSAP, TextPlugin);

export const Navbar = () => {
  const { contextSafe } = useGSAP();

  const onMouseEnter = contextSafe(() => {
    gsap.fromTo(
      "#logo",
      {
        text: "more melissa",
        duration: 1,
      },
      {
        text: "melissa more",
        duration: 1,
      }
    );
  });

  return (
    <StyledNavbar>
      <StyledLogoWrapper>
        <StyledLogo to="/" id="logo" onMouseEnter={onMouseEnter}>
          melissa more
        </StyledLogo>
      </StyledLogoWrapper>
      <StyledNavlink to="/work">Work</StyledNavlink>
      <StyledNavlink to="/about">About</StyledNavlink>
      <StyledNavlink to="/contact">Contact</StyledNavlink>
    </StyledNavbar>
  );
};
