import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../Nav'
import StyledHeader from './Header.styled'
import StyledImage from './Image.styled'
import img from '../../img/my-meal-planner-theme.png'

const Header = () => {
  const location = useLocation()

  const isRecipePage = (location) => {
    return location.pathname.includes('/recipe/')
  }

  return (
    <StyledHeader>
      <div className={'header'}>
        <div className={'h1-container'}>
          <h1>My Meal Planner</h1>
          <Nav />
        </div>
        <StyledImage
          className={isRecipePage(location) ? 'hidden' : 'bg'}
          src={img}
          alt={'vegetables'}
        />
      </div>
    </StyledHeader>
  )
}

export default Header
