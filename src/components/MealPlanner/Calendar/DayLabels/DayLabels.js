import React from 'react'
import { DAYS_SHORT } from '../../../../helpers/calendarHelpers'

// Week day headers: Mon, Tue, Wed etc
const DayLabels = () => {
  return DAYS_SHORT.map((dayLabel, index) => {
    return (
      <div
        className={'dayLabel cell'}
        key={index}
      >
        {dayLabel}
      </div>
    )
  })
}

export default DayLabels
