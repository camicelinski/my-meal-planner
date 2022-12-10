/* eslint-disable react/prop-types */
import React from 'react'
import Navigation from './Navigation'
import Loader from '../../General/Loader'
import DayLabels from './DayLabels'
import Grid from './Grid'
import MealForm from '../MealForm'
import Meal from '../Meal/Meal'
import Feedback from '../../General/Feedback'
import { parseEvents } from '../../../helpers/calendarHelpers'
// Sample events calendar build, explained and detailed over at
// https://justacoding.blog/react-calendar-component-example-with-events/

const { useState, useEffect } = React

// Some config for convenience
const MOCK_LOADING_TIME = 1000
// const SAMPLE_META = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

// The "main" component, our actual calendar
const Calendar = ({ month, year, preloadedEvents = [] }) => {
  const selectedDate = new Date(year, month - 1)

  const [date, setDate] = useState(selectedDate)
  const [viewingEvent, setViewingEvent] = useState(false)
  const [showingEventForm, setShowingEventForm] = useState({ visible: false })
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState()

  const parsedEvents = parseEvents(preloadedEvents)
  const [events, setEvents] = useState(parsedEvents)

  useEffect(() => {
  // You could retrieve fresh events data here
    // So whenever the calendar month is toggled,
    // make a request and populate `events` with the
    // new results

    // Would be better to cache these results so you
    // don't make needless network requests
    // So you could maintain an array of `date`s
    // and simply consult this before you fire off
    // any new network requests
    console.log("Date has changed... Let's load some fresh data")
  }, [date])

  const addEvent = (event) => {
    setIsLoading(true)
    setShowingEventForm({ visible: false })

    // These timeouts are to imitate HTTP requests
    // So in a real impementation, you'd interact
    // with your backend service here and handle
    // the result accordingly...
    // Likewise for `editEvent` and `deleteEvent`
    // below
    setTimeout(() => {
      const parsedEvents = parseEvents([event])

      const updatedEvents = [...events]
      updatedEvents.push(parsedEvents[0])

      setEvents(updatedEvents)
      setIsLoading(false)
      showFeedback({ message: 'Event created successfully', type: 'success' })
    }, MOCK_LOADING_TIME)
  }

  const editEvent = (event) => {
    setIsLoading(true)
    setShowingEventForm({ visible: false })

    setTimeout(() => {
      const parsedEvent = parseEvents([event])

      const updatedEvents = [...events].map(updatedEvent => {
        return updatedEvent.id === event.id ? parsedEvent[0] : updatedEvent
      })

      setEvents(updatedEvents)
      setIsLoading(false)
      showFeedback({ message: 'Event edited successfully', type: 'success' })
    }, MOCK_LOADING_TIME)
  }

  const deleteEvent = (event) => {
    setIsLoading(true)
    setViewingEvent(null)

    setTimeout(() => {
      const updatedEvents = [...events].filter(finalEvent => finalEvent.id !== event.id)

      setEvents(updatedEvents)
      setIsLoading(false)
      showFeedback({ message: 'Event deleted successfully', type: 'success' })
    }, MOCK_LOADING_TIME)
  }

  const showFeedback = ({ message, type, timeout = 2500 }) => {
    setFeedback({ message, type })
    setTimeout(() => {
      setFeedback(null)
    }, timeout)
  }

  return (
    <div className={'calendar'}>
      {isLoading && <Loader />}

      {feedback &&
      <Feedback
        message={feedback.message}
        type={feedback.type}
      />
      }

      <Navigation
        date={date}
        setDate={setDate}
        setShowingEventForm={setShowingEventForm}
      />

      <DayLabels />

      <Grid
        date={date}
        events={events}
        setShowingEventForm={setShowingEventForm}
        setViewingEvent={setViewingEvent}
        actualDate={date}
      />

      {viewingEvent &&
        <Meal
          event={viewingEvent}
          setShowingEventForm={setShowingEventForm}
          setViewingEvent={setViewingEvent}
          deleteEvent={deleteEvent}
        />
      }

      {showingEventForm && showingEventForm.visible &&
        <MealForm
          withEvent={showingEventForm.withEvent}
          preselectedDate={showingEventForm.preselectedDate}
          setShowingEventForm={setShowingEventForm}
          addEvent={addEvent}
          editEvent={editEvent}
          setViewingEvent={setViewingEvent}
        />
      }
    </div>
  )
}

export default Calendar
