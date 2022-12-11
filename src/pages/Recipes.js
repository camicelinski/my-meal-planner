import React from 'react'
import { Route } from 'react-router-dom'
// import PostItemSmall from '../components/PostItem/PostItemSmall'
import Pagination from '../components/Pagination/Pagination'
import RecipesList from '../components/RecipesList'
// import { sortByDate } from '../helpers/sortByDate'
import SpoonacularAPI from '../modules/spoonacular/spoonacular.api'

const Recipes = () => {
  // const { uid } = useParams()
  // const [documents] = useAllPrismicDocumentsByType('blog_post')

  const RecipesAPI = new SpoonacularAPI()

  const [recipesData, setRecipesData] = React.useState(null)
  const [phrase, setPhrase] = React.useState('')

  const pageUrl = '/recipes'

  const getRecipesData = () => {
    RecipesAPI.getRecipes(phrase)
      .then(data => setRecipesData(data))
  }

  const handleChange = (e) => {
    setPhrase(e.target.value)
  }

  return (
    <main>
      <Route path={`${pageUrl}/:page`}>
        <section className={'controls'}>
          <input
            type={'text'}
            placeholder={'e.g. pasta'}
            onChange={handleChange}
          />
          <button onClick={getRecipesData}>Get Recipes</button>
        </section>
        {recipesData && (
          <Pagination
            path={pageUrl}
            limit={5}
          >
            {recipesData && <RecipesList recipesData={recipesData} />}
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
