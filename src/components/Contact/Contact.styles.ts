import styled from "styled-components";

export const StyledContactWrapper = styled.div`
  background-color: ${(props) => props.theme.defaultBg};
  height: calc(100vh - 7rem);
  min-height: 70rem;
`;

export const StyledContactTextWrapper = styled.div`
  position: relative;
  padding-left: 12rem;
  display: flex;
  flex-direction: column;
  gap: 3.5vw;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContactText = styled.p`
  font-size: 3.5vw;
  line-height: 1.2;
`;

export const StyledContactLink = styled.p`
  font-size: 3.5vw;
  line-height: 1.2;
`;
