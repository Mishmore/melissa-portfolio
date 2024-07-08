import { gsap, useGSAP } from "../helpers/gsap";
import { socialMedia } from "../constants/socialMedia";

import {
  StyledContactText,
  StyledContactTextWrapper,
  StyledContactWrapper,
  StyledContactLink,
  StyledFlex,
} from "../components/Contact/Contact.styles";
import { Navbar } from "../components/Navbar/Navbar";
import { UnderlineHover } from "../components/UnderlineHover/UnderlineHover";
import { PAHT_CONTACT } from "../constants/routes";
import { useGAPage } from "../analytics/hooks/useGA";

const Contact = () => {
  useGAPage({ page: PAHT_CONTACT, title: "Contact" });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(".contact_text", {
      fontKerning: "none",
      x: "-2vw",
      opacity: 0,
    });

    tl.to(".contact_text", {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.6,
    });
  });

  return (
    <>
      <Navbar />
      <StyledContactWrapper>
        <StyledContactTextWrapper>
          <StyledContactText className="contact_text">
            Let’s work together!
          </StyledContactText>
          <StyledFlex>
            <StyledContactText className="contact_text">
              +49 176 50285982
            </StyledContactText>
            <StyledContactText className="contact_text">
              melmore416@gmail.com
            </StyledContactText>
          </StyledFlex>
          <span></span>
          <StyledFlex>
            <StyledContactLink
              href={socialMedia.behance}
              rel="noopener noreferrer"
              target="_blank"
              className="contact_text"
            >
              <UnderlineHover>Behance</UnderlineHover>
            </StyledContactLink>
            <StyledContactLink
              href={socialMedia.instagram}
              rel="noopener noreferrer"
              target="_blank"
              className="contact_text"
            >
              <UnderlineHover>Instagram</UnderlineHover>
            </StyledContactLink>
          </StyledFlex>
        </StyledContactTextWrapper>
      </StyledContactWrapper>
    </>
  );
};

export default Contact;
