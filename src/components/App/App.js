import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
// import SpoonacularAPI from '../../modules/spoonacular/spoonacular.api.js'
import AnimatedSwitch from '../AnimatedSwitch.js'
// import MonthlyPlanner from './components/Calendar/MonthlyPlanner'
// const RecipesAPI = new SpoonacularAPI()
import GlobalStyle from '../../styled/GlobalStyle'
import ResetStyle from '../../styled/ResetStyle'
import StyledApp from './App.styled.js'

export const App = () => {
  return (
    <Router>
      <ResetStyle />
      <GlobalStyle />
      <StyledApp className={'App'}>
        <AnimatedSwitch />
      </StyledApp>
    </Router>
  )
}

export default App
