import { useRef } from "react";
import SplitType from "split-type";
import { gsap, useGSAP } from "../helpers/gsap";

import {
  StyledAboutContainer,
  StyledAboutFigure,
  StyledAboutImg,
  StyledAboutPhrase,
  StyledAboutText,
} from "../components/About/About.styled";
import { Navbar } from "../components/Navbar/Navbar";
import AboutImg from "../assets/about/melissa-hero.jpg";
import AboutImgWebp from "../assets/about/melissa-hero.webp";
import { UnderlineHover } from "../components/UnderlineHover/UnderlineHover";

const About = () => {
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const aboutPhraseRef = useRef<HTMLParagraphElement>(null);
  const aboutImgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (aboutTextRef.current && aboutPhraseRef.current) {
      // Title fade animation
      const aboutText = new SplitType(aboutTextRef.current, {
        types: "words,lines",
      });

      // Title fade animation
      const aboutPhrase = new SplitType(aboutPhraseRef.current, {
        types: "words,lines",
      });

      tl.set(aboutImgRef.current, {
        opacity: 0,
      });

      tl.set(aboutText.lines, {
        fontKerning: "none",
        x: "-3vw",
        opacity: 0,
      });

      tl.set(aboutPhrase.lines, {
        fontKerning: "none",
        x: "-3vw",
        opacity: 0,
      });

      tl.to(aboutImgRef.current, {
        duration: 3,
        opacity: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      tl.to(
        aboutText.lines,
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.5,
          ease: "power3.out",
        },
        1
      );

      tl.to(
        aboutPhrase.lines,
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        },
        2
      );
    }
  });

  return (
    <>
      <Navbar />
      <StyledAboutContainer>
        <StyledAboutFigure>
          <source srcSet={AboutImgWebp} type="image/webp" />
          <source srcSet={AboutImg} type="image/jpeg" />
          <StyledAboutImg
            ref={aboutImgRef}
            src={AboutImg}
            alt="Melissa's picture"
          />
        </StyledAboutFigure>
        <StyledAboutText ref={aboutTextRef}>
          Hi, I am <span id="about_name">Melissa,</span> an interior designer
          turned <UnderlineHover>archviz</UnderlineHover> artist that loves
          creating images.
        </StyledAboutText>
        <StyledAboutPhrase ref={aboutPhraseRef}>
          “God is in the details” <br />
          <span>(my motto)</span>
        </StyledAboutPhrase>
      </StyledAboutContainer>
    </>
  );
};

export default About;
