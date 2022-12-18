import { sortMeals } from './helperFunctions'

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

export const dateToInputFormat = (date) => {
  if (!date) {
    return null
  }

  const month = pad(date.getMonth() + 1)
  const day = pad(date.getDate())

  return `${date.getFullYear()}-${month}-${day}`
}

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
  const sortedEvents = sortMeals(events)
  return sortedEvents.filter(event => {
    const eventDate = toStartOfDay(event.date)
    return (date >= eventDate && date <= eventDate)
  })
}

export const getLastMonday = (d) => {
  d = new Date(d)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
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
