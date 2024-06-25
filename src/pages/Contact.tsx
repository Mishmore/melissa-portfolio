import {
  StyledContactText,
  StyledContactTextWrapper,
  StyledContactWrapper,
  StyledContactLink,
  StyledFlex,
} from "../components/Contact/Contact.styles";
import { Navbar } from "../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <StyledContactWrapper>
        <StyledContactTextWrapper>
          <StyledContactText>Let’s work together!</StyledContactText>
          <StyledFlex>
            <StyledContactText>+49 176 50285982</StyledContactText>
            <StyledContactText>melmore416@gmail.com</StyledContactText>
          </StyledFlex>
          <StyledFlex>
            <StyledContactLink>Behance</StyledContactLink>
            <StyledContactLink>Instagram</StyledContactLink>
          </StyledFlex>
        </StyledContactTextWrapper>
      </StyledContactWrapper>
    </>
  );
};

export default Contact;
