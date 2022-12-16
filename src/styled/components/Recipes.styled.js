import styled from 'styled-components'

const StyledRecipes = styled.main`
  max-width: 1024px;
  margin: 20px auto;
  // margin: 20px;

  .controls {
    // margin: 0 auto;
    margin-bottom: 30px;
    padding: 0 40px;
    width: 50%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
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

  .get-new-recipe {
    // display: flex;    
    // justify-content: space-between;
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
`

export default StyledRecipes