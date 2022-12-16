import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
    color: var(--text-secondary);
    text-decoration: none;

    &:hover {
      color: var(--btn-theme-hover);
      text-decoration: none;
    }

    &.${props => props.activeClassName} {
      color: var(--btn-theme-hover);
      font-weight: bold;
    }
`

export default StyledLink
