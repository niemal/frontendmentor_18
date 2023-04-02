import styled, { css } from "styled-components";
import { hoverSupported } from "../hoverSupported";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 160px 60px;
  padding-left: 94px;

  background-color: var(--color-dark-blue-footer-background);
`;

const LogoContainer = styled.div`
  width: 140px;
  height: 50px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RowEntry = styled.div`
  display: flex;
  gap: 24px;
`;

const InfoIconContainer = styled.div`
  width: 12px;
  height: 12px;
`;

const InfoIcon = styled.img`
  object-fit: cover;
  width: 100%;
`;

const EntryValue = styled.span`
  font-family: var(--font-primary);
  font-size: ${13 / 16}rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  max-width: 285px;
`;

const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavEntry = styled.a`
  text-decoration: none;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: ${14 / 16}rem;
  color: var(--color-white);
  border-radius: 4px;

  transition: all 0.3s ease-in-out;
  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <LogoContainer>
        <Image src={"/frontendmentor_18/logo.svg"} alt={"logo footer image"} />
      </LogoContainer>

      <BottomRow>
        <RowEntry>
          <InfoIconContainer>
            <InfoIcon
              src={"/frontendmentor_18/icon-location.svg"}
              alt={"location footer image"}
            />
          </InfoIconContainer>
          <EntryValue>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </EntryValue>
        </RowEntry>

        <EntryWrapper>
          <RowEntry>
            <InfoIconContainer>
              <InfoIcon
                src={"/frontendmentor_18/icon-phone.svg"}
                alt={"phone footer image"}
              />
            </InfoIconContainer>
            <EntryValue>+1-543-123-4567</EntryValue>
          </RowEntry>

          <RowEntry>
            <InfoIconContainer>
              <InfoIcon
                src={"/frontendmentor_18/icon-email.svg"}
                alt={"email footer image"}
              />
            </InfoIconContainer>
            <EntryValue>example@fylo.com</EntryValue>
          </RowEntry>
        </EntryWrapper>

        <EntryWrapper as={"nav"} aria-label={"footer navigation menu #2"}>
          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <NavEntry>About Us</NavEntry>
          </ClickableWrapper>

          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <NavEntry>Jobs</NavEntry>
          </ClickableWrapper>

          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <NavEntry>Press</NavEntry>
          </ClickableWrapper>

          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <NavEntry>Blog</NavEntry>
          </ClickableWrapper>
        </EntryWrapper>

        <EntryWrapper as={"nav"} aria-label={"footer navigation menu #1"}>
          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <NavEntry>Contact Us</NavEntry>
          </ClickableWrapper>

          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <NavEntry>Terms</NavEntry>
          </ClickableWrapper>

          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <NavEntry>Privacy</NavEntry>
          </ClickableWrapper>
        </EntryWrapper>
      </BottomRow>
    </Wrapper>
  );
}

export default Footer;
