import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #1F0E4F;
    --color-shadow-light: #32285B; 
    --color-shadow-hover: #453C6A;   
    --color-shadow-dark: #1B0C47;
    --radius-primary: 12px;
    --radius-secondary: 8px;
    --text-error: #B20639;
    --color-contrast: #F6B400;
    --color-contrast-hover: #F8C12C;
    --text-primary: #F2F2F5;    
    --text-secondary: #ECE9EB;
    --text-green: #75AD48;
    --transition-style: 0.3s ease-in-out;
  }

  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Karla', Arial, sans-serif;
  }

  button,
  input[type="submit"] {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
