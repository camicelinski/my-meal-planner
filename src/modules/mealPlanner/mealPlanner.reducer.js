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
        [action.payload.type]: action.payload.meals
      }

    case types.SAVE_MEAL:
      const { meal, type } = action.payload
      return {
        ...state,
        [type]: [
          ...state.type,
          meal
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

    default:
      return state
  }
}

export default reducer
