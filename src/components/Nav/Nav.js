import React, { useState, useRef } from 'react'
import StyledNav from './Nav.styled'
import StyledLink from './Link.styled'
import Burger from './Burger'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const Nav = () => {
  const activeClass = 'active'

  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <StyledNav
        open={open}
        setOpen={setOpen}
      >
        <ul>
          <li>
            <StyledLink
              activeClassName={activeClass}
              to={'/home'}
            >
              Meals
            </StyledLink>
          </li>
          <li>
            <StyledLink
              activeClassName={activeClass}
              to={'/recipes/1'}
            >
              My Recipes
            </StyledLink>
          </li>
          <li>
            <StyledLink
              activeClassName={activeClass}
              to={'/grocery-list'}
            >
              Groceries
            </StyledLink>
          </li>
        </ul>
      </StyledNav>
      <Burger
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}

export default Nav
