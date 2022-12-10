/* eslint-disable react/prop-types */
import React from 'react'
import Modal from '../../General/Modal'
import { dateToInputFormat } from '../../../helpers/calendarHelpers'

// Form to add new events or edit existing events
// In a real implementation, we'd have some frontend
// validation and also the equivalent in our
// backend service...
const MealForm = ({ setShowingEventForm, addEvent, editEvent, withEvent, setViewingEvent, preselectedDate }) => {
  const newEvent = withEvent || {}
  if (!withEvent && !!preselectedDate) {
    newEvent.dateFrom = dateToInputFormat(preselectedDate)
  }
  const [event, setEvent] = React.useState(newEvent)

  return (
    <Modal
      onClose={() => setShowingEventForm({ visible: false })}
      title={`${withEvent ? 'Edit event' : 'Add a new event'}`}
    >
      <div className={'form'}>
        <label>Name
          <input
            type={'text'}
            placeholder={'ie. My Event'}
            defaultValue={event.name}
            onChange={(e) => setEvent({ ...event, name: e.target.value })}
          />
        </label>

        <label>Date from
          <input
            type={'datetime-local'}
            defaultValue={event.dateFrom || dateToInputFormat(preselectedDate)}
            onChange={(e) => setEvent({ ...event, dateFrom: e.target.value })}
          />
        </label>

        <label>Date to
          <input
            type={'datetime-local'}
            defaultValue={event.dateTo}
            onChange={(e) => setEvent({ ...event, dateTo: e.target.value })}
          />
        </label>

        <label>Type
          <select
            value={event.type ? event.type.toLowerCase() : 'standard'}
            onChange={(e) => setEvent({ ...event, type: e.target.value })}
          >
            <option value={'standard'}>Standard</option>
            <option value={'busy'}>Busy</option>
            <option value={'holiday'}>Holiday</option>
          </select>
        </label>

        <label>Description
          <input
            type={'text'}
            placeholder={'Describe the event'}
            defaultValue={event.meta}
            onChange={(e) => setEvent({ ...event, meta: e.target.value })}
          />
        </label>

        {withEvent
          ? (
            <>
              <button onClick={() => editEvent(event)}>Edit event</button>
              <button
                className={'close'}
                onClick={() => {
                  setShowingEventForm({ visible: false })
                  setViewingEvent(event)
                }}
              >
                Cancel (go back to event view)
              </button>
            </>
            )
          : (
            <>
              <button onClick={() => addEvent(event)}>Add event to calendar</button>
              <button
                className={'close'}
                onClick={() => setShowingEventForm({ visible: false })}
              >
                Cancel (go back to calendar)
              </button>
            </>
            )}
      </div>
    </Modal>
  )
}

export default MealForm
