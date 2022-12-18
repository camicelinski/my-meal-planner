import styled from 'styled-components'

const StyledRecipeItemSmall = styled.div`
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
    font-size: 1.4rem;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .recipe-container {
    @media screen and (min-width: 768px) {
      display: flex;
    }  
  }

  .img-section {
    width: 100%;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
      width: 40%;
      max-width: 312px;
      margin-bottom: 0;
    }
  }

  .recipe-summary {
    width: 100%;    

    @media screen and (min-width: 768px) {
      width: 55%;
      margin-left: 30px;
    }
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
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    border-radius: var(--radius-primary);
    object-fit: cover;
  }

  .btn-container {
    display: flex;
    justify-content: left;
  }

  .btn-container .btn {
    width: fit-content;
    margin-top: 12px;
    padding: 8px;
    border: 0;
    color: var(--bg-primary);
    border-radius: var(--radius-secondary);
    font-size: 0.8rem;
    background: var(--color-theme);
    transition: var(--transition-style);
    cursor: pointer;
  }

  .btn-container .btn:hover {
    background: var(--btn-theme-hover);
  }

  .hidden {
    display: none;
  }
`

export default StyledRecipeItemSmall
