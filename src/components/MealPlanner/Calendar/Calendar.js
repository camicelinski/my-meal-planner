/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

import Navigation from './Navigation'
import DayLabels from './DayLabels'
import Grid from './Grid'
import MealForm from '../MealForm'
import Loader from '../../General/Loader'

import { parseEvents } from '../../../helpers/calendarHelpers'

const Calendar = ({ month, year, preloadedMeals = [], isMealFormVisible }) => {
  const selectedDate = new Date(year, month - 1)
  const parsedMeals = parseEvents(preloadedMeals)

  const [date, setDate] = useState(selectedDate)
  const [showingMealForm, setShowingMealForm] = useState({ visible: isMealFormVisible })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
  }, [date, setShowingMealForm])

  return (
    <div className={'calendar'}>
      {isLoading && <Loader />}

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
        />
      }
    </div>
  )
}

export default Calendar
