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

const projects = [
  {
    image: CafeConBorges,
    title: "Café con Borges.",
  },
  {
    image: PerfectStorm,
    title: "Perfect Storm.",
  },
  {
    image: Buque,
    title: "Buque.",
  },
  {
    image: Orvay,
    title: "Orvay.",
  },
  {
    image: HaumsInWald,
    title: "Haums in Wald.",
  },
];

const Projects = () => {
  return (
    <Container>
      <Navbar />

      <StyledContainer>
        {projects.map((elm) => (
          <SytledProjectWrapper key={elm.title}>
            <StyledProjectImage src={elm.image} />
            <StyledProjectTitle>{elm.title}</StyledProjectTitle>
          </SytledProjectWrapper>
        ))}
      </StyledContainer>
    </Container>
  );
};

export default Projects;
