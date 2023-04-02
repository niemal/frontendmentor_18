import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 72px;
  padding-top: 92px;
  padding-bottom: 284px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  background-color: var(--color-dark-blue-background);
`;

const QuotesIcon = styled.img`
  object-fit: cover;
  position: absolute;
  top: -28px;
  left: -4px;
  width: 45px;
  height: 35px;
`;

const TestiContainer = styled.div`
  position: relative;
`;

const TestiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 24px;
  background-color: var(--color-dark-blue-testi-background);
  border-radius: 4px;
  width: 290px;
  position: relative;
  z-index: 5;
`;

const TestiShadow = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 290px;
  height: 100%;
  background-color: var(--color-white-fade-ultra);
`;

const TestiDesc = styled.span`
  margin-top: 12px;
  font-family: var(--font-secondary);
  font-size: ${12 / 16}rem;
  line-height: ${18 / 16}rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
`;

const TestiAuthorWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const AuthorIconContainer = styled.div`
  width: 25px;
  height: 25px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 50%;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-family: var(--font-secondary);
  font-size: ${12 / 16}rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
`;

const AuthorRole = styled.span`
  font-family: var(--font-secondary);
  font-size: ${10 / 16}rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-white);
`;

function Testimonials() {
  return (
    <Wrapper>
      <TestiContainer>
        <QuotesIcon
          src={"/frontendmentor_18/bg-quotes.png"}
          alt={"quotes image decoration"}
        />
        <TestiWrapper>
          <TestiDesc>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </TestiDesc>

          <TestiAuthorWrapper>
            <AuthorIconContainer>
              <Image
                src={"/frontendmentor_18/profile-1.jpg"}
                alt={"profile image 1"}
              />
            </AuthorIconContainer>

            <AuthorDetails>
              <AuthorName>Satish Patel</AuthorName>
              <AuthorRole>Founder & CEO, Huddle</AuthorRole>
            </AuthorDetails>
          </TestiAuthorWrapper>
        </TestiWrapper>
        <TestiShadow />
      </TestiContainer>

      <TestiContainer>
        <TestiWrapper>
          <TestiDesc>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </TestiDesc>

          <TestiAuthorWrapper>
            <AuthorIconContainer>
              <Image
                src={"/frontendmentor_18/profile-2.jpg"}
                alt={"profile image 2"}
              />
            </AuthorIconContainer>

            <AuthorDetails>
              <AuthorName>Bruce McKenzie</AuthorName>
              <AuthorRole>Founder & CEO, Huddle</AuthorRole>
            </AuthorDetails>
          </TestiAuthorWrapper>
        </TestiWrapper>
        <TestiShadow />
      </TestiContainer>

      <TestiContainer>
        <TestiWrapper>
          <TestiDesc>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </TestiDesc>

          <TestiAuthorWrapper>
            <AuthorIconContainer>
              <Image
                src={"/frontendmentor_18/profile-3.jpg"}
                alt={"profile image 3"}
              />
            </AuthorIconContainer>

            <AuthorDetails>
              <AuthorName>Iva Boyd</AuthorName>
              <AuthorRole>Founder & CEO, Huddle</AuthorRole>
            </AuthorDetails>
          </TestiAuthorWrapper>
        </TestiWrapper>
        <TestiShadow />
      </TestiContainer>
    </Wrapper>
  );
}

export default Testimonials;
