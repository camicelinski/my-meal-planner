/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import FindRecipe from '../pages/FindRecipe'
import Recipes from '../pages/Recipes'
import Recipe from '../pages/Recipe'
import Groceries from '../pages/Groceries'

const Routes = ({ location }) => {
  return (
    <Switch>
      <Route
        exact
        path={'/'}
      >
        <Redirect to={'/home'} />
      </Route>
      <Route path={'/home'} >
        <Home />
      </Route>
      <Route path={'/recipes/:page'} >
        <Recipes />
      </Route>
      <Route path={'/find-recipe/:page'} >
        <FindRecipe />
      </Route>
      <Route
        path={'/recipe/:id/:title'}
        component={Recipe}
      />
      <Route
        path={'/groceries'}
        component={Groceries}
      />
      <Route
        path={'/404.html'}
        component={NotFound}
      />
      <Route>
        <Redirect to={'/404.html'} />
      </Route>
    </Switch>
  )
}

export default Routes
