import styled from "styled-components";
import NavBar from "../NavBar";
import TopSection from "../TopSection";
import MidSection from "../MidSection";
import Footer from "../Footer";

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: var(--color-dark-blue-intro);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function MainBody() {
  return (
    <Wrapper role={"main"}>
      <NavBar />
      <TopSection />
      <MidSection />
      <Footer />
    </Wrapper>
  );
}

export default MainBody;
