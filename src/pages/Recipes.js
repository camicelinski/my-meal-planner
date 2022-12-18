/* eslint-disable react-hooks/exhaustive-deps */
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
import { getMyRecipes } from '../modules/mealPlanner/mealPlanner.actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Recipes = () => {
  const { recipes } = useSelector((state) => state.mealPlanner)
  const dispatch = useDispatch()

  const [phrase, setPhrase] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const RecipesAPI = new SpoonacularAPI()

  const pageUrl = '/recipes'
  const activeClass = 'active'

  React.useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getMyRecipes())
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

  const renderfilteredRecipes = () => {
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(phrase.toLowerCase()))

    if (filteredRecipes.length > 0) {
      return (
        <Pagination
          path={pageUrl}
          limit={5}
        >
          {filteredRecipes.map((recipe) => (
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
            placeholder={'search in My Recipes'}
            onChange={handleChange}
          />
          <button className={'magnifyingGlass'}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={'get-new-recipe'}>
          <StyledLink
            activeClassName={activeClass}
            to={'/find-recipe/1'}
          >
            <button
              className={'btn'}
              onClick={getRecipesData}
            >
              Search in Spoonacular
            </button>
          </StyledLink>
        </div>
      </section>
      <Route path={`${pageUrl}/:page`}>
        {renderfilteredRecipes()}
      </Route>
    </StyledRecipes>
  )
}

export default Recipes
