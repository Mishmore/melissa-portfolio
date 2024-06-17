import SplitType from "split-type";

import { Container } from "../components/Container/Container";
import { Navbar } from "../components/Navbar/Navbar";
import {
  StyledProjectImage,
  StyledProjectTitle,
  StyledContainer,
  SytledProjectWrapper,
} from "../components/Projects/Projects.styled";

import Buque from "../assets/projects-page/buque_2.jpg";
import CafeConBorges from "../assets/projects-page/cafe_con_borges_1.jpg";
import HaumsInWald from "../assets/projects-page/haums_im_wald_1.jpg";
import Orvay from "../assets/projects-page/orvay_4.jpg";
import PerfectStorm from "../assets/projects-page/perfect_storm_1.jpg";

import { gsap, useGSAP } from "../helpers/gsap";
const projects = [
  {
    image: CafeConBorges,
    title: "Café con Borges.",
    id: "cafe_con_borges",
  },
  {
    image: PerfectStorm,
    title: "Perfect Storm.",
    id: "perfect_storm",
  },
  {
    image: Buque,
    title: "Buque.",
    id: "buque",
  },
  {
    image: Orvay,
    title: "Orvay.",
    id: "orvay",
  },
  {
    image: HaumsInWald,
    title: "Haums in Wald.",
    id: "haums_in_wald",
  },
];

const Projects = () => {
  useGSAP(() => {
    projects.map((elm) => {
      const projectTitle = new SplitType(`#${elm.id}`, {
        types: "words,lines",
      });
      const words = projectTitle.words;

      gsap.set(projectTitle.lines, {
        overflow: "hidden",
        fontKerning: "none",
      });

      gsap.effects.textSwipeIn(words);
    });
  });

  return (
    <Container>
      <Navbar />

      <StyledContainer>
        {projects.map((elm) => (
          <SytledProjectWrapper key={elm.title}>
            <StyledProjectImage src={elm.image} />
            <StyledProjectTitle id={elm.id}>{elm.title}</StyledProjectTitle>
          </SytledProjectWrapper>
        ))}
      </StyledContainer>
    </Container>
  );
};

export default Projects;
