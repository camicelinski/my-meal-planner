import types from './spoonacular.types'
import SpoonacularAPI from './spoonacular.api'

const RecipesAPI = new SpoonacularAPI()

export const setRecipes = (recipes) => {
  return {
    type: types.SET_RECIPES,
    payload: recipes
  }
}

export const setRecipeInfo = (recipeInfo) => {
  return {
    type: types.SET_RECIPE_INFO,
    payload: recipeInfo
  }
}

export const getRecipesList = (phrase) => (dispatch, getState) => {
  RecipesAPI.getRecipes(phrase)
    .then((resp) => dispatch(setRecipes(resp.results)))
}

export const getRecipeInfo = (id) => async (dispatch, getState) => {
  const response = await RecipesAPI.getRecipe(id)
  const infobefore = getState()
  console.log(infobefore)
  dispatch(setRecipeInfo(response))
  const recipeInfo = getState()
  console.log(recipeInfo)
}
