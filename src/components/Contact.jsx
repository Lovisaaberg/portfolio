import styled from "styled-components"
import ProfileImg from "/me.png"
import chevronArrow from "../assets/animations/chevronArrow.json"
import Lottie from "lottie-react"
import emailIcon from "../assets/icons/email.png"
import phoneIcon from "../assets/icons/telephone.png"
import linkeIndInIcon from "../assets/icons/linkedIn.png"
import gitHubIcon from "../assets/icons/gitHub.png"

const ContactSection = styled.section`
  padding: 100px 40px 120px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
  color: #000000;
`

const ContactTitle = styled.h2`
  font-size: var(--font-size-h2-mob);
  font-family: var(--font-family-headlines);
  margin-bottom: 60px;

  @media (min-width: 768px) {
    font-size: var(--font-size-h2-desktop);
    margin-bottom: 80px;
  }
`

const ProfilePicture = styled.img`
  width: 173px;
`

const AnimationWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: rotate(180deg);
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
`

const EmailInfo = styled.a`
  display: flex;
  align-items: center;
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  cursor: pointer;
  margin-top: 30px;
  text-decoration: none;
  color: inherit;

  img {
    margin-right: 8px;
  }
`
const PhoneInfo = styled.a`
  display: flex;
  align-items: center;
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  color: inherit;

  img {
    margin-right: 8px;
  }
`

const LinksWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`

const LinkedInLink = styled.a`
  margin-top: 30px;

  &:hover {
    transform: scale(1.05);
  }
`

const GitHubLink = styled.a`
  margin-top: 30px;

  &:hover {
    transform: scale(1.05);
  }
`

const ConnectText = styled.p`
  font-size: var(--font-size-large);
  font-family: var(--font-family-text);
  margin-top: 30px;
`

export const Contact = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <ContactSection>
      <ContactTitle>&lt;CONTACT ME&gt;</ContactTitle>

      <ContactWrapper>
        <ProfilePicture src={ProfileImg} alt="Profile picture" />

        <EmailInfo href="mailto:lovisa.aaberg@gmail.com" target="_blank">
          <img src={emailIcon} alt="Email icon" width="30px" height="30px" />
          Lovisa.aaberg@gmail.com
        </EmailInfo>

        <PhoneInfo href="tel:+46 768 69 74 74">
          <img
            src={phoneIcon}
            alt="Telephone icon"
            width="30px"
            height="30px"
          />
          +46 768 69 74 74
        </PhoneInfo>
      </ContactWrapper>

      <LinksWrapper>
        <LinkedInLink
          href="https://www.linkedin.com/in/lovisaaberg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkeIndInIcon}
            alt="LinkedIn icon"
            width="40px"
            height="40px"
          />
        </LinkedInLink>

        <GitHubLink
          href="https://github.com/Lovisaaberg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubIcon} width="40px" height="40px" />
        </GitHubLink>
      </LinksWrapper>

      <ConnectText>Let's Connect!</ConnectText>

      <AnimationWrapper onClick={() => scrollToSection("header")}>
        <Lottie animationData={chevronArrow} loop={true} />
      </AnimationWrapper>
    </ContactSection>
  )
}
