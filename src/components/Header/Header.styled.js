import styled from 'styled-components'

const StyledHeader = styled.header`
  // margin: 30px auto;
  text-align: left;
  
  .header {
    display: flex;
    justify-content: space-between;
    // height: 360px;
    // mask-image: linear-gradient(to bottom, transparent 10%, #fff);
    // -webkit-mask-image: linear-gradient(to top, transparent 20%, #fff);
  }

  .h1-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 70px;
    width: 55%;
    // position: absolute;
  }

  h1 {        
    font-family: 'Rubik', Arial, sans-serif;
    text-align: center;
    font-size: 3rem;
    color: var(--color-title);
    border-bottom: 1px dotted var(--color-theme-hover);
    margin: 35px 0 10px;
    padding: 15px 0;
    // color: var(--bg-primary);
  }
`

export default StyledHeader
