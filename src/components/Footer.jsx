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
`

export const Footer = () => {
  return (
    <FooterSection>
      <FooterText>Lovisa Åberg &copy;2025</FooterText>
    </FooterSection>
  )
}
