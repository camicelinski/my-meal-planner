import types from './mealPlanner.types'
import MealPlannerAPI from './mealPlanner.api'

const mealPlannerAPI = new MealPlannerAPI()

export function loadMealsAction (meals) {
  return {
    type: types.LOAD_MEALS,
    payload: { meals }
  }
}

export function saveMealAction (meal) {
  return {
    type: types.SAVE_MEAL,
    payload: { meal }
  }
}

export function removeMealAction (id) {
  return {
    type: types.REMOVE_MEAL,
    payload: { id }
  }
}

export function updateMealAction (id, meal) {
  return {
    type: types.UPDATE_MEAL,
    payload: { id, meal }
  }
}

export function loadRecipesAction (recipes) {
  return {
    type: types.LOAD_RECIPES,
    payload: { recipes }
  }
}

export function saveRecipeAction (recipe) {
  return {
    type: types.SAVE_RECIPE,
    payload: { recipe }
  }
}

export function setActiveDate (date) {
  return {
    type: types.SET_ACTIVE_DATE,
    payload: { date }
  }
}

export function setShowingMealFormAction (value) {
  return {
    type: types.SET_SHOWING_MEAL_FORM,
    payload: { value }
  }
}

export const getMyRecipes = () => async (dispatch, getState) => {
  const myRecipes = await mealPlannerAPI.load('/recipes')
  dispatch(loadRecipesAction(myRecipes))
}

export const getMyMeals = () => async (dispatch, getState) => {
  const myMeals = await mealPlannerAPI.load('/meals')
  dispatch(loadMealsAction(myMeals))
}
