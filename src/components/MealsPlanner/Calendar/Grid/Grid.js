/* eslint-disable react/prop-types */
import React from 'react'

import MealSmallIcon from '../MealSmallIcon'
import {
  toStartOfDay,
  findEventsForDate
} from '../../../../helpers/calendarHelpers'

// The grid of days, renders a month's worth of days and
// also populates the events on the relevant dates
const Grid = ({ date, events, setViewingEvent, setShowingEventForm, actualDate }) => {
  const ROWS_COUNT = 6
  const currentDate = toStartOfDay(new Date())

  // Finds the closest Monday relative to the first day of
  // the target month/year combination
  // Then increment upon this day until we have a full set
  // of date objects to work with
  const startingDate = new Date(date.getFullYear(), date.getMonth(), 1)
  startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1))

  const dates = []
  for (let i = 0; i < (ROWS_COUNT * 7); i++) {
    const date = new Date(startingDate)
    dates.push({ date, events: findEventsForDate(events, date) })
    startingDate.setDate(startingDate.getDate() + 1)
  }

  return (
    <>
      {dates.map((date, index) => {
        return (
          <div
            key={index}
            className={`cell ${date.date.getTime() === currentDate.getTime() ? 'current' : ''} ${date.date.getMonth() !== actualDate.getMonth() ? 'otherMonth' : ''}`}
          >
            <div className={'date'}>
              {date.date.getDate()}
              <button
                className={'addEventOnDay'}
                onClick={() => setShowingEventForm({ visible: true, preselectedDate: date.date })}
              >
                +
              </button>
            </div>
            {date.events.map((event, index) =>
              <MealSmallIcon
                key={index}
                event={event}
                setViewingEvent={setViewingEvent}
              />
            )}
          </div>
        )
      })}
    </>
  )
}

export default Grid
