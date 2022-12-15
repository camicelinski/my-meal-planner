/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MONTHS } from '../../../../helpers/calendarHelpers'
import { setActiveDate } from '../../../../modules/mealPlanner/mealPlanner.actions'

import StyledNavigation from './Navigation.styled'

// Top bar, contains the month/year combo as well as back/forward links
const Navigation = ({ date, setDate, setShowingEventForm }) => {
  const { activeDate } = useSelector((state) => state.mealPlanner)
  const dispatch = useDispatch()

  // React.useEffect(() => {
  // }, [activeDate])

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
          <span className={'month'}>{MONTHS[date.getMonth() === 0 ? 11 : date.getMonth() - 1]}</span>
        </div>

        <div className={'monthAndYear'}>
          <span className={'month'}>{MONTHS[date.getMonth()]} </span>
          <span className={'year'}>{date.getFullYear()}</span>
        </div>

        <div
          className={'forward'}
          onClick={() => moveForward()}
        >
          <span className={'month'}>{MONTHS[date.getMonth() === 11 ? 0 : date.getMonth() + 1]}</span>
          <span className={'icon'}> {'>'}</span>
        </div>
      </div>
    </StyledNavigation>
  )
}

export default Navigation
