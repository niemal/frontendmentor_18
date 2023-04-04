import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 750px;
  display: flex;
  gap: 96px;
  flex-wrap: wrap;
  z-index: 3;
  margin: 0 auto;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0px 24px;
    max-width: 100%;
    gap: 72px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-top: 132px;
    gap: 94px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  ${(p) => (p.row === 2 ? "margin-top: -28px;" : "")}

  @media ${QUERIES.phoneAndSmaller} {
    gap: 20px;
  }
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

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${18 / 16}rem;
  }
`;

const Desc = styled.span`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: ${12 / 16}rem;
  color: var(--color-white);
  text-align: center;
  margin-top: -12px;
  max-width: 322px;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${14 / 16}rem;
    margin-top: -10px;
  }
`;

const cardVariants = {
  hidden: (xPos) => ({ x: xPos, opacity: 0 }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

function HeroCards() {
  const controls = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleInView = async (inView) => {
    if (inView) {
      await controls[0].start("visible");
      await controls[3].start("visible");
      await controls[2].start("visible");
      await controls[1].start("visible");
    }
  };

  const cardWrappers = [
    {
      content: (
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
      ),
      initialX: -50,
      control: controls[0],
    },
    {
      content: (
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
      ),
      initialX: 50,
      control: controls[1],
    },
    {
      content: (
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
      ),
      initialX: -50,
      control: controls[2],
    },
    {
      content: (
        <CardWrapper row={2}>
          <CardImageContainer>
            <Image
              src={"/frontendmentor_18/icon-any-file.svg"}
              alt={"access anywhere hero image"}
            />
          </CardImageContainer>
          <Title>Store any type of file</Title>
          <Desc>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </Desc>
        </CardWrapper>
      ),
      initialX: 50,
      control: controls[3],
    },
  ];

  useEffect(() => {
    cardWrappers.forEach((card, index) => {
      controls[index].set(cardVariants.hidden(card.initialX));
    });
  }, [controls, cardWrappers]);

  useEffect(() => {
    handleInView(true);
  }, []);

  return (
    <InView as="div" threshold={isMobile ? 0.25 : 0.6} onChange={handleInView}>
      <Wrapper>
        {cardWrappers.map((card, index) => (
          <motion.div
            key={index}
            custom={card.initialX}
            variants={cardVariants}
            initial="hidden"
            animate={card.control}
          >
            {card.content}
          </motion.div>
        ))}
        {/* 
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
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
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
              couple of the security features we allow to help secure your
              files.
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
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
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
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </Desc>
          </CardWrapper> 
          </Wrapper>
          */}
      </Wrapper>
    </InView>
  );
}

export default HeroCards;
