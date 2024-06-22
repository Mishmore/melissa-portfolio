import { useLayoutEffect, useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "../helpers/gsap";
import { useParams } from "react-router-dom";
import { useLenis } from "../hooks/useLenis";

import {
  StyledGalleryFigure,
  StyledGalleryGallery,
  StyledGalleryImage,
  StyledGalleryWrapper,
} from "../components/Gallery/Gallery.styled";
import { Container } from "../components/Container/Container";
import { Navbar } from "../components/Navbar/Navbar";
import { gallery } from "../constants/gallery";

const Gallery = () => {
  let { id } = useParams();
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

      ScrollTrigger.refresh();

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

      return () => {
        ScrollTrigger.killAll();
      };
    },
    { dependencies: [width, window.innerWidth] }
  );

  useLenis();

  return (
    <Container>
      <Navbar />
      <StyledGalleryWrapper className="gallery-wrapper">
        <StyledGalleryGallery ref={galleryRef}>
          {id &&
            gallery[id].map((elm: string) => (
              <StyledGalleryFigure key={elm}>
                <StyledGalleryImage src={elm} />
              </StyledGalleryFigure>
            ))}
        </StyledGalleryGallery>
      </StyledGalleryWrapper>
    </Container>
  );
};

export default Gallery;
