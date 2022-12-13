/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'

import StyledLink from '../../styled/components/Link.styled'
import StyledRecipeItemSmall from './RecipeItemSmall.styled'
import { getRecipeInfo } from '../../modules/spoonacular/spoonacular.actions'

const RecipeItemSmall = ({ recipe }) => {
  const titleToUrl = recipe.title.trim().replace(/\s+/g, '-').toLowerCase()
  const activeClass = 'active'
  const dispatch = useDispatch()

  const getRecipeData = (id) => {
    dispatch(getRecipeInfo(id))
  }

  return (
    <StyledRecipeItemSmall>
      <StyledLink
        activeClassName={activeClass}
        to={`/recipe/${recipe.id}/${titleToUrl}`}
        onClick={() => getRecipeData(recipe.id)}
      >
        <h2>
          {recipe.title}
        </h2>
        <img
          src={recipe.image}
          alt={recipe.title}
        />
        <ul>
          <li>Preparation time: {recipe.readyInMinutes} minutes</li>
          <li>Number of servings: {recipe.servings}</li>
        </ul>
        <p>{recipe.summary}</p>
      </StyledLink>
    </StyledRecipeItemSmall>
  )
}

export default RecipeItemSmall
