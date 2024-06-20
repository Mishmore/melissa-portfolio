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
  gap: 2rem;
  flex-wrap: nowrap;
  height: 100vh;
  flex-shrink: 0;
`;

export const StyledGalleryFigure = styled.figure`
  height: 90%;
  min-width: 20vw;
`;

export const StyledGalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
