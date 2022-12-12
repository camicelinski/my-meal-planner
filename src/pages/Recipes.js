import React from 'react'
import { Route } from 'react-router-dom'
// import PostItemSmall from '../components/PostItem/PostItemSmall'
// import StyledLink from '../styled/components/Link.styled'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../components/Pagination/Pagination'
import RecipeItemSmall from '../components/RecipeItemSmall'
// import { sortByDate } from '../helpers/sortByDate'
// import SpoonacularAPI from '../modules/spoonacular/spoonacular.api'
import { getRecipesList } from '../modules/spoonacular/spoonacular.actions'

const Recipes = () => {
  // const { uid } = useParams()
  // const [documents] = useAllPrismicDocumentsByType('blog_post')
  const { recipes } = useSelector((state) => state.spoonacular)
  const dispatch = useDispatch()

  // const RecipesAPI = new SpoonacularAPI()

  const [phrase, setPhrase] = React.useState('')

  const pageUrl = '/recipes'
  // const activeClass = 'active'

  const getRecipesData = () => {
    dispatch(getRecipesList(phrase))
    console.log(recipes)
  }

  const handleChange = (e) => {
    setPhrase(e.target.value)
  }

  return (
    <main>
      <section className={'controls'}>
        <input
          type={'text'}
          placeholder={'e.g. pasta'}
          onChange={handleChange}
        />
        <button onClick={getRecipesData}>Get Recipes</button>
      </section>
      <Route path={`${pageUrl}/:page`}>
        {recipes && (
          <Pagination
            path={pageUrl}
            limit={5}
          >
            {recipes && (
              recipes.map((recipe) => (
                <RecipeItemSmall
                  key={recipe.id}
                  recipe={recipe}
                />
              ))
            )}
          </Pagination>
        )}
      </Route>
    </main>
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
