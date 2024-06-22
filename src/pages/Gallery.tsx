import { useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { gsap, useGSAP, ScrollTrigger } from "../helpers/gsap";

import { gallery } from "../constants/gallery";

import {
  StyledGallery,
  StyledGalleryImg,
} from "../components/Gallery/Gallery.styled";
import { Container } from "../components/Container/Container";
import { Navbar } from "../components/Navbar/Navbar";

const Gallery = () => {
  let { id } = useParams();
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const getScrollAmount = (): number => {
      if (!carouselRef.current?.scrollWidth) return 0;
      return -(carouselRef.current?.scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(carouselRef.current, {
      x: getScrollAmount,
      ease: "none",
    });

    ScrollTrigger.clearScrollMemory();

    ScrollTrigger.create({
      trigger: carouselRef.current,
      start: "center center",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: carouselRef.current,
      scrub: 1,
      animation: tween,
      invalidateOnRefresh: true,
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    };
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <Container>
      <Navbar />

      <StyledGallery ref={carouselRef}>
        {id &&
          gallery[id].map((elm: string) => (
            <StyledGalleryImg src={elm} key={elm} />
          ))}
      </StyledGallery>
    </Container>
  );
};

export default Gallery;
