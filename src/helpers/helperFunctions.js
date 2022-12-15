export const getCurrentDate = () => {
  const timezoneOffset = new Date().getTimezoneOffset() * 60000
  return new Date(Date.now() - timezoneOffset).toISOString().slice(0, 10)
}

const sortOrder = [
  'breakfast',
  'elevenses',
  'lunch',
  'snacks',
  'dinner'
]

export const sortMeals = (meals) => {
  const sortField = 'type'
  const sortByObject = sortOrder.reduce((obj, item, index) => {
    return {
      ...obj,
      [item]: index
    }
  }, {})

  return meals.sort((a, b) => sortByObject[a[sortField]] - sortByObject[b[sortField]])
}
