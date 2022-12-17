/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MealSmallIcon from '../MealSmallIcon'

import {
  toStartOfDay,
  findEventsForDate,
  getLastMonday,
  dateToInputFormat
} from '../../../../helpers/calendarHelpers'

import { setActiveDate } from '../../../../modules/mealPlanner/mealPlanner.actions'
import { setFieldValue } from '../../../../modules/form/form.actions'

const Grid = ({ date, meals, setViewingMeal, setShowingMealForm, actualDate }) => {
  const { activeDate } = useSelector((state) => state.mealPlanner)

  const dispatch = useDispatch()

  const currentDate = toStartOfDay(new Date())
  const activeDay = toStartOfDay(new Date(activeDate))
  const startingDate = getLastMonday(activeDay)
  const ROWS_COUNT = 1

  const dates = []
  for (let i = 0; i < (ROWS_COUNT * 7); i++) {
    const date = new Date(startingDate)
    dates.push({ date, meals: findEventsForDate(meals, date) })
    startingDate.setDate(startingDate.getDate() + 1)
  }

  React.useEffect(() => {
  }, [startingDate])

  const handleClick = (date) => {
    dispatch(setActiveDate(date))
    console.log(date)
    console.log(currentDate)
  }

  const addMealOnDate = date => {
    setShowingMealForm({ visible: true, preselectedDate: date })
    dispatch(setFieldValue('date', dateToInputFormat(date)))
  }

  return (
    <>
      {dates.map((date, index) => {
        return (
          <div
            key={index}
            className={`cell ${date.date.getTime() === currentDate.getTime() ? 'current' : ''} ${date.date.getMonth() !== actualDate.getMonth() ? 'otherMonth' : ''} ${date.date.getTime() === activeDate.getTime() ? 'activedate' : ''}`}
            onClick={() => handleClick(date.date)}
          >
            <div className={'date'}>
              <div>
                <p className={'day'}>{date.date.getDate()}</p>
              </div>
              <div>
                <button
                  className={'addEventOnDay'}
                  onClick={() => addMealOnDate(date.date)}
                >
                  +
                </button>
              </div>
            </div>
            <div className={'small-icons'}>
              {date.meals.map((meal, index) =>
                <MealSmallIcon
                  key={index}
                  meal={meal}
                  setViewingMeal={setViewingMeal}
                />
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Grid
