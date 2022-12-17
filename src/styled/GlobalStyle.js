import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: #fff;
    --bg-calendar: #DEE1E3;
    --bg-cell: #E9EBEC;
    --bg-input: #F4F5F6;
    --border-calendar: #bdc3c7;
    --meal-breakfast: #2980B9;
    --meal-elevenses: #27AE60;
    --meal-lunch: #C0392B;
    --meal-snacks: #F56200;
    --meal-dinner: #F39C12;
    --color-title: #A7220D;
    --color-theme: #C0392B; 
    --color-theme-hover: #ECB2AC;
    --btn-theme-hover: #D55648;
    --radius-primary: 12px;
    --radius-secondary: 8px;
    --text-error: #c0392b;
    --text-primary: #161f27;    
    --text-secondary: #2C3E50;
    --text-white: #fff;
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

  a {
    color: var(--color-theme);
    text-decoration: none;
    transition: var(--transition-style);
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }
`

export default GlobalStyle
