import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}


:root {
  --text-color-primary: #FFFFFF;
  --text-color-secondary: #000000;
  --headline-color: #FFFFFF;
  --background-color: #f6f6f6;
  --button-color: #5D38F2;
  --menu-active-color: #A189FF;
  --menu-hover-color: #A189FF;
  --font-family-headlines: "Roboto mono", sans-serif;
  --font-family-text: "Space mono", sans-serif;

  --font-size-h1-desktop: 94px;
  --font-size-h2-desktop: 80px;
  --font-size-h3-desktop: 30px;
  --font-size-small: 16px;
  --font-size-medium: 18px;
  --font-size-large: 20px;

  --font-size-h1-mob: 40px;
  --font-size-h2-mob: 36px;
  --font-size-h3-mob: 20px;
  --font-size-text-mob: 16px;
}
`

export default GlobalStyles
