import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import SpoonacularAPI from '../../modules/spoonacular/spoonacular.api.js'
import RecipesList from '../RecipesList'
import AnimatedSwitch from '../AnimatedSwitch.js'
// import MonthlyPlanner from './components/Calendar/MonthlyPlanner'
const RecipesAPI = new SpoonacularAPI()

export const App = () => {
  const [recipesData, setRecipesData] = React.useState(null)
  const [phrase, setPhrase] = React.useState('')

  const getRecipesData = () => {
    RecipesAPI.getRecipes(phrase)
      .then(data => setRecipesData(data))
  }

  const handleChange = (e) => {
    setPhrase(e.target.value)
  }

  return (
    <Router>
      <div className={'App'}>
        <section className={'controls'}>
          <input
            type={'text'}
            placeholder={'e.g. pasta'}
            onChange={handleChange}
          />
          <button onClick={getRecipesData}>Get Recipes</button>
        </section>
        <AnimatedSwitch />
        {recipesData && <RecipesList recipesData={recipesData} />}
      </div>
    </Router>
  )
}

export default App
