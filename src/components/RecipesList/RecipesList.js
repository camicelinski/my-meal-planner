/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'

import Recipe from '../Recipe'
import Pagination from '../Pagination/Pagination'

import StyledRecipesList from './RecipesList.styled'

const RecipesList = ({ recipesData, url }) => {
  console.log(recipesData)

  return (
    <Route path={`${url}/:page`}>
      <StyledRecipesList>
        {recipesData && (
          <Pagination
            path={url}
            limit={5}
          >
            {recipesData.results.map(recipe => {
              return (
                <Recipe
                  key={recipe.id}
                  recipe={recipe}
                />
              )
            })}
          </Pagination>
        )}
      </StyledRecipesList>
    </Route>
  )
}

export default RecipesList
