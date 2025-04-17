import styled from "styled-components"

const FooterSection = styled.section`
  background-color: #171824;
  color: #ffffff;
  font-family: var(--font-family-text);
  height: 100px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FooterText = styled.p`
  font-family: var(--font-family-text);
  font-size: 14px;
  color: #a189ff;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:hover::after {
    content: "Happy Easter! 🐣";
    position: absolute;
    top: 20px;
    left: 0;
    font-size: 16px;
    opacity: 1;
    transition: opacity 0.3s ease;
    color: #ffffff;
  }

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`

export const Footer = () => {
  return (
    <FooterSection>
      <FooterText>Lovisa Åberg &copy;2025</FooterText>
    </FooterSection>
  )
}
