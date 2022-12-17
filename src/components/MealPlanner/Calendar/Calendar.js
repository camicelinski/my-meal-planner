/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import Navigation from './Navigation'
import Loader from '../../General/Loader'
import DayLabels from './DayLabels'
import Grid from './Grid'
// import DailyMealPlan from './DailyMealPlan'
import MealForm from '../MealForm'
import Meal from '../Meal/Meal'
import Feedback from '../../General/Feedback'
// import validateForm from '../../../helpers/validateForm'
import { parseEvents } from '../../../helpers/calendarHelpers'
// import MealPlannerAPI from '../../../modules/mealPlanner/mealPlanner.api'
// import { clearFields } from '../../../modules/form/form.actions'

// Some config for convenience
const MOCK_LOADING_TIME = 1000

const Calendar = ({ month, year, preloadedMeals = [], isMealFormVisible }) => {
  const selectedDate = new Date(year, month - 1)
  const parsedMeals = parseEvents(preloadedMeals)

  // const mealPlannerAPI = new MealPlannerAPI()
  // const dispatch = useDispatch()

  const [date, setDate] = useState(selectedDate)
  const [viewingMeal, setViewingMeal] = useState(false)
  const [showingMealForm, setShowingMealForm] = useState({ visible: isMealFormVisible })
  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState()
  const [meals, setMeals] = useState(parsedMeals)
  // const [errors, setErrors] = React.useState([])

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
  /*
  const addMeal = (meal) => {
    setIsLoading(true)
    setShowingMealForm({ visible: false })
  }
  */
  // These timeouts are to imitate HTTP requests
  // So in a real impementation, you'd interact
  // with your backend service here and handle
  // the result accordingly...
  // Likewise for `editEvent` and `deleteEvent`
  // below
  /*
    setTimeout(() => {
      const parsedMeals = parseEvents([meal])

      const updatedMeals = [...meals]
      updatedMeals.push(parsedMeals[0])
      console.log(updatedMeals)

      setMeals(updatedMeals)
      setIsLoading(false)
      showFeedback({ message: 'Meal created successfully', type: 'success' })
    }, MOCK_LOADING_TIME)

  }
  */
  const deleteMeal = (meal) => {
    setIsLoading(true)
    setViewingMeal(null)

    setTimeout(() => {
      const updatedMeals = [...meals].filter(finalMeal => finalMeal.id !== meal.id)

      setMeals(updatedMeals)
      setIsLoading(false)
      showFeedback({ message: 'Meal deleted successfully', type: 'success' })
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
        setShowingMealForm={setShowingMealForm}
      />

      <DayLabels />

      <Grid
        date={date}
        meals={parsedMeals}
        setShowingMealForm={setShowingMealForm}
        setViewingMeal={setViewingMeal}
        actualDate={date}
      />

      {viewingMeal &&
        <Meal
          event={viewingMeal}
          setShowingMealForm={setShowingMealForm}
          setViewingMeal={setViewingMeal}
          deleteMeal={deleteMeal}
        />
      }

      {showingMealForm && showingMealForm.visible &&
        <MealForm
          withMeal={showingMealForm.withMeal}
          preselectedDate={showingMealForm.preselectedDate}
          setShowingMealForm={setShowingMealForm}
          setIsLoading={setIsLoading}
          // addMeal={addMeal}
          setViewingMeal={setViewingMeal}
          // errors={errors}
        />
      }
    </div>
  )
}

export default Calendar
