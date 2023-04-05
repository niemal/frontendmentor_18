import styled from "styled-components";
import Button from "../Button";
import ClickableWrapper from "../ClickableWrapper";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { QUERIES } from "../constants";

const Wrapper = styled(motion.section)`
  margin-top: 48px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 580px;
  text-align: center;
  z-index: 3;

  @media ${QUERIES.phoneAndSmaller} {
    max-width: calc(100% - 24px);
    margin-top: 20px;
    gap: 24px;
  }
`;

const IllustrationContainer = styled(motion.div)`
  width: 580px;
  height: 434px;

  @media ${QUERIES.phoneAndSmaller} {
    width: calc(100% - 42px);
    height: 234px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const FileIconContainer = styled.div`
  width: 25px;
  height: 25px;
`;

const FileIcon = styled(motion.img)`
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 4;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 5;
`;

const Title = styled.h1`
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
  font-size: ${31 / 16}rem;
  line-height: ${46 / 16}rem;
  color: var(--color-white);

  opacity: ${(p) => (p.showText ? "1" : "0")};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${24 / 16}rem;
    line-height: ${36 / 16}rem;
    max-width: 320px;
  }
`;

const TextDesc = styled.p`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
  font-size: ${16 / 16}rem;
  line-height: ${24 / 16}rem;
  max-width: 484px;

  opacity: ${(p) => (p.showText ? "1" : "0")};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    line-height: ${20 / 16}rem;
    max-width: 300px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: -16px;
  width: max-content;

  @media ${QUERIES.phoneAndSmaller} {
    margin-top: 0px;
  }
`;

const fadeIn = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

const spinIn = {
  initial: { opacity: 0, scale: 0.4 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeIn" },
  },
};

const letterAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.04, duration: 0.4, ease: "easeOut" },
  }),
};

const letterAnimationFast = {
  initial: { y: 20, opacity: 0 },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.02, duration: 0.2, ease: "easeIn" },
  }),
};

const iconsAnimation = {
  initial: { opacity: 0 },
  spread: (custom) => ({
    x: custom.x,
    y: custom.y,
    opacity: 1,
    transition: { duration: 1.6, ease: "easeOut" },
  }),
  float: (custom) => ({
    x: custom.x,
    y: [custom.y - 5, custom.y + 5],
    transition: {
      y: { duration: 7, yoyo: Infinity, ease: "easeInOut" },
    },
  }),
  center: (custom) => ({
    x: 0,
    y: 0,
    opacity: 0,
    rotate: custom.y > 0 ? 90 : -90,
    transition: { duration: 0.38, ease: "easeIn" },
  }),
};

const getRandomPosition = () => {
  const maxWidth = (!isMobile ? 580 : 333) / 2;
  const maxHeight = (!isMobile ? 434 : 234) / 2;
  const x = Math.floor(Math.random() * maxWidth * 2) - maxWidth;
  const y = Math.floor(Math.random() * maxHeight * 2) - maxHeight;
  return { x, y };
};

const FileIconWithAnimation = ({ index, src, alt, ...props }) => {
  const randomPosition = getRandomPosition();
  const controls = useAnimation();

  useEffect(() => {
    const spreadAnimation = async () => {
      await controls.start("spread");
      await controls.start("float");
      await controls.start("center");
    };

    spreadAnimation();
  }, [controls]);

  return (
    <FileIcon
      key={index}
      src={src}
      alt={alt}
      custom={randomPosition}
      variants={iconsAnimation}
      initial="initial"
      animate={controls}
      {...props}
    />
  );
};

function TopSection() {
  const [showFileIcons, setShowFileIcons] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  const fileIcons = Array.from({ length: 20 }, (_, index) => (
    <FileIconWithAnimation
      key={index}
      src={"/frontendmentor_18/file-solid.svg"}
      alt={`file icon ${index}`}
      onAnimationComplete={() => {
        setShowTitle(true);
      }}
    />
  ));

  return (
    <AnimatePresence>
      <Wrapper
        initial="initial"
        animate="animate"
        exit="initial"
        variants={fadeIn}
      >
        <IllustrationContainer
          initial="initial"
          animate="animate"
          variants={spinIn}
          onAnimationComplete={() => {
            setShowFileIcons(true);
          }}
        >
          <Image
            src={"/frontendmentor_18/illustration-intro.png"}
            alt={"illustration intro image"}
          />
          {showFileIcons && fileIcons}
        </IllustrationContainer>
        <ContentWrapper>
          <motion.div>
            <Title showText={showTitle}>
              {showTitle
                ? Array.from(
                    "All your files in one secure location, accessible anywhere."
                  ).map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterAnimation}
                      onAnimationComplete={
                        index === 58
                          ? () => {
                              setShowDesc(true);
                            }
                          : null
                      }
                    >
                      {letter}
                    </motion.span>
                  ))
                : "All your files in one secure location, accessible anywhere."}
            </Title>
          </motion.div>
          <motion.div>
            <TextDesc showText={showDesc}>
              {showDesc
                ? Array.from(
                    "Flylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
                  ).map((letter, index) => (
                    <motion.span
                      key={`desc-${index}`}
                      custom={index}
                      variants={letterAnimationFast}
                    >
                      {letter}
                    </motion.span>
                  ))
                : "Flylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."}
            </TextDesc>
          </motion.div>

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
    </AnimatePresence>
  );
}

export default TopSection;
