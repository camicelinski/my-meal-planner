import styled from 'styled-components'

const StyledFeedback = styled.div`
  position: relative;
  
  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 98;
  }

  .modal {
    padding: 50px 15px;
    color: #27ae60;
    font-weight: bold;
    background: var(--bg-primary);
    position: absolute;
    width: 70%;
    text-align: center;
    left: 15vw;
    top: 25vh;
    border-radius: var(--radius-primary);
    z-index: 99;

    @media screen and (min-width: 768px) {
      width: 50%;      
      left: 25%;
    }
  }
`

export default StyledFeedback
