import styled from "styled-components";
import Button from "../Button";
import ClickableWrapper from "../ClickableWrapper";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

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
`;

const IllustrationContainer = styled(motion.div)`
  width: 580px;
  height: 434px;
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

const fadeIn = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

const spinIn = {
  initial: { opacity: 0, scale: 0.4 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
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
    transition: { duration: 0.5, ease: "easeOut" },
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const getRandomPosition = () => {
  const maxWidth = 580 / 2;
  const maxHeight = 434 / 2;
  const x = Math.floor(Math.random() * maxWidth * 2) - maxWidth;
  const y = Math.floor(Math.random() * maxHeight * 2) - maxHeight;
  return { x, y };
};

function TopSection() {
  const [iconAnimation, setIconAnimation] = useState("initial");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconAnimation("spread");
    }, 1000); // Trigger animation after IllustrationContainer animation has ended

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const fileIcons = Array.from({ length: 20 }, (_, index) => {
    const randomPosition = getRandomPosition();
    return (
      <FileIcon
        key={index}
        src={"/frontendmentor_18/file-solid.svg"}
        alt={`file icon ${index}`}
        custom={randomPosition}
        variants={iconsAnimation}
        initial="initial"
        animate={iconAnimation}
        onAnimationComplete={(definition) => {
          if (definition === "spread") {
            setTimeout(() => {
              setIconAnimation("center");
            }, 1500); // Pause for 1 second before pulling icons back to the center
          }
        }}
      />
    );
  });

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
        >
          <Image
            src={"/frontendmentor_18/illustration-intro.png"}
            alt={"illustration intro image"}
          />
          {fileIcons}
        </IllustrationContainer>
        <ContentWrapper>
          <motion.div>
            <Title>
              {Array.from(
                "All your files in one secure location, accessible anywhere"
              ).map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterAnimation}
                >
                  {letter}
                </motion.span>
              ))}
            </Title>
          </motion.div>
          <motion.div>
            <TextDesc>
              {Array.from(
                "Flylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
              ).map((letter, index) => (
                <motion.span
                  key={`desc-${index}`}
                  custom={index}
                  variants={letterAnimationFast}
                >
                  {letter}
                </motion.span>
              ))}
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
