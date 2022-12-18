/* eslint-disable react/prop-types */
import React from 'react'

import StyledFeedback from './Feedback.styled'

const Feedback = ({ message, type }) => {
  return (
    <StyledFeedback
      className={`feedback ${type}`}
    >
      <div
        className={'overlay'}
      >
      </div>
      <div className={'modal'}>
        {message}
      </div>
    </StyledFeedback>
  )
}

export default Feedback
