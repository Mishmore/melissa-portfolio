import { useRef } from "react";
import { gsap, useGSAP } from "../../helpers/gsap";
import { StyledProjectImage } from "./Projects.styled";

interface ProjectImage {
  src: string;
}

export const ProjectImage = ({ src }: ProjectImage) => {
  const { contextSafe } = useGSAP();
  const selfRef = useRef(null);

  // Scale animation on hover
  const onMouseEnter = contextSafe(() => {
    gsap.to(selfRef.current, {
      scale: 1.04,
      ease: "power1.out",
      duration: 1,
    });
  });

  // Scale animation on hover
  const onMouseLeave = contextSafe(() => {
    gsap.to(selfRef.current, {
      scale: 1,
      ease: "power1.out",
      duration: 1,
    });
  });

  return (
    <StyledProjectImage
      ref={selfRef}
      src={src}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};
