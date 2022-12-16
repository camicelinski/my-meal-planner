/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Home from '../pages/Home'
// import MealPlanner from './MealPlanner'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import FindRecipe from '../pages/FindRecipe'
import Recipes from '../pages/Recipes'
import Recipe from '../pages/Recipe'
// import CategoryPosts from '../pages/CategoryPosts'
// import Post from '../pages/Post'
// import AboutUs from '../pages/AboutUs'

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

/*
const Routes = ({ location }) => {
  return (
    <Switch>
      <Route
        exact
        path={'/'}
      >
        <Redirect to={'/home/1'} />
      </Route>
      <Route path={'/home/:page'} >
        <Home />
      </Route>
      <Route path={'/category/:uid/:page'} >
        <CategoryPosts />
      </Route>
      <Route
        path={'/post/:uid'}
        component={Post}
      />
      <Route path={'/about-us'}>
        <AboutUs />
      </Route>
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
*/
