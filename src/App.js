import React from 'react'
import RecipesAPI from './modules/spoonacular/spoonacular.api.js'
import RecipesList from './components/RecipesList'
const SpoonacularAPI = new RecipesAPI()

export const App = () => {
  const [recipesData, setRecipesData] = React.useState(null)
  const [phrase, setPhrase] = React.useState('')

  const getRecipesData = () => {
    SpoonacularAPI.getRecipes(phrase)
      .then(data => setRecipesData(data))

    console.log(recipesData)
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
      {recipesData && <RecipesList recipesData={recipesData} />}
    </div>
  )
}

export default App
