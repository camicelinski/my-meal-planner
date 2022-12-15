import styled from 'styled-components'

const StyledRecipeItemSmall = styled.div`
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
    font-family: 'Rubik', Arial, sans-serif;
    font-size: 1.8rem;
    margin-bottom: 15px;
    // letter-spacing: 0.1rem;
  }

  .recipe-container {
    display: flex;
  }

  .img-section {
    width: 40%;
    max-width: 312px;
  }

  p {
    width: 60%;
    margin-left: 15px;
    text-align: justify;
    font-size: 0.9rem;
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
`

export default StyledRecipeItemSmall
