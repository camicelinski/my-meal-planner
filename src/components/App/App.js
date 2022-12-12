import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
// import SpoonacularAPI from '../../modules/spoonacular/spoonacular.api.js'
import AnimatedSwitch from '../AnimatedSwitch.js'
// import MonthlyPlanner from './components/Calendar/MonthlyPlanner'
// const RecipesAPI = new SpoonacularAPI()

export const App = () => {
  return (
    <Router>
      <div className={'App'}>
        <AnimatedSwitch />
      </div>
    </Router>
  )
}

export default App
