import styled from "styled-components";

const galleryPadding = "3rem";
const galleryGap = "6rem";

export const StyledGalleryWrapper = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
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
