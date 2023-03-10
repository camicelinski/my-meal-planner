/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import Loader from '../General/Loader'
import Feedback from '../General/Feedback'

import SpoonacularAPI from '../../modules/spoonacular/spoonacular.api'
import MealPlannerAPI from '../../modules/mealPlanner/mealPlanner.api'
import { setFieldValue } from '../../modules/form/form.actions'
import { setShowingMealFormAction } from '../../modules/mealPlanner/mealPlanner.actions'
import { setRecipeInfo } from '../../modules/spoonacular/spoonacular.actions'

import StyledRecipeItem from './RecipeItem.styled'
import StyledLink from '../../styled/components/Link.styled'

const RecipeItem = () => {
  const { id } = useParams()

  const { recipe } = useSelector((state) => state.spoonacular)
  const { recipes } = useSelector((state) => state.mealPlanner)

  const [recipeData, setRecipeData] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [feedback, setFeedback] = React.useState()

  const dispatch = useDispatch()

  const mealPlannerAPI = new MealPlannerAPI()
  const RecipesAPI = new SpoonacularAPI()

  const imageSize = '312x231'
  const activeClass = 'active'

  const recipeInMyRecipes = recipes.find(recipe => recipe.id.toString() === id.toString())

  React.useEffect(() => {
    if (recipeInMyRecipes !== undefined) {
      setRecipeData(recipeInMyRecipes)
      setIsLoading(false)
    } else {
      RecipesAPI.getRecipe(id)
        .catch((error) => {
          console.log(error)
          setError(error)
          setIsLoading(false)
          setRecipeData(null)
        })
        .then((resp) => {
          dispatch(setRecipeInfo(resp))
          setRecipeData(resp)
          setIsLoading(false)
        })
    }
  }, [])

  const addRecipeToMyRecipes = () => {
    mealPlannerAPI.add('/recipes', recipe)
    showFeedback({ message: 'Recipe added successfully', type: 'success' })
  }

  const addRecipeToMeal = () => {
    dispatch(setFieldValue('name', recipeData.title))
    dispatch(setShowingMealFormAction(true))

    if (recipeInMyRecipes === undefined) {
      mealPlannerAPI.add('/recipes', recipe)
    }
  }

  const renderIngredients = () => {
    if (recipeData.extendedIngredients && recipeData.extendedIngredients.length > 0) {
      return (
        <ul className={'ingredients-list'}>
          {recipeData && (
            recipeData.extendedIngredients.map((ingredient, index) => {
              return (
                <li
                  className={'ingredient-item'}
                  key={`${index}-${ingredient.id}`}
                >
                  <span className={'amount'}>{Number.isInteger(ingredient.amount) ? ingredient.amount : ingredient.amount.toFixed(1)} </span>
                  <span className={'unit'}>{ingredient.unit} </span>
                  <span>{ingredient.name}</span>
                </li>
              )
            })
          )}
        </ul>
      )
    } else {
      return <p className={'missing-data'}>This recipe does not provide a list of ingredients.</p>
    }
  }

  const renderInstructions = () => {
    if (recipeData.analyzedInstructions.length > 0 && recipeData.analyzedInstructions[0].steps && recipeData.analyzedInstructions[0].steps.length > 0) {
      return (
        <ul className={'instructions-list'}>
          {recipeData.analyzedInstructions[0].steps.map((step, index) => {
            return (
              <li
                className={'instruction-item'}
                key={`${recipeData.id}-${step.number}`}
              >
                <span className={'instruction-step'}><strong>{index + 1}</strong></span>
                <span>{step.step}</span>
              </li>
            )
          })}
        </ul>
      )
    } else {
      return <p className={'missing-data'}>This recipe does not contain instructions.</p>
    }
  }

  const renderError = () => {
    return <p className={'error-server'}>Something went wrong. Try again or return to <Link to={'/'}>home.</Link></p>
  }

  const showFeedback = ({ message, type, timeout = 2000 }) => {
    setFeedback({ message, type })
    setTimeout(() => {
      setFeedback(null)
    }, timeout)
  }

  return (
    <StyledRecipeItem>
      {isLoading && <Loader />}
      {feedback &&
        <Feedback
          message={feedback.message}
          type={feedback.type}
        />
      }
      {error && renderError()}
      {recipeData && (
        <div>
          <div className={'recipe-header'}>
            <div className={'img-container'}>
              <img
                src={`https://spoonacular.com/recipeImages/${recipeData.id}-${imageSize}.${recipeData.imageType}`}
                alt={recipeData.title}
              />
            </div>
            <div className={'general-info'}>
              <h2>
                {recipeData.title}
              </h2>
              <ul>
                <li><strong>Preparation time: </strong>{recipeData.readyInMinutes} minutes</li>
                <li><strong>Number of servings:</strong> {recipeData.servings}</li>
              </ul>
              <div className={'btn-container'}>
                <StyledLink
                  activeClassName={activeClass}
                  to={'/home'}
                >
                  <button
                    className={'btn'}
                    onClick={addRecipeToMeal}
                  >
                    {recipeInMyRecipes ? 'Add to Meal' : 'Save and Add to Meal'}
                  </button>
                </StyledLink>
                <button
                  onClick={addRecipeToMyRecipes}
                  className={recipeInMyRecipes ? 'hidden' : 'btn'}
                >
                  Save for later
                </button>
              </div>
            </div>
          </div>
          <div className={'ingredients-instructions'}>
            <div className={'ingredients'}>
              <h4>Ingredients:</h4>
              {renderIngredients()}
            </div>
            <div className={'instructions'}>
              <h4>Instructions:</h4>
              {renderInstructions()}
            </div>
          </div>
        </div>
      )}
    </StyledRecipeItem>
  )
}

export default RecipeItem
