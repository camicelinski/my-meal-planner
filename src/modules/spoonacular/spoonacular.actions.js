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

/*
const getRecipesData = () => {
  RecipesAPI.getRecipes(phrase)
    .then(data => setRecipesData(data))
}

export const setCurrentRate = (rate) => {
  return {
    type: types.SET_CURRENT_RATE,
    payload: rate.toFixed(2)
  }
}

export const setRateByDate = (rate) => {
  return {
    type: types.SET_PRICE_BY_DATE,
    payload: rate.toFixed(2)
  }
}

export const setCurrenciesList = (rates) => {
  return {
    type: types.SET_CURRENCIES_LIST,
    payload: Object.keys(rates)
  }
}

export const getCurrentRate = (currency) => (dispatch, getState) => {
  ratesAPI.getRate(currency)
    .then((resp) => dispatch(setCurrentRate(resp.rates.PLN)))
}

export const getPriceByDate = (date, currency) => (dispatch, getState) => {
  ratesAPI.getRatebyDate(date, currency)
    .then((resp) => dispatch(setRateByDate(resp.rates.PLN)))
}

export const getCurrenciesList = () => (dispatch, getState) => {
  ratesAPI.getCurrenciesList()
    .then((resp) => dispatch(setCurrenciesList(resp.rates)))
}
*/
