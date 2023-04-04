import styled from "styled-components";
import { isMobile } from "react-device-detect";
import HeroCards from "../HeroCards";
import StayProductive from "../StayProductive";
import Testimonials from "../Testimonials";
import { QUERIES } from "../constants";

const Wrapper = styled.section`
  position: relative;
  background-color: var(--color-dark-blue-background);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 132px;
  width: 100%;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: -330px;
  left: 0px;
  width: 100%;
  z-index: 2;

  @media ${QUERIES.tabletAndSmaller} {
    top: -230px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

function MidSection() {
  return (
    <Wrapper>
      <BackgroundContainer>
        <Image
          src={`/frontendmentor_18/bg-curvy-${
            isMobile ? "mobile" : "desktop"
          }.svg`}
          alt={"background decoration"}
        />
      </BackgroundContainer>

      <HeroCards />
      <StayProductive />
      <Testimonials />
    </Wrapper>
  );
}

export default MidSection;
