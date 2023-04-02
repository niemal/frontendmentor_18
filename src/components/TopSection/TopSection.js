import styled from "styled-components";
import Button from "../Button";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.section`
  margin-top: 48px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 580px;
  text-align: center;
`;

const IllustrationContainer = styled.div`
  width: 580px;
  height: 434px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 5;
`;

const Title = styled.h1`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: ${31 / 16}rem;
  line-height: ${46 / 16}rem;
  color: var(--color-white);
`;

const TextDesc = styled.p`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;
  max-width: 484px;
`;

const ButtonWrapper = styled.div`
  margin-top: -16px;
  width: max-content;
`;

function TopSection() {
  return (
    <Wrapper>
      <IllustrationContainer>
        <Image
          src={"/frontendmentor_18/illustration-intro.png"}
          alt={"illustration intro image"}
        />
      </IllustrationContainer>
      <ContentWrapper>
        <Title>
          All your files in one secure location, accessible anywhere
        </Title>
        <TextDesc>
          Flylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </TextDesc>

        <ButtonWrapper>
          <ClickableWrapper
            onClick={() => {
              window.location = "#";
            }}
          >
            <Button>Get Started</Button>
          </ClickableWrapper>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default TopSection;
