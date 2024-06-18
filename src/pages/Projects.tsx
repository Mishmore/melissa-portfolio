import SplitType from "split-type";

import { Container } from "../components/Container/Container";
import { Navbar } from "../components/Navbar/Navbar";
import {
  StyledProjectImage,
  StyledProjectTitle,
  StyledContainer,
  SytledProjectWrapper,
  StyledProjectFigure,
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
    title: "Café con Borges",
    id: "cafe_con_borges",
  },
  {
    image: PerfectStorm,
    title: "Perfect Storm",
    id: "perfect_storm",
  },
  {
    image: Buque,
    title: "Buque",
    id: "buque",
  },
  {
    image: Orvay,
    title: "Orvay",
    id: "orvay",
  },
  {
    image: HaumsInWald,
    title: "Haus im Wald",
    id: "haus_im_wald",
  },
];

const Projects = () => {
  useGSAP(() => {
    projects.map((elm, index) => {
      const projectTitle = new SplitType(`#${elm.id}`, {
        types: "words,lines",
      });

      gsap.set(projectTitle.lines, {
        fontKerning: "none",
      });

      gsap.effects.textLeftIn(projectTitle.lines);

      gsap.fromTo(
        `.project_image_${index}`,
        {
          opacity: 0,
          y: "4vw",
        },
        {
          duration: 3,
          opacity: 1,
          delay: 0.2,
          y: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: `.project_image_${index}`,
            start: "top 90%",
            toggleActions: "restart none resume reset",
          },
        }
      );
    });
  });

  return (
    <Container>
      <Navbar />

      <StyledContainer>
        {projects.map((elm, index) => (
          <SytledProjectWrapper key={elm.title}>
            <StyledProjectFigure className={`project_image_${index}`}>
              <StyledProjectImage src={elm.image} />
            </StyledProjectFigure>
            <StyledProjectTitle id={elm.id}>{elm.title}</StyledProjectTitle>
          </SytledProjectWrapper>
        ))}
      </StyledContainer>
    </Container>
  );
};

export default Projects;
