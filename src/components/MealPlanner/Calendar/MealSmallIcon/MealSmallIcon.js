/* eslint-disable react/prop-types */
import React from 'react'

// An individual event displayed within the calendar grid itself
// can be clicked to open the main event view

const MealSmallIcon = ({ meal, setViewingMeal }) => {
  return (
    <div
      className={`miniEvent ${meal.type ? meal.type.toLowerCase() : 'standard'}`}
    >
    </div>
  )
}

export default MealSmallIcon
