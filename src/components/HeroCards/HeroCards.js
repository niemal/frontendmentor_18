import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 750px;
  display: flex;
  gap: 96px;
  flex-wrap: wrap;
  z-index: 3;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  ${(p) => (p.row === 2 ? "margin-top: -28px;" : "")}
`;

const CardImageContainer = styled.div`
  width: 70px;
  height: 70px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
  font-size: ${16 / 16}rem;
  color: var(--color-white);
`;

const Desc = styled.span`
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  font-size: ${12 / 16}rem;
  color: var(--color-white);
  text-align: center;
  margin-top: -12px;
  max-width: 322px;
`;

function HeroCards() {
  return (
    <Wrapper>
      <CardWrapper>
        <CardImageContainer>
          <Image
            src={"/frontendmentor_18/icon-access-anywhere.svg"}
            alt={"access anywhere hero image"}
          />
        </CardImageContainer>
        <Title>Access your files, anywhere</Title>
        <Desc>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </Desc>
      </CardWrapper>

      <CardWrapper>
        <CardImageContainer>
          <Image
            src={"/frontendmentor_18/icon-security.svg"}
            alt={"access anywhere hero image"}
          />
        </CardImageContainer>
        <Title>Security you can trust</Title>
        <Desc>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </Desc>
      </CardWrapper>

      <CardWrapper row={2}>
        <CardImageContainer>
          <Image
            src={"/frontendmentor_18/icon-collaboration.svg"}
            alt={"access anywhere hero image"}
          />
        </CardImageContainer>
        <Title>Real-time collaboration</Title>
        <Desc>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </Desc>
      </CardWrapper>

      <CardWrapper row={2}>
        <CardImageContainer>
          <Image
            src={"/frontendmentor_18/icon-any-file.svg"}
            alt={"access anywhere hero image"}
          />
        </CardImageContainer>
        <Title>Store any type of file</Title>
        <Desc>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </Desc>
      </CardWrapper>
    </Wrapper>
  );
}

export default HeroCards;
