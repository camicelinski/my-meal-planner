/* eslint-disable no-case-declarations */
import types from './mealPlanner.types'
import { toStartOfDay } from '../../helpers/calendarHelpers'

const currentDate = toStartOfDay(new Date())

const initState = {
  meals: [],
  activeDate: currentDate,
  recipes: [],
  isMealFormVisible: false,
  groceryList: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_MEALS:
      return {
        ...state,
        meals: action.payload.meals
      }

    case types.SAVE_MEAL:
      return {
        ...state,
        meals: [
          ...state.meals,
          action.payload.meal
        ]
      }

    case types.REMOVE_MEAL:
      return {
        ...state,
        meals: state.meals.filter((meal) => meal.id !== action.payload.id)
      }

    case types.UPDATE_MEAL:
      return {
        ...state,
        meals: state.meals.map((meal) => meal.id === action.payload.id ? (meal = action.payload.meal) : meal)
      }

    case types.LOAD_RECIPES:
      return {
        ...state,
        recipes: action.payload.recipes
      }

    case types.SAVE_RECIPE:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          action.payload.recipe
        ]
      }

    case types.SET_ACTIVE_DATE:
      return {
        ...state,
        activeDate: action.payload.date
      }

    case types.SET_SHOWING_MEAL_FORM:
      return {
        ...state,
        isMealFormVisible: action.payload.value
      }

    default:
      return state
  }
}

export default reducer
