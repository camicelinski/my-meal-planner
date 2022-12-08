import types from './spoonacular.types'

const initState = {
  currentRate: '',
  rateByDate: '',
  currenciesList: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_RATE:
      return {
        ...state,
        currentRate: action.payload
      }
    case types.SET_PRICE_BY_DATE:
      return {
        ...state,
        rateByDate: action.payload
      }
    case types.SET_CURRENCIES_LIST:
      return {
        ...state,
        currenciesList: action.payload
      }
    default:
      return state
  }
}

export default reducer
