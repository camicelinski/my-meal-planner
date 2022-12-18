import styled from 'styled-components'

const StyledRecipes = styled.main`
  max-width: 1024px;
  margin: 20px auto;

  .controls {
    margin-bottom: 10px;
    padding: 0 40px;
    width: 75%;
    max-width: 400px;
    display: flex;
    flex-direction: column;    

    @media screen and (min-width: 768px) {
      width: 50%;
      margin-bottom: 30px;
    }
  }

  .search {
    position: relative;
  }

  input {
    display: block;
    color: var(--text-secondary);
    font-size: 0.8rem;
    width: 100%;
    padding: 5px 8px;
    margin: 5px 0;
    border: 1px solid var(--border-calendar);
    border-radius: var(--radius-secondary);
    height: fit-content;
    background: var(--bg-input);
  }

  input:focus {
    outline: none;
  }

  .magnifyingGlass {
    color: var(--border-calendar);
    padding: 5px 8px;
    margin: 5px 0;
    background: transparent;
    border: none;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .btn:first-child {
    margin-right: 5px;
  }

  .btn {
    width: 100%;
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

  .no-results {
    margin-top: 45px;
    text-align: center;
  }

  .error-server {
    text-align: center;
    margin-top: 50px;
  }
`

export default StyledRecipes
