import { gsap, useGSAP, ScrollTrigger } from "../helpers/gsap";
import SplitType from "split-type";

import { Navbar } from "../components/Navbar/Navbar";
import {
  StyledProjectTitle,
  StyledContainer,
  SytledProjectWrapper,
  StyledProjectFigure,
} from "../components/Projects/Projects.styled";

import Buque from "../assets/projects-page/buque_1.jpg";
import CafeConBorges from "../assets/projects-page/cafe_con_borges_1.jpg";
import HaumsInWald from "../assets/projects-page/haums_im_wald_1.jpg";
import Orvay from "../assets/projects-page/orvay_5.jpg";
import PerfectStorm from "../assets/projects-page/perfect_storm_1.jpg";

import { ProjectImage } from "../components/Projects/ProjectImage";
import { useNavigate } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useLenis } from "lenis/react";

const PROJECT_TITLE_PREFIX = "project_title";
const PROJECT_FIGURE_PREFIX = "project_figure";

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
  const navigate = useNavigate();
  const lenis = useLenis(ScrollTrigger.update);

  useGSAP(() => {
    projects.map((elm) => {
      // Title fade animation
      const projectTitle = new SplitType(`#${PROJECT_TITLE_PREFIX}_${elm.id}`, {
        types: "words,lines",
      });

      gsap.set(projectTitle.lines, {
        fontKerning: "none",
      });

      gsap.effects.textLeftIn(projectTitle.lines);

      // Project figure fade animation
      const figureTarget = `#${PROJECT_FIGURE_PREFIX}_${elm.id}`;
      const animation = gsap.fromTo(
        figureTarget,
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
        }
      );

      ScrollTrigger.create({
        trigger: figureTarget,
        start: "top 90%",
        animation: animation,
        toggleActions: "restart none resume reset",
      });
    });

    return () => {
      lenis?.scrollTo(0, { force: true, immediate: true });
    };
  });

  const openProject = (id: string) => {
    navigate(id);
  };

  useEffect(() => ScrollTrigger.refresh(), [lenis]);

  // Update scroll once view is loaded to show scrollbar
  useLayoutEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <>
      <Navbar />
      <StyledContainer>
        {projects.map((elm) => (
          <SytledProjectWrapper key={elm.title}>
            <StyledProjectFigure
              className="project_figure"
              id={`${PROJECT_FIGURE_PREFIX}_${elm.id}`}
              onClick={() => openProject(elm.id)}
            >
              <ProjectImage src={elm.image} />
            </StyledProjectFigure>
            <StyledProjectTitle
              id={`${PROJECT_TITLE_PREFIX}_${elm.id}`}
              className="project_title"
              onClick={() => openProject(elm.id)}
            >
              {elm.title}
            </StyledProjectTitle>
          </SytledProjectWrapper>
        ))}
      </StyledContainer>
    </>
  );
};

export default Projects;
