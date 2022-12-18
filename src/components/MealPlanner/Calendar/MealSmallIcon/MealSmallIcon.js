/* eslint-disable react/prop-types */
import React from 'react'

const MealSmallIcon = ({ meal, setViewingMeal }) => {
  return (
    <div
      className={`miniEvent ${meal.type ? meal.type.toLowerCase() : 'standard'}`}
    >
    </div>
  )
}

export default MealSmallIcon
