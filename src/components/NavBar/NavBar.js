import styled, { css } from "styled-components";
import ClickableWrapper from "../ClickableWrapper";
import { hoverSupported } from "../hoverSupported";
import { QUERIES } from "../constants";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 64px;
  padding-top: 60px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 20px;
    padding-top: 24px;
  }
`;

const LogoContainer = styled.a`
  text-decoration: none;
  width: 140px;
  height: 52px;
  border-radius: 4px;

  transition: all 0.3s ease-in-out;
  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: 4px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 80px;
    height: 32px;
  }
`;

const LogoImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const NavWrapper = styled.nav`
  display: flex;
  gap: 48px;
  margin-top: -10px;
  margin-right: 4px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 24px;
  }
`;

const HoverLine = styled.path`
  stroke: var(--color-white);
  stroke-width: 2px;
  fill: none;
  stroke-dasharray: 70;
  stroke-dashoffset: 100;
  transition: all 0.3s ease-in-out;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const NavEntry = styled.a`
  position: relative;
  text-decoration: none;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  font-size: ${12 / 16}rem;
  width: max-content;
  transition: all 0.3s ease-in-out;
  border-radius: 4px;

  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: 4px;
  }

  ${hoverSupported(css`
    &:hover ${HoverLine} {
      stroke-dashoffset: 0;
      stroke: var(--color-cyan);
    }
    &:hover {
      color: var(--color-cyan);
    }
  `)}
`;

const SvgContainer = styled.svg`
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  overflow: visible;
`;

function NavBar() {
  return (
    <Wrapper>
      <ClickableWrapper
        href={"/frontendmentor_18/"}
        onClick={() => {
          window.location = "/frontendmentor_18/";
        }}
      >
        <LogoContainer>
          <LogoImage
            src={"/frontendmentor_18/logo.svg"}
            alt={"flylo logo image link"}
          />
        </LogoContainer>
      </ClickableWrapper>
      <NavWrapper aria-label={"website navigation menu"}>
        <ClickableWrapper
          href={"#"}
          onClick={() => {
            window.location = "#";
          }}
        >
          <NavEntry>
            Features
            <SvgContainer>
              <HoverLine d="M0,1 A4,4 0 0,1 8,1 A4,4 0 0,0 16,1 A4,4 0 0,1 24,1 A4,4 0 0,0 32,1 A4,4 0 0,1 40,1 A4,4 0 0,0 48,1 A4,4 0 0,1 50,1" />
            </SvgContainer>
          </NavEntry>
        </ClickableWrapper>
        <ClickableWrapper
          href={"#"}
          onClick={() => {
            window.location = "#";
          }}
        >
          <NavEntry>
            Team
            <SvgContainer>
              <HoverLine d="M0,1 A4,8 0 0,0 8,1 A4,8 0 0,1 16,1 A4,8 0 0,0 24,1 A4,8 0 0,1 32,1 A4,8 0 0,0 40,1 A4,8 0 0,1 48,1 A4,8 0 0,0 50,1" />
            </SvgContainer>
          </NavEntry>
        </ClickableWrapper>
        <ClickableWrapper
          href={"#"}
          onClick={() => {
            window.location = "#";
          }}
        >
          <NavEntry>
            Sign In
            <SvgContainer>
              <HoverLine d="M0,1 A8,4 0 0,1 8,1 A8,4 0 0,0 16,1 A8,4 0 0,1 24,1 A8,4 0 0,0 32,1 A8,4 0 0,1 40,1 A8,4 0 0,0 48,1 A8,4 0 0,1 50,1" />
            </SvgContainer>
          </NavEntry>
        </ClickableWrapper>
      </NavWrapper>
    </Wrapper>
  );
}

export default NavBar;
