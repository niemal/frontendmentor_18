import styled, { css } from "styled-components";
import { hoverSupported } from "../hoverSupported";
import ClickableWrapper from "../ClickableWrapper";
import EmailSignUp from "../EmailSignUp";
import { QUERIES } from "../constants";

const Wrapper = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 160px 60px;
  padding-left: 94px;

  background-color: var(--color-dark-blue-footer-background);

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
  }
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
  align-items: start;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 32px;
  }
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
  font-size: ${(p) => (p.first ? 14 : 12) / 16}rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  max-width: 285px;
`;

const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${QUERIES.tabletAndSmaller} {
    align-self: center;
    width: 160px;
  }
`;

const NavEntry = styled.a`
  text-decoration: none;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-regular);
  font-size: ${12 / 16}rem;
  color: var(--color-white);
  border-radius: 4px;
  width: max-content;

  transition: all 0.3s ease-in-out;
  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: 4px;
  }

  ${hoverSupported(css`
    &:hover {
      color: var(--color-cyan);
    }
  `)}
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    align-self: center;
  }
`;

const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 8px;
`;

const Link = styled.a`
  border-radius: 50%;
  border: 1px solid var(--color-white);
  text-decoration: none;
  width: 35px;
  height: 35px;

  transition: all 0.3s ease-in-out;
  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }

  ${hoverSupported(css`
    &:hover {
      border-color: var(--color-cyan);
    }
  `)}
`;

function Footer() {
  return (
    <Wrapper>
      <EmailSignUp />

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
          <EntryValue first={true}>
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

        <SocialWrapper aria-label={"social media button images"}>
          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <Link>
              <SocialIcon
                src={"/frontendmentor_18/facebook.svg"}
                alt={"facebook button image"}
              />
            </Link>
          </ClickableWrapper>

          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <Link>
              <SocialIcon
                src={"/frontendmentor_18/twitter.svg"}
                alt={"twitter button image"}
              />
            </Link>
          </ClickableWrapper>

          <ClickableWrapper
            href={"#"}
            onClick={() => {
              window.location = "#";
            }}
          >
            <Link>
              <SocialIcon
                src={"/frontendmentor_18/instagram.svg"}
                alt={"instagram button image"}
              />
            </Link>
          </ClickableWrapper>
        </SocialWrapper>
      </BottomRow>
    </Wrapper>
  );
}

export default Footer;
