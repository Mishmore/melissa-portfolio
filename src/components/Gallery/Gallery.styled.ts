import styled from "styled-components";

export const StyledGalleryWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${(props) => props.theme.softGreen};
`;

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StyledGalleryImg = styled.img`
  height: 100vh;
`;
