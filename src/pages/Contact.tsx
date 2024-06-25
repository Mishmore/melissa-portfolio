import {
  StyledContactText,
  StyledContactTextWrapper,
  StyledContactWrapper,
  StyledContactLink,
  StyledFlex,
} from "../components/Contact/Contact.styles";
import { Navbar } from "../components/Navbar/Navbar";
import { socialMedia } from "../constants/socialMedia";

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
            <StyledContactLink
              href={socialMedia.behance}
              rel="noopener noreferrer"
              target="_blank"
            >
              Behance
            </StyledContactLink>
            <StyledContactLink
              href={socialMedia.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </StyledContactLink>
          </StyledFlex>
        </StyledContactTextWrapper>
      </StyledContactWrapper>
    </>
  );
};

export default Contact;
