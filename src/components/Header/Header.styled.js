import styled from 'styled-components'

const StyledHeader = styled.header`
  text-align: left;
  
  .header {
    display: flex;
    justify-content: space-between;
  }

  .h1-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 70px;
    width: 55%;
  }

  h1 {        
    font-family: 'Rubik', Arial, sans-serif;
    text-align: center;
    font-size: 2.4rem;
    color: var(--text-white);
    margin: 5px 0 10px;
    padding: 15px 0;
  }

  .h1-red {    
    color: var(--color-title);
    border-bottom: 1px dotted var(--color-theme-hover);
  }

  @media screen and (min-width: 768px) {
    h1 {        
      font-size: 3rem;
      color: var(--color-title);
      border-bottom: 1px dotted var(--color-theme-hover);
      margin: 35px 0 10px;
    }
  }
`

export default StyledHeader
