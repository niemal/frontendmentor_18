import styled from "styled-components";
import Button from "../Button";
import ClickableWrapper from "../ClickableWrapper";
import { useState, useRef } from "react";

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: var(--color-dark-blue-intro);
  border-radius: 4px;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 666px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.18);
`;

const Title = styled.label`
  margin-top: 12px;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
  font-size: ${24 / 16}rem;
  color: var(--color-white);
`;

const Desc = styled.span`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: ${12 / 16}rem;
  max-width: 532px;
  color: var(--color-white);
  text-align: center;
`;

const SignUpRow = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
`;

const Input = styled.input`
  outline: none;
  border: 3px solid
    ${(p) => (p.error ? "var(--color-light-red)" : "transparent")};
  background-color: var(--color-white);
  padding: 12px 32px;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: ${12 / 16}rem;
  color: var(--color-dark-blue-background);
  transition: all 0.3s ease-in-out;
  border-radius: 24px;
  width: 333px;

  &::placeholder {
    color: var(--color-dark-blue-intro);
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  color: var(--color-light-red);
  font-size: ${12 / 16}rem;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
`;

function EmailSignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef(null);

  const validateEmail = () => {
    if (
      !emailRef.current.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setErrorMessage("Please enter a valid email address");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <Wrapper>
      <Title htmlFor={"email-input"}>Get early access today</Title>
      <Desc>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </Desc>

      <SignUpRow>
        <Input
          ref={emailRef}
          id={"email-input"}
          aria-describedby={"email-error"}
          error={errorMessage.length > 0}
          placeholder={"email@example.com"}
        />
        <ErrorMessage id={"email-error"} aria-live={"polite"}>
          {errorMessage}
        </ErrorMessage>
        <ClickableWrapper
          onClick={() => {
            validateEmail();
          }}
        >
          <Button>Get Started For Free</Button>
        </ClickableWrapper>
      </SignUpRow>
    </Wrapper>
  );
}

export default EmailSignUp;
