/* eslint-disable react/prop-types */
import React from 'react'
import { MONTHS } from '../../../../helpers/calendarHelpers'

// Top bar, contains the month/year combo as well as back/forward links
const Navigation = ({ date, setDate, setShowingEventForm }) => {
  return (
    <div className={'navigation'}>
      <div
        className={'back'}
        onClick={() => {
          const newDate = new Date(date)
          newDate.setMonth(newDate.getMonth() - 1)
          setDate(newDate)
        }}
      >
        {'<-'} {MONTHS[date.getMonth() === 0 ? 11 : date.getMonth() - 1]}
      </div>

      <div className={'monthAndYear'}>
        {MONTHS[date.getMonth()]} {date.getFullYear()}
        <button
          onClick={() => setShowingEventForm({ visible: true })}
        >
          +
        </button>
      </div>

      <div
        className={'forward'}
        onClick={() => {
          const newDate = new Date(date)
          newDate.setMonth(newDate.getMonth() + 1)
          setDate(newDate)
        }}
      >
        {MONTHS[date.getMonth() === 11 ? 0 : date.getMonth() + 1]} {'->'}
      </div>
    </div>
  )
}

export default Navigation
