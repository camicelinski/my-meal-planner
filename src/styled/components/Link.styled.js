import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledLink = styled(NavLink)`
    color: #444;
    text-decoration: none;

    &:hover {
      color: #60a3bc;
    }

    &.${props => props.activeClassName} {
      color: #60a3bc;
      font-weight: bold;
    }
`

export default StyledLink
