import { gsap, useGSAP } from "../../helpers/gsap";

import {
  PAHT_ABOUT,
  PAHT_CONTACT,
  PAHT_HOME,
  PAHT_PROJECTS,
} from "../../constants/routes";
import {
  StyledLogo,
  StyledLogoWrapper,
  StyledNavbar,
  StyledNavlink,
} from "./Navbar.styled";

export const Navbar = () => {
  const { contextSafe } = useGSAP();

  const onMouseEnter = contextSafe(() => {
    gsap.fromTo(
      "#logo",
      {
        text: "MORE MELISSA",
        duration: 1,
      },
      {
        text: "MELISSA MORE",
        duration: 1,
      }
    );
  });

  return (
    <StyledNavbar>
      <StyledLogoWrapper>
        <StyledLogo to={PAHT_HOME} id="logo" onMouseEnter={onMouseEnter}>
          MELISSA MORE
        </StyledLogo>
      </StyledLogoWrapper>
      <StyledNavlink to={PAHT_PROJECTS}>Projects</StyledNavlink>
      <StyledNavlink to={PAHT_ABOUT}>About</StyledNavlink>
      <StyledNavlink to={PAHT_CONTACT}>Contact</StyledNavlink>
    </StyledNavbar>
  );
};
