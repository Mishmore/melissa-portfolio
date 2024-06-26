import { useRef, useState } from "react";
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

export const Navbar = () => {
  const { contextSafe } = useGSAP();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const menuMobileRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isMobile = useMediaQuery("only screen and (max-width: 1023px)");

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

  useGSAP(
    () => {
      if (menuMobileRef.current) {
        gsap.to(menuMobileRef.current, {
          autoAlpha: isMenuOpen ? 1 : 0,
          duration: 0.6,
          ease: "power2.out",
        });

        gsap.to(menuButtonRef.current, {
          text: isMenuOpen ? "close" : "menu",
        });
      }
    },
    { dependencies: [isMenuOpen] }
  );

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
          <StyledMenuButton onClick={toggleMenu} ref={menuButtonRef}>
            menu
          </StyledMenuButton>
        )}
      </StyledNavbar>

      {isMobile && (
        <StyledMenuMobile ref={menuMobileRef}>
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
