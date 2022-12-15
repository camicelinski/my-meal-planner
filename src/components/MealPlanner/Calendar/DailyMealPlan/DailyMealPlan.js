/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MealPlannerAPI from '../../../../modules/mealPlanner/mealPlanner.api'
import { findEventsForDate } from '../../../../helpers/calendarHelpers'
import { sortMeals } from '../../../../helpers/helperFunctions'
// import parse from 'html-react-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// import { saveRecipeAction } from '../../modules/mealPlanner/mealPlanner.actions'
import StyledDailyMealPlan from './DailyMealPlan.styled'
import { loadMealsAction, getMyMeals } from '../../../../modules/mealPlanner/mealPlanner.actions'
// import { getMyRecipes } from '../../modules/mealPlanner/mealPlanner.actions'

const DailyMealPlan = () => {
  const { meals, activeDate } = useSelector((state) => state.mealPlanner)
  console.log(meals)

  const dispatch = useDispatch()
  const mealPlannerAPI = new MealPlannerAPI()

  React.useEffect(() => {
    mealPlannerAPI.load('/meals').then(data => dispatch(loadMealsAction(data)))
  }, [])

  const currentMeals = findEventsForDate(meals, activeDate)
  console.log(currentMeals)
  const sortedCurrentMeals = sortMeals(currentMeals)
  console.log(sortedCurrentMeals)

  const deleteMeal = (id) => {
    mealPlannerAPI.remove('/meals', id)
    dispatch(getMyMeals())
    console.log(meals)
  }

  return (
    <StyledDailyMealPlan>
      {sortedCurrentMeals && (
        sortedCurrentMeals.map((meal) => {
          return (
            <div
              key={`${meal.date}-${meal.id}`}
              className={'meal-info'}
            >
              <h4 className={`meal-type ${meal.type}`}>
                {meal.type}
              </h4>
              <div className={'meal-name-and-note'}>
                <p className={'meal-name'}>{meal.name}</p>
                <p className={'meal-note'}>{meal.note}</p>
              </div>
              <p className={'meal-servings'}>servings: {meal.servings}</p>
              <div className={'deleteMealItem'}>
                <button
                  className={'btn deleteMeal'}
                  onClick={() => deleteMeal(meal.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          )
        })
      )}
    </StyledDailyMealPlan>
  )
}

export default DailyMealPlan
