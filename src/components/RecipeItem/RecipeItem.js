/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import StyledRecipeItem from './RecipeItem.styled'

import MealPlannerAPI from '../../modules/mealPlanner/mealPlanner.api'
import { setFieldValue } from '../../modules/form/form.actions'
import { setShowingMealFormAction } from '../../modules/mealPlanner/mealPlanner.actions'

import StyledLink from '../../styled/components/Link.styled'

const RecipeItem = () => {
  const { id } = useParams()

  const { recipe } = useSelector((state) => state.spoonacular)
  const { recipes } = useSelector((state) => state.mealPlanner)

  const [recipeData, setRecipeData] = React.useState(recipe)

  const dispatch = useDispatch()

  const mealPlannerAPI = new MealPlannerAPI()

  const imageSize = '312x231'
  const activeClass = 'active'

  React.useEffect(() => {
    if (recipeInMyRecipes !== undefined) {
      setRecipeData(recipeInMyRecipes)
    } else {
      setRecipeData(recipe)
    }
  }, [recipe || recipeData])

  const recipeInMyRecipes = React.useMemo(() => {
    return recipes.find(recipe => recipe.id.toString() === id)
  }, [])

  const addRecipeToMyRecipes = () => {
    mealPlannerAPI.add('/recipes', recipe)
  }

  const addRecipeToMeal = () => {
    dispatch(setFieldValue('name', recipeData.title))
    dispatch(setShowingMealFormAction(true))
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
      return <p>This recipe does not contain instructions.</p>
    }
  }

  return (
    <StyledRecipeItem>
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
                    Save and Add to Meal
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
