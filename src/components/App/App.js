import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
// import SpoonacularAPI from '../../modules/spoonacular/spoonacular.api.js'
import AnimatedSwitch from '../AnimatedSwitch.js'
import Header from '../Header'
import Footer from '../Footer'
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
        <div className={'content-wrapper'}>
          <Header />
          <AnimatedSwitch />
        </div>
        <Footer />
      </StyledApp>
    </Router>
  )
}

export default App
