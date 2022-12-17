/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import parse from 'html-react-parser'

import StyledLink from '../../styled/components/Link.styled'
import StyledRecipeItemSmall from './RecipeItemSmall.styled'
import MealPlannerAPI from '../../modules/mealPlanner/mealPlanner.api'
import { getRecipeInfo } from '../../modules/spoonacular/spoonacular.actions'
import { setFieldValue } from '../../modules/form/form.actions'
import { setShowingMealFormAction } from '../../modules/mealPlanner/mealPlanner.actions'

const RecipeItemSmall = ({ recipeData }) => {
  const titleToUrl = recipeData.title.trim().replace(/\s+/g, '-').toLowerCase()

  const imageSize = '312x231'
  const activeClass = 'active'

  const { recipes } = useSelector((state) => state.mealPlanner)
  // const { recipe } = useSelector((state) => state.spoonacular)
  const dispatch = useDispatch()

  const mealPlannerAPI = new MealPlannerAPI()

  useEffect(() => {

  }, [recipes])

  const getRecipeData = (id) => {
    const recipeInMyRecipes = recipes.find(recipe => recipe.id.toString() === id.toString())
    if (recipeInMyRecipes === undefined) {
      dispatch(getRecipeInfo(id))
    }
  }

  const addRecipeToMyRecipes = () => {
    // dispatch(saveRecipeAction(recipe))
    mealPlannerAPI.add('/recipes', recipeData)
    // getMyRecipes()
  }

  const addRecipeToMeal = () => {
    dispatch(setFieldValue('name', recipeData.title))
    mealPlannerAPI.add('/recipes', recipeData)
    dispatch(setShowingMealFormAction(true))
  }

  /* const hasInstructions = () => {
    getRecipeData(recipeData.id)
    if (recipe.analyzedInstructions[0].steps.length > 0) {
      return true
    } else {
      return false
    }
  } */

  return (
    <StyledRecipeItemSmall>
      <StyledLink
        activeClassName={activeClass}
        to={`/recipe/${recipeData.id}/${titleToUrl}`}
        onClick={() => getRecipeData(recipeData.id)}
      >
        <h2>
          {recipeData.title}
        </h2>
      </StyledLink>
      <div className={'recipe-container'}>
        <div className={'img-section'}>
          <div className={'img-container'}>
            <img
              src={`https://spoonacular.com/recipeImages/${recipeData.id}-${imageSize}.${recipeData.imageType}`}
              alt={recipeData.title}
            />
          </div>
          <ul>
            <li><strong>Preparation time:</strong> {recipeData.readyInMinutes} minutes</li>
            <li><strong>Number of servings:</strong> {recipeData.servings}</li>
          </ul>
        </div>
        <div className={'recipe-summary'}>
          <p>{parse(recipeData.summary)}</p>
          <div className={'btn-container'}>
            <StyledLink
              activeClassName={activeClass}
              to={'/home'}
            >
              <button
                className={'btn'}
                onClick={addRecipeToMeal}
              >
                Add to Meal
              </button>
            </StyledLink>
            <button
              onClick={addRecipeToMyRecipes}
              className={recipes.find(r => r.id.toString() === recipeData.id.toString()) ? 'hidden' : 'btn'}
            >
              Save for later
            </button>
          </div>
        </div>
      </div>
    </StyledRecipeItemSmall>
  )
}

export default RecipeItemSmall
