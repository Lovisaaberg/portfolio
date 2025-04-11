import { Menu } from "../components/Navigation/Menu"
import { Typewriter } from "react-simple-typewriter"
import styled from "styled-components"
import Lottie from "lottie-react"
import chevronArrow from "../assets/animations/chevronDown.json"

const HeaderContainer = styled.div`
  background-color: #171824;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 40px 60px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Title = styled.h1`
  font-size: var(--font-size-h1-mob);
  color: var(--headline-color);
  font-family: var(--font-family-headlines);
  text-align: left;
  line-height: 1.5;
  margin-top: 40px;

  @media (min-width: 768px) {
    font-size: var(--font-size-h1-desktop);
  }
`

const SubTitle = styled.p`
  font-family: var(--font-family-text);
  font-size: var(--font-size-text-mob);
  color: #a189ff;
  align-self: center;

  @media (min-width: 768px) {
    margin-left: 280px;
  }
`

const CodeText = styled.span`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-headlines);
  white-space: pre;
  color: #2b2b2b;
  text-align: left;
  margin-left: 0;
  margin-right: 800px;
  display: block;

  @media (max-width: 1025px) {
    display: none;
  }
`

const IntroText = styled.p`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  color: var(--text-color-primary);
  margin-top: 350px;

  @media (min-width: 768px) {
    margin-top: 60px;
  }
`

const AnimationWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <HeaderContainer id="header">
      <Menu scrollToSection={scrollToSection} />
      <CodeText>{`
      <body>
        <header> 
            <h1>
`}</CodeText>

      <TitleWrapper>
        <Title>LOVISA ÅBERG</Title>
        <SubTitle>//FRONTEND DEVELOPER + UX-DESIGNER</SubTitle>
      </TitleWrapper>

      <CodeText>{`
            </h1>
       </header>
    </body>`}</CodeText>

      <IntroText>
        <Typewriter
          words={[
            "Welcome to my portfolio!",
            "Building accessible web solutions",
            "Check out my work",
          ]}
          cursor
          cursorStyle="|"
          typeSpeed={200}
          deleteSpeed={100}
          delaySpeed={1000}
          loop={true}
        />
      </IntroText>

      <AnimationWrapper onClick={() => scrollToSection("projects")}>
        <Lottie animationData={chevronArrow} loop={true} />
      </AnimationWrapper>
    </HeaderContainer>
  )
}
