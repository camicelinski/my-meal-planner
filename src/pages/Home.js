/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'
// import Header from '../components/Header'
import MealPlanner from '../components/MealPlanner'
// import Footer from '../components/Footer'

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
