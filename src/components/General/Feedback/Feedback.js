/* eslint-disable react/prop-types */
import React from 'react'

// Generic component - simple feedback after an action has taken place
const Feedback = ({ message, type }) => {
  return (
    <div
      className={`feedback ${type}`}
    >
      {message}
    </div>
  )
}

export default Feedback
