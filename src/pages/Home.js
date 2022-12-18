/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'

import MealPlanner from '../components/MealPlanner'

const Home = () => {
  const pageUrl = '/home'

  return (
    <>
      <Route path={pageUrl}>
        <main>
          <MealPlanner />
        </main>
      </Route>
    </>
  )
}

export default Home
