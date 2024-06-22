import styled from "styled-components";

const galleryPadding = "2vw";

export const StyledGalleryWrapper = styled.div`
  background-color: ${(props) => props.theme.softGreen};
`;

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${galleryPadding};
  flex-shrink: 0;
  flex-wrap: nowrap;
  height: 100vh;
  padding-top: 7rem;
`;

export const StyledGalleryFigure = styled.figure`
  height: 100%;
  width: auto;
  padding-top: ${galleryPadding};
  padding-bottom: ${galleryPadding};
  display: flex;
  flex-shrink: 0;
`;

export const StyledGalleryImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
