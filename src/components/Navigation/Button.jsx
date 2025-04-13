import styled from "styled-components"

const Button = styled.button`
  font-size: 18px;
  font-family: var(--font-family-text);
  border-radius: 48px;
  width: 260px;
  height: 48px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #8d72f8;
  }

  &:focus {
    outline: 3px solid #8d72f8;
  }

  @media (min-width: 768px) {
    width: 182px;
    font-size: var(--font-size-large);
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

  &:hover {
    color: #ffffff;
    border: none;
  }
`

const ButtonComponent = ({
  label,
  onClick,
  variant = "primary",
  ariaLabel,
}) => {
  const SelectedButton =
    variant === "secondary" ? SecondaryButton : PrimaryButton

  return (
    <SelectedButton onClick={onClick} aria-label={ariaLabel}>
      {label}
    </SelectedButton>
  )
}

export default ButtonComponent
