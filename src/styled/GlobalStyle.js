import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #fff;
    --bg-calendar: #DEE1E3;
    --border-calendar: #bdc3c7;
    --meal-breakfast: #2980B9;
    --meal-elevenses: #27AE60;
    --meal-lunch: #C0392B;
    --meal-snacks: #D35400;
    --meal-dinner: #F39C12;
    // --color-shadow-light: #32285B; 
    // --color-shadow-hover: #453C6A;   
    // --color-shadow-dark: #1B0C47;
    --radius-primary: 12px;
    --radius-secondary: 8px;
    // --text-error: #B20639;
    // --color-contrast: #F6B400;
    // --color-contrast-hover: #F8C12C;
    --text-primary: #161f27;    
    --text-secondary: #2C3E50;
    // --text-green: #75AD48;
    // --transition-style: 0.3s ease-in-out;
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
