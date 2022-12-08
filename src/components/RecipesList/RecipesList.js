/* eslint-disable react/prop-types */
import React from 'react'

import Recipe from '../Recipe'

import StyledRecipesList from './RecipesList.styled'

const RecipesList = ({ recipesData }) => {
  console.log(recipesData)

  return (
    <StyledRecipesList>
      {recipesData.results.map(recipe => {
        return (
          <Recipe
            key={recipe.id}
            recipe={recipe}
          />
        )
      })}
    </StyledRecipesList>
  )
}

export default RecipesList
