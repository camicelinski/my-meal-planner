import styled from 'styled-components'

const StyledRecipeItem = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;

  a {    
    color: var(--color-theme);
    transition: var(--transition-style);
  }

  a:hover {    
    color: var(--color-theme-hover);
    text-decoration: none;
  }

  h2 {
    color: var(--color-theme);
    font-family: 'Rubik', Arial, sans-serif;
    font-size: 1.5rem;
    margin-bottom: 10px;
    // letter-spacing: 0.1rem;
  }

  h4 {
    color: var(--color-theme);
    font-size: 1.2rem;
  }
  
  ul {
    font-size: 0.8rem;
  }

  .ingredients-instructions {
    display: flex;
  }

  .ingredients {
    width: 35%;
    margin-right: 15px;
  }

  .instructions {
    width: 65%;
  }

  .ingredients-list,
  .instructions-list {
    padding: 5px 0;
  }

  .ingredient-item,
  .instruction-item {
    margin: 5px 0;
  }

  .amount,
  .unit {
    font-weight: bold;
    color: var(--text-secondary);
  }

  .unit {
    margin-right: 5px;
  }

  .instruction-step {
    margin-right: 5px;
    color: var(--text-secondary);
  }

  span {
    line-height: 1rem;
  }

  .recipe-header {
    display: flex;
    margin-bottom: 25px;
  }

  .general-info {
    width: 65%;
  }

  .general-info ul {
    margin-bottom: 10px;
  }

  .general-info ul li {
    color: var(--text-secondary);
    padding: 2px 0;
  }
  
  .img-container {
    width: 35%;
    margin-right: 15px;
    // height: 231px;
    // border-radius: 50%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    // height: 100%;
    border-radius: var(--radius-primary);
    object-fit: cover;
  }

  .btn {
    margin-right: 5px;
    border: 0;
    color: var(--bg-primary);
    padding: 8px;
    border-radius: var(--radius-secondary);
    font-size: 0.8rem;
    background: var(--color-theme);
    transition: var(--transition-style);
    cursor: pointer;
  }

  .btn:hover {
    background: var(--btn-theme-hover);
  }

  .hidden {
    display: none;
  }
`

export default StyledRecipeItem
