import { useLayoutEffect, useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "../helpers/gsap";
import { useLenis } from "../hooks/useLenis";

import {
  StyledGalleryFigure,
  StyledGalleryGallery,
  StyledGalleryImage,
  StyledGalleryWrapper,
} from "../components/Gallery/Gallery.styled";
import { Container } from "../components/Container/Container";
import { Navbar } from "../components/Navbar/Navbar";

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (galleryRef.current) {
      resizeObserver.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        resizeObserver.unobserve(galleryRef.current);
      }
    };
  }, []);

  const getScrollAmount = () => {
    return -(width - window.innerWidth);
  };

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tween = gsap.to(galleryRef.current, {
          x: getScrollAmount,
          duration: 3,
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: ".gallery-wrapper",
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          animation: tween,
          invalidateOnRefresh: true,
        });
      });
    },
    { dependencies: [width, window.innerWidth] }
  );

  useLenis();

  return (
    <Container>
      <Navbar hideOnScroll={false} />
      <StyledGalleryWrapper className="gallery-wrapper">
        <StyledGalleryGallery ref={galleryRef}>
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
    </Container>
  );
};

export default Gallery;
