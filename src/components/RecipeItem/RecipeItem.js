/* eslint-disable react/prop-types */
import React from 'react'
// import parse from 'html-react-parser'

import StyledRecipeItem from './RecipeItem.styled'

const RecipeItem = ({ recipe }) => {
  console.log(recipe.instructions)
  return (
    <StyledRecipeItem>
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
      <div>
        <h4>Ingredients:</h4>
      </div>
      <div>
        <h4>Instructions:</h4>
        <div>
          {recipe.instructions}
        </div>
      </div>
    </StyledRecipeItem>
  )
}

export default RecipeItem
