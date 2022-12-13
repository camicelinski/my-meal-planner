import { combineReducers } from 'redux'

import mealPlannerReducer from '../modules/mealPlanner/mealPlanner.reducer'
import spoonacularReducer from '../modules/spoonacular/spoonacular.reducer'
import formReducer from '../modules/form/form.reducer'

const reducers = combineReducers({
  mealPlanner: mealPlannerReducer,
  spoonacular: spoonacularReducer,
  form: formReducer
})

export default reducers
