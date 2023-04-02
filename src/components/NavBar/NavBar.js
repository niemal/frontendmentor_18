import styled, { css } from "styled-components";
import ClickableWrapper from "../ClickableWrapper";
import { hoverSupported } from "../hoverSupported";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 64px;
  padding-top: 60px;
  padding-bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.a`
  text-decoration: none;
  width: 140px;
  height: 52px;
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
`;

const HoverLine = styled.path`
  stroke: var(--color-white);
  stroke-width: 2px;
  fill: none;
  stroke-dasharray: 70;
  stroke-dashoffset: 100;
  transition: all 0.3s ease-in-out;
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
      <ClickableWrapper href={"#"}>
        <LogoContainer>
          <LogoImage
            src={"/frontendmentor_18/logo.svg"}
            alt={"flylo logo image link"}
          />
        </LogoContainer>
      </ClickableWrapper>
      <NavWrapper aria-label={"website navigation menu"}>
        <ClickableWrapper href={"#"}>
          <NavEntry>
            Features
            <SvgContainer>
              <HoverLine d="M0,1 A4,4 0 0,1 8,1 A4,4 0 0,0 16,1 A4,4 0 0,1 24,1 A4,4 0 0,0 32,1 A4,4 0 0,1 40,1 A4,4 0 0,0 48,1 A4,4 0 0,1 50,1" />
            </SvgContainer>
          </NavEntry>
        </ClickableWrapper>
        <ClickableWrapper href={"#"}>
          <NavEntry>
            Team
            <SvgContainer>
              <HoverLine d="M0,1 A4,8 0 0,0 8,1 A4,8 0 0,1 16,1 A4,8 0 0,0 24,1 A4,8 0 0,1 32,1 A4,8 0 0,0 40,1 A4,8 0 0,1 48,1 A4,8 0 0,0 50,1" />
            </SvgContainer>
          </NavEntry>
        </ClickableWrapper>
        <ClickableWrapper href={"#"}>
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
