import React from 'react'
import { Link } from 'react-router-dom'
import StyledNotFound from '../styled/components/NotFound.styled'

const NotFound = () => {
  return (
    <>
      <StyledNotFound>Essa página não existe. Retorne à <Link to={'/'}>página principal.</Link></StyledNotFound>
    </>
  )
}

export default NotFound
