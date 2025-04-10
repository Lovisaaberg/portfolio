import styled from "styled-components"
import ProfileImg from "/me.png"
import chevronArrow from "../assets/animations/chevronArrow.json"
import Lottie from "lottie-react"
import emailIcon from "../assets/icons/email.png"

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

const ContactWrapper = styled.p`
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
`

const EmailInfo = styled.a`
  display: flex;
  align-items: center;
  font-size: var(--font-size-text-mob);
  font-family: var(--font-family-text);
  cursor: pointer;
  margin-top: 20px;

  img {
    margin-right: 8px;
  }
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
          <img src={emailIcon} alt="Email icon" width="40px" height="40px" />{" "}
          Lovisa.aaberg@gmail.com{" "}
        </EmailInfo>
      </ContactWrapper>

      <AnimationWrapper onClick={() => scrollToSection("header")}>
        <Lottie animationData={chevronArrow} loop={true} />
      </AnimationWrapper>
    </ContactSection>
  )
}
