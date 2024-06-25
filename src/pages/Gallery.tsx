import { useEffect, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { gsap, useGSAP, ScrollTrigger } from "../helpers/gsap";
import { useLenis } from "lenis/react";

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
  const lenis = useLenis(ScrollTrigger.update);

  useGSAP(() => {
    const getScrollAmount = (): number => {
      if (!carouselRef.current?.scrollWidth) return 0;
      return -(carouselRef.current?.scrollWidth - window.innerWidth);
    };

    gsap.from(".gallery-img", {
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      stagger: 0.2,
      ease: "power1.out",
    });

    const tween = gsap.to(carouselRef.current, {
      x: getScrollAmount,
      ease: "none",
    });

    let mm = gsap.matchMedia();

    mm.add(`(min-width: 1024px)`, () => {
      ScrollTrigger.create({
        trigger: carouselRef.current,
        start: "bottom bottom",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: carouselRef.current,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true,
      });
    });

    return () => {
      lenis?.scrollTo(0, { force: true, immediate: true });
    };
  });

  useEffect(() => ScrollTrigger.refresh(), [lenis]);

  // Update scroll once view is loaded to show scrollbar
  useLayoutEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
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
