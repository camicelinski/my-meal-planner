import types from './spoonacular.types'

const initState = {
  recipes: [],
  recipe: {}
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    case types.SET_RECIPE_INFO:
      return {
        ...state,
        recipe: action.payload
      }
    default:
      return state
  }
}

export default reducer
