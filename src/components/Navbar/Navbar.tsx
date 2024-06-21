import { gsap, useGSAP, Observer } from "../../helpers/gsap";

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
import { useRef } from "react";

interface Navbar {
  hideOnScroll?: boolean;
}

export const Navbar = ({ hideOnScroll = true }: Navbar) => {
  const { contextSafe } = useGSAP();
  const navRef = useRef<HTMLElement>(null);

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

  useGSAP(() => {
    if (hideOnScroll) {
      Observer.create({
        id: "navbar-scroll",
        target: window,
        type: "wheel",
        onUp: () => {
          if (navRef?.current) {
            gsap.to(navRef.current, {
              y: 0,
              position: "fixed",
              ease: "power3.out",
              duration: 0.8,
            });
          }
        },
        onDown: () => {
          if (navRef?.current) {
            gsap.to(navRef.current, {
              y: "-100%",
              ease: "power3.out",
              duration: 0.8,
            });
          }
        },
      });
    }
  });

  return (
    <StyledNavbar ref={navRef}>
      <StyledLogoWrapper>
        <StyledLogo
          to={PAHT_HOME}
          id="logo"
          onMouseEnter={() => onMouseEnter("Melissa More", "logo")}
        >
          MELISSA MORE
        </StyledLogo>
      </StyledLogoWrapper>
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
    </StyledNavbar>
  );
};
