import React from 'react'
import { Route } from 'react-router-dom'
// import PostItemSmall from '../components/PostItem/PostItemSmall'
// import StyledLink from '../styled/components/Link.styled'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../components/Pagination/Pagination'
import RecipeItemSmall from '../components/RecipeItemSmall'
import StyledRecipes from '../styled/components/Recipes.styled'
// import { sortByDate } from '../helpers/sortByDate'
// import SpoonacularAPI from '../modules/spoonacular/spoonacular.api'
import { getRecipesList } from '../modules/spoonacular/spoonacular.actions'
// import MealPlannerAPI from '../modules/mealPlanner/mealPlanner.api'
// import { loadRecipesAction } from '../modules/mealPlanner/mealPlanner.actions'
import { getMyRecipes } from '../modules/mealPlanner/mealPlanner.actions'
import StyledLink from '../styled/components/Link.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Recipes = () => {
  // const { uid } = useParams()
  // const [documents] = useAllPrismicDocumentsByType('blog_post')
  // const { recipes } = useSelector((state) => state.spoonacular)

  // const RecipesAPI = new SpoonacularAPI()

  // const mealPlannerAPI = new MealPlannerAPI()

  const { recipes } = useSelector((state) => state.mealPlanner)
  const dispatch = useDispatch()
  console.log(recipes)

  const [phrase, setPhrase] = React.useState('')
  // const [recipesList, setRecipesList] = React.useState()
  // const [recipesToShow, setRecipesToShow] = React.useState([])
  // console.log(recipesToShow)
  const pageUrl = '/recipes'
  const activeClass = 'active'

  // const [data, setData] = React.useState([])
  React.useEffect(() => {
    dispatch(getMyRecipes())
    console.log(recipes)
    // setRecipesToShow(recipes)
    // mealPlannerAPI.load('/recipes').then(data => dispatch(loadRecipesAction(data)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const activeClass = 'active'

  const getRecipesData = () => {
    dispatch(getRecipesList(phrase))
    console.log(recipes)
  }

  const handleChange = (e) => {
    setPhrase(e.target.value)
    // const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(phrase.toLowerCase())
  }

  return (
    <StyledRecipes>
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
        {recipes &&
            (
              <Pagination
                path={pageUrl}
                limit={5}
              >
                {recipes && (
                  recipes.filter(recipe => recipe.title.toLowerCase().includes(phrase.toLowerCase())).map((recipe) => (
                    <RecipeItemSmall
                      key={recipe.id}
                      recipe={recipe}
                    />
                  ))
                )}
              </Pagination>
            )
        }
      </Route>
    </StyledRecipes>
  )
}

export default Recipes

/*
const CategoryPosts = () => {
  const { uid } = useParams()
  const [documents] = useAllPrismicDocumentsByType('blog_post')
  const pageUrl = `/category/${uid}`

  return (
    <main>
      <Route path={`${pageUrl}/:page`}>
        {documents && (
          <Pagination
            path={pageUrl}
            limit={5}
          >
            {documents && (
              documents.filter((post) =>
                post.data.categories.map((cat) => {
                  return cat.category.uid
                }).includes(uid)).sort(sortByDate).map((post, index) =>
                  <PostItemSmall
                    post={post}
                    key={index}
                  />
              )
            )}
          </Pagination>
        )}
      </Route>
    </main>
  )
}
*/
