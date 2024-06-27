import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const galleryPadding = "3rem";
const galleryGap = "6rem";

export const StyledGalleryWrapper = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
  min-height: 100vh;
`;

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${galleryGap};
  flex-shrink: 0;
  flex-wrap: nowrap;
  height: calc(100vh - 7rem);
  padding-top: ${galleryPadding};
  padding-bottom: ${galleryPadding};
  padding-left: ${galleryPadding};
  padding-right: ${galleryPadding};

  @media (max-width: ${breakpoints.laptop.small}) {
    flex-direction: column;
    height: auto;
    gap: 2rem;
    padding: 0;
    min-height: calc(100vh - 5.3rem);
  }
`;

export const StyledGalleryFigure = styled.picture`
  height: 100%;
  width: auto;
  display: flex;
  flex-shrink: 0;
`;

export const StyledGalleryImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
