import styled from 'styled-components'

const StyledNav = styled.nav`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    padding-left: 0;
    list-style: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1.5rem;
    font-size: 0.9rem;
    font-weight: bold;

    @media screen and (max-width: 767.9px) {
      display: ${({ open }) => open ? 'flex' : 'none'};
      flex-direction: column;
      justify-content: center;
      text-align: right;
      width: 100vw;
      margin-top: 0;
      margin-left: 0;
      padding: 2rem;
      background-color: var(--bg-input);
      position: absolute;
      top: 0;
      right: 0;
      gap: 0;      
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;
      z-index: 3;
    }    

    li{
      padding: 10px 10px;

      @media screen and (max-width: 767.9px) {
        display: block;
        width: 50%;
        padding: 1rem;
        text-align: center;
        border-bottom: 1px dotted var(--color-theme-hover);

        :last-child {
          border: none;
        }
      }
    }
  }
`

export default StyledNav
