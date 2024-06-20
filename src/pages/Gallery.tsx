import { useRef } from "react";
import { gsap, useGSAP } from "../helpers/gsap";
import { useLenis } from "../hooks/useLenis";

import {
  StyledGalleryFigure,
  StyledGalleryGallery,
  StyledGalleryImage,
  StyledGalleryWrapper,
} from "../components/Gallery/Gallery.styled";

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (galleryRef?.current) {
        const galleryWidth = galleryRef.current.offsetWidth;
        const scrollAmount = galleryWidth - window.innerWidth;

        gsap.to(galleryRef.current, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-wrapper",
            start: "top top",
            end: "+=" + scrollAmount,
            scrub: true,
            pin: true,
          },
        });
      }
    },
    { dependencies: [galleryRef] }
  );

  useLenis();

  return (
    <StyledGalleryWrapper className="gallery-wrapper">
      <StyledGalleryGallery ref={galleryRef} className="gallery">
        <StyledGalleryFigure>
          <StyledGalleryImage src="/gallery/buque/buque_1.jpg" />
        </StyledGalleryFigure>
        <StyledGalleryFigure>
          <StyledGalleryImage src="/gallery/buque/buque_2.jpg" />
        </StyledGalleryFigure>
        <StyledGalleryFigure>
          <StyledGalleryImage src="/gallery/buque/buque_2.jpg" />
        </StyledGalleryFigure>
      </StyledGalleryGallery>
    </StyledGalleryWrapper>
  );
};

export default Gallery;
