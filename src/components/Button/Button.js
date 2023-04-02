import styled from "styled-components";
import { useInterval } from "../useInterval";
import { useState } from "react";

const Wrapper = styled.button`
  position: relative;
  text-decoration: none;
  font-weight: var(--font-weight-bold);
  text-align: center;
  width: 220px;
  padding: 12px;
  border-radius: 24px;
  color: var(--color-white);
  user-select: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: inherit;
    transition: opacity 600ms linear;
  }
  &::before {
    background: radial-gradient(
      circle at top left,
      ${(p) => p.gradient[0]},
      ${(p) => p.gradient[1]},
      ${(p) => p.gradient[2]}
    );
    opacity: ${(p) => (p.index % 2 === 0 ? 1 : 0)};
  }
  &::after {
    background: radial-gradient(
      circle at top left,
      ${(p) => p.gradient2[0]},
      ${(p) => p.gradient2[1]},
      ${(p) => p.gradient2[2]}
    );
    opacity: ${(p) => (p.index % 2 === 0 ? 0 : 1)};
  }

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: 4px;
  }
`;

const GlassDecor = styled.div`
  position: absolute;
  top: 3px;
  width: 188px;
  left: 16px;
  height: 6px;
  background-color: var(--color-white-fade);
  border-radius: 24px;
  backdrop-filter: blur(10px);
`;

const ContentWrapper = styled.span`
  z-index: 3;
`;

function Button({ children, ...props }) {
  const rotation = [
    ["var(--color-cyan)", "var(--color-cyan)", "var(--color-blue)"],
    ["var(--color-cyan)", "var(--color-blue)", "var(--color-blue)"],
    ["var(--color-blue)", "var(--color-blue)", "var(--color-blue)"],
    ["var(--color-blue)", "var(--color-blue)", "var(--color-cyan)"],
    ["var(--color-blue)", "var(--color-cyan)", "var(--color-cyan)"],
    ["var(--color-cyan)", "var(--color-cyan)", "var(--color-cyan)"],
  ];
  const [toggle, setToggle] = useState(true);
  const [index, setIndex] = useState(0);

  useInterval(() => {
    if (toggle) {
      setIndex((index + 1) % (rotation.length - 1));
    } else {
      setIndex(2);
    }
  }, 200);

  useInterval(() => {
    setToggle((t) => !t);
  }, 2000);

  return (
    <Wrapper
      gradient={rotation[index]}
      gradient2={rotation[(index + 1) % rotation.length]}
      index={index}
      {...props}
    >
      <GlassDecor />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
}

export default Button;
