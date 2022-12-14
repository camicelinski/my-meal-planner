/* eslint-disable react/prop-types */
import React from 'react'
import { MONTHS } from '../../../../helpers/calendarHelpers'

import StyledNavigation from './Navigation.styled'

// Top bar, contains the month/year combo as well as back/forward links
const Navigation = ({ date, setDate, setShowingEventForm }) => {
  return (
    <StyledNavigation>
      <div className={'navigation'}>
        <div
          className={'back'}
          onClick={() => {
            const newDate = new Date(date)
            newDate.setMonth(newDate.getMonth() - 1)
            setDate(newDate)
          }}
        >
          <span className={'icon'}>{'<'} </span>
          <span className={'month'}>{MONTHS[date.getMonth() === 0 ? 11 : date.getMonth() - 1]}</span>
        </div>

        <div className={'monthAndYear'}>
          <span className={'month'}>{MONTHS[date.getMonth()]} </span>
          <span className={'year'}>{date.getFullYear()}</span>
        </div>

        <div
          className={'forward'}
          onClick={() => {
            const newDate = new Date(date)
            newDate.setMonth(newDate.getMonth() + 1)
            setDate(newDate)
          }}
        >
          <span className={'month'}>{MONTHS[date.getMonth() === 11 ? 0 : date.getMonth() + 1]}</span>
          <span className={'icon'}> {'>'}</span>
        </div>
      </div>
    </StyledNavigation>
  )
}

export default Navigation
