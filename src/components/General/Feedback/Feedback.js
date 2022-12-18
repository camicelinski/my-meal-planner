/* eslint-disable react/prop-types */
import React from 'react'

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
