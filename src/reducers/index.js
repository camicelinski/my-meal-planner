import { combineReducers } from 'redux'

import mealPlannerReducer from '../modules/mealPlanner/mealPlanner.reducer'
import spoonacularReducer from '../modules/spoonacular/spoonacular.reducer'

const reducers = combineReducers({
  mealPlanner: mealPlannerReducer,
  spoonacular: spoonacularReducer
})

export default reducers
