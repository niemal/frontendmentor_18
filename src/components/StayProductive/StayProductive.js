import styled, { css } from "styled-components";
import ClickableWrapper from "../ClickableWrapper";
import { hoverSupported } from "../hoverSupported";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 72px;
  padding-top: 82px;
  padding-bottom: 0px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark-blue-background);
`;

const ImageContainer = styled.div`
  width: 600px;
  height: 400px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 500px;
  height: 380px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 484px;
`;

const Title = styled.h1`
  font-family: var(--font-secondary);
  font-size: ${32 / 16}rem;
  line-height: ${40 / 16}rem;
  color: var(--color-white);
  max-width: 280px;
`;

const Desc = styled.span`
  font-family: var(--font-primary);
  font-size: ${14 / 16}rem;
  line-height: ${16 / 16}rem;
  color: var(--color-white);
`;

const LinkWrapper = styled.a`
  padding-bottom: 4px;
  border-bottom: 1px solid var(--color-cyan);
  width: max-content;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-cyan);
  transition: all 0.3s ease-in-out;

  ${hoverSupported(css`
    &:hover {
      gap: 24px;
      color: var(--color-white);
      border-color: var(--color-white);
    }
  `)}
`;

const LinkText = styled.span`
  font-family: var(--font-primary);
  font-size: ${14 / 16}rem;
  color: inherit;

  transition: all 0.3s ease-in-out;
  ${hoverSupported(css`
    ${LinkWrapper}:hover & {
      color: var(--color-white);
    }
  `)}
`;

const LinkIcon = styled.img`
  object-fit: cover;
  width: 20px;
  height: 20px;

  transition: all 0.3s ease-in-out;
  ${hoverSupported(css`
    ${LinkWrapper}:hover & {
      transform: scale(1.4);
    }
  `)}
`;

function StayProductive() {
  return (
    <Wrapper>
      <ImageContainer>
        <Image
          src={"/frontendmentor_18/illustration-stay-productive.png"}
          alt={"stay productive illustration image"}
        />
      </ImageContainer>
      <TextWrapper>
        <Title>Stay productive, wherever you are</Title>
        <Desc>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all your file storage needs.
        </Desc>
        <Desc>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </Desc>

        <ClickableWrapper href={"#"}>
          <LinkWrapper>
            <LinkText>See how Fylo works</LinkText>
            <LinkIcon
              src={"/frontendmentor_18/icon-arrow.svg"}
              alt={"link arrow icon image"}
            />
          </LinkWrapper>
        </ClickableWrapper>
      </TextWrapper>
    </Wrapper>
  );
}

export default StayProductive;
