/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import parse from 'html-react-parser'

import { saveMealAction } from '../../modules/mealPlanner/mealPlanner.actions'
import StyledRecipeItem from './RecipeItem.styled'

const RecipeItem = () => {
  const { recipe } = useSelector((state) => state.spoonacular)
  const dispatch = useDispatch()
  console.log(recipe)

  React.useEffect(() => {
    // You could retrieve fresh events data here
    // So whenever the calendar month is toggled,
    // make a request and populate `events` with the
    // new results
    // Would be better to cache these results so you
    // don't make needless network requests
    // So you could maintain an array of `date`s
    // and simply consult this before you fire off
    // any new network requests
    console.log("Date has changed... Let's load some fresh data")
  }, [recipe])

  console.log(recipe)

  const addRecipeToMyRecipes = () => {
    dispatch(saveMealAction(recipe, 'recipes'))
  }

  return (
    <StyledRecipeItem>
      {recipe && (
        <div>
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
            <ul>
              {recipe && (
                recipe.extendedIngredients.map((ingredient, index) => {
                  return (
                    <li
                      key={`${index}-${ingredient.id}`}
                    >
                      <span>{ingredient.amount} </span>
                      <span>{ingredient.unit} </span>
                      <span>{ingredient.name}</span>
                    </li>
                  )
                })
              )}
            </ul>
          </div>
          <div>
            <h4>Instructions:</h4>
            <ul>
              {recipe && (
                recipe.analyzedInstructions[0].steps.map(step => {
                  return (
                    <li key={`${recipe.id}-${step.number}`}>{step.step}</li>
                  )
                })
              )}
            </ul>
          </div>
          <button
            onClick={addRecipeToMyRecipes}
          >
            Add to My Recipes
          </button>
        </div>
      )}
    </StyledRecipeItem>
  )
}

export default RecipeItem
