import React from 'react'
import { Link } from 'react-router-dom'

import StyledNotFound from '../styled/components/NotFound.styled'

const NotFound = () => {
  return (
    <>
      <StyledNotFound>Page not found. Return to <Link to={'/'}>home.</Link></StyledNotFound>
    </>
  )
}

export default NotFound
