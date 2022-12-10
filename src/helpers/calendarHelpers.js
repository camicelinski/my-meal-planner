// Utilities/helpers
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const toStartOfDay = (date) => {
  const newDate = new Date(date)
  newDate.setHours(0)
  newDate.setMinutes(0)
  newDate.setSeconds(0)
  newDate.setMilliseconds(0)
  return newDate
}

const pad = (input) => {
  return input < 10 ? '0' + input : input
}

// I'm using default <input type="datepick-local">,
// so a specific date format is required
export const dateToInputFormat = (date) => {
  if (!date) {
    return null
  }

  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())

  return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}`
}

// Could be used to filter out invalid events data also
// (ie. missing properties) or events that can't be parsed
// to contain valid to/from dates
export const parseEvents = (events) => {
  return events.map(event => {
    const from = new Date(event.dateFrom)
    const to = new Date(event.dateTo)

    return {
      ...event,
      from,
      to
    }
  })
}

export const findEventsForDate = (events, date) => {
  const dateTime = date.getTime()

  return events.filter(event => {
    const eventFromTime = toStartOfDay(event.from).getTime()
    const eventToTime = toStartOfDay(event.to).getTime()

    return (dateTime >= eventFromTime && dateTime <= eventToTime)
  })
}
