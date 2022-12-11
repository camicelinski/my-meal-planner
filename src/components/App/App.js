import React from 'react'
import SpoonacularAPI from '../../modules/spoonacular/spoonacular.api.js'
import RecipesList from '../RecipesList'
import MealPlanner from '../MealPlanner'
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
    <div className={'App'}>
      <section className={'controls'}>
        <input
          type={'text'}
          placeholder={'e.g. pasta'}
          onChange={handleChange}
        />
        <button onClick={getRecipesData}>Get Recipes</button>
      </section>
      <section>
        <MealPlanner />
      </section>
      {recipesData && <RecipesList recipesData={recipesData} />}
    </div>
  )
}

export default App
