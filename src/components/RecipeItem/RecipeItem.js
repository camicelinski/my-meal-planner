/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
// import parse from 'html-react-parser'

// import { saveRecipeAction } from '../../modules/mealPlanner/mealPlanner.actions'
import StyledRecipeItem from './RecipeItem.styled'
import MealPlannerAPI from '../../modules/mealPlanner/mealPlanner.api'
import { setFieldValue } from '../../modules/form/form.actions'
// import { getMyRecipes } from '../../modules/mealPlanner/mealPlanner.actions'

const RecipeItem = () => {
  const { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()

  const { recipe } = useSelector((state) => state.spoonacular)
  const [recipeData, setRecipeData] = React.useState(recipe)

  const { recipes } = useSelector((state) => state.mealPlanner)
  console.log(recipes)

  const recipeInMyRecipes = React.useMemo(() => {
    return recipes.find(recipe => recipe.id.toString() === id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(recipeInMyRecipes)

  /* else {
    setRecipeData(recipe)
  } */

  // const dispatch = useDispatch()
  console.log(recipeData)

  const mealPlannerAPI = new MealPlannerAPI()

  React.useEffect(() => {
    if (recipeInMyRecipes !== undefined) {
      setRecipeData(recipeInMyRecipes)
    } else {
      setRecipeData(recipe)
    }
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
  }, [recipe || recipeData])

  console.log(recipe)

  const addRecipeToMyRecipes = () => {
    // dispatch(saveRecipeAction(recipe))
    mealPlannerAPI.add('/recipes', recipe)
    // getMyRecipes()
  }

  const addRecipeToMeal = () => {
    dispatch(setFieldValue('name', recipeData.title))
  }

  return (
    <StyledRecipeItem>
      {recipeData && (
        <div>
          <button
            onClick={addRecipeToMeal}
          >
            Add to Meal
          </button>
          <button
            onClick={addRecipeToMyRecipes}
            className={recipeInMyRecipes ? 'hidden' : ''}
          >
            Add to My Recipes
          </button>
          <h2>
            {recipeData.title}
          </h2>
          <img
            src={recipeData.image}
            alt={recipeData.title}
          />
          <ul>
            <li>Preparation time: {recipeData.readyInMinutes} minutes</li>
            <li>Number of servings: {recipeData.servings}</li>
          </ul>
          <div>
            <h4>Ingredients:</h4>
            <ul>
              {recipeData && (
                recipeData.extendedIngredients.map((ingredient, index) => {
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
              {recipeData && (
                recipeData.analyzedInstructions[0].steps.map(step => {
                  return (
                    <li key={`${recipeData.id}-${step.number}`}>{step.step}</li>
                  )
                })
              )}
            </ul>
          </div>
        </div>
      )}
    </StyledRecipeItem>
  )
}

export default RecipeItem
