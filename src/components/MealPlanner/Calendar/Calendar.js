/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

import Navigation from './Navigation'
import DayLabels from './DayLabels'
import Grid from './Grid'
import MealForm from '../MealForm'
import Loader from '../../General/Loader'
import Feedback from '../../General/Feedback'

import { parseEvents } from '../../../helpers/calendarHelpers'

const Calendar = ({ month, year, preloadedMeals = [], isMealFormVisible }) => {
  const selectedDate = new Date(year, month - 1)
  const parsedMeals = parseEvents(preloadedMeals)

  const [date, setDate] = useState(selectedDate)
  // const [viewingMeal, setViewingMeal] = useState(false)
  const [showingMealForm, setShowingMealForm] = useState({ visible: isMealFormVisible })
  const [isLoading, setIsLoading] = useState(false)
  // const [feedback, setFeedback] = useState()
  // const [meals, setMeals] = useState(parsedMeals)

  useEffect(() => {
  }, [date, setShowingMealForm])
  /*
  const addMeal = (meal) => {
    setIsLoading(true)
    setShowingMealForm({ visible: false })
  }
    setTimeout(() => {
      const parsedMeals = parseEvents([meal])

      const updatedMeals = [...meals]
      updatedMeals.push(parsedMeals[0])
      console.log(updatedMeals)

      setMeals(updatedMeals)
      setIsLoading(false)
      showFeedback({ message: 'Meal created successfully', type: 'success' })
    }, MOCK_LOADING_TIME)

  }

  const deleteMeal = (meal) => {
    setIsLoading(true)
    setViewingMeal(null)

    setTimeout(() => {
      const updatedMeals = [...meals].filter(finalMeal => finalMeal.id !== meal.id)

      setMeals(updatedMeals)
      setIsLoading(false)
      showFeedback({ message: 'Meal deleted successfully', type: 'success' })
    }, 0)
  }

  const showFeedback = ({ message, type, timeout = 2500 }) => {
    setFeedback({ message, type })
    setTimeout(() => {
      setFeedback(null)
    }, timeout)
  }
*/
  return (
    <div className={'calendar'}>
      {isLoading && <Loader />}

      {isLoading &&
        <Feedback
          // message={feedback.message}
          // type={feedback.type}
        />
      }

      <Navigation
        date={date}
        setDate={setDate}
        setShowingMealForm={setShowingMealForm}
      />

      <DayLabels />

      <Grid
        date={date}
        meals={parsedMeals}
        setShowingMealForm={setShowingMealForm}
        actualDate={date}
      />

      {showingMealForm && showingMealForm.visible &&
        <MealForm
          withMeal={showingMealForm.withMeal}
          preselectedDate={showingMealForm.preselectedDate}
          setShowingMealForm={setShowingMealForm}
          setIsLoading={setIsLoading}
          // addMeal={addMeal}
          // setViewingMeal={setViewingMeal}
          // errors={errors}
        />
      }
    </div>
  )
}

export default Calendar
