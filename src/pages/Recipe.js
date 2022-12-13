/* eslint-disable react/prop-types */
import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'
import RecipeItem from '../components/RecipeItem'
// import { setRecipeInfo } from '../modules/spoonacular/spoonacular.actions'
// import SpoonacularAPI from '../modules/spoonacular/spoonacular.api'

const Recipe = () => {
  /* const recipesAPI = new SpoonacularAPI()
  const { id } = useParams()
  const dispatch = useDispatch()

  React.useEffect(() => {
    recipesAPI.getRecipe(id).then(resp => dispatch(setRecipeInfo(resp)))
    console.log(recipe)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { recipe } = useSelector((state) => state.spoonacular)
*/
  return (
    <>
      <RecipeItem />
    </>
  )
}

export default Recipe
