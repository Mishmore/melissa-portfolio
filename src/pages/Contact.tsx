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

const Contact = () => {
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
              Behance
            </StyledContactLink>
            <StyledContactLink
              href={socialMedia.instagram}
              rel="noopener noreferrer"
              target="_blank"
              className="contact_text"
            >
              Instagram
            </StyledContactLink>
          </StyledFlex>
        </StyledContactTextWrapper>
      </StyledContactWrapper>
    </>
  );
};

export default Contact;
