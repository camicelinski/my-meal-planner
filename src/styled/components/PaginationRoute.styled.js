import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledPagLink = styled(NavLink)`
  &.${props => props.activeClassName} {
    color: var(--btn-theme-hover);
    font-weight: bold;
  }
`

const StyledPaginationRoute = styled.nav`
& ul {
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
  list-style: none;   
}

& div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--bg-cell);
}

& li {  
  margin-bottom: 10px;
  padding: 5px;
  font-size: 1rem;

  & a {
    text-decoration: none;
    color: var(--text-primary);
    padding-bottom: 4px;

    &:hover {
      color: var(--color-theme-hover);
      transition: 0.1s;
    }    
  }  
}
`

export { StyledPaginationRoute, StyledPagLink }
