/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveDate } from '../../../../modules/mealPlanner/mealPlanner.actions'

import StyledNavigation from './Navigation.styled'

import { MONTHS } from '../../../../helpers/calendarHelpers'

const Navigation = ({ date, setDate, setShowingEventForm }) => {
  const { activeDate } = useSelector((state) => state.mealPlanner)

  const dispatch = useDispatch()

  const moveForward = () => {
    const newDate = new Date(activeDate)
    newDate.setDate(newDate.getDate() + 7)
    setDate(newDate)
    dispatch(setActiveDate(newDate))
  }

  const moveBack = () => {
    const newDate = new Date(activeDate)
    newDate.setDate(newDate.getDate() - 7)
    setDate(newDate)
    dispatch(setActiveDate(newDate))
  }

  return (
    <StyledNavigation>
      <div className={'navigation'}>
        <div
          className={'back'}
          onClick={() => moveBack()}
        >
          <span className={'icon'}>{'<'} </span>
          <span className={'month'}>previous</span>
        </div>

        <div className={'monthAndYear'}>
          <span className={'month'}>{MONTHS[date.getMonth()]} </span>
          <span className={'year'}>{date.getFullYear()}</span>
        </div>

        <div
          className={'forward'}
          onClick={() => moveForward()}
        >
          <span className={'month'}>next</span>
          <span className={'icon'}> {'>'}</span>
        </div>
      </div>
    </StyledNavigation>
  )
}

export default Navigation
