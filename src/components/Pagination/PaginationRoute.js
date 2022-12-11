/* eslint-disable react/prop-types */
import React from 'react'
import { useParams } from 'react-router-dom'
import { StyledPaginationRoute, StyledPagLink } from '../../styled/components/PaginationRoute.styled'

const PaginationRoute = props => {
  const { children, length, path, limit = 1 } = props

  const { page } = useParams()
  const begin = limit * (page - 1)
  const end = page * limit

  const itemsLength = length || children.length
  const pages = Math.ceil(itemsLength / limit)

  const activeClass = 'active'

  const links = (new Array(pages).fill(0)).map(
    (item, index) =>
      <div key={index}>
        <li>
          <StyledPagLink
            to={`${path}/${index + 1}`}
            activeClassName={activeClass}
          >
            {index + 1}
          </StyledPagLink>
        </li>
      </div>
  )

  return (
    <>
      {children.slice(begin, end)}
      <StyledPaginationRoute>
        <ul>{links}</ul>
      </StyledPaginationRoute>
    </>
  )
}

export default PaginationRoute
