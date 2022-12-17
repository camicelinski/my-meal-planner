/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MealPlannerAPI from '../../../../modules/mealPlanner/mealPlanner.api'
import Modal from '../../../General/Modal'
import { findEventsForDate } from '../../../../helpers/calendarHelpers'
import { sortMeals } from '../../../../helpers/helperFunctions'
// import parse from 'html-react-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// import { saveRecipeAction } from '../../modules/mealPlanner/mealPlanner.actions'
import StyledDailyMealPlan from './DailyMealPlan.styled'
import StyledLink from '../../../../styled/components/Link.styled'
import { getMyMeals, getMyRecipes } from '../../../../modules/mealPlanner/mealPlanner.actions'

const DailyMealPlan = () => {
  const { meals, recipes, activeDate } = useSelector((state) => state.mealPlanner)
  console.log(meals)

  const [displayConfirmationModal, setDisplayConfirmationModal] = React.useState(false)

  const titleToUrl = (name) => {
    return name.trim().replace(/\s+/g, '-').toLowerCase()
  }

  const getRecipeId = (title) => {
    console.log(recipes.filter(recipe => recipe.title.toLowerCase() === title.toLowerCase()).map(recipe => recipe.id))
    return recipes.filter(recipe => recipe.title.toLowerCase() === title.toLowerCase()).map(recipe => recipe.id)
  }
  const activeClass = 'active'

  const dispatch = useDispatch()
  const mealPlannerAPI = new MealPlannerAPI()

  React.useEffect(() => {
    dispatch(getMyMeals())
    dispatch(getMyRecipes())
    // mealPlannerAPI.load('/meals').then(data => dispatch(loadMealsAction(data)))
  }, [])

  const currentMeals = findEventsForDate(meals, activeDate)
  console.log(currentMeals)
  const sortedCurrentMeals = sortMeals(currentMeals)
  console.log(sortedCurrentMeals)

  const showDeleteModal = () => {
    setDisplayConfirmationModal(true)
  }

  const deleteMeal = (id) => {
    mealPlannerAPI.remove('/meals', id).then(() => dispatch(getMyMeals()))
    console.log(meals)
    setDisplayConfirmationModal(false)
  }
  /*
  const getRecipeId = (name) => {
    // dispatch(getMyRecipes())
    const myRecipeID = recipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()).map(recipe => recipe.id)
  } */

  return (
    <StyledDailyMealPlan>
      {sortedCurrentMeals && (
        sortedCurrentMeals.map((meal) => {
          return (
            <div
              key={`${meal.date}-${meal.id}`}
              className={'meal-info-container'}
            >
              <div
                className={'meal-info'}
              >
                <h4 className={`meal-type ${meal.type}`}>
                  {meal.type}
                </h4>
                <div className={'meal-name-and-note'}>
                  <StyledLink
                    activeClassName={activeClass}
                    to={`/recipe/${getRecipeId(meal.name)}/${titleToUrl(meal.name)}`}
                  >
                    <p className={'meal-name'}>{meal.name}</p>
                  </StyledLink>
                  <p className={'meal-note'}>{meal.note}</p>
                </div>
                <p className={'meal-servings'}>servings: {meal.servings}</p>
                <div className={'deleteMealItem'}>
                  <button
                    className={'btn deleteMeal'}
                    onClick={() => showDeleteModal()}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
              {displayConfirmationModal && (
                <Modal
                  onClose={() => setDisplayConfirmationModal(false)}
                  title={'Remove meal'}
                  className={'delete-confirmation'}
                >
                  <p>Are you sure you want to remove this meal?</p>
                  <div className={'btn-container'}>
                    <button
                      className={'btn-remove'}
                      onClick={() => deleteMeal(meal.id)}
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => setDisplayConfirmationModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Modal>
              )}
            </div>
          )
        })
      )}
    </StyledDailyMealPlan>
  )
}

export default DailyMealPlan
