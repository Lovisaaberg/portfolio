import styled from "styled-components"
import Lottie from "lottie-react"
import chevronDown from "../assets/animations/chevronDown.json"

const HeaderContainer = styled.div`
  background-color: #171824;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  align-items: center;
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
    margin-left: 345px;
  }
`

const CodeText = styled.span`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-headlines);
  white-space: pre;
  color: #332940;
  text-align: left;
  margin-left: 0;
  margin-right: 800px;
  display: block;

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
  cursor: pointer;
`

export const Header = ({ scrollToRef }) => {
  const handleScroll = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <HeaderContainer>
      <CodeText>{`
      <body>
        <header>
            <h1>
`}</CodeText>

      <TitleWrapper>
        <Title>LOVISA ÅBERG</Title>
        <SubTitle>//FRONTEND DEVELOPER, UX-DESIGNER</SubTitle>
      </TitleWrapper>

      <CodeText>{`
            </h1>
       </header>
    </body>`}</CodeText>

      <IntroText>Code. UX. Accessibility.</IntroText>

      <AnimationWrapper onClick={handleScroll}>
        <Lottie animationData={chevronDown} loop={true} />
      </AnimationWrapper>
    </HeaderContainer>
  )
}
