/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import parse from 'html-react-parser'

import StyledLink from '../../styled/components/Link.styled'
import StyledRecipeItemSmall from './RecipeItemSmall.styled'
import { getRecipeInfo } from '../../modules/spoonacular/spoonacular.actions'

const RecipeItemSmall = ({ recipe }) => {
  const titleToUrl = recipe.title.trim().replace(/\s+/g, '-').toLowerCase()
  const activeClass = 'active'

  const imageSize = '312x231'

  const { recipes } = useSelector((state) => state.mealPlanner)
  const dispatch = useDispatch()

  const getRecipeData = (id) => {
    const recipeInMyRecipes = recipes.find(recipe => recipe.id.toString() === id.toString())
    if (recipeInMyRecipes === undefined) {
      dispatch(getRecipeInfo(id))
    }
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
      </StyledLink>
      <div className={'recipe-container'}>
        <div className={'img-section'}>
          <div className={'img-container'}>
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.id}-${imageSize}.${recipe.imageType}`}
              alt={recipe.title}
            />
          </div>
          <ul>
            <li><strong>Preparation time:</strong> {recipe.readyInMinutes} minutes</li>
            <li><strong>Number of servings:</strong> {recipe.servings}</li>
          </ul>
        </div>
        <p>{parse(recipe.summary)}</p>
      </div>
    </StyledRecipeItemSmall>
  )
}

export default RecipeItemSmall
