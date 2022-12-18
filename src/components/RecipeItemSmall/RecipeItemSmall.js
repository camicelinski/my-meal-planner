/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import parse from 'html-react-parser'

import Feedback from '../General/Feedback'

import MealPlannerAPI from '../../modules/mealPlanner/mealPlanner.api'
import { setFieldValue } from '../../modules/form/form.actions'
import { setShowingMealFormAction } from '../../modules/mealPlanner/mealPlanner.actions'

import StyledLink from '../../styled/components/Link.styled'
import StyledRecipeItemSmall from './RecipeItemSmall.styled'

const RecipeItemSmall = ({ recipeData }) => {
  const { recipes } = useSelector((state) => state.mealPlanner)

  const [feedback, setFeedback] = React.useState()

  const dispatch = useDispatch()

  const mealPlannerAPI = new MealPlannerAPI()

  const titleToUrl = recipeData.title.trim().replace(/\s+/g, '-').toLowerCase()
  const imageSize = '312x231'
  const activeClass = 'active'

  const addRecipeToMyRecipes = () => {
    mealPlannerAPI.add('/recipes', recipeData)
    showFeedback({ message: 'Recipe added successfully', type: 'success' })
  }

  const addRecipeToMeal = () => {
    dispatch(setFieldValue('name', recipeData.title))
    mealPlannerAPI.add('/recipes', recipeData)
    dispatch(setShowingMealFormAction(true))
  }

  const showFeedback = ({ message, type, timeout = 2000 }) => {
    setFeedback({ message, type })
    setTimeout(() => {
      setFeedback(null)
    }, timeout)
  }

  return (
    <StyledRecipeItemSmall>
      {feedback &&
        <Feedback
          message={feedback.message}
          type={feedback.type}
        />
      }
      <StyledLink
        activeClassName={activeClass}
        to={`/recipe/${recipeData.id}/${titleToUrl}`}
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
