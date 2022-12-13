import React from 'react'
import PropTypes from 'prop-types'
import StyledError from './Error.styled'

export const Error = (props) => {
  const {
    className,
    text,
    ...otherProps
  } = props

  return (
    <StyledError>
      <p
        className={'error'}
        {...otherProps}
      >
        {text}
      </p>
    </StyledError>
  )
}

Error.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}

export default Error
