import React, { useState, useRef } from 'react'

import Burger from './Burger'

import StyledNav from './Nav.styled'
import StyledLink from './Link.styled'

import { setShowingMealFormAction } from '../../modules/mealPlanner/mealPlanner.actions'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const Nav = () => {
  const [open, setOpen] = useState(false)

  const node = useRef()

  const activeClass = 'active'

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
              onClick={() => setShowingMealFormAction(false)}
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
              to={'/groceries'}
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
