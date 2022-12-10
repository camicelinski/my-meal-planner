/* eslint-disable react/prop-types */
import React from 'react'

// An individual event displayed within the calendar grid itself
// can be clicked to open the main event view

const MealSmallIcon = ({ event, setViewingEvent }) => {
  return (
    <div
      className={`miniEvent ${event.type ? event.type.toLowerCase() : 'standard'}`}
      onClick={() => setViewingEvent(event)}
    >
      {event.name}
    </div>
  )
}

export default MealSmallIcon
