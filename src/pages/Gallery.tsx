import { useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { gsap, useGSAP, ScrollTrigger } from "../helpers/gsap";

import { gallery } from "../constants/gallery";

import {
  StyledGallery,
  StyledGalleryFigure,
  StyledGalleryImg,
  StyledGalleryWrapper,
} from "../components/Gallery/Gallery.styled";
import { Navbar } from "../components/Navbar/Navbar";

const Gallery = () => {
  let { id } = useParams();
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const getScrollAmount = (): number => {
      if (!carouselRef.current?.scrollWidth) return 0;
      return -(carouselRef.current?.scrollWidth - window.innerWidth);
    };

    gsap.utils.toArray<Element>(".gallery-img").map((img) => {
      gsap.from(img, {
        opacity: 0,
        duration: 3,
        delay: 0.2,
        stagger: 1,
        ease: "power4.out",
      });
    });

    const tween = gsap.to(carouselRef.current, {
      x: getScrollAmount,
      ease: "none",
    });

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
      window.history.scrollRestoration = "manual";
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  // Update scroll once view is loaded to show scrollbar
  useLayoutEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <StyledGalleryWrapper>
      <Navbar />

      <StyledGallery ref={carouselRef}>
        {id &&
          gallery[id].map((elm: string) => (
            <StyledGalleryFigure key={elm}>
              <StyledGalleryImg src={elm} className="gallery-img" />
            </StyledGalleryFigure>
          ))}
      </StyledGallery>
    </StyledGalleryWrapper>
  );
};

export default Gallery;
