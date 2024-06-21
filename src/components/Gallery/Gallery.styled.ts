import { ReactRef } from "@gsap/react";
import styled from "styled-components";

export const StyledGalleryWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const StyledGalleryGallery = styled.div<{ ref: ReactRef }>`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 2rem;
  height: 100vh;
  width: auto;
`;

export const StyledGalleryFigure = styled.figure`
  height: 90%;
  width: auto;
`;

export const StyledGalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
