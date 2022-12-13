/* eslint-disable no-case-declarations */
import types from './mealPlanner.types'

const initState = {
  meals: [],
  recipes: [],
  groceryList: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_MEALS:
      // const { meals } = action.payload
      return {
        ...state,
        meals: action.payload.meals
      }

    case types.SAVE_MEAL:
      // const { meal } = action.payload
      return {
        ...state,
        meals: [
          ...state.meals,
          action.payload.meal
        ]
      }

    case types.REMOVE_MEAL:
      // const { id } = action.payload
      return {
        ...state,
        meals: state.meals.filter((meal) => meal.id !== action.payload.id)
      }

    case types.UPDATE_MEAL:
      // const { id, meal } = action.payload
      return {
        ...state,
        meals: state.meals.map((meal) => meal.id === action.payload.id ? (meal = action.payload.meal) : meal)
        /*  {
          if (meal.id === action.payload.id) {
            return {
              ...meal,
              ...action.payload.meal
            }
          } else {
            return meal
          }
        } */
      }

    case types.LOAD_RECIPES:
      // const { recipes } = action.payload
      return {
        ...state,
        recipes: action.payload.recipes
      }

    case types.SAVE_RECIPE:
      // const { recipe } = action.payload
      return {
        ...state,
        recipes: [
          ...state.recipes,
          action.payload.recipe
        ]
      }

    default:
      return state
  }
}

export default reducer
