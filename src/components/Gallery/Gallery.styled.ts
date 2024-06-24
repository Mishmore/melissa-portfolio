import styled from "styled-components";

const galleryPadding = "2vw";
const galleryGap = "4vw";

export const StyledGalleryWrapper = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
`;

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${galleryGap};
  flex-shrink: 0;
  flex-wrap: nowrap;
  height: 100vh;
  padding-top: 7rem;
  padding-top: calc(${galleryPadding} + 7rem);
  padding-bottom: ${galleryPadding};
  padding-left: ${galleryPadding};
  padding-right: ${galleryPadding};
`;

export const StyledGalleryFigure = styled.figure`
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
