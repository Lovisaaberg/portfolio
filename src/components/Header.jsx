import styled from "styled-components"
import ButtonComponent from "../components/Navigation/Button"
import Lottie from "lottie-react"
import chevronDown from "../assets/animations/chevronDown.json"

const HeaderContainer = styled.div`
  background-color: #171824;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

// const Menu = styled.ul`
//   list-style: none;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   font-family: var(--font-family-headlines);
//   font-size: 18px;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `

const Title = styled.h1`
  font-size: var(--font-size-h1-mob);
  color: var(--headline-color);
  font-family: var(--font-family-headlines);
  text-align: left;
  line-height: 1.5;
  margin-left: 80px;
  margin-top: 60px;

  @media (min-width: 768px) {
    font-size: var(--font-size-h1-desktop);
  }
`

const MyName = styled.p`
  font-family: var(--font-family-text);
  font-size: var(--font-size-text-mob);
  color: #a189ff;
  align-self: flex-start;
  margin-left: 80px;
`

const CodeText = styled.span`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-headlines);
  white-space: pre;
  color: #444444;
  margin-bottom: 20px;
  text-align: left;
  margin-right: 250px;

  @media (max-width: 767px) {
    display: none;
  }
`

const IntroText = styled.p`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  color: var(--text-color-primary);
  margin: 30px;
  margin-top: auto;
`

const AnimationWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <HeaderContainer>
      <CodeText>{`
      <body>
        <header>
            <h1>
`}</CodeText>
      <Title>FRONTEND DEVELOPER.</Title>
      <MyName>//LOVISA ÅBERG</MyName>
      <CodeText>{`
            </h1>
       </header>
    </body>`}</CodeText>

      <IntroText>
        I bridge code & UX-Design to build accessible, user-friendly
        experiences.
      </IntroText>

      <ButtonComponent
        label="Contact"
        onClick={() => scrollToSection("contact")}
        bgColor="#5D38F2"
        hoverColor="#8D72F8"
      />

      <AnimationWrapper>
        <Lottie animationData={chevronDown} loop={true} />{" "}
      </AnimationWrapper>
    </HeaderContainer>
  )
}
