import styled from "styled-components"

const Button = styled.button`
  font-size: 18px;
  font-family: var(--font-family-text);
  padding: 12px 42px;
  border-radius: 48px;
  cursor: pointer;

  &:hover {
    background-color: #8d72f8;
  }

  &:focus {
    outline: 3px solid #8d72f8;
  }
`

const PrimaryButton = styled(Button)`
  background-color: #5d38f2;
  color: white;
  border: none;
`

const SecondaryButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #5d38f2;
`

const ButtonComponent = ({ label, onClick, variant = "primary" }) => {
  const ButtonToUse = variant === "secondary" ? SecondaryButton : PrimaryButton

  return <ButtonToUse onClick={onClick}>{label}</ButtonToUse>
}

export default ButtonComponent
