import styled from 'styled-components'

const StyledModal = styled.div`
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
    background: var(--bg-primary);
    position: absolute;
    width: 90%;
    text-align: center;
    left: 5%;
    top: -180px;
    border-radius: var(--radius-primary);
    z-index: 99;

    @media screen and (min-width: 768px) {
      width: 50%;      
      left: 25%;
    }
  }

  .delete-confirmation {
    top: 25%;
    width: 70%;
    left: 15%;

    @media screen and (min-width: 768px) {
      width: 50%;      
      left: 25%;
    }
  }

  .modal .inner {
    padding: 20px 30px 30px 30px;
  }

  .modal h3 {
    margin: 0;
    background: var(--color-theme-hover);
    padding: 12px;
    border-top-left-radius: var(--radius-primary);-moz-border-radius-top-left: var(--radius-primary);
    -webkit-border-top-left-radius: var(--radius-primary);
    border-top-right-radius: var(--radius-primary);-moz-border-radius-top-right: var(--radius-primary);
    -webkit-border-top-right-radius: var(--radius-primary);
  }

  .modal p {
    font-size: 0.8em;
    line-height: 1.5em;
  }

  .delete-confirmation p {
    font-size: 0.9rem;
  }

  .modal .close {
    font-size: 0.7em;
    background: var(--bg-calendar);
    color: var(--text-primary);
    transition: var(--transition-style);
  }

  .modal .close:hover {
    background: var(--border-calendar);
  }

  .eventModal p {
    margin-bottom: 24px;
  }

  .eventModal p:first-of-type {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export default StyledModal
