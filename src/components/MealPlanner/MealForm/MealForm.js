/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import StyledLink from '../../../styled/components/Link.styled'
import Modal from '../../General/Modal'
import FormField from './FormField'
// import SpoonacularAPI from '../../../modules/spoonacular/spoonacular.api.js'
// import RecipesList from '../../RecipesList'
import validateForm from '../../../helpers/validateForm'
import { setFieldValue, clearFields } from '../../../modules/form/form.actions'
import { getMyMeals } from '../../../modules/mealPlanner/mealPlanner.actions'
import { dateToInputFormat } from '../../../helpers/calendarHelpers'
import MealPlannerAPI from '../../../modules/mealPlanner/mealPlanner.api'
// import { getCurrentDate } from '../../../helpers/helperFunctions'
import formFields from '../../../data/formFields'

// const RecipesAPI = new SpoonacularAPI()

// Form to add new events or edit existing events
// In a real implementation, we'd have some frontend
// validation and also the equivalent in our
// backend service...
const MealForm = ({ setIsLoading, setShowingMealForm, addMeal, editMeal, withMeal, setViewingMeal, preselectedDate }) => {
  const newMeal = withMeal || {}
  if (!withMeal && !!preselectedDate) {
    newMeal.date = dateToInputFormat(preselectedDate)
  }

  const values = useSelector((state) => state.form)
  const mealPlannerAPI = new MealPlannerAPI()
  const dispatch = useDispatch()

  // const [meal, setMeal] = React.useState(newMeal)
  const [errors, setErrors] = React.useState([])

  // const [recipesData, setRecipesData] = React.useState(null)
  // const [phrase, setPhrase] = React.useState('')
  // const activeClass = 'active'

  React.useEffect(() => {
    dispatch(getMyMeals())
    // mealPlannerAPI.load('/meals').then(data => dispatch(loadMealsAction(data)))
  }, [])

  const handleInputChange = (e, name, type) => {
    // const currentDate = getCurrentDate()
    // if (e.target.name === 'dateOfPurchase' && e.target.value < currentDate) {
    //  dispatch(getPriceByDate(e.target.value, values.currency))
    // }

    dispatch(setFieldValue(name, e.target.value))
  }

  const renderFormFields = () => {
    return formFields.map((field) => {
      const { name, label, type, placeholder, options, required } = field
      return (
        <FormField
          key={name}
          name={name}
          label={label}
          type={type}
          value={values[name]}
          placeholder={placeholder || null}
          options={options}
          required={required}
          onChange={(e) => handleInputChange(e, name, type)}
          errors = {errors}
        />
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validateForm(values)
    setErrors(err)
    if (err.length === 0) {
      // dispatch(addRow(valuesForTableRow))
      // dispatch(pushRowsToLS())
      mealPlannerAPI.add('/meals', values).then(() => dispatch(getMyMeals()))
      dispatch(clearFields())
      setShowingMealForm({ visible: false })
    }
  }

  return (
    <Modal
      onClose={() => setShowingMealForm({ visible: false })}
      title={`${withMeal ? 'Edit meal' : 'Add a new meal'}`}
    >
      <form
        className={'form'}
        // onSubmit={handleSubmit}
        noValidate
      >
        {renderFormFields()}

        {withMeal
          ? (
            <div className={'btn-container'}>
              <button onClick={() => editMeal(values)}>Edit meal</button>
              <button
                className={'close'}
                onClick={() => {
                  setShowingMealForm({ visible: false })
                  setViewingMeal(values)
                }}
              >
                Cancel (go back to meal view)
              </button>
            </div>
            )
          : (
            <div className={'btn-container'}>
              <button
                onClick={handleSubmit}
                type={'submit'}
              >
                Add meal
              </button>
              <button
                className={'close'}
                onClick={() => setShowingMealForm({ visible: false })}
              >
                Cancel (go back to calendar)
              </button>
            </div>
            )}
      </form>
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
