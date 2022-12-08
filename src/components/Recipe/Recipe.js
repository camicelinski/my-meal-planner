/* eslint-disable react/prop-types */
import React from 'react'

import StyledRecipe from './Recipe.styled'

const Recipe = ({ recipe }) => {
  return (
    <StyledRecipe>
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
      <p>Ingredients: </p>
      <p>Instructions: {recipe.instructions}</p>
    </StyledRecipe>
  )
}

export default Recipe
