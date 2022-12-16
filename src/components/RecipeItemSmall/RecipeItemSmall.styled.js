import styled from 'styled-components'

const StyledRecipeItemSmall = styled.div`
  // max-width: 1024px;
  // margin: 0 auto;
  padding: 20px 40px;

  a {    
    color: var(--color-theme);
    transition: var(--transition-style);
  }

  a:hover {    
    color: var(--color-theme-hover);
    text-decoration: none;
  }

  h2 {
    font-family: 'Rubik', Arial, sans-serif;
    font-size: 1.8rem;
    margin-bottom: 15px;
    // letter-spacing: 0.1rem;
  }

  .recipe-container {
    display: flex;
    // justify-content: center;
  }

  .img-section {
    width: 40%;
    max-width: 312px;
  }

  .recipe-summary {
    width: 55%;
    margin-left: 30px;
  }

  p {
    text-align: justify;
    font-size: 0.9rem;
    line-height: 1.25rem;
  }

  ul {
    font-size: 0.8rem;
    padding: 5px 12px;
  }

  .img-container {
    width: 100%;
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

  .btn-add {
    margin-top: 12px;
    width: fit-content;
    padding: 8px 20px;border: 0;
    color: var(--bg-primary);
    border-radius: var(--radius-secondary);
    font-size: 0.8rem;
    background: var(--color-theme);
    transition: var(--transition-style);
    cursor: pointer;
  }

  .btn-add:hover {
    background: var(--btn-theme-hover);
  }
`

export default StyledRecipeItemSmall
