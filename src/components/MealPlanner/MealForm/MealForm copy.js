/* eslint-disable react/prop-types */
import React from 'react'
import StyledLink from '../../../styled/components/Link.styled'
import Modal from '../../General/Modal'
// import SpoonacularAPI from '../../../modules/spoonacular/spoonacular.api.js'
// import RecipesList from '../../RecipesList'
import { dateToInputFormat } from '../../../helpers/calendarHelpers'

// const RecipesAPI = new SpoonacularAPI()

// Form to add new events or edit existing events
// In a real implementation, we'd have some frontend
// validation and also the equivalent in our
// backend service...
const MealForm = ({ setShowingMealForm, addMeal, editMeal, withMeal, setViewingMeal, preselectedDate }) => {
  const newMeal = withMeal || {}
  if (!withMeal && !!preselectedDate) {
    newMeal.date = dateToInputFormat(preselectedDate)
  }
  const [meal, setMeal] = React.useState(newMeal)
  // const [recipesData, setRecipesData] = React.useState(null)
  // const [phrase, setPhrase] = React.useState('')
  const activeClass = 'active'

  /*
  const getRecipesData = () => {
    RecipesAPI.getRecipes(phrase)
      .then(data => setRecipesData(data))
  }

  const handleChange = (e) => {
    setPhrase(e.target.value)
  } */

  return (
    <Modal
      onClose={() => setShowingMealForm({ visible: false })}
      title={`${withMeal ? 'Edit meal' : 'Add a new meal'}`}
    >
      <div className={'form'}>
        <label>Type
          <select
            value={meal.type ? meal.type.toLowerCase() : 'breakfast'}
            onChange={(e) => setMeal({ ...meal, type: e.target.value })}
          >
            <option value={'breakfast'}>Breakfast</option>
            <option value={'elevenses'}>Elevenses</option>
            <option value={'lunch'}>Lunch</option>
            <option value={'snacks'}>Snacks</option>
            <option value={'dinner'}>Dinner</option>
          </select>
        </label>

        <label>Name
          <input
            type={'text'}
            placeholder={'e.g. pasta'}
            defaultValue={meal.name}
            onChange={(e) => setMeal({ ...meal, name: e.target.value })}
          />
          <StyledLink
            activeClassName={activeClass}
            to={'/recipes/1'}
          >
            <button>Select from My Recipes</button>
          </StyledLink>
          <StyledLink
            activeClassName={activeClass}
            to={'/find-recipe/1'}
          >
            <button>Get New Recipe</button>
          </StyledLink>
        </label>

        <label>Date
          <input
            type={'date'}
            defaultValue={meal.date || dateToInputFormat(preselectedDate)}
            onChange={(e) => setMeal({ ...meal, date: e.target.value })}
          />
        </label>

        <label>Note
          <input
            type={'text'}
            placeholder={''}
            defaultValue={meal.note}
            onChange={(e) => setMeal({ ...meal, note: e.target.value })}
          />
        </label>

        {withMeal
          ? (
            <>
              <button onClick={() => editMeal(meal)}>Edit meal</button>
              <button
                className={'close'}
                onClick={() => {
                  setShowingMealForm({ visible: false })
                  setViewingMeal(meal)
                }}
              >
                Cancel (go back to meal view)
              </button>
            </>
            )
          : (
            <>
              <button onClick={() => addMeal(meal)}>Add meal</button>
              <button
                className={'close'}
                onClick={() => setShowingMealForm({ visible: false })}
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

/*
<label>Menu
          <input
            type={'text'}
            placeholder={'e.g. pasta'}
            defaultValue={meal.menu}
            onChange={(e) => setMeal({ ...meal, menu: e.target.value })}
          />
        </label>

        <input
            type={'text'}
            placeholder={'e.g. pasta'}
            // defaultValue={meal.name}
            // onChange={(e) => setMeal({ ...meal, menu: e.target.value })}
            onChange={handleChange}
          />
*/
