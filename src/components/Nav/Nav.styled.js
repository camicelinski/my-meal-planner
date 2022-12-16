import styled from 'styled-components'

const StyledNav = styled.nav`
  // background-color: rgba(233,235,236, 0.8);
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

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      text-align: right;
      width: 100vw;
      margin-top: 0;
      padding: 2rem;
      background-color: #f2f2f2;
      position: absolute;
      top: 0;
      right: 0;
      gap: 0;
      transform: ${({ open }) => open ? 'translateX(2rem)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;
    }    

    li{
      padding: 10px 10px;

      @media screen and (max-width: 768px) {
        display: block;
        width: 50%;
        padding: 1rem;
        text-align: center;
        border-bottom: 1px dotted #82ccdd;

        :last-child {
          border: none;
        }
      }
    }
  }
`

export default StyledNav
