import React from 'react'
import { Link } from 'react-router-dom'

import StyledGroceries from '../styled/components/Groceries.styled'

const Groceries = () => {
  return (
    <>
      <StyledGroceries>Page under development. Return to <Link to={'/'}>home.</Link></StyledGroceries>
    </>
  )
}

export default Groceries
