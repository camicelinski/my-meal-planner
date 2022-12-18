import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Pagination from '../components/Pagination/Pagination'
import RecipeItemSmall from '../components/RecipeItemSmall'
import Loader from '../components/General/Loader'

import StyledLink from '../styled/components/Link.styled'
import StyledRecipes from '../styled/components/Recipes.styled'

import SpoonacularAPI from '../modules/spoonacular/spoonacular.api'
import { setRecipes } from '../modules/spoonacular/spoonacular.actions'

const FindRecipe = () => {
  const { recipes } = useSelector((state) => state.spoonacular)
  const dispatch = useDispatch()

  const [phrase, setPhrase] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const RecipesAPI = new SpoonacularAPI()

  const pageUrl = '/find-recipe'
  const activeClass = 'active'

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getRecipesData = () => {
    setIsLoading(true)
    RecipesAPI.getRecipes(phrase)
      .then((resp) => dispatch(setRecipes(resp.results)))
      .then(() => setIsLoading(false))
  }

  const handleChange = (e) => {
    setPhrase(e.target.value)
  }

  const renderRecipes = () => {
    if (recipes.length > 0) {
      return (
        <Pagination
          path={pageUrl}
          limit={5}
        >
          {recipes.map((recipe) => (
            <RecipeItemSmall
              key={recipe.id}
              recipeData={recipe}
            />
          ))}
        </Pagination>
      )
    } else {
      return <p className={'no-results'}>No results found.</p>
    }
  }

  return (
    <StyledRecipes>
      {isLoading && <Loader />}
      <section className={'controls'}>
        <div className={'search'}>
          <input
            type={'text'}
            placeholder={'e.g. Chocolate Cookies'}
            onChange={handleChange}
          />
        </div>
        <div className={'get-new-recipe'}>
          <StyledLink
            activeClassName={activeClass}
            to={'/find-recipe/1'}
          >
            <button
              type={'submit'}
              className={'btn'}
              onClick={getRecipesData}
            >
              Search in Spoonacular
            </button>
          </StyledLink>
        </div>
      </section>
      <Route path={`${pageUrl}/:page`}>
        {renderRecipes()}
      </Route>
    </StyledRecipes>
  )
}

export default FindRecipe
