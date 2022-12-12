/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
import RecipeItem from '../components/RecipeItem'
// import { getRecipeInfo } from '../modules/spoonacular/spoonacular.actions'

const Recipe = () => {
  const { recipe } = useSelector((state) => state.spoonacular)
  // const { id } = useParams()

  return (
    <>
      {recipe && (
        <RecipeItem recipe={recipe} />
      )}
    </>
  )
}

export default Recipe
