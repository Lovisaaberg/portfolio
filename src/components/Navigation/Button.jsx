import React from "react"
import styled from "styled-components"

const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor || "#5D38F2"};
  color: ${({ textColor }) => textColor || "white"};
  font-size: 16px;
  font-family: var(--font-family-text);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#8D72F8"};
  }

  &:focus {
    outline: 3px solid #4c37a1;
  }
`

const ButtonComponent = ({
  label,
  onClick,
  bgColor,
  hoverColor,
  textColor,
}) => {
  return (
    <Button
      onClick={onClick}
      bgColor={bgColor}
      hoverColor={hoverColor}
      textColor={textColor}
    >
      {label}
    </Button>
  )
}

export default ButtonComponent
