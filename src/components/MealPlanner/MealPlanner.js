/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Calendar from './Calendar/Calendar'
import DailyMealPlan from './Calendar/DailyMealPlan'

import MealPlannerAPI from '../../modules/mealPlanner/mealPlanner.api.js'
import { loadMealsAction, setShowingMealFormAction } from '../../modules/mealPlanner/mealPlanner.actions'

import StyledMealPlanner from './MealPlanner.styled'

import { toStartOfDay } from '../../helpers/calendarHelpers'

const MealPlanner = () => {
  const { meals, isMealFormVisible } = useSelector((state) => state.mealPlanner)

  const dispatch = useDispatch()

  const mealPlannerAPI = new MealPlannerAPI()

  const currentDate = toStartOfDay(new Date())

  React.useEffect(() => {
    mealPlannerAPI.load('/meals').then(data => dispatch(loadMealsAction(data)))
    dispatch(setShowingMealFormAction(false))
  }, [isMealFormVisible])

  return (
    <StyledMealPlanner>
      <Calendar
        month={currentDate.getMonth() + 1}
        year={currentDate.getFullYear()}
        preloadedMeals={meals}
        isMealFormVisible={isMealFormVisible}
      />
      <DailyMealPlan />
    </StyledMealPlanner>
  )
}

export default MealPlanner
