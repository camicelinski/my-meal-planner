import { sortMeals } from './helperFunctions'
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

  return `${date.getFullYear()}-${month}-${day}`
}

// Could be used to filter out invalid events data also
// (ie. missing properties) or events that can't be parsed
// to contain valid to/from dates
export const parseEvents = (events) => {
  return events.map(event => {
    const date = new Date(event.date)

    return {
      ...event,
      date
    }
  })
}

export const findEventsForDate = (events, date) => {
  // console.log(date)
  // const dateTime = date.getTime()
  const sortedEvents = sortMeals(events)
  return sortedEvents.filter(event => {
    // console.log(toStartOfDay(event.date))
    const eventDate = toStartOfDay(event.date)
    // const eventFromTime = toStartOfDay(event.from).getTime()
    // const eventToTime = toStartOfDay(event.to).getTime()

    return (date >= eventDate && date <= eventDate)
    // return (dateTime >= eventFromTime && dateTime <= eventToTime)
  })
}

export const getLastMonday = (d) => {
  d = new Date(d)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) // adjust when day is sunday
  return new Date(d.setDate(diff))
}

export const generateDates = (startingDate, meals, rows) => {
  const newDates = []
  for (let i = 0; i < (rows * 7); i++) {
    const date = new Date(startingDate)
    newDates.push({ date, meals: findEventsForDate(meals, date) })
    startingDate.setDate(startingDate.getDate() + 1)
  }
  return newDates
}
