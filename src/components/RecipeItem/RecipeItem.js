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
import { setShowingMealFormAction } from '../../modules/mealPlanner/mealPlanner.actions'
import StyledLink from '../../styled/components/Link.styled'
// import { getMyRecipes } from '../../modules/mealPlanner/mealPlanner.actions'

const RecipeItem = () => {
  const { id } = useParams()
  console.log(id)
  const dispatch = useDispatch()

  const { recipe } = useSelector((state) => state.spoonacular)
  const [recipeData, setRecipeData] = React.useState(recipe)

  const { recipes } = useSelector((state) => state.mealPlanner)
  console.log(recipes)

  const imageSize = '312x231'
  const activeClass = 'active'

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
    dispatch(setShowingMealFormAction(true))
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
                    Add to Meal
                  </button>
                </StyledLink>
                <button
                  onClick={addRecipeToMyRecipes}
                  className={recipeInMyRecipes ? 'hidden' : 'btn'}
                >
                  Add to My Recipes
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
              <ul className={'instructions-list'}>
                {recipeData && (
                  recipeData.analyzedInstructions[0].steps.map((step, index) => {
                    return (
                      <li
                        className={'instruction-item'}
                        key={`${recipeData.id}-${step.number}`}
                      >
                        <span className={'instruction-step'}><strong>{index + 1}</strong></span>
                        <span>{step.step}</span>
                      </li>
                    )
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </StyledRecipeItem>
  )
}

export default RecipeItem
