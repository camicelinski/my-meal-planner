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

// The grid of days, renders a month's worth of days and
// also populates the events on the relevant dates
const Grid = ({ date, meals, setViewingMeal, setShowingMealForm, actualDate }) => {
  // const ROWS_COUNT = 6
  const ROWS_COUNT = 1
  // const currentDate = new Date()

  const { activeDate } = useSelector((state) => state.mealPlanner)
  const currentDate = toStartOfDay(new Date())
  const activeDay = toStartOfDay(new Date(activeDate))

  const dispatch = useDispatch()

  const startingDate = getLastMonday(activeDay)
  // const [startingDate, setStartingDate] = React.useState(getLastMonday(firstDate))

  React.useEffect(() => {
    // setStartingDate(getLastMonday(activeDate))
  }, [startingDate])

  // Finds the closest Monday relative to the first day of
  // the target month/year combination
  // Then increment upon this day until we have a full set
  // of date objects to work with
  // const startingDate = new Date(date.getFullYear(), date.getMonth(), 1)
  // startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1))

  const dates = []
  for (let i = 0; i < (ROWS_COUNT * 7); i++) {
    const date = new Date(startingDate)
    dates.push({ date, meals: findEventsForDate(meals, date) })
    startingDate.setDate(startingDate.getDate() + 1)
  }

  const handleClick = (date) => {
    // setActiveDate(date)
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
            {date.meals.map((meal, index) =>
              <MealSmallIcon
                key={index}
                meal={meal}
                setViewingMeal={setViewingMeal}
              />
            )}
          </div>
        )
      })}
    </>
  )
}

export default Grid
