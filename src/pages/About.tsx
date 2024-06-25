import {
  StyledAboutContainer,
  StyledAboutFigure,
  StyledAboutImg,
  StyledAboutPhrase,
  StyledAboutText,
} from "../components/About/About.styled";
import { Navbar } from "../components/Navbar/Navbar";
import AboutImg from "../assets/about/melissa-hero.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <StyledAboutContainer>
        <StyledAboutFigure>
          <StyledAboutImg src={AboutImg} alt="Melissa's picture" />
        </StyledAboutFigure>
        <StyledAboutText>
          Hi, I am <span id="text-melissa">Melissa,</span> an interior designer
          turned archviz artist that loves creating images.
        </StyledAboutText>
        <StyledAboutPhrase>“God is in the details”</StyledAboutPhrase>
      </StyledAboutContainer>
    </>
  );
};

export default About;
