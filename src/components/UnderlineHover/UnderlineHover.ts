import styled from "styled-components";

export const UnderlineHover = styled.span`
  width: min-content;

  &::before {
    content: "";
    background-color: #000;
    height: 0.09em;
    left: 0;
    position: absolute;
    bottom: -0.1em;
    width: 100%;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 1s cubic-bezier(0.22, 0.61, 0.36, 1),
      background-color 1s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
