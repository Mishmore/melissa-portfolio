import styled from "styled-components";

const StyledHeroFrame = styled.div``;

const StyledFigure = styled.figure``;

const StyledImg = styled.img``;

const StyledDescription = styled.div``;

interface HeroFrame {
  imageUrl: string;
  description: string;
}

export const HeroFrame = ({ imageUrl }: HeroFrame) => {
  return (
    <StyledHeroFrame>
      <StyledFigure>
        <StyledImg src={imageUrl} />
      </StyledFigure>

      <StyledDescription>
        <span>&#11044;</span>
      </StyledDescription>
    </StyledHeroFrame>
  );
};
