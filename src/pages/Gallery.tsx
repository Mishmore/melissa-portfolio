import { useEffect, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { gsap, useGSAP, ScrollTrigger, Draggable } from "../helpers/gsap";
import { useLenis } from "lenis/react";

import { gallery } from "../constants/gallery";

import {
  StyledGallery,
  StyledGalleryFigure,
  StyledGalleryImg,
  StyledGalleryWrapper,
} from "../components/Gallery/Gallery.styled";
import { Navbar } from "../components/Navbar/Navbar";
import { PAHT_PROJECTS_DETAIL } from "../constants/routes";
import { useGAPage } from "../analytics/hooks/useGA";

const Gallery = () => {
  let { id } = useParams();
  const carouselRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis(ScrollTrigger.update);

  useGAPage({ page: PAHT_PROJECTS_DETAIL, title: "Projects detail" });

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
      let clamper: (value: number) => number;
      let dragRatio: number;

      const horizontalScroll = ScrollTrigger.create({
        trigger: carouselRef.current,
        start: "bottom bottom",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: carouselRef.current,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true,
      });

      ScrollTrigger.addEventListener("refresh", () => {
        clamper = gsap.utils.clamp(
          horizontalScroll.start + 1,
          horizontalScroll.end - 1
        );

        if (carouselRef?.current) {
          dragRatio = carouselRef.current.offsetWidth / window.innerWidth;
        }
      });

      Draggable.create(".proxy", {
        type: "x",
        trigger: carouselRef.current,
        allowContextMenu: true,
        onPress() {
          clamper || ScrollTrigger.refresh();
          this.startScroll = horizontalScroll.scroll();
        },
        onDrag() {
          horizontalScroll.scroll(
            clamper(this.startScroll - (this.x - this.startX) * dragRatio)
          );
        },
      })[0];
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
              <source srcSet={elm} type="image/webp" />
              <source srcSet={elm} type="image/jpeg" />
              <StyledGalleryImg src={elm} className="gallery-img" />
            </StyledGalleryFigure>
          ))}
      </StyledGallery>

      <div className="proxy"></div>
    </StyledGalleryWrapper>
  );
};

export default Gallery;
