import { gsap, useGSAP } from "../../helpers/gsap";
import { useMediaQuery } from "@uidotdev/usehooks";

import {
  PAHT_ABOUT,
  PAHT_CONTACT,
  PAHT_HOME,
  PAHT_PROJECTS,
} from "../../constants/routes";
import {
  StyledLogo,
  StyledLogoWrapper,
  StyledMenuButton,
  StyledMenuMobile,
  StyledNavbar,
  StyledNavlink,
} from "./Navbar.styled";
import { useState } from "react";

export const Navbar = () => {
  const { contextSafe } = useGSAP();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery("only screen and (max-width: 1024px)");

  const navOptions = [
    { path: PAHT_PROJECTS, title: "Projects" },
    { path: PAHT_ABOUT, title: "About" },
    { path: PAHT_CONTACT, title: "Contact" },
  ];

  const onMouseEnter = contextSafe((text: string, id: string) => {
    gsap.fromTo(
      `#${id}`,
      {
        text: text.split("").reverse().join(""),
        duration: 1,
      },
      {
        text: text,
        duration: 1,
      }
    );
  });

  const toggleMenu = () => {
    setMenuOpen((boolean) => !boolean);
  };

  return (
    <>
      <StyledNavbar>
        <StyledLogoWrapper>
          <StyledLogo
            to={PAHT_HOME}
            id="logo"
            onMouseEnter={() => onMouseEnter("Melissa More", "logo")}
          >
            MELISSA MORE
          </StyledLogo>
        </StyledLogoWrapper>
        {!isMobile && (
          <>
            {navOptions.map((elm) => (
              <StyledNavlink
                key={elm.title}
                to={elm.path}
                id={elm.title}
                onMouseEnter={() => onMouseEnter(elm.title, elm.title)}
              >
                {elm.title}
              </StyledNavlink>
            ))}
          </>
        )}

        {isMobile && (
          <StyledMenuButton onClick={toggleMenu}>menu</StyledMenuButton>
        )}
      </StyledNavbar>
      {isMenuOpen && (
        <StyledMenuMobile>
          {navOptions.map((elm) => (
            <StyledNavlink key={elm.title} to={elm.path} id={elm.title}>
              {elm.title}
            </StyledNavlink>
          ))}
        </StyledMenuMobile>
      )}
    </>
  );
};
